<script setup>
import { ref, onMounted } from 'vue';
import Vue3EasyDataTable from 'vue3-easy-data-table';
import 'vue3-easy-data-table/dist/style.css';
import { Modal } from 'bootstrap';
import api from '../../services/api';

// Table columns configuration
const headers = [
  { text: 'NAME', value: 'name', sortable: true },
  { text: 'SLUG', value: 'slug', sortable: true },
  { text: 'ACTIONS', value: 'actions', sortable: false }
];

const categories = ref([]);
const loading = ref(false);
const isEditing = ref(false);
const formData = ref({
  id: null,
  name: '',
  slug: '',
});
const successMessage = ref('');
const errorMessage = ref('');

let categoryModal = null;

const fetchCategories = async () => {
  loading.value = true;
  try {
    const response = await api.get('/categories');
    categories.value = response.data;
  } catch (error) {
    console.error('Failed to fetch categories:', error);
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  const modalElement = document.getElementById('categoryModal');
  categoryModal = new Modal(modalElement);
  
  modalElement.addEventListener('hidden.bs.modal', () => {
    successMessage.value = '';
    errorMessage.value = '';
  });

  fetchCategories();
});

// Category CRUD operations
const openNewCategoryModal = () => {
  isEditing.value = false;
  formData.value = {
    id: null,
    name: '',
    slug: '',
  };
  categoryModal.show();
};

const editCategory = (category) => {
  isEditing.value = true;
  formData.value = { ...category };
  categoryModal.show();
};

const saveCategory = async () => {
  loading.value = true;
  successMessage.value = '';
  errorMessage.value = '';
  try {
    if (isEditing.value) {
      // Update existing category
      await api.put(`/categories/${formData.value.id}`, { name: formData.value.name });
    } else {
      // Add new category
      await api.post('/categories', { name: formData.value.name });
    }
    successMessage.value = `Category successfully ${isEditing.value ? 'updated' : 'saved'}!`;
    await fetchCategories();
    setTimeout(() => {
        categoryModal.hide();
    }, 1000);
  } catch (error) {
    errorMessage.value = 'Failed to save category. Please try again.';
    if (error.response && error.response.data && error.response.data.errors) {
        errorMessage.value = Object.values(error.response.data.errors).flat().join(' ');
    }
    console.error('Failed to save category:', error);
  } finally {
    loading.value = false;
  }
};

const deleteCategory = async (id) => {
  if (confirm('Are you sure you want to delete this category?')) {
    loading.value = true;
    try {
      await api.delete(`/categories/${id}`);
      await fetchCategories();
    } catch (error) {
      console.error('Failed to delete category:', error);
    } finally {
      loading.value = false;
    }
  }
};
</script>

<template>
    <!-- start page title -->
        <section class="page-title-separate-breadcrumbs bg-base-color bg-sliding-line-dark-gray  ipad-top-space-margin">
            <div class="container position-relative">
                <div class="row justify-content-center align-items-lg-end extra-very-small-screen" data-anime='{ "el": "childs", "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'>
                    <div class="col-lg-6 position-relative page-title-extra-large md-mb-30px sm-mb-20px z-index-9">
                        <h1 class="text-light fw-600 ls-minus-4px mb-0 alt-font highlight-separator-small"><span class="highlight-separator mb-0 pb-0" data-shadow-animation="true" data-animation-delay="500">All Categories<span></span></span></h1>
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
                        <button @click="openNewCategoryModal" class="btn btn-large btn-dark-gray btn-box-shadow d-inline-block align-middle me-20px sm-me-0 sm-mb-30px rounded-pill">
                            <i class="bi bi-plus-lg me-2"></i>Add New Category
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
                        <div class="table-responsive">
                            <Vue3EasyDataTable
                                :headers="headers"
                                :items="categories"
                                :loading="loading"
                                :rows-per-page="10"
                                buttons-pagination
                                show-index
                                table-class-name="customize-table"
                            >
                                <template #item-actions="{ id }">
                                    <div class="d-flex gap-2">
                                        <button @click.stop="editCategory(categories.find(c => c.id === id))" class="btn btn-sm btn-info">
                                            <i class="bi bi-pencil"></i>
                                        </button>
                                        <button @click.stop="deleteCategory(id)" class="btn btn-sm btn-danger">
                                            <i class="bi bi-trash"></i>
                                        </button>
                                    </div>
                                </template>
                            </Vue3EasyDataTable>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Add/Edit Category Modal -->
        <div class="modal fade" id="categoryModal" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">{{ isEditing ? 'Edit' : 'Add New' }} Category</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div v-if="successMessage" class="alert alert-success">{{ successMessage }}</div>
                        <div v-if="errorMessage" class="alert alert-danger">{{ errorMessage }}</div>
                        <div class="mb-3">
                            <label class="form-label">Name</label>
                            <input v-model="formData.name" type="text" class="form-control" placeholder="Enter category name">
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-light rounded-pill" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-dark-gray rounded-pill" @click="saveCategory" :disabled="loading">
                            <span v-if="loading" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                            <span v-else>{{ isEditing ? 'Update' : 'Save' }} Category</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.card {
    border: none;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.05);
}

:deep(.customize-table) {
    --easy-table-header-font-size: 0.75rem;
    --easy-table-header-font-color: #6c757d;
    --easy-table-header-background-color: #f8f9fa;
    --easy-table-row-border: 1px solid #eee;
    --easy-table-header-item-padding: 0.75rem 1rem;
    --easy-table-body-item-padding: 1rem;
}

:deep(.easy-data-table__header) {
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

:deep(.easy-data-table__rows) {
    font-size: 0.875rem;
}

:deep(.easy-data-table__rows .btn) {
    padding: 0.25rem 0.5rem;
    font-size: 0.75rem;
}

.modal-header {
    border-bottom: 1px solid #e9ecef;
    padding: 1.25rem 1.5rem;
}

.modal-footer {
    border-top: 1px solid #e9ecef;
    padding: 1.25rem 1.5rem;
}

.highlight-separator {
    position: relative;
    display: inline-block;
}

.highlight-separator:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -10px;
    width: 50px;
    height: 3px;
    background-color: white;
}
</style>