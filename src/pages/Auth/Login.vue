<script setup>
import { ref, onMounted } from 'vue';
import { useAuth } from '../../composables/useAuth';
import { useRouter, useRoute } from 'vue-router';

const { login } = useAuth();
const router = useRouter();
const route = useRoute();

const formData = ref({
    email: '',
    password: '',
});

const loading = ref(false);
const error = ref(null);
const info = ref(null);
const passwordFieldType = ref('password');

const handleLogin = async () => {
    loading.value = true;
    error.value = null;
    try {
        await login(formData.value);
        router.push('/dashboard/profile');
    } catch (err) {
        error.value = 'Invalid email or password.';
    } finally {
        loading.value = false;
    }
};

const togglePasswordVisibility = () => {
    passwordFieldType.value = passwordFieldType.value === 'password' ? 'text' : 'password';
};

onMounted(() => {
    if (route.query.inactive) {
        info.value = 'You have been logged out due to inactivity.';
    }
});
</script>

<template>  
 <div class="account-page">
            <div class="container-fluid p-0">
                <div class="row align-items-center g-0">

                    <div class="col-xl-5">
                        <div class="row">
                            <div class="col-md-8 mx-auto">
                                <div class="card p-3 mb-0">
                                    <div class="card-body">

                                        <div class="mb-0 border-0 p-md-5 p-lg-0 p-4">
                                            <div class="mb-4 p-0 text-center">
                                                <a class='auth-logo' href=''>
                                                    <img src="/images/logo.webp" alt="logo-dark" class="mx-auto" height="28" />
                                                </a>
                                            </div>

                                            <div class="auth-title-section mb-3 text-center"> 
                                                <h3 class="text-dark fs-20 fw-medium mb-2">Welcome back</h3>
                                                <p class="text-dark text-capitalize fs-14 mb-0">Sign in to continue to your dashboard.</p>
                                            </div>

                                          
                                        

                                            <div class="pt-0">
                                                <div v-if="error" class="alert alert-danger">{{ error }}</div>
                                                <div v-if="info" class="alert alert-info">{{ info }}</div>
                                                <form @submit.prevent="handleLogin" class="my-4">
                                                    <div class="form-group mb-3">
                                                        <label for="emailaddress" class="form-label">Email address</label>
                                                        <input class="form-control" v-model="formData.email" type="email" id="emailaddress" required="" placeholder="Enter your email">
                                                    </div>
                        
                                                    <div class="form-group mb-3">
                                                        <label for="password" class="form-label">Password</label>
                                                        <div class="input-group">
                                                            <input class="form-control" v-model="formData.password" :type="passwordFieldType" required="" id="password" placeholder="Enter your password">
                                                            <span class="input-group-text" @click="togglePasswordVisibility" style="cursor: pointer;">
                                                                <i class="fas" :class="passwordFieldType === 'password' ? 'fa-eye' : 'fa-eye-slash'"></i>
                                                            </span>
                                                        </div>
                                                    </div>
                        
                                                    <div class="form-group d-flex mb-3 justify-content-end">
                                                        
                                                        <div class="col-sm-6 text-end">
                                                            <router-link to="/forgot-password" class="text-muted fs-14">Forgot password?</router-link>                             
                                                        </div>
                                                    </div>
                                                    
                                                    <div class="form-group mb-0 row">
                                                        <div class="col-12">
                                                            <div class="d-grid">
                                                                <button class="btn btn-dark-gray" type="submit" :disabled="loading">
                                                                    <span v-if="loading" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                                                    <span v-else>Log In</span>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
            
                                                <div class="text-center text-muted mb-4">
                                                    <p class="mb-0">Don't have an account ?<router-link to="/register" class="text-dark-gray ms-2 fw-medium">Sign up</router-link></p>
                                                </div>
                                                
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-xl-7 d-none d-md-block">
                        <div class="account-page-bg p-md-5 p-4">
                            <div class="text-center">
                                <div class="auth-image">
                                    <img src="/images/staff.webp" class="mx-auto img-fluid"  alt="images">
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