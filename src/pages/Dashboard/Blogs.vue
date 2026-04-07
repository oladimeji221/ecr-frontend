<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import Vue3EasyDataTable from 'vue3-easy-data-table';
import 'vue3-easy-data-table/dist/style.css';
import api from '../../services/api';
import { getImageUrl } from '../../utils/imageHelper';

const router = useRouter();

const headers = [
  { text: 'IMAGE', value: 'image' },
  { text: 'TITLE', value: 'title', sortable: true },
  { text: 'DATE', value: 'created_at', sortable: true },
  { text: 'STATUS', value: 'status', sortable: true },
  { text: 'ACTIONS', value: 'actions', sortable: false }
];

const blogs = ref([]);
const loading = ref(false);

const fetchBlogs = async () => {
  loading.value = true;
  try {
    const response = await api.get('/my/blogs');
    blogs.value = response.data;
  } catch (error) {
    console.error('Failed to fetch blogs:', error);
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  fetchBlogs();
});

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

const formatDate = (dateString) => {
  if (!dateString) return 'N/A';
  const date = new Date(dateString);
  if (isNaN(date)) return 'N/A';
  return date.toLocaleString(undefined, {
    year: 'numeric', month: 'short', day: 'numeric',
    hour: '2-digit', minute: '2-digit',
  });
};
</script>

<template>
  <!-- start page title -->
  <section class="page-title-separate-breadcrumbs bg-base-color bg-sliding-line-dark-gray ipad-top-space-margin">
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
    <section class="page-title-style1 overflow-hidden pb-0 pe-0">
      <div class="container">
        <div class="row justify-content-end">
          <div class="col-lg-6 text-end pe-0">
            <button @click="router.push({ name: 'CreateBlog' })" class="btn btn-large btn-dark-gray btn-box-shadow d-inline-block align-middle me-20px sm-me-0 sm-mb-30px rounded-pill">
              <i class="bi bi-plus-lg me-2"></i>Add New Blog
            </button>
          </div>
        </div>
      </div>
    </section>

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
                  <button @click.stop="router.push({ name: 'EditBlog', params: { slug: blog.slug || blog.id } })" class="btn btn-sm btn-info">
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
  </div>
</template>

<style scoped></style>
