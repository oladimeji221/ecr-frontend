<script setup>
import { ref, onMounted, computed, onUnmounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import api, { getClientIp } from '../services/api';
import { useAuth } from '../composables/useAuth';
import { getImageUrl } from '../utils/imageHelper';

const route = useRoute();
const blog = ref(null);
const loading = ref(false);
const reactionLoading = ref(false);
const { user, getUser } = useAuth();
const guestIp = ref(null);

const alertMessage = ref('');
const alertType = ref('success');
let alertTimeout = null;

const showAlert = (message, type = 'success') => {
    alertMessage.value = message;
    alertType.value = type;
    if (alertTimeout) {
        clearTimeout(alertTimeout);
    }
    alertTimeout = setTimeout(() => {
        closeAlert();
    }, 4000);
};

const closeAlert = () => {
    alertMessage.value = '';
    if (alertTimeout) {
        clearTimeout(alertTimeout);
        alertTimeout = null;
    }
};

const matchesCurrentActor = (reaction) => {
    const userId = user.value?.id;
    if (userId) {
        return reaction.user_id === userId;
    }
    if (guestIp.value) {
        return reaction.ip_address === guestIp.value;
    }
    return false;
};

const ensureGuestIp = async () => {
    if (!user.value && !guestIp.value) {
        guestIp.value = await getClientIp();
    }
};

const commentData = ref({
    name: '',
    email: '',
    content: ''
});

const commentStatus = ref({
    success: '',
    error: ''
});

const formatDate = (dateString) => {
    if (!dateString) return 'Invalid Date';
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return 'Invalid Date';
    return date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });
};

const normalizeBlog = (data) => ({
    ...data,
    likes: Array.isArray(data.likes) ? data.likes : [],
    dislikes: Array.isArray(data.dislikes) ? data.dislikes : [],
    comments: Array.isArray(data.comments) ? data.comments : [],
    createdAt: data.createdAt || data.created_at,
});

const fetchBlog = async () => {
    loading.value = true;
    try {
        const response = await api.get(`/blogs/${route.params.slug}`);
        blog.value = normalizeBlog(response.data);
    } catch (error) {
        console.error('Failed to fetch blog:', error);
        blog.value = null;
    } finally {
        loading.value = false;
    }
};

const submitComment = async () => {
    if (!blog.value) return;
    commentStatus.value = { success: '', error: '' };
    const payload = { content: commentData.value.content };
    if (!payload.content || !payload.content.trim()) {
        commentStatus.value.error = 'Please enter a comment before submitting.';
        return;
    }
    if (!user.value) {
        payload.name = commentData.value.name;
        payload.email = commentData.value.email;
    }
    const url = `/blogs/${blog.value.slug}/comments`;
    try {
        const response = await api.post(url, payload);
        blog.value.comments = Array.isArray(blog.value.comments) ? blog.value.comments : [];
        blog.value.comments.unshift(response.data);
        commentStatus.value.success = 'Comment posted successfully!';
        commentData.value.content = '';
        if (!user.value) {
            commentData.value.name = '';
            commentData.value.email = '';
        }
    } catch (error) {
        if (error.response?.data?.errors) {
            commentStatus.value.error = Object.values(error.response.data.errors).flat().join(' ');
        } else {
            commentStatus.value.error = error.response?.data?.message || 'An unknown error occurred.';
        }
    }
};

const hasLiked = computed(() => {
    if (!blog.value || !Array.isArray(blog.value.likes)) return false;
    return blog.value.likes.some(matchesCurrentActor);
});

const hasDisliked = computed(() => {
    if (!blog.value || !Array.isArray(blog.value.dislikes)) return false;
    return blog.value.dislikes.some(matchesCurrentActor);
});

const toggleLikeDislike = async (type) => {
    if (!blog.value || reactionLoading.value) return;
    await ensureGuestIp();
    const isLiking = type === 'like';
    try {
        reactionLoading.value = true;
        if (isLiking) {
            if (hasLiked.value) {
                await api.delete(`/blogs/${blog.value.slug}/likes`);
            } else {
                if (hasDisliked.value) {
                    await api.delete(`/blogs/${blog.value.slug}/dislikes`);
                }
                await api.post(`/blogs/${blog.value.slug}/likes`);
            }
        } else {
            if (hasDisliked.value) {
                await api.delete(`/blogs/${blog.value.slug}/dislikes`);
            } else {
                if (hasLiked.value) {
                    await api.delete(`/blogs/${blog.value.slug}/likes`);
                }
                await api.post(`/blogs/${blog.value.slug}/dislikes`);
            }
        }
        await fetchBlog();
    } catch (error) {
        console.error(`Failed to toggle ${type}:`, error);
        showAlert(`There was an error toggling your ${type}. Please try again.`, 'error');
    } finally {
        reactionLoading.value = false;
    }
};

