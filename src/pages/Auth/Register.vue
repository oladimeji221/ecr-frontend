<script setup>
import { ref, computed, watch } from 'vue';
import { useAuth } from '../../composables/useAuth';
import { useRouter } from 'vue-router';

const { register } = useAuth();
const router = useRouter();

const formData = ref({
    first_name: '',
    middle_name: '',
    surname: '',
    email: '',
    phone_number: '',
    department: '',
    role: '',
    employment_type: '',
    password: '',
    password_confirmation: '',
    terms: false,
});

const departmentRoles = {
    'training': ['Instructor', 'Training Assistant', 'Curriculum Designer', 'LMS Manager'],
    'development': ['Frontend Developer', 'Backend Developer', 'Full-Stack Developer', 'Mobile App Developer'],
    'marketing': ['Marketing Manager', 'Social Media Manager', 'Digital Marketer', 'Content Creator', 'Graphics Designer'],
    'data_analytics': ['Lead Data Analyst', 'Data Analyst', 'Data Engineer', 'Data Scientist', 'AI Engineer', 'AI Developer'],
    'admin_and_operations': ['Operations Manager', 'Project Manager'],
    'finance': ['Accountant', 'Finance Assistant'],
    'sales': ['Sales Executive', 'Sales Support'],
    'hr': ['HR Officer', 'Recruiter'],
    'it_support': ['IT Support Technician', 'System Administrator'],
    'management': ['CEO', 'Manager', 'Team Lead'],
    'cyber_security': ['Cyber Security Analyst', 'Penetration Tester', 'Security Engineer', 'SOC Analyst'],
    'business_development': ['Business Development Manager', 'Partnership Manager', 'Client Engagement Officer', 'Growth Strategist']
};

const availableRoles = computed(() => {
    return formData.value.department ? departmentRoles[formData.value.department] || [] : [];
});

watch(() => formData.value.department, () => {
    formData.value.role = '';
});

const loading = ref(false);
const error = ref(null);
const success = ref(null);
const passwordFieldType = ref('password');

const handleRegister = async () => {
    loading.value = true;
    error.value = null;
    success.value = null;
    try {
        await register(formData.value);
        success.value = 'Registration successful! Redirecting to login...';
        // Wait a moment to show success message before redirecting to login page
        setTimeout(() => {
            router.push('/login');
        }, 2000);
    } catch (err) {
        if (err.response && err.response.data && err.response.data.errors) {
            error.value = Object.values(err.response.data.errors).flat().join(' ');
        } else {
            error.value = 'Registration failed. Please check your input.';
        }
    } finally {
        loading.value = false;
    }
};

const togglePasswordVisibility = () => {
    passwordFieldType.value = passwordFieldType.value === 'password' ? 'text' : 'password';
};
</script>

