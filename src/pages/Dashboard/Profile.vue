<script setup>
import { ref, onMounted, watch, computed } from 'vue';
import { useAuth } from '../../composables/useAuth';

const { user, getUser, updateUser } = useAuth();

const formData = ref({
    name: '',
    first_name: '',
    middle_name: '',
    surname: '',
    email: '',
    phone_number: '',
    department: '',
    position: '',
    role: '',
    current_password: '',
    new_password: '',
    confirm_new_password: '',
    profile_photo_path: null,
    bio: '', // New field
});

const fileInput = ref(null);
const loading = ref(false);
const imageLoading = ref(false);
const successMessage = ref('');
const errorMessage = ref('');
const passwordFieldType = ref('password');

const userInitials = computed(() => {
    if (user.value?.first_name && user.value?.surname) {
        return `${user.value.first_name.charAt(0)}${user.value.surname.charAt(0)}`;
    }
    return '';
});

const profilePhotoPreview = computed(() => {
    if (formData.value.profile_photo_path instanceof File) {
        return URL.createObjectURL(formData.value.profile_photo_path);
    }
    if (user.value?.profile_photo_url) {
        return `${user.value.profile_photo_url}?t=${new Date().getTime()}`;
    }
    return `https://ui-avatars.com/api/?name=${userInitials.value}&color=7F9CF5&background=EBF4FF`;
});


onMounted(async () => {
    if (!user.value) {
        await getUser();
    }
    if (user.value) {
        formData.value = { ...user.value, current_password: '', new_password: '', confirm_new_password: '', profile_photo_path: null, bio: user.value.bio || '' };
    }
});

watch(user, (newUser) => {
    if (newUser) {
        formData.value = { ...newUser, current_password: '', new_password: '', confirm_new_password: '', profile_photo_path: null, bio: newUser.bio || '' };
    }
});

const triggerFileInput = () => {
    fileInput.value.click();
};

const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
        formData.value.profile_photo_path = file;
        // Immediately trigger the upload
        saveChanges(true);
    }
};


const saveChanges = async (isPhotoUpload = false) => {
    if (isPhotoUpload) {
        imageLoading.value = true;
    } else {
        loading.value = true;
    }
    successMessage.value = '';
    errorMessage.value = '';

    try {
        const data = new FormData();
        
        // Append only non-null, non-empty fields to FormData
        Object.keys(formData.value).forEach(key => {
            const value = formData.value[key];
            // Skip password fields if they're empty
            if (key === 'current_password' || key === 'new_password' || key === 'confirm_new_password') {
                if (value && value.trim() !== '') {
                    data.append(key, value);
                }
            }
            // Only append profile_photo_path if it's a File (new upload)
            else if (key === 'profile_photo_path') {
                if (value instanceof File) {
                    data.append(key, value);
                }
            }
            // Append other fields if they're not null
            else if (value !== null && value !== undefined && value !== '') {
                data.append(key, value);
            }
        });

        await updateUser(data);
        successMessage.value = 'Profile updated successfully!';
        
        // Reset profile_photo_path after successful upload
        if (isPhotoUpload) {
            formData.value.profile_photo_path = null;
        }
    } catch (error) {
        errorMessage.value = 'Failed to update profile. Please check your input.';
        if (error.response && error.response.data && error.response.data.errors) {
            errorMessage.value = Object.values(error.response.data.errors).flat().join(' ');
        }
    } finally {
        if (isPhotoUpload) {
            imageLoading.value = false;
        } else {
            loading.value = false;
        }
    }
};


