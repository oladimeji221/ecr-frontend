<script setup>
import { ref, onMounted } from 'vue';
import TiptapEditor from '../../components/TiptapEditor.vue';
import api from '../../services/api';

const formData = ref({
  subject: '',
  content: '',
  image: '',
});

const loading = ref(false);
const successMessage = ref('');
const errorMessage = ref('');
const subscriberCount = ref(0);
const imageError = ref(false);

const fetchSubscriberCount = async () => {
  try {
    const response = await api.get('/newsletter/subscriber-count');
    subscriberCount.value = response.data.count || 0;
  } catch (error) {
    console.error('Failed to fetch subscriber count:', error);
    subscriberCount.value = 0;
  }
};

const sendNewsletter = async () => {
  if (!formData.value.subject || !formData.value.content) {
    errorMessage.value = 'Please fill in all required fields.';
    return;
  }

  loading.value = true;
  successMessage.value = '';
  errorMessage.value = '';

  try {
    const response = await api.post('/newsletter/send', {
      subject: formData.value.subject,
      content: formData.value.content,
      image: formData.value.image || null,
    });

    successMessage.value = response.data.message || 'Newsletter is being sent to all subscribers!';
    
    // Reset form after successful submission
    formData.value = {
      subject: '',
      content: '',
      image: '',
    };
    imageError.value = false;
  } catch (error) {
    console.error('Failed to send newsletter:', error);
    if (error.response?.status === 403) {
      errorMessage.value = 'You do not have permission to send newsletters. Only admins can send newsletters.';
    } else if (error.response?.data?.errors) {
      errorMessage.value = Object.values(error.response.data.errors).flat().join(' ');
    } else {
      errorMessage.value = error.response?.data?.message || 'Failed to send newsletter. Please try again.';
    }
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  fetchSubscriberCount();
});
</script>

<template>
    <!-- start page title -->
    <section class="page-title-separate-breadcrumbs bg-base-color bg-sliding-line-dark-gray ipad-top-space-margin">
        <div class="container position-relative">
            <div class="row justify-content-center align-items-lg-end extra-very-small-screen" data-anime='{ "el": "childs", "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'>
                <div class="col-lg-6 position-relative page-title-extra-large md-mb-30px sm-mb-20px z-index-9">
                    <h1 class="text-light fw-600 ls-minus-4px mb-0 alt-font highlight-separator-small"><span class="highlight-separator mb-0 pb-0" data-shadow-animation="true" data-animation-delay="500">Newsletter<span></span></span></h1>
                </div>
            </div>
        </div>
    </section>
    <!-- end page title -->

    <div class="content-page ml-0">
        <div class="content">
            <div class="container-xl">
                <div class="row justify-content-center">
                    <div class="col-12 col-lg-8">
                        <div class="card">
                            <div class="card-body">
                                <h1 class="text-center mb-30px">Send Newsletter to all Suscribers</h1>
                                <form @submit.prevent="sendNewsletter">
                                    <!-- Subject -->
                                    <div class="mb-3">
                                        <label for="subject" class="form-label">Subject *</label>
                                        <input type="text" id="subject" class="form-control" v-model="formData.subject" required />
                                    </div>

                                    <!-- Image URL -->
                                    <div class="mb-3">
                                        <label for="imageUrl" class="form-label">Image URL (Optional)</label>
                                        <input type="url" id="imageUrl" class="form-control" v-model="formData.image" placeholder="https://example.com/image.jpg" />
                                    </div>

                                    <!-- Preview Image -->
                                    <div v-if="formData.image" class="mb-3">
                                        <label class="form-label">Image Preview:</label>
                                        <div class="mt-2">
                                            <img :src="formData.image" alt="Preview" class="img-fluid rounded" style="max-height: 200px; width: auto;" @error="imageError = true" />
                                            <div v-if="imageError" class="text-danger mt-2">
                                                Invalid image URL or image cannot be loaded.
                                            </div>
                                        </div>
                                    </div>

                                    <!-- Content Editor -->
                                    <div class="mb-3">
                                        <label class="form-label">Content *</label>
                                        <TiptapEditor v-model="formData.content" :placeholder="'Enter your newsletter content here...'" />
                                    </div>

                                    <!-- Preview Section -->
                                    <div v-if="formData.content" class="my-4">
                                        <h6 class="mb-3">Preview:</h6>
                                        <div class="border rounded p-3 bg-light">
                                            <div v-html="formData.content"></div>
                                        </div>
                                    </div>

                                    <!-- Subscriber Count -->
                                    <div class="alert alert-info my-3" v-if="subscriberCount > 0">
                                        <i class="fas fa-users me-2"></i>
                                        This newsletter will be sent to <strong>{{ subscriberCount }}</strong> subscriber(s).
                                    </div>

                                    <!-- Success/Error Messages -->
                                    <div v-if="successMessage" class="alert alert-success">{{ successMessage }}</div>
                                    <div v-if="errorMessage" class="alert alert-danger">{{ errorMessage }}</div>


                                    <!-- Submit Button -->
                                    <div class="text-center">
                                        <button type="submit" class="btn btn-submit" :disabled="loading || !formData.subject || !formData.content">
                                            <span v-if="loading" class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                            {{ loading ? 'Sending...' : 'Send Newsletter' }}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.card {
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    border: none;
}
.btn-submit {
    background-color:#232323 ;
    border-color: #232323;
}
.btn-submit:hover {
    background-color: white;
    border-color: white;
    color: black;
}
.btn:disabled {
    opacity: 0.6;
    cursor: not-allowed;
}
</style>
