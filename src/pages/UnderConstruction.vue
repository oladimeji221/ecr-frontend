<script setup>
import { onMounted, ref, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const timeLeft = ref(60);
let timer = null;

onMounted(() => {
    timer = setInterval(() => {
        timeLeft.value--;
        if (timeLeft.value <= 0) {
            router.push('/');
        }
    }, 1000);
});

onUnmounted(() => {
    if (timer) clearInterval(timer);
});

const goHome = () => {
    router.push('/');
};
</script>

<template>
    <div class="construction-container d-flex flex-column align-items-center justify-content-center min-vh-100 text-center px-3">
        <div class="construction-content p-5 bg-white rounded shadow-lg">
            <div class="mb-4">
                 <i class="fas fa-tools fa-4x text-warning mb-3"></i>
            </div>
            <h1 class="display-5 fw-bold text-dark mb-3">Under Construction</h1>
            <p class="lead text-muted mb-4">
                Thank you for registering! Your dashboard is currently being set up. <br>
                Please accept our patience while we finalize the platform for you.
            </p>
            <p class="text-secondary mb-4">
                You will be redirected to the homepage in <span class="fw-bold text-primary">{{ timeLeft }}</span> seconds.
            </p>
            <button @click="goHome" class="btn btn-primary btn-lg px-5">
                Back to Home Now
            </button>
        </div>
    </div>
</template>

<style scoped>
.construction-container {
    background-color: #f8f9fa;
    background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23e0e0e0' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}

.construction-content {
    max-width: 600px;
    width: 100%;
    border-top: 5px solid #ffc107; /* Warning color accent */
}

/* Optional: Add a gentle pulse animation to the icon */
@keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.1); }
    100% { transform: scale(1); }
}

.fa-tools {
    animation: pulse 2s infinite;
}
</style>