const togglePasswordVisibility = () => {
    passwordFieldType.value = passwordFieldType.value === 'password' ? 'text' : 'password';
};
</script>
<template>

    <!-- start page title -->
        <section class="page-title-separate-breadcrumbs bg-base-color bg-sliding-line-dark-gray  ipad-top-space-margin">
            <div class="container position-relative">
                <div class="row justify-content-center align-items-lg-end extra-very-small-screen" data-anime='{ "el": "childs", "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'>
                    <div class="col-lg-6 position-relative page-title-extra-large md-mb-30px sm-mb-20px z-index-9">
                        <h1 class="text-light fw-600 ls-minus-4px mb-0 alt-font highlight-separator-small"><span class="highlight-separator mb-0 pb-0" data-shadow-animation="true" data-animation-delay="500">Profile<span></span></span></h1>
                    </div>
                </div>
            </div>
        </section>
        <!-- end page title -->
  
            <div class="content-page ml-0">
                <div class="content">

                    <!-- Start Content-->
                    <div class="container-xl">

                        <div class="row">
                            <div class="col-12">
                                <div class="card">
                                    <!-- <img src="/images/slider_1.jpg" class="rounded-top-2 img-fluid overflow-hidden" alt="image data" height="30px"> -->

                                    <div class="card-body">
                                        <div class="align-items-center">
                                            
                                            <div class="silva-main-sections">
                                                <div class="silva-profile-main">
                                                    <div v-if="imageLoading" class="spinner-border text-primary" role="status">
                                                        <span class="visually-hidden">Loading...</span>
                                                    </div>
                                                    <img v-else :src="profilePhotoPreview" class="rounded-circle img-fluid avatar-xxl img-thumbnail float-start" alt="image profile">
                                                    <input type="file" ref="fileInput" @change="handleFileChange" style="display: none;" accept="image/*">
                                                    <span class="sil-profile_main-pic-change img-thumbnail" @click="triggerFileInput" style="cursor: pointer;">
                                                       <i class="fa-solid fa-camera text-white"></i>
                                                    </span>
                                                </div>

                                                <div class="overflow-hidden ms-md-4 ms-0">
                                                    <h4 class="m-0 text-dark fs-20 mt-2 mt-md-0">{{ formData.first_name }} {{ formData.surname }}</h4>
                                                    <p class="my-1 text-muted fs-16">{{ formData.position }}</p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-12">
                                <div class="card">
                                    <div class="card-body pt-0">
                                        <ul class="nav nav-underline border-bottom pt-2" id="pills-tab" role="tablist">
                                            <li class="nav-item" role="presentation">
                                                <a class="nav-link active p-2" id="profile_about_tab" data-bs-toggle="tab" href="#profile_about" role="tab">
                                                    <span class="d-block d-sm-none"><i class="mdi mdi-information"></i></span>
                                                    <span class="d-none d-sm-block">About</span>
                                                </a>
                                            </li>
                                           
                                            <li class="nav-item">
                                                <a class="nav-link p-2" id="setting_tab" data-bs-toggle="tab" href="#profile_setting" role="tab">
                                                    <span class="d-block d-sm-none"><i class="mdi mdi-information"></i></span>
                                                    <span class="d-none d-sm-block">Setting</span>
                                                </a>
                                            </li>
                                         
                                        </ul>

                                        <div class="tab-content text-muted bg-white">
                                            <div class="tab-pane active show pt-4" id="profile_about" role="tabpanel">
                                                <div class="row">
                                                    <div class="col-12">
                                                        <h5 class="fs-16 text-dark fw-semibold mb-3 text-capitalize">About Me</h5>
                                                        <p v-if="formData.bio">{{ formData.bio }}</p>
                                                        <p v-else>Hi I'm {{ formData.first_name }} {{ formData.surname }}</p>
                                                    </div>
                                                </div>
                                                <div class="row mt-4">
                                                    <div class="col-12">
                                                        <h5 class="fs-16 text-dark fw-semibold mb-3 text-capitalize">Contact Details</h5>
                                                        <div class="row">
                                                            <div class="col-md-6">
                                                                <p><strong>Full Name:</strong> {{ formData.first_name }} {{ formData.middle_name }} {{ formData.surname }}</p>
                                                                <p><strong>Email:</strong> {{ formData.email }}</p>
                                                                <p><strong>Phone:</strong> {{ formData.phone_number }}</p>
                                                            </div>
                                                            <div class="col-md-6">
                                                                <p><strong>Department:</strong> {{ formData.department }}</p>
                                                                <p><strong>Position:</strong> {{ formData.position }}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div><!-- end about tab -->
                                            
                                            


                                            <div class="tab-pane pt-4" id="profile_setting" role="tabpanel">
                                                <div v-if="successMessage" class="alert alert-success">{{ successMessage }}</div>
                                                <div v-if="errorMessage" class="alert alert-danger">{{ errorMessage }}</div>
                                                <div class="row">
                                                    <div class="col-lg-12">
                                                        <div class="card border">
                                                            <div class="card-header">
                                                                <h4 class="card-title mb-0">Personal Information</h4>
                                                            </div>
                                                            <div class="card-body">
                                                                <div class="row">
                                                                    <div class="col-md-6 mb-3">
                                                                        <label class="form-label">First Name</label>
                                                                        <input class="form-control" type="text" v-model="formData.first_name">
                                                                    </div>
                                                                    <div class="col-md-6 mb-3">
                                                                        <label class="form-label">Middle Name</label>
                                                                        <input class="form-control" type="text" v-model="formData.middle_name">
                                                                    </div>
                                                                    <div class="col-md-6 mb-3">
                                                                        <label class="form-label">Surname</label>
                                                                        <input class="form-control" type="text" v-model="formData.surname">
                                                                    </div>
                                                                    <div class="col-md-6 mb-3">
                                                                        <label class="form-label">Email Address</label>
                                                                        <input class="form-control" type="email" v-model="formData.email" readonly>
                                                                    </div>
                                                                    <div class="col-md-6 mb-3">
                                                                        <label class="form-label">Phone Number</label>
                                                                        <input class="form-control" type="tel" v-model="formData.phone_number" readonly>
                                                                    </div>
                                                                    <div class="col-md-6 mb-3">
                                                                        <label class="form-label">Department</label>
                                                                        <select class="form-select" v-model="formData.department" id="department" required="">
                                                                            <option value="" disabled>Select Department</option>
                                                                            <option value="training">Training</option>
                                                                            <option value="marketing">Marketing</option>
                                                                            <option value="development">Development</option>
                                                                        </select>
                                                                    </div>
                                                                    <div class="col-md-6 mb-3">
                                                                        <label class="form-label">Role</label>
                                                                        <input class="form-control" type="text" v-model="formData.position">
                                                                    </div>
                                                                    <!-- Bio Textarea -->
                                                                    <div class="col-md-12 mb-3">
                                                                        <label class="form-label">Bio</label>
                                                                        <textarea class="form-control" rows="4" v-model="formData.bio"></textarea>

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row mt-4">
                                                    <div class="col-lg-12">
                                                        <div class="card border">
                                                            <div class="card-header">
                                                                <h4 class="card-title mb-0">Change Password</h4>
                                                            </div>
                                                            <div class="card-body">
                                                                <div class="row">
                                                                    <div class="col-md-4 mb-3">
                                                                        <label class="form-label">Current Password</label>
                                                                        <div class="input-group">
                                                                            <input class="form-control" :type="passwordFieldType" v-model="formData.current_password" placeholder="Current Password">
                                                                            <span class="input-group-text" @click="togglePasswordVisibility" style="cursor: pointer;">
                                                                                <i class="fas" :class="passwordFieldType === 'password' ? 'fa-eye' : 'fa-eye-slash'"></i>
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-md-4 mb-3">
                                                                        <label class="form-label">New Password</label>
                                                                        <div class="input-group">
                                                                            <input class="form-control" :type="passwordFieldType" v-model="formData.new_password" placeholder="New Password">
                                                                            <span class="input-group-text" @click="togglePasswordVisibility" style="cursor: pointer;">
                                                                                <i class="fas" :class="passwordFieldType === 'password' ? 'fa-eye' : 'fa-eye-slash'"></i>
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-md-4 mb-3">
                                                                        <label class="form-label">Confirm Password</label>
                                                                        <div class="input-group">
                                                                            <input class="form-control" :type="passwordFieldType" v-model="formData.confirm_new_password" placeholder="Confirm Password">
                                                                            <span class="input-group-text" @click="togglePasswordVisibility" style="cursor: pointer;">
                                                                                <i class="fas" :class="passwordFieldType === 'password' ? 'fa-eye' : 'fa-eye-slash'"></i>
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row mt-4">
                                                    <div class="col-lg-12">
                                                        <button type="button" class="btn btn-primary" @click="saveChanges(false)" :disabled="loading">
                                                            <span v-if="loading" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                                            <span v-else>Save Changes</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div> <!-- end education -->

                                        
                                        </div> <!-- Tab panes -->
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div> 
                    <!-- container-fluid -->
                </div> 
                <!-- content -->

              

            </div>
</template>
<style scoped>


</style>