const showCategoryNewsletterPopup = ref(false);
const categoryNewsletterFormData = ref({
    firstname: '',
    lastname: '',
    email: '',
});
const dontShowCategoryAgain = ref(false);
const subscribing = ref(false);

const handleScroll = () => {
    if (!blog.value) return;
    const bottomOfWindow = document.documentElement.scrollTop + window.innerHeight >= document.documentElement.offsetHeight - 100;
    const blogSlug = blog.value.slug;
    const hasShownInSession = sessionStorage.getItem(`categoryNewsletterShown-${blogSlug}`) === 'true';
    const permanentlyHidden = localStorage.getItem(`hideCategoryNewsletter-${blogSlug}`) === 'true';
    if (bottomOfWindow && !showCategoryNewsletterPopup.value && !hasShownInSession && !permanentlyHidden) {
        showCategoryNewsletterPopup.value = true;
        sessionStorage.setItem(`categoryNewsletterShown-${blogSlug}`, 'true');
        window.removeEventListener('scroll', handleScroll);
    }
};

const setupScrollListener = () => {
    window.removeEventListener('scroll', handleScroll);
    if (!blog.value) return;
    const blogSlug = blog.value.slug;
    const hasShownInSession = sessionStorage.getItem(`categoryNewsletterShown-${blogSlug}`) === 'true';
    const permanentlyHidden = localStorage.getItem(`hideCategoryNewsletter-${blogSlug}`) === 'true';
    if (!hasShownInSession && !permanentlyHidden) {
        window.addEventListener('scroll', handleScroll);
    }
};

const closeCategoryPopup = () => {
    if (!blog.value) return;
    const blogSlug = blog.value.slug;
    if (dontShowCategoryAgain.value) {
        localStorage.setItem(`hideCategoryNewsletter-${blogSlug}`, 'true');
    }
    showCategoryNewsletterPopup.value = false;
};

const subscribeCategory = async () => {
    if (!blog.value || !blog.value.category) {
        showAlert('Cannot subscribe: blog or category information missing.', 'error');
        return;
    }
    if (!categoryNewsletterFormData.value.firstname || !categoryNewsletterFormData.value.lastname || !categoryNewsletterFormData.value.email) {
        showAlert('Please fill in all required fields.', 'error');
        return;
    }
    subscribing.value = true;
    try {
        await api.post('/category-newsletter-subscriptions', {
            ...categoryNewsletterFormData.value,
            category_id: blog.value.category.id,
        });
        showAlert(`Thank you for subscribing to ${blog.value.category.name} insights!`, 'success');
        closeCategoryPopup();
        categoryNewsletterFormData.value = { firstname: '', lastname: '', email: '' };
    } catch (error) {
        const errorMsg = error.response?.data?.message || 'Subscription failed. Please try again.';
        showAlert(errorMsg, 'error');
    } finally {
        subscribing.value = false;
    }
};

watch(() => route.params.slug, async (newSlug) => {
    if (newSlug) {
        await fetchBlog();
        showCategoryNewsletterPopup.value = false;
        dontShowCategoryAgain.value = false;
        setupScrollListener();
    }
}, { immediate: true });

