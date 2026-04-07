<script setup>
import { ref, onMounted, computed } from 'vue';
import { useRouter } from 'vue-router';
import TiptapEditor from '../../components/TiptapEditor.vue';
import api from '../../services/api';

const router = useRouter();

const MAX_IMAGE_SIZE_BYTES = 2 * 1024 * 1024;

const categories = ref([]);
const loading = ref(false);
const successMessage = ref('');
const errorMessage = ref('');

const formData = ref({
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

const fetchCategories = async () => {
  try {
    const response = await api.get('/categories');
    categories.value = response.data;
  } catch (error) {
    console.error('Failed to fetch categories:', error);
  }
};

onMounted(() => {
  fetchCategories();
});

const saveBlog = async () => {
  loading.value = true;
  successMessage.value = '';
  errorMessage.value = '';

  const data = new FormData();
  data.append('title', formData.value.title);
  data.append('content', formData.value.content);
  data.append('category_id', formData.value.category_id);
  data.append('status', formData.value.status || 'draft');

  const optionalTextFields = [
    'meta_title', 'meta_description', 'meta_keywords', 'meta_robot',
    'canonical_url', 'custom_url', 'og_title', 'og_description', 'og_image',
  ];

  optionalTextFields.forEach((field) => {
    const value = formData.value[field];
    if (value !== null && value !== undefined) {
      const trimmed = typeof value === 'string' ? value.trim() : value;
      if (trimmed !== '') data.append(field, trimmed);
    }
  });

  const jsonLdValue = formData.value.json_ld?.trim();
  if (jsonLdValue) {
    try {
      JSON.parse(jsonLdValue);
      data.append('json_ld', jsonLdValue);
    } catch {
      errorMessage.value = 'JSON-LD must be valid JSON.';
      loading.value = false;
      return;
    }
  }

  if (formData.value.image instanceof File) {
    data.append('image', formData.value.image);
  }

  try {
    await api.post('/blogs', data, { headers: { 'Content-Type': 'multipart/form-data' } });
    successMessage.value = 'Blog successfully created!';
    setTimeout(() => router.push({ name: 'dashboard.blogs' }), 1000);
  } catch (error) {
    if (error.response?.data?.errors) {
      errorMessage.value = Object.values(error.response.data.errors).flat().join(' ');
    } else {
      errorMessage.value = error.response?.data?.message || 'Network error or could not connect to the server.';
    }
  } finally {
    loading.value = false;
  }
};

const handleImageUpload = (event) => {
  const file = event.target.files[0];
  if (!file) return;
  if (file.size > MAX_IMAGE_SIZE_BYTES) {
    errorMessage.value = 'Featured image must be 2MB or smaller.';
    event.target.value = '';
    return;
  }
  formData.value.image = file;
};

const imagePreviewSrc = computed(() => {
  if (formData.value.image instanceof File) {
    return URL.createObjectURL(formData.value.image);
  }
  return '';
});
</script>

<template>
  <section class="page-title-separate-breadcrumbs bg-base-color bg-sliding-line-dark-gray ipad-top-space-margin">
    <div class="container position-relative">
      <div class="row justify-content-center align-items-lg-end extra-very-small-screen">
        <div class="col-lg-6 position-relative page-title-extra-large md-mb-30px sm-mb-20px z-index-9">
          <h1 class="text-light fw-600 ls-minus-4px mb-0 alt-font">Create New Blog</h1>
        </div>
      </div>
    </div>
  </section>

  <div class="page-wrapper">
    <section class="pt-4 pb-6">
      <div class="container">
        <div class="mb-3">
          <button @click="router.push({ name: 'dashboard.blogs' })" class="btn btn-sm btn-outline-secondary rounded-pill">
            <i class="bi bi-arrow-left me-1"></i>Back to Blogs
          </button>
        </div>

        <div class="card shadow-sm">
          <div class="card-body p-4">
            <div v-if="successMessage" class="alert alert-success">{{ successMessage }}</div>
            <div v-if="errorMessage" class="alert alert-danger">{{ errorMessage }}</div>

            <div class="row">
              <div class="col-md-12">
                <div class="mb-3">
                  <label class="form-label fw-semibold">Title</label>
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

            <div class="mb-3">
              <label class="form-label fw-semibold">Featured Image</label>
              <input type="file" class="form-control" @change="handleImageUpload">
              <img v-if="imagePreviewSrc" :src="imagePreviewSrc" width="120" class="mt-2">
            </div>

            <hr class="my-4">
            <h6 class="fw-semibold mb-3">SEO Settings</h6>

            <div class="mb-3">
              <label class="form-label fw-semibold">Meta Title</label>
              <input v-model="formData.meta_title" type="text" class="form-control" placeholder="Enter meta title">
            </div>
            <div class="mb-3">
              <label class="form-label fw-semibold">Meta Description</label>
              <textarea v-model="formData.meta_description" class="form-control" rows="3"></textarea>
            </div>
            <div class="mb-3">
              <label class="form-label fw-semibold">Meta Keywords (separate with comma)</label>
              <input v-model="formData.meta_keywords" type="text" class="form-control" placeholder="Enter meta keywords">
            </div>
            <div class="mb-3">
              <label class="form-label fw-semibold">Meta Robot</label>
              <input v-model="formData.meta_robot" type="text" class="form-control" placeholder="Enter meta robot">
            </div>
            <div class="mb-3">
              <label class="form-label fw-semibold">Canonical URL</label>
              <input v-model="formData.canonical_url" type="text" class="form-control" placeholder="Enter canonical URL">
            </div>
            <div class="mb-3">
              <label class="form-label fw-semibold">Custom URL</label>
              <input v-model="formData.custom_url" type="text" class="form-control" placeholder="Enter custom URL">
            </div>
            <div class="mb-3">
              <label class="form-label fw-semibold">JSON-LD</label>
              <textarea v-model="formData.json_ld" class="form-control" rows="3"></textarea>
            </div>
            <div class="mb-3">
              <label class="form-label fw-semibold">OG Title</label>
              <input v-model="formData.og_title" type="text" class="form-control" placeholder="Enter OG title">
            </div>
            <div class="mb-3">
              <label class="form-label fw-semibold">OG Description</label>
              <textarea v-model="formData.og_description" class="form-control" rows="3"></textarea>
            </div>
            <div class="mb-3">
              <label class="form-label fw-semibold">OG Image</label>
              <input v-model="formData.og_image" type="text" class="form-control" placeholder="Enter OG image URL">
            </div>

            <div class="d-flex gap-2 mt-4">
              <button type="button" class="btn btn-light rounded-pill" @click="router.push({ name: 'dashboard.blogs' })">Cancel</button>
              <button type="button" class="btn btn-dark-gray rounded-pill" @click="saveBlog" :disabled="loading">
                <span v-if="loading" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                <span v-else>Save Blog</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped></style>
