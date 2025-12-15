<template>
    <div class="modal fade" id="quoteModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Get a Free Quote</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div v-if="status.success" class="alert alert-success">{{ status.success }}</div>
                    <div v-if="status.error" class="alert alert-danger">{{ status.error }}</div>

                    <form @submit.prevent="submitQuoteForm">
                        <div class="mb-3">
                            <label class="form-label">Name <span class="text-danger">*</span></label>
                            <input v-model="formData.name" type="text" class="form-control" placeholder="Enter your name" required />
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Email <span class="text-danger">*</span></label>
                            <input v-model="formData.email" type="email" class="form-control" placeholder="Enter your email" required />
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Service <span class="text-danger">*</span></label>
                            <select v-model="formData.service" class="form-select" required>
                                <option value="">Select a service</option>
                                <option value="Software Development">Software Development</option>
                                <option value="Data Analytics">Data Analytics</option>
                                <option value="Graphics Designing">Graphics Designing</option>
                                <option value="IT Strategy & Consulting">IT Strategy & Consulting</option>
                                <option value="Cyber Security Solution">Cyber Security Solution</option>
                                <option value="Education & Training">Education & Training</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Message <span class="text-danger">*</span></label>
                            <textarea v-model="formData.message" class="form-control" rows="4" placeholder="Tell us about your project" required></textarea>
                        </div>
                        <div class="d-flex justify-content-end gap-2">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="submit" class="btn btn-primary" :disabled="loading">
                                <span v-if="loading" class="spinner-border spinner-border-sm me-2"></span>
                                <span v-else>Submit Quote Request</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { Modal } from 'bootstrap';
import api from '../services/api';

const formData = ref({
    name: '',
    email: '',
    service: '',
    message: ''
});

const status = ref({
    success: '',
    error: ''
});

const loading = ref(false);
let quoteModal = null;

const submitQuoteForm = async () => {
    status.value = { success: '', error: '' };
    loading.value = true;

    try {
        const response = await api.post('/quote', {
            name: formData.value.name,
            email: formData.value.email,
            service: formData.value.service,
            message: formData.value.message
        });

        status.value.success = response.data.message || 'Your quote request has been sent successfully!';
        
        // Reset form after 2 seconds
        setTimeout(() => {
            formData.value = { name: '', email: '', service: '', message: '' };
            if (quoteModal) {
                quoteModal.hide();
            }
        }, 2000);
    } catch (error) {
        console.error('Quote form error:', error);
        if (error.response?.data?.errors) {
            status.value.error = Object.values(error.response.data.errors).flat().join(' ');
        } else {
            status.value.error = error.response?.data?.message || 'Failed to submit quote request. Please try again.';
        }
    } finally {
        loading.value = false;
    }
};

onMounted(() => {
    const modalElement = document.getElementById('quoteModal');
    if (modalElement) {
        quoteModal = new Modal(modalElement);
        
        // Reset form when modal is hidden
        modalElement.addEventListener('hidden.bs.modal', () => {
            status.value = { success: '', error: '' };
            formData.value = { name: '', email: '', service: '', message: '' };
        });
    }
});

onUnmounted(() => {
    if (quoteModal) {
        quoteModal.dispose();
    }
});

// Expose method to open modal from parent
defineExpose({
    show: () => {
        if (quoteModal) {
            quoteModal.show();
        }
    }
});
</script>

<style scoped>
.modal-header {
    border-bottom: 1px solid #e9ecef;
    padding: 1.25rem 1.5rem;
}

.modal-body {
    padding: 1.5rem;
}
</style>



