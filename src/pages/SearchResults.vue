<script setup>
import { ref, onMounted, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import api from '../services/api';
import { getImageUrl } from '../utils/imageHelper';

const route = useRoute();
const router = useRouter();
const searchTerm = ref('');
const results = ref({
    blogs: [],
    categories: [],
    pages: [],
    total: 0
});
const loading = ref(false);

const performSearch = async (term) => {
    if (!term || !term.trim()) {
        results.value = { blogs: [], categories: [], pages: [], total: 0 };
        return;
    }

    loading.value = true;
    try {
        const response = await api.get('/search', { params: { q: term } });
        results.value = response.data;
    } catch (error) {
        console.error('Search failed:', error);
        results.value = { blogs: [], categories: [], pages: [], total: 0 };
    } finally {
        loading.value = false;
    }
};

// Watch for route query changes
watch(() => route.query.q, (newQuery) => {
    if (newQuery) {
        searchTerm.value = newQuery;
        performSearch(newQuery);
    } else {
        searchTerm.value = '';
        results.value = { blogs: [], categories: [], pages: [], total: 0 };
    }
}, { immediate: true });

onMounted(() => {
    const query = route.query.q || route.query.search;
    if (query) {
        searchTerm.value = query;
        performSearch(query);
    }
});

const getTypeLabel = (type) => {
    const labels = {
        'blog': 'Blog Post',
        'category': 'Category',
        'service': 'Service',
        'page': 'Page'
    };
    return labels[type] || type;
};

const getTypeIcon = (type) => {
    const icons = {
        'blog': 'fa-file-alt',
        'category': 'fa-folder',
        'service': 'fa-cogs',
        'page': 'fa-file'
    };
    return icons[type] || 'fa-file';
};
</script>

<template>
    <!-- start page title -->
    <section class="page-title-separate-breadcrumbs bg-base-color bg-sliding-line-dark-gray ipad-top-space-margin">
        <div class="container position-relative">
            <div class="row justify-content-center align-items-lg-end extra-very-small-screen" data-anime='{ "el": "childs", "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'>
                <div class="col-lg-8 position-relative page-title-extra-large md-mb-30px sm-mb-20px z-index-9 text-center">
                    <h1 class="text-light fw-600 ls-minus-4px mb-0 alt-font highlight-separator-small">
                        <span class="highlight-separator mb-0 pb-0" data-shadow-animation="true" data-animation-delay="500">
                            {{ searchTerm ? `Search Results: "${searchTerm}"` : 'Search' }}<span></span>
                        </span>
                    </h1>
                    <p v-if="searchTerm" class="text-light mt-3">
                        Found {{ results.total }} result{{ results.total !== 1 ? 's' : '' }}
                    </p>
                </div>
            </div>
        </div>
    </section>
    <!-- end page title -->

    <section class="half-section">
        <div class="container">
            <div v-if="loading" class="text-center py-5">
                <div class="spinner-border text-dark" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>

            <div v-else-if="!searchTerm" class="text-center py-5">
                <p class="text-dark-gray">Please enter a search term to begin.</p>
            </div>

            <div v-else-if="results.total === 0" class="text-center py-5">
                <p class="text-dark-gray">No results found for "{{ searchTerm }}".</p>
                <p class="text-dark-gray">Try different keywords or browse our <router-link to="/insights" class="text-dark-gray">insights</router-link>.</p>
            </div>

            <div v-else class="row">
                <!-- Blogs Section -->
                <div v-if="results.blogs.length > 0" class="col-12 mb-5">
                    <h3 class="text-dark-gray mb-4">
                        <i class="fas fa-file-alt me-2"></i>Blog Posts ({{ results.blogs.length }})
                    </h3>
                    <div class="row">
                        <div v-for="blog in results.blogs" :key="`blog-${blog.id}`" class="col-md-6 col-lg-4 mb-4">
                            <div class="card h-100 border-0 shadow-sm">
                                <router-link :to="blog.url" class="text-decoration-none">
                                    <div v-if="blog.image" class="blog-image position-relative overflow-hidden" style="height: 200px;">
                                        <img :src="getImageUrl(blog.image)" alt="" class="w-100 h-100" style="object-fit: cover;" />
                                    </div>
                                    <div class="card-body">
                                        <span v-if="blog.category" class="badge bg-primary mb-2">{{ blog.category }}</span>
                                        <h5 class="card-title text-dark-gray mb-2">{{ blog.title }}</h5>
                                        <p class="card-text text-muted small">{{ blog.excerpt }}</p>
                                        <small class="text-muted">
                                            <i :class="getTypeIcon(blog.type)" class="fas me-1"></i>{{ getTypeLabel(blog.type) }}
                                        </small>
                                    </div>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Categories Section -->
                <div v-if="results.categories.length > 0" class="col-12 mb-5">
                    <h3 class="text-dark-gray mb-4">
                        <i class="fas fa-folder me-2"></i>Categories ({{ results.categories.length }})
                    </h3>
                    <div class="row">
                        <div v-for="category in results.categories" :key="`category-${category.id}`" class="col-md-6 col-lg-4 mb-3">
                            <div class="card h-100 border-0 shadow-sm">
                                <div class="card-body">
                                    <h5 class="card-title text-dark-gray mb-2">
                                        <router-link :to="category.url" class="text-dark-gray text-decoration-none">
                                            {{ category.title }}
                                        </router-link>
                                    </h5>
                                    <p class="card-text text-muted small">{{ category.excerpt }}</p>
                                    <small class="text-muted">
                                        <i :class="getTypeIcon(category.type)" class="fas me-1"></i>{{ getTypeLabel(category.type) }}
                                    </small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Pages & Services Section -->
                <div v-if="results.pages.length > 0" class="col-12 mb-5">
                    <h3 class="text-dark-gray mb-4">
                        <i class="fas fa-file me-2"></i>Pages & Services ({{ results.pages.length }})
                    </h3>
                    <div class="row">
                        <div v-for="(page, index) in results.pages" :key="`page-${index}`" class="col-md-6 col-lg-4 mb-3">
                            <div class="card h-100 border-0 shadow-sm">
                                <div class="card-body">
                                    <h5 class="card-title text-dark-gray mb-2">
                                        <router-link :to="page.url" class="text-dark-gray text-decoration-none">
                                            {{ page.title }}
                                        </router-link>
                                    </h5>
                                    <p class="card-text text-muted small">{{ page.excerpt }}</p>
                                    <small class="text-muted">
                                        <i :class="getTypeIcon(page.type)" class="fas me-1"></i>{{ getTypeLabel(page.type) }}
                                    </small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.blog-image {
    border-radius: 0.25rem 0.25rem 0 0;
}

.card {
    transition: transform 0.2s, box-shadow 0.2s;
}

.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
}

.card-title a:hover {
    text-decoration: underline !important;
}
</style>