<template>  
     <div class="account-page" style="background-image: url(/images/img-2.jpg); background-size: cover; background-position: center;">
            <div class="container-fluid p-0">        
                <div class="row align-items-center g-0">
                    
                    <div class="col-12">
                        <div class="row justify-content-center">
                            <div class="col-lg-5">
                                <div class="card p-3">
                                    <div class="card-body">

                                        <div class="mb-0 border-0 p-md-5 p-lg-0 p-4">
                                            <div class="mb-4 p-0 text-center">
                                                <a class='auth-logo' href=''>
                                                    <img src="/images/logo.png" alt="logo-dark" class="mx-auto" height="28"/>
                                                </a>
                                            </div>

                                            <div class="auth-title-section mb-3 text-center"> 
                                                <h3 class="text-dark fs-20 fw-medium mb-2"> Register </h3>
                                                <p class="text-dark text-capitalize fs-14 mb-0">Sign Up to get started</p>
                                            </div>

                                          
                                            <div class="pt-0">
                                                <div v-if="success" class="alert alert-success alert-dismissible fade show" role="alert">
                                                    <i class="fas fa-check-circle me-2"></i>
                                                    {{ success }}
                                                    <button type="button" class="btn-close" @click="success = null" aria-label="Close"></button>
                                                </div>
                                                <div v-if="error" class="alert alert-danger alert-dismissible fade show" role="alert">
                                                    <i class="fas fa-exclamation-circle me-2"></i>
                                                    {{ error }}
                                                    <button type="button" class="btn-close" @click="error = null" aria-label="Close"></button>
                                                </div>
                                                <form @submit.prevent="handleRegister" class="my-4">
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <div class="form-group mb-3">
                                                                <label for="first_name" class="form-label">First Name</label>
                                                                <input class="form-control" v-model="formData.first_name" type="text" id="first_name" required="" placeholder="Enter your first name">
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <div class="form-group mb-3">
                                                                <label for="middle_name" class="form-label">Middle Name</label>
                                                                <input class="form-control" v-model="formData.middle_name" type="text" id="middle_name" placeholder="Optional">
                                                            </div>
                                                        </div>
                                                        
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <div class="form-group mb-3">
                                                                <label for="surname" class="form-label">Surname</label>
                                                                <input class="form-control" v-model="formData.surname" type="text" id="surname" required="" placeholder="Enter your surname">
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <div class="form-group mb-3">
                                                                <label for="emailaddress" class="form-label">Email address</label>
                                                                <input class="form-control" v-model="formData.email" type="email" id="emailaddress" required="" placeholder="Enter your email">
                                                            </div>
                                                        </div>
                                                       
                                                    </div>
                                                    <div class="row">
                                                         <div class="col-md-6">
                                                            <div class="form-group mb-3">
                                                                <label for="phone_number" class="form-label">Phone Number</label>
                                                                <input class="form-control" v-model="formData.phone_number" type="tel" id="phone_number" required="" placeholder="Enter your phone number">
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <div class="form-group mb-3">
                                                                <label for="department" class="form-label">Department</label>
                                                                <select class="form-select" v-model="formData.department" id="department" required="">
                                                                    <option value="" disabled>Select Department</option>
                                                                    <option value="training">Training</option>
                                                                    <option value="development">Development</option>
                                                                    <option value="marketing">Marketing</option>
                                                                    <option value="data_analytics">Data Analytics / AI</option>
                                                                    <option value="admin_and_operations">Admin & Operations</option>
                                                                    <option value="finance">Finance</option>
                                                                    <option value="sales">Sales</option>
                                                                    <option value="hr">HR</option>
                                                                    <option value="it_support">IT Support</option>
                                                                    <option value="management">Management</option>
                                                                    <option value="cyber_security">Cyber Security</option>
                                                                    <option value="business_development">Business Development</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <div class="form-group mb-3">
                                                                <label for="role" class="form-label">Role</label>
                                                                <select class="form-select" v-model="formData.role" id="role" required="" :disabled="!availableRoles.length">
                                                                    <option value="" disabled>Select Role</option>
                                                                    <option v-for="role in availableRoles" :key="role" :value="role">{{ role }}</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <div class="form-group mb-3">
                                                                <label for="employment_type" class="form-label">Employment Type</label>
                                                                <select class="form-select" v-model="formData.employment_type" id="employment_type" required="">
                                                                    <option value="" disabled>Select Employment Type</option>
                                                                    <option value="full_time">Full Time</option>
                                                                    <option value="part_time">Part Time</option>
                                                                    <option value="remote">Remote</option>
                                                                    <option value="hybrid">Hybrid</option>
                                                                    <option value="contract">Contract</option>
                                                                    <option value="intern">Intern</option>
                                                                    <option value="corps_member">Corps Member</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <div class="form-group mb-3">
                                                                <label for="password" class="form-label">Password</label>
                                                                <div class="input-group">
                                                                    <input class="form-control" v-model="formData.password" :type="passwordFieldType" required="" id="password" placeholder="Enter your password">
                                                                    <span class="input-group-text" @click="togglePasswordVisibility" style="cursor: pointer;">
                                                                        <i class="fas" :class="passwordFieldType === 'password' ? 'fa-eye' : 'fa-eye-slash'"></i>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <div class="form-group mb-3">
                                                                <label for="password_confirmation" class="form-label">Confirm Password</label>
                                                                <div class="input-group">
                                                                    <input class="form-control" v-model="formData.password_confirmation" :type="passwordFieldType" required="" id="password_confirmation" placeholder="Confirm your password">
                                                                    <span class="input-group-text" @click="togglePasswordVisibility" style="cursor: pointer;">
                                                                        <i class="fas" :class="passwordFieldType === 'password' ? 'fa-eye' : 'fa-eye-slash'"></i>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="form-check mb-3">
                                                        <input type="checkbox" class="form-check-input rounded-3 w-2" id="terms" v-model="formData.terms" required>
                                                        <label class="form-check-label ms-2" for="terms">I accept the <a href="#" class="text-dark">Terms and Conditions</a></label>
                                                    </div>
                        
                                                    
                                                    <div class="form-group mb-0 row">
                                                        <div class="col-12">
                                                            <div class="d-grid">
                                                                <button class="btn btn-dark-gray" type="submit" :disabled="loading">
                                                                    <span v-if="loading" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                                                    <span v-else>Register</span>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>

                                                <div class="text-center text-muted mb-4">
                                                    <p class="mb-0">Already have an account ?<router-link to="/login" class='text-dark-gray ms-2 fw-medium'>Login here</router-link></p>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>



                </div>
            </div>
        </div>

</template>

<style scoped>

</style>