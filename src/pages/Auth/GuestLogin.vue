<script setup>
import { ref } from 'vue';
import { useAuth } from '../../composables/useAuth';
import { useRouter } from 'vue-router';

const { guestLogin } = useAuth();
const router = useRouter();

const formData = ref({
    email: '',
    password: '',
    remember_me: false
});

const loading = ref(false);
const error = ref(null);
const passwordFieldType = ref('password');

const handleLogin = async () => {
    loading.value = true;
    error.value = null;

    try {
        await guestLogin({
            email: formData.value.email,
            password: formData.value.password,
            device_name: 'web-browser'
        });
        
        // Redirect to guest dashboard after successful login
        router.push('/guest/dashboard');
    } catch (err) {
        if (err.response && err.response.data && err.response.data.message) {
            error.value = err.response.data.message;
        } else if (err.response && err.response.data && err.response.data.errors) {
            error.value = Object.values(err.response.data.errors).flat().join(' ');
        } else {
            error.value = 'Login failed. Please check your credentials and try again.';
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
    <main class="auth-minimal-wrapper">
        <div class="auth-minimal-inner">
            <div class="minimal-card-wrapper">
                <div class="card mb-4 mt-5 mx-4 mx-sm-0 position-relative" style="max-width: 500px;">
                    <!-- Logo -->
                    <div class="wd-100 bg-white p-3 rounded-circle shadow-lg position-absolute translate-middle top-0 start-50">
                        <img src="/images/logo.png" alt="" class="img-fluid">
                    </div>
                    
                    <div class="card-body p-sm-5">
                        <!-- Title -->
                        <h2 class="fs-20 fw-bolder mb-4">Login</h2>
                        <h4 class="fs-13 fw-bold mb-2">Login to your account</h4>
                        <p class="fs-12 fw-medium text-muted">Welcome back! Please login to access your ECR guest account.</p>
                        
                        <!-- Error Alert -->
                        <div v-if="error" class="alert alert-danger">{{ error }}</div>
                        
                        <!-- Form -->
                        <form @submit.prevent="handleLogin" class="w-100 mt-4 pt-2">
                            <div class="mb-4">
                                <input 
                                    type="email" 
                                    class="form-control" 
                                    v-model="formData.email"
                                    placeholder="Email" 
                                    required
                                    autocomplete="email"
                                >
                            </div>
                            
                            <div class="mb-3">
                                <div class="input-group">
                                    <input 
                                        class="form-control" 
                                        v-model="formData.password"
                                        :type="passwordFieldType" 
                                        placeholder="Password" 
                                        required
                                        autocomplete="current-password"
                                    >
                                    <span class="input-group-text c-pointer" @click="togglePasswordVisibility">
                                        <i class="fas" :class="passwordFieldType === 'password' ? 'fa-eye' : 'fa-eye-slash'"></i>
                                    </span>
                                </div>
                            </div>
                            
                            <div class="d-flex align-items-center justify-content-between">
                                <div>
                                    <div class="custom-control custom-checkbox">
                                        <input 
                                            type="checkbox" 
                                            class="custom-control-input" 
                                            id="rememberMe"
                                            v-model="formData.remember_me"
                                        >
                                        <label class="custom-control-label c-pointer" for="rememberMe">Remember Me</label>
                                    </div>
                                </div>
                                <div>
                                    <router-link to="/forgot-password" class="fs-11 text-primary">Forget password?</router-link>
                                </div>
                            </div>
                            
                            <div class="mt-5">
                                <button type="submit" class="btn btn-lg btn-primary w-100" :disabled="loading">
                                    <span v-if="loading" class="spinner-border spinner-border-sm"></span>
                                    <span v-else>Login</span>
                                </button>
                            </div>
                        </form>
                        
                        <!-- Register Link -->
                        <div class="mt-5 text-muted">
                            <span>Don't have an account?</span>
                            <router-link to="/guest-register" class="fw-bold">Create an Account</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped>
/* Override the minimal-card-wrapper constraints */
.minimal-card-wrapper {
    max-width: 100% !important;
    width: 100% !important;
}

.auth-minimal-wrapper {
    padding: 2rem 1rem;
}

.card {
    margin-left: auto !important;
    margin-right: auto !important;
}

.card-body {
    padding: 3rem 2.5rem !important;
}

@media (max-width: 768px) {
    .card-body {
        padding: 2rem 1.5rem !important;
    }
}
</style>
