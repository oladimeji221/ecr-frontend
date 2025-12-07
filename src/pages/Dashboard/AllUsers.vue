<script setup>
import { ref, onMounted, computed } from 'vue';
import Vue3EasyDataTable from 'vue3-easy-data-table';
import 'vue3-easy-data-table/dist/style.css';
import { Modal } from 'bootstrap';
import api from '../../services/api';
import { getImageUrl } from '../../utils/imageHelper';

// Table columns configuration
const headers = [
  { text: 'NAME', value: 'name', sortable: true },
  { text: 'EMAIL', value: 'email', sortable: true },
  { text: 'DEPARTMENT', value: 'department', sortable: true },
  { text: 'ROLE', value: 'role', sortable: true },
  { text: 'ACTIONS', value: 'actions', sortable: false }
];

const users = ref([]);
const loading = ref(false);
const isEditing = ref(false);
const successMessage = ref('');
const errorMessage = ref('');

const createEmptyForm = () => ({
  id: null,
  first_name: '',
  middle_name: '',
  surname: '',
  email: '',
  phone_number: '',
  department: '',
  position: '',
  role: 'user',
  profile_photo_path: null,
  bio: '',
});

const formData = ref(createEmptyForm());

let userModal = null;

const fetchUsers = async () => {
  loading.value = true;
  try {
    const response = await api.get('/users');
    users.value = response.data;
  } catch (error) {
    console.error('Failed to fetch users:', error);
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  const modalElement = document.getElementById('userModal');
  if (modalElement) {
    userModal = new Modal(modalElement);
    modalElement.addEventListener('hidden.bs.modal', () => {
      successMessage.value = '';
      errorMessage.value = '';
    });
  }
  fetchUsers();
});

const editUser = (user) => {
  isEditing.value = true;
  formData.value = {
    id: user.id,
    first_name: user.first_name || '',
    middle_name: user.middle_name || '',
    surname: user.surname || '',
    email: user.email || '',
    phone_number: user.phone_number || '',
    department: user.department || '',
    position: user.position || '',
    role: user.role || 'user',
    profile_photo_path: user.profile_photo_path || null,
    bio: user.bio || '',
  };
  if (userModal) {
    userModal.show();
  }
};

const saveUser = async () => {
  loading.value = true;
  successMessage.value = '';
  errorMessage.value = '';

  const data = new FormData();
  data.append('first_name', formData.value.first_name);
  data.append('surname', formData.value.surname);
  data.append('email', formData.value.email);
  data.append('phone_number', formData.value.phone_number);
  data.append('department', formData.value.department);
  data.append('role', formData.value.role);

  if (formData.value.middle_name) {
    data.append('middle_name', formData.value.middle_name);
  }
  if (formData.value.position) {
    data.append('position', formData.value.position);
  }
  if (formData.value.bio) {
    data.append('bio', formData.value.bio);
  }

  // Only append image if it's a File object (new upload)
  if (formData.value.profile_photo_path instanceof File) {
    data.append('profile_photo_path', formData.value.profile_photo_path);
  }

  try {
    await api.put(`/users/${formData.value.id}`, data, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    successMessage.value = 'User successfully updated!';
    await fetchUsers();
    setTimeout(() => {
      if (userModal) {
        userModal.hide();
      }
    }, 1000);
  } catch (error) {
    console.error('Failed to update user:', error);
    if (error.response && error.response.data && error.response.data.errors) {
      errorMessage.value = Object.values(error.response.data.errors).flat().join(' ');
    } else {
      errorMessage.value = error.response?.data?.message || 'Failed to update user. Please try again.';
    }
  } finally {
    loading.value = false;
  }
};

const deleteUser = async (user) => {
  if (confirm(`Are you sure you want to delete ${user.name || user.email}? This action cannot be undone.`)) {
    loading.value = true;
    try {
      await api.delete(`/users/${user.id}`);
      await fetchUsers();
    } catch (error) {
      console.error('Failed to delete user:', error);
      alert(error.response?.data?.message || 'Failed to delete user. Please try again.');
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

  if (file.size > 2 * 1024 * 1024) {
    errorMessage.value = 'Profile photo must be 2MB or smaller.';
    event.target.value = '';
    return;
  }

  formData.value.profile_photo_path = file;
};

const imagePreviewSrc = computed(() => {
  if (formData.value.profile_photo_path instanceof File) {
    return URL.createObjectURL(formData.value.profile_photo_path);
  }
  if (typeof formData.value.profile_photo_path === 'string' && formData.value.profile_photo_path) {
    return getImageUrl(formData.value.profile_photo_path);
  }
  return '';
});
</script>

<template>
    <!-- start page title -->
    <section class="page-title-separate-breadcrumbs bg-base-color bg-sliding-line-dark-gray ipad-top-space-margin">
        <div class="container position-relative">
            <div class="row justify-content-center align-items-lg-end extra-very-small-screen" data-anime='{ "el": "childs", "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'>
            <div class="col-lg-6 position-relative page-title-extra-large md-mb-30px sm-mb-20px z-index-9">
                <h1 class="text-light fw-600 ls-minus-4px mb-0 alt-font highlight-separator-small"><span class="highlight-separator mb-0 pb-0" data-shadow-animation="true" data-animation-delay="500">All Users<span></span></span></h1>
            </div>
        </div>
        </div>
    </section>
    <!-- end page title -->

    <div class="page-wrapper">
        <section class="pt-5">
            <div class="container">
                <div class="card">
                    <div class="card-body" style="overflow-x: auto;">
                        <div class="table-responsive">
                            <Vue3EasyDataTable
                                :headers="headers"
                                :items="users"
                                :loading="loading"
                                :rows-per-page="10"
                                buttons-pagination
                                show-index
                                table-class-name="customize-table"
                            >
                                <template #item-role="{ role }">
                                    <span :class="`badge bg-${role === 'admin' ? 'danger' : 'primary'}`">
                                        {{ role }}
                                    </span>
                                </template>
                                <template #item-actions="user">
                                    <div class="d-flex gap-2">
                                        <button @click.stop="editUser(user)" class="btn btn-sm btn-warning" title="Edit User">
                                            <i class="bi bi-pencil"></i>
                                        </button>
                                        <button @click.stop="deleteUser(user)" class="btn btn-sm btn-danger" title="Delete User">
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

        <!-- Edit User Modal -->
        <div class="modal fade" id="userModal" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Edit User</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div v-if="successMessage" class="alert alert-success">{{ successMessage }}</div>
                        <div v-if="errorMessage" class="alert alert-danger">{{ errorMessage }}</div>
                        
                        <div class="row">
                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label class="form-label fw-semibold">First Name <span class="text-danger">*</span></label>
                                    <input v-model="formData.first_name" type="text" class="form-control border p-2" placeholder="Enter first name" required>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label class="form-label fw-semibold">Surname <span class="text-danger">*</span></label>
                                    <input v-model="formData.surname" type="text" class="form-control border p-2" placeholder="Enter surname" required>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label class="form-label fw-semibold">Middle Name</label>
                                    <input v-model="formData.middle_name" type="text" class="form-control border p-2" placeholder="Enter middle name">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label class="form-label fw-semibold">Email <span class="text-danger">*</span></label>
                                    <input v-model="formData.email" type="email" class="form-control border p-2" placeholder="Enter email" required>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label class="form-label fw-semibold">Phone Number <span class="text-danger">*</span></label>
                                    <input v-model="formData.phone_number" type="tel" class="form-control border p-2" placeholder="Enter phone number" required>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label class="form-label fw-semibold">Department <span class="text-danger">*</span></label>
                                    <select v-model="formData.department" class="form-select border p-2" required>
                                        <option value="">Select Department</option>
                                        <option value="training">Training</option>
                                        <option value="marketing">Marketing</option>
                                        <option value="development">Development</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label class="form-label fw-semibold">Position</label>
                                    <input v-model="formData.position" type="text" class="form-control border p-2" placeholder="Enter position">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label class="form-label fw-semibold">Role <span class="text-danger">*</span></label>
                                    <select v-model="formData.role" class="form-select border p-2" required>
                                        <option value="user">User</option>
                                        <option value="admin">Admin</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div class="mb-3">
                            <label class="form-label fw-semibold">Profile Photo</label>
                            <input type="file" class="form-control border p-2" @change="handleImageUpload" accept="image/jpeg,image/jpg,image/png">
                            <small class="text-muted">Max size: 2MB. Accepted formats: JPG, PNG</small>
                            <div v-if="imagePreviewSrc" class="mt-2">
                                <img :src="imagePreviewSrc" alt="Profile Photo Preview" style="width: 120px; height: 120px; object-fit: cover; border-radius: 8px;">
                            </div>
                        </div>

                        <div class="mb-3">
                            <label class="form-label fw-semibold">Bio</label>
                            <textarea v-model="formData.bio" class="form-control border p-2" rows="3" placeholder="Enter bio"></textarea>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-light rounded-pill" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-dark-gray rounded-pill" @click="saveUser" :disabled="loading">
                            <span v-if="loading" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                            <span v-else>Update User</span>
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

.modal-header {
    border-bottom: 1px solid #e9ecef;
    padding: 1.25rem 1.5rem;
}

.modal-footer {
    border-top: 1px solid #e9ecef;
    padding: 1.25rem 1.5rem;
}
</style>