onMounted(async () => {
    await getUser();
    await ensureGuestIp();
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
    <div v-if="loading" class="container text-center py-5">
        <div class="spinner-border text-dark" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>
    <div v-else-if="!blog" class="container text-center py-5">
        <h2>Blog not found</h2>
    </div>
    <template v-else>
        <!-- start section -->
        <section class="one-fourth-screen bg-dark-gray ipad-top-space-margin sm-mb-50px mt-70px" :style="{
            'background-image': blog.image ? 'url(' + blog.image + ')' : 'none',
            'background-repeat': 'no-repeat',
            'background-size': 'cover',
            'background-position': 'center'
        }"></section>
        <!-- end section -->
        <!-- start section -->
        <section class="p-0" style="margin-top: -220px;">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-10 overlap-section text-center">
                        <div class="p-10 box-shadow-extra-large border-radius-4px bg-white text-center">
                            <a v-if="blog.category" href="#" class="bg-solitude-blue text-uppercase fs-13 ps-25px pe-25px alt-font fw-500 text-dark-gray lh-40 sm-lh-55 border-radius-100px d-inline-block mb-3 sm-mb-15px">{{ blog.category.name }}</a>
                            <h3 class="alt-font text-dark-gray fw-600 ls-minus-1px mb-15px">{{ blog.title }}</h3>
                            <div v-if="blog.user" class="lg-20px sm-mb-0">
                                <span>By <a href="#" class="text-dark-gray">{{ blog.user.name }}</a></span> on <a href="#" class="text-dark-gray">{{ formatDate(blog.createdAt) }}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- end section -->
        <!-- start section -->
        <section v-if="blog.user" class="overlap-section text-center p-0 sm-pt-30px" style="margin-top: -40px;">
            <img class="rounded-circle box-shadow-extra-large w-130px h-130px border border-8 border-color-white" :src="blog.user.profile_photo_url" alt="">
        </section>
        <!-- end section -->

        <section class="half-section mb-0 pb-0 pt-3">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-9" data-anime='{ "el": "childs", "translateY": [50, 0], "opacity": [0,1], "duration": 1200, "delay": 0, "staggervalue": 150, "easing": "easeOutQuad" }'>
                        <div class="row">
                            <div class="tag-cloud col-md-9 text-center text-md-start">
                                <!-- Like Button -->
                                <a :class="['likes-count fw-500 mx-0 me-3', { 'pe-none opacity-50': reactionLoading }]" href="#" @click.prevent="toggleLikeDislike('like')">
                                    <i :class="{'fa-solid': hasLiked, 'fa-regular': !hasLiked}" class="fa-thumbs-up text-red me-10px"></i>
                                    <span class="text-dark-gray text-dark-gray-hover">{{ blog.likes.length }} Likes</span>
                                </a>
                                <!-- Dislike Button -->
                                <a :class="['likes-count fw-500 mx-0 me-3', { 'pe-none opacity-50': reactionLoading }]" href="#" @click.prevent="toggleLikeDislike('dislike')">
                                    <i :class="{'fa-solid': hasDisliked, 'fa-regular': !hasDisliked}" class="fa-thumbs-down text-red me-10px"></i>
                                    <span class="text-dark-gray text-dark-gray-hover">{{ blog.dislikes.length }} Dislikes</span>
                                </a>
                                <!-- Views Count -->
                                <a class="likes-count fw-500 mx-0" href="#">
                                    <i class="fa-regular fa-eye text-red me-10px"></i>
                                    <span class="text-dark-gray text-dark-gray-hover">{{ blog.view_count }} Views</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- start section -->
        <section class="pb-0 pt-3">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-9 dropcap-style-01" data-anime='{ "el": "childs", "translateY": [50, 0], "opacity": [0,1], "duration": 1200, "delay": 0, "staggervalue": 150, "easing": "easeOutQuad" }'>
                        <div v-html="blog.content"></div>
                    </div>
                </div>
            </div>
        </section>
        <!-- end section -->

        <!-- start section -->
        <section class="half-section">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-9" data-anime='{ "el": "childs", "translateY": [50, 0], "opacity": [0,1], "duration": 1200, "delay": 0, "staggervalue": 150, "easing": "easeOutQuad" }'>
                        <div class="row mb-30px">
                            <div v-if="blog.tags" class="tag-cloud col-md-12 text-center text-md-start sm-mb-15px">
                                <a v-for="tag in blog.tags" :key="tag.id" href="#">{{ tag.name }}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- end section -->
        <!-- start section -->
        <section class="bg-solitude-blue position-relative sm-pb-20px">
            <div class="container">
                <div class="row justify-content-center mb-1">
                    <div class="col-lg-7 text-center">
                        <span class="bg-white box-shadow-quadruple-large text-uppercase fs-13 ps-25px pe-25px alt-font fw-600 text-dark-gray lh-40 sm-lh-55 border-radius-100px d-inline-block mb-25px" data-anime='{ "translateY": [30, 0], "opacity": [0,1], "delay": 500, "staggervalue": 100, "easing": "easeOutQuad" }'>You may also like</span>
                        <h3 class="alt-font text-dark-gray fw-600 ls-minus-1px" data-anime='{ "el": "lines", "translateY": [30, 0], "opacity": [0,1], "delay": 500, "staggervalue": 100, "easing": "easeOutQuad" }'>Related posts</h3>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 px-0">
                        <ul v-if="blog.related_blogs" class="blog-classic blog-wrapper grid grid-4col xl-grid-4col lg-grid-3col md-grid-2col sm-grid-2col xs-grid-1col gutter-double-extra-large" data-anime='{ "el": "childs", "translateY": [50, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'>
                            <li class="grid-sizer"></li>
                            <!-- start blog item -->
                            <li v-for="relatedBlog in blog.related_blogs" :key="relatedBlog.id" class="grid-item">
                                <div class="card bg-transparent border-0 h-100">
                                    <div class="blog-image position-relative overflow-hidden border-radius-4px">
                                        <router-link :to="`/insights/${relatedBlog.slug}`"><img :src="getImageUrl(relatedBlog.image)" alt="" /></router-link>
                                    </div>
                                    <div class="card-body px-0 pb-30px pt-30px xs-pb-15px last-paragraph-no-margin">
                                        <span class="fs-13 text-uppercase mb-5px d-block"><a href="#" class="text-dark-gray fw-500 categories-text">{{ relatedBlog.category.name }}</a><a href="#" class="blog-date">{{ formatDate(relatedBlog.createdAt || relatedBlog.created_at) }}</a></span>
                                        <router-link :to="`/insights/${relatedBlog.slug}`" class="card-title mb-0 fw-500 fs-18 lh-30 text-dark-gray d-inline-block">{{ relatedBlog.title }}</router-link>
                                    </div>
                                </div>
                            </li>
                            <!-- end blog item -->

                        </ul>
                    </div>
                </div>
            </div>
        </section>
        <!-- end section -->
        <!-- start section -->
        <section class="pb-0">
            <div class="container" data-anime='{ "el": "childs", "translateY": [0, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'>
                <div v-if="blog.comments" class="row justify-content-center">
                    <div class="col-lg-9 text-center mb-2">
                        <h6 class="alt-font text-dark-gray fw-500">{{ blog.comments.length }} Comments</h6>
                    </div>
                </div>
                <div v-if="blog.comments" class="row justify-content-center">
                    <div class="col-lg-9">
                        <ul class="blog-comment">
                            <li v-for="comment in blog.comments" :key="comment.id">
                                <div class="d-block d-md-flex w-100 align-items-center align-items-md-start ">
                                    <div class="w-90px sm-w-65px sm-mb-10px">
                                        <img src="https://via.placeholder.com/90" class="rounded-circle" alt="">
                                    </div>
                                    <div class="w-100 ps-30px last-paragraph-no-margin sm-ps-0">
                                        <a href="#" class="text-dark-gray fw-500">{{ comment.name }}</a>
                                        <div class="fs-14 lh-24 mb-10px">{{ formatDate(comment.created_at) }}</div>
                                        <p class="w-85 sm-w-100">{{ comment.content }}</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        <!-- end section -->
        <!-- start section -->
        <section id="comments">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-9 mb-3 sm-mb-6">
                        <h6 class="alt-font text-dark-gray fw-500 mb-5px">Write a comment</h6>
                        <div class="mb-5px" v-if="!user">Your email address will not be published.
                        </div>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-lg-9">
                        <div v-if="commentStatus.success" class="alert alert-success">{{
                            commentStatus.success }}</div>
                        <div v-if="commentStatus.error" class="alert alert-danger">{{
                            commentStatus.error }}</div>
                        <form @submit.prevent="submitComment" class="row contact-form-style-02">
                            <template v-if="!user">
                                <div class="col-md-6 mb-30px">
                                    <input v-model="commentData.name" class="input-name
                                            border-radius-4px form-control required" type="text" name="name" placeholder="Enter your name*">
                                </div>
                                <div class="col-md-6 mb-30px">
                                    <input v-model="commentData.email" class="border-radius-4px
                                            form-control required" type="email" name="email" placeholder="Enter your email address*">
                                </div>
                            </template>
                            <div class="col-md-12 mb-30px">
                                <textarea v-model="commentData.content" class="border-radius-4px
                                form-control" cols="40" rows="4" name="comment" placeholder="Your message"></textarea>
                            </div>
                            <div class="col-12">
                                <button class="btn btn-dark-gray btn-small btn-round-edge submit"
                                    type="submit">Post Comment</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        <!-- end section -->
    </template>

    <!-- Category Newsletter Popup -->
    <div v-if="showCategoryNewsletterPopup && blog" id="category-newsletter-popup" class="container subscribe-popup contact-form-style-01 position-fixed text-center xs-p-0">
        <div class="row g-0 position-relative">
            <div class="col-lg-12">
                <div class="p-14 xl-p-11 bg-white">
                    <span class="mb-5px d-block text-dark-gray">Read more about {{ blog.category.name }}?</span>
                    <h3 class="d-inline-block alt-font fw-600 text-dark-gray mb-8 ls-minus-1px">Don't miss out. Get notified whenever a related post goes live.</h3>
                    <form @submit.prevent="subscribeCategory">
                        <div class="position-relative form-group mb-15px">
                            <span class="form-icon"><i class="bi bi-person text-dark-gray"></i></span>
                            <input type="text" v-model="categoryNewsletterFormData.firstname" name="firstname" class="form-control text-dark required" placeholder="Enter your first name*" />
                        </div>
                        <div class="position-relative form-group mb-15px">
                            <span class="form-icon"><i class="bi bi-person text-dark-gray"></i></span>
                            <input type="text" v-model="categoryNewsletterFormData.lastname" name="lastname" class="form-control text-dark required" placeholder="Enter your last name*" />
                        </div>
                        <div class="position-relative form-group mb-15px">
                            <span class="form-icon"><i class="bi bi-envelope text-dark-gray"></i></span>
                            <input type="email" v-model="categoryNewsletterFormData.email" name="email" class="form-control text-dark required" placeholder="Enter your email*" />
                        </div>
                        <div class="position-relative form-group form-textarea">
                            <button class="btn btn-medium btn-box-shadow btn-round-edge w-100 btn-base-color submit mt-15px text-white" type="submit" :disabled="subscribing">
                                <span v-if="subscribing" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                <span v-else>Subscribe</span>
                            </button>
                        </div>
                    </form>
                    <label for="category-newsletter-off" class="fs-15 mt-15px text-dark-gray">
                        <input class="w-auto me-10px position-relative top-1px p-0" type="checkbox" v-model="dontShowCategoryAgain" id="category-newsletter-off" name="category-newsletter-off">
                        Don't show this popup again for this blog
                    </label>
                </div>
            </div>
            <button title="Close (Esc)" type="button" @click="closeCategoryPopup" class="mfp-close text-dark-gray"></button>
        </div>
    </div>
    
    <!-- Custom Alert Toast -->
    <transition name="alert-fade">
        <div v-if="alertMessage" :class="['custom-alert', alertType]" @click="closeAlert">
            <div class="alert-content">
                <i :class="alertType === 'success' ? 'bi bi-check-circle-fill' : 'bi bi-exclamation-circle-fill'"></i>
                <span>{{ alertMessage }}</span>
            </div>
        </div>
    </transition>
</template>
<style scoped>
#category-newsletter-popup {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1050; /* High z-index to be on top */
    background: rgba(0,0,0,0.8); /* Darker background for more contrast */
    padding: 20px;
    border-radius: 8px;
    width: 90%;
    max-width: 500px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.3);
    color: white; /* Text color for the popup */
}
#category-newsletter-popup .mfp-close {
    position: absolute;
    top: 10px;
    right: 10px;
    color: white;
}
#category-newsletter-popup .form-control {
    background-color: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.3);
    color: white;
}

/* Custom Alert Toast Styles */
.custom-alert {
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 1060;
    min-width: 300px;
    max-width: 500px;
    padding: 16px 20px;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    cursor: pointer;
    animation: slideInRight 0.3s ease-out;
}

.custom-alert.success {
    background-color: #10b981;
    color: white;
}

.custom-alert.error {
    background-color: #ef4444;
    color: white;
}

.alert-content {
    display: flex;
    align-items: center;
    gap: 12px;
}

.alert-content i {
    font-size: 20px;
    flex-shrink: 0;
}

.alert-content span {
    flex: 1;
    font-size: 14px;
    font-weight: 500;
    line-height: 1.5;
}

/* Alert animations */
.alert-fade-enter-active,
.alert-fade-leave-active {
    transition: opacity 0.3s ease, transform 0.3s ease;
}

.alert-fade-enter-from {
    opacity: 0;
    transform: translateX(100%);
}

.alert-fade-leave-to {
    opacity: 0;
    transform: translateX(100%);
}

@keyframes slideInRight {
    from {
        transform: translateX(100%);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
}
</style>