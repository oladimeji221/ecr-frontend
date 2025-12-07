<script setup>
import { ref, onMounted, computed } from 'vue';
import Vue3EasyDataTable from 'vue3-easy-data-table';
import 'vue3-easy-data-table/dist/style.css';
import { Modal } from 'bootstrap';
import TiptapEditor from '../../components/TiptapEditor.vue';
import api from '../../services/api';
import { getImageUrl } from '../../utils/imageHelper';

// Table columns configuration
const headers = [
  { text: 'IMAGE', value: 'image' },
  { text: 'TITLE', value: 'title', sortable: true },
  { text: 'DATE', value: 'created_at', sortable: true },
  { text: 'STATUS', value: 'status', sortable: true },
  { text: 'ACTIONS', value: 'actions', sortable: false }
];

const MAX_IMAGE_SIZE_BYTES = 2 * 1024 * 1024; // 2MB limit imposed by backend/PHP

const blogs = ref([]);
const categories = ref([]);
const loading = ref(false);
const isEditing = ref(false);
const successMessage = ref('');
const errorMessage = ref('');

const createEmptyForm = () => ({
  id: null,
  slug: '',
  title: '',
  content: '',
  status: 'draft',
  image: null,
  category_id: '',
  meta_title: '',
  meta_description: '',
  meta_keywords: '',
  meta_robot: '',
  canonical_url: '',
  custom_url: '',
  json_ld: '',
  og_title: '',
  og_description: '',
  og_image: '',
});

const formData = ref(createEmptyForm());

let blogModal = null;

const fetchBlogs = async () => {
  loading.value = true;
  try {
    const response = await api.get('/my/blogs');
    console.log('Blogs data received:', response.data); // Add this line for debugging
    blogs.value = response.data;
  } catch (error) {
    console.error('Failed to fetch blogs:', error);
  } finally {
    loading.value = false;
  }
};

const fetchCategories = async () => {
  try {
    const response = await api.get('/categories');
    categories.value = response.data;
  } catch (error) {
    console.error('Failed to fetch categories:', error);
  }
};

onMounted(() => {
  const modalElement = document.getElementById('blogModal');
  if (modalElement) {
    blogModal = new Modal(modalElement);
    modalElement.addEventListener('hidden.bs.modal', () => {
      successMessage.value = '';
      errorMessage.value = '';
    });
  } else {
    console.error('blogModal element not found');
  }

  fetchBlogs();
  fetchCategories();
});

const openNewBlogModal = () => {
  console.log('Opening new blog modal...');
  isEditing.value = false;
  formData.value = createEmptyForm();
  if (blogModal) {
    blogModal.show();
  } else {
    console.error('blogModal instance is not available.');
  }
};

const editBlog = (blog) => {
  isEditing.value = true;
  // Ensure image is correctly set for preview if it's a string URL
  formData.value = {
    ...blog,
    slug: blog.slug,
    image: blog.image || null,
    category_id: blog.category_id ?? '',
  };
  blogModal.show();
};

const saveBlog = async () => {
  loading.value = true;
  successMessage.value = '';
  errorMessage.value = '';

  const data = new FormData();
  // Explicitly append fields that are always sent
  data.append('title', formData.value.title);
  data.append('content', formData.value.content);
  data.append('category_id', formData.value.category_id);
  data.append('status', formData.value.status || 'draft'); // Ensure status is always sent

  const optionalTextFields = [
    'meta_title',
    'meta_description',
    'meta_keywords',
    'meta_robot',
    'canonical_url',
    'custom_url',
    'og_title',
    'og_description',
    'og_image',
  ];

  optionalTextFields.forEach((field) => {
    const value = formData.value[field];
    if (value !== null && value !== undefined) {
      const trimmed = typeof value === 'string' ? value.trim() : value;
      if (trimmed !== '') {
        data.append(field, trimmed);
      }
    }
  });

  const jsonLdValue = formData.value.json_ld?.trim();
  if (jsonLdValue) {
    try {
      JSON.parse(jsonLdValue);
      data.append('json_ld', jsonLdValue);
    } catch (err) {
      errorMessage.value = 'JSON-LD must be valid JSON.';
      loading.value = false;
      return;
    }
  }

  // Only append image if it's a File object (new upload)
  if (formData.value.image instanceof File) {
    data.append('image', formData.value.image);
  }

  try {
    if (isEditing.value) {
      // For updates with multipart/form-data, use POST with _method=PUT
      data.append('_method', 'PUT');
      await api.post(`/blogs/${formData.value.slug || formData.value.id}`, data, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
    } else {
      await api.post('/blogs', data, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
    }
    successMessage.value = `Blog successfully ${isEditing.value ? 'updated' : 'saved'}!`;
    await fetchBlogs();
    formData.value = createEmptyForm();
    setTimeout(() => {
      blogModal.hide();
    }, 1000);
  } catch (error) {
    console.error('Failed to save blog. Full error object:', error);
    if (error.response) {
      console.error('Error response data:', error.response.data);
      if (error.response.data && error.response.data.errors) {
        // Handle validation errors
        errorMessage.value = Object.values(error.response.data.errors).flat().join(' ');
      } else {
        // Handle other server errors
        errorMessage.value = error.response.data.message || 'An unexpected error occurred.';
      }
    } else {
      // Handle network errors or other issues
      errorMessage.value = 'Network error or could not connect to the server.';
    }
  } finally {
    loading.value = false;
  }
};

const deleteBlog = async (blog) => {
  if (confirm('Are you sure you want to delete this blog post?')) {
    loading.value = true;
    try {
      const identifier = blog.slug || blog.id;
      await api.delete(`/blogs/${identifier}`);
      await fetchBlogs();
    } catch (error) {
      console.error('Failed to delete blog:', error);
    } finally {
      loading.value = false;
    }
  }
};

const handleImageUpload = (event) => {
  const file = event.target.files[0];
  if (!file) {
    return;
  }

  if (file.size > MAX_IMAGE_SIZE_BYTES) {
    errorMessage.value = 'Featured image must be 2MB or smaller.';
    event.target.value = '';
    return;
  }

  formData.value.image = file;
};

const formatDate = (dateString) => {
  if (!dateString) {
    return 'N/A';
  }
  const date = new Date(dateString);
  if (isNaN(date)) {
    return 'N/A';
  }
  return date.toLocaleString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
};

const imagePreviewSrc = computed(() => {
    if (formData.value.image instanceof File) {
        return URL.createObjectURL(formData.value.image);
    }
    if (typeof formData.value.image === 'string') {
        return getImageUrl(formData.value.image);
    }
    return '';
});
</script>

<template>
    <!-- start page title -->
        <section class="page-title-separate-breadcrumbs bg-base-color bg-sliding-line-dark-gray  ipad-top-space-margin">
            <div class="container position-relative">
                <div class="row justify-content-center align-items-lg-end extra-very-small-screen" data-anime='{ "el": "childs", "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'>
                    <div class="col-lg-6 position-relative page-title-extra-large md-mb-30px sm-mb-20px z-index-9">
                        <h1 class="text-light fw-600 ls-minus-4px mb-0 alt-font highlight-separator-small"><span class="highlight-separator mb-0 pb-0" data-shadow-animation="true" data-animation-delay="500">All Blogs<span></span></span></h1>
                    </div>
                </div>
            </div>
        </section>
        <!-- end page title -->

    <div class="page-wrapper">
        <!-- start page title -->
        <section class="page-title-style1  overflow-hidden pb-0 pe-0">
            <div class="container">
                <div class="row justify-content-end">
                    <div class="col-lg-6 text-end pe-0">
                        <button @click="openNewBlogModal" class="btn btn-large btn-dark-gray btn-box-shadow d-inline-block align-middle me-20px sm-me-0 sm-mb-30px rounded-pill">
                            <i class="bi bi-plus-lg me-2"></i>Add New Blog
                        </button>
                    </div>
                </div>
            </div>
        </section>
        <!-- end page title -->

        <section class="pt-2">
            <div class="container">
                <div class="card">
                    <div class="card-body" style="overflow-x: auto;">
                        <Vue3EasyDataTable
                            :headers="headers"
                            :items="blogs"
                            :loading="loading"
                            :rows-per-page="10"
                            buttons-pagination
                            show-index
                            table-class-name="customize-table"
                        >
                            <template #item-image="{ image }">
                                <img :src="image ? getImageUrl(image) : 'https://via.placeholder.com/80x60'" alt="Blog Thumbnail" style="width: 60px; height: 45px; object-fit: cover; border-radius: 4px;">
                            </template>
                            <template #item-title="{ title, excerpt }">
                                <div>
                                    <div class="fw-semibold">{{ title }}</div>
                                    <small v-if="excerpt" class="text-muted">{{ excerpt }}</small>
                                </div>
                            </template>
                            <template #item-created_at="{ created_at }">
                                {{ formatDate(created_at) }}
                            </template>
                            <template #item-status="{ status }">
                                <span :class="`badge bg-${status === 'published' ? 'success' : 'warning'}`">
                                    {{ status }}
                                </span>
                            </template>
                            <template #item-actions="blog">
                                <div class="d-flex gap-2">
                                    <button @click.stop="editBlog(blog)" class="btn btn-sm btn-info">
                                        <i class="bi bi-pencil"></i>
                                    </button>
                                    <button @click.stop="deleteBlog(blog)" class="btn btn-sm btn-danger">
                                        <i class="bi bi-trash"></i>
                                    </button>
                                </div>
                            </template>
                        </Vue3EasyDataTable>
                    </div>
                </div>
            </div>
        </section>

        <!-- Add/Edit Blog Modal -->
        <div class="modal fade" id="blogModal" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">{{ isEditing ? 'Edit' : 'Add New' }} Blog</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div v-if="successMessage" class="alert alert-success">{{ successMessage }}</div>
                        <div v-if="errorMessage" class="alert alert-danger">{{ errorMessage }}</div>
                        <!-- Blog form -->
                        <div class="row">
                            <div class="col-md-12">
                                <div class="mb-3">
                                    <label class="form-label">Title</label>
                                    <input v-model="formData.title" type="text" class="form-control" placeholder="Enter blog title">
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label class="form-label fw-semibold">Category</label>
                                    <select v-model="formData.category_id" class="form-select border p-2">
                                        <option value="">Select Category</option>
                                        <option v-for="category in categories" :key="category.id" :value="category.id">{{ category.name }}</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label class="form-label fw-semibold">Status</label>
                                    <select v-model="formData.status" class="form-select border p-2">
                                        <option value="draft">Draft</option>
                                        <option value="published">Published</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div class="mb-3">
                            <label class="form-label fw-semibold">Content</label>
                            <TiptapEditor v-model="formData.content" />
                        </div>

                        <div class="row">
                            <div class="col-md-12">
                                <div class="mb-3">
                                    <label class="form-label fw-semibold">Featured Image</label>
                                    <input type="file" class="form-control" @change="handleImageUpload">
                                    <img v-if="imagePreviewSrc" :src="imagePreviewSrc" width="120" class="mt-2">
                                </div>
                            </div>
                        </div>

                        <div class="mb-3">
                            <label class="form-label fw-semibold">Meta Title</label>
                            <input v-model="formData.meta_title" type="text" class="form-control border p-2" placeholder="Enter blog meta title">
                        </div>
                        <div class="mb-3">
                            <label class="form-label fw-semibold">Meta Description</label>
                            <textarea v-model="formData.meta_description" class="form-control border p-2" rows="3" ></textarea>
                        </div>
                         <div class="mb-3">
                            <label class="form-label fw-semibold">Meta Keywords (seperate with comma)</label>
                            <input v-model="formData.meta_keywords" type="text" class="form-control border p-2" placeholder="Enter meta keywords">
                        </div>

                        <div class="mb-3">
                            <label class="form-label fw-semibold">Meta Robot</label>
                            <input v-model="formData.meta_robot" type="text" class="form-control border p-2" placeholder="Enter meta robot">
                        </div>

                        <div class="mb-3">
                            <label class="form-label fw-semibold">Canonical URL</label>
                            <input v-model="formData.canonical_url" type="text" class="form-control border p-2" placeholder="Enter canonical URL">
                        </div>

                        <div class="mb-3">
                            <label class="form-label fw-semibold">Custom URL</label>
                            <input v-model="formData.custom_url" type="text" class="form-control border p-2" placeholder="Enter custom URL">
                        </div>

                        <div class="mb-3">
                            <label class="form-label fw-semibold">JSON-LD</label>
                            <textarea v-model="formData.json_ld" class="form-control border p-2" rows="3" ></textarea>
                        </div>

                        <div class="mb-3">
                            <label class="form-label fw-semibold">OG Title</label>
                            <input v-model="formData.og_title" type="text" class="form-control border p-2" placeholder="Enter OG title">
                        </div>

                        <div class="mb-3">
                            <label class="form-label fw-semibold">OG Description</label>
                            <textarea v-model="formData.og_description" class="form-control border p-2" rows="3" ></textarea>
                        </div>

                        <div class="mb-3">
                            <label class="form-label fw-semibold">OG Image</label>
                            <input v-model="formData.og_image" type="text" class="form-control border p-2" placeholder="Enter OG image URL">
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-light rounded-pill" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-dark-gray rounded-pill" @click="saveBlog" :disabled="loading">
                            <span v-if="loading" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                            <span v-else>{{ isEditing ? 'Update' : 'Save' }} Blog</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>
