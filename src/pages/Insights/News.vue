<script setup>
import { ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import api from '../../services/api';
import { getImageUrl } from '../../utils/imageHelper';

const route = useRoute();
const blogs = ref([]);
const loading = ref(false);
const searchQuery = ref('');

const fetchBlogs = async (search = '') => {
    loading.value = true;
    try {
        const params = search ? { search } : {};
        const response = await api.get('/blogs', { params });
        blogs.value = response.data;
    } catch (error) {
        console.error('Failed to fetch blogs:', error);
        console.error('Error details:', {
            message: error.message,
            response: error.response?.data,
            status: error.response?.status,
            statusText: error.response?.statusText,
            config: {
                url: error.config?.url,
                baseURL: error.config?.baseURL,
                method: error.config?.method,
            }
        });
    } finally {
        loading.value = false;
    }
};

// Watch for route query changes
watch(() => route.query.search, (newSearch) => {
    if (newSearch) {
        searchQuery.value = newSearch;
        fetchBlogs(newSearch);
    } else {
        searchQuery.value = '';
        fetchBlogs();
    }
}, { immediate: true });

onMounted(() => {
    const search = route.query.search;
    if (search) {
        searchQuery.value = search;
        fetchBlogs(search);
    } else {
        fetchBlogs();
    }
});
</script>
<template>
    <!-- start page title -->
        <section class="page-title-separate-breadcrumbs bg-base-color bg-sliding-line-dark-gray  ipad-top-space-margin">
            <div class="container position-relative">
                <div class="row justify-content-center align-items-lg-end extra-very-small-screen" data-anime='{ "el": "childs", "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'>
                    <div class="col-lg-6 position-relative page-title-extra-large md-mb-30px sm-mb-20px z-index-9">
                        <h1 class="text-light fw-600 ls-minus-4px mb-0 alt-font highlight-separator-small">
                            <span class="highlight-separator mb-0 pb-0" data-shadow-animation="true" data-animation-delay="500">
                                {{ searchQuery ? `Search Results: "${searchQuery}"` : 'ECR Insights' }}<span></span>
                            </span>
                        </h1>
                    </div>
                    <div class="col-lg-6">
                        <h2 class="fs-20 lh-32 text-light opacity-9 w-100 lg-w-100 md-w-80 sm-w-100 mb-0">
                            {{ searchQuery ? `Found ${blogs.length} result${blogs.length !== 1 ? 's' : ''} for "${searchQuery}"` : 'Get the expertise you need to stay ahead. We break down complex trends, offer strategic analysis, and deliver practical knowledge you can implement today.' }}
                        </h2>
                    </div>
                </div>
            </div>
        </section>
        <!-- end page title -->
      <section class=" background-position-center-top position-relative mb-5" >
            <div class="container">
                <div class="row blog-metro">
                    <div class="col-12">
                        <ul class="blog-metro blog-wrapper grid grid-3col xl-grid-3col lg-grid-3col md-grid-2col sm-grid-2col xs-grid-1col gutter-extra-large" data-anime='{ "el": "childs", "translateY": [50, 0], "opacity": [0,1], "duration": 1200, "delay": 0, "staggervalue": 150, "easing": "easeOutQuad" }'>
                            <li class="grid-sizer"></li>
                            <!-- start blog item -->
                            <li v-if="loading" class="grid-item text-center">
                                <div class="spinner-border text-light" role="status">
                                    <span class="visually-hidden">Loading...</span>
                                </div>
                            </li>
                            <li v-else-if="blogs.length === 0" class="grid-item text-center">
                                <p class="text-light">No blogs found.</p>
                            </li>
                            <li v-for="blog in blogs" :key="blog.id" class="grid-item text-white">
                                <router-link :to="`/insights/${blog.slug}`">
                                    <figure class="position-relative mb-0 overflow-hidden">
                                        <div class="blog-image bg-dark-slate-blue">
                                            <img :src="getImageUrl(blog.image)" alt="" />
                                            <div class="blog-overlay"></div>
                                        </div>
                                        <figcaption class="d-flex flex-column justify-content-end h-100 p-50px lg-p-25px">
                                            <div class="blog-categories mb-auto">
                                                <span class="categories-btn bg-white text-dark-gray text-uppercase fw-700 ms-0 mb-auto align-self-start">{{ blog.category.name }}</span>
                                            </div> 
                                            <span class="text-white card-title fs-22 fw-500">{{ blog.title }}</span>
                                        </figcaption>
                                    </figure>
                                </router-link>
                            </li>                            
                            <!-- end blog item -->
                        </ul>
                        <!-- <div class="row">
                            <div class="col-12 mt-4 d-flex justify-content-center">
                                <ul class="pagination pagination-style-01 fs-13 mb-0 light" data-anime='{ "translate": [0, 0], "opacity": [0,1], "duration": 600, "delay": 100, "staggervalue": 150, "easing": "easeOutQuad" }'>
                                    <li class="page-item"><a class="page-link" href=""><i class="fa-solid fa-angle-left fs-18 d-xs-none"></i></a></li>
                                    <li class="page-item"><a class="page-link" href="">01</a></li>
                                    <li class="page-item active"><a class="page-link" href="">02</a></li>
                                    <li class="page-item"><a class="page-link" href="">03</a></li>
                                    <li class="page-item"><a class="page-link" href="">04</a></li>
                                    <li class="page-item"><a class="page-link" href=""><i class="fa-solid fa-angle-right fs-18 d-xs-none"></i></a></li>
                                </ul>
                            </div> 
                        </div> -->
                       
                                <!-- end pagination -->
                            </div> 
                        </div>
                    </div>

        </section>
</template>
<style scoped>
.blog-metro.blog-wrapper {
  display: flex;
  flex-wrap: wrap;
}

.blog-metro.blog-wrapper > li {
  list-style: none;
}

.blog-metro.blog-wrapper > li.grid-sizer {
  display: none;
}

.blog-metro.blog-wrapper.grid.grid-3col > li {
  width: 33.333%;
}

@media (max-width: 991.98px) {
  .blog-metro.blog-wrapper.grid.grid-3col > li {
    width: 50%;
  }
}

@media (max-width: 575.98px) {
  .blog-metro.blog-wrapper.grid.grid-3col > li {
    width: 100%;
  }
}
</style>
