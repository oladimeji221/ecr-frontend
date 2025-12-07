<template>
   <!-- start page title -->
        <section class="page-title-separate-breadcrumbs bg-base-color bg-sliding-line-dark-gray  ipad-top-space-margin">
            <div class="container position-relative">
                <div class="row justify-content-center align-items-lg-end extra-very-small-screen" data-anime='{ "el": "childs", "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'>
                    <div class="col-lg-6 position-relative page-title-extra-large md-mb-30px sm-mb-20px z-index-9">
                        <h1 class="text-light fw-600 ls-minus-4px mb-0 alt-font highlight-separator-small"><span class="highlight-separator mb-0 pb-0" data-shadow-animation="true" data-animation-delay="500">Book Appointment<span></span></span></h1>
                    </div>
                    <div class="col-lg-6">
                        <h2 class="fs-40 lh-32 text-light opacity-9 w-90 lg-w-100 md-w-80 sm-w-100 mb-0">We are a call away from you</h2>
                    </div>
                </div>
            </div>
        </section>
        <!-- end page title -->

          <!-- start section -->
        <section class="position-relative z-index-1 pb-0 mb-5">
            <div class="container mb-5">
                <div class="row justify-content-center align-items-center">
                    <div class="col-lg-6 pb-7 sm-pb-40px" data-anime='{ "el": "childs", "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay": 100, "staggervalue": 300, "easing": "easeOutQuad" }'>
                        <span class="fs-16 text-uppercase text-gradient-san-blue-new-york-red fw-700 mb-10px ls-1px d-inline-block">Book your appointment</span>
                        <h2 class="alt-font fw-400 text-dark-gray ls-minus-1px w-80 lg-w-100 mb-40px sm-mb-30px">We would love to hear from you.</h2>
                        <div class="row row-cols-1 row-cols-sm-2 mb-30px xs-mb-25px">
                            <div class="col last-paragraph-no-margin xs-mb-25px">
                                <span class="fs-18 fw-600 text-dark-gray">Visit Us</span>
                                <div class="h-1px w-80 sm-w-100 bg-dark-gray mt-10px mb-10px"></div>
                                <p class="w-75 lg-w-90">ECR Technology Services 51 Macaulay Street, By Ikot Ekpene Road Umuahia Abia State, Nigeria</p>
                            </div>
                            <div class="col">
                                <span class="fs-18 fw-600 text-dark-gray">Book Appointment</span>
                                <div class="h-1px w-80 sm-w-100 bg-dark-gray mt-10px mb-10px"></div>
                                <div class="w-100 d-block">
                                    <a href="mailto:info@ecr-ts.com"><span>info@ecr-ts.com</span></a>
                                </div>
                            </div>
                        </div>
                        <div class="row row-cols-1 row-cols-sm-2">
                            <div class="col last-paragraph-no-margin xs-mb-25px">
                                <span class="fs-18 fw-600 text-dark-gray">Talk with us</span>
                                <div class="h-1px w-80 sm-w-100 bg-dark-gray mt-10px mb-10px"></div>
                                <div class="w-100 d-block">
                                    <span class="d-block"><span class="fw-600 text-dark-gray">Nigeria:</span><a href="tel:+2348105568468" class="text-dark-gray-hover"> +234 810 556 8468</a></span>
                                    <span class="d-block"><span class="fw-600 text-dark-gray">UK:</span><a href="tel:+4401616696279" class="text-dark-gray-hover"> +44 0161-669-6279</a></span>
                                </div>
                            </div>
                            <div class="col">
                                <span class="fs-18 fw-600 text-dark-gray">Opening hours</span>
                                <div class="h-1px w-80 sm-w-100 bg-dark-gray mt-10px mb-10px"></div>
                                <div class="w-100 d-block">
                                    <span class="d-block"><span class="fw-600 text-dark-gray">Mon - Fri:</span> 09 am to 05 pm</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-5 offset-lg-1 align-self-end contact-form-style-03 sm-mb-50px">
                        <div class="bg-dark-gray box-shadow-double-large p-13 lg-p-10 border-radius-10px position-relative overflow-hidden">
                            <h2 class="alt-font text-white xs-mb-15px fancy-text-style-4 ls-minus-1px">Book an Appointment
                                                            </h2>
                                                            <form @submit.prevent="submitAppointmentForm">
                                <div v-if="status.success" class="alert alert-success mb-20px">{{ status.success }}</div>
                                <div v-if="status.error" class="alert alert-danger mb-20px">{{ status.error }}</div>

                                <div class="position-relative form-group mb-20px">
                                    <span class="form-icon"><i class="bi bi-person icon-extra-medium"></i></span>
                                    <input v-model="formData.name" class="ps-0 border-radius-0px fs-17 bg-transparent border-color-transparent-white-light placeholder-medium-gray form-control required" type="text" name="name" placeholder="Enter your name*" required>
                                </div>
                                <div class="position-relative form-group mb-20px">
                                    <span class="form-icon"><i class="bi bi-envelope icon-extra-medium"></i></span>
                                    <input v-model="formData.email" class="ps-0 border-radius-0px fs-17 bg-transparent border-color-transparent-white-light placeholder-medium-gray form-control required" type="email" name="email" placeholder="Enter your email address*" required>
                                </div>
                                <div class="position-relative form-group mb-20px">
                                    <span class="form-icon"><i class="bi bi-calendar-date icon-extra-medium"></i></span>
                                    <input v-model="formData.date" class="ps-0 border-radius-0px fs-17 bg-transparent border-color-transparent-white-light placeholder-medium-gray form-control required" type="date" name="date" placeholder="Select a date*" required>
                                </div>
                                <div class="position-relative form-group mb-20px">
                                    <span class="form-icon"><i class="bi bi-clock icon-extra-medium"></i></span>
                                    <input v-model="formData.time" class="ps-0 border-radius-0px fs-17 bg-transparent border-color-transparent-white-light placeholder-medium-gray form-control required" type="time" name="time" placeholder="Select a time*" required>
                                </div>
                                <div class="position-relative form-group form-textarea mt-15px mb-12">
                                    <textarea v-model="formData.message" class="ps-0 border-radius-0px fs-17 bg-transparent border-color-transparent-white-light placeholder-medium-gray form-control" name="message" placeholder="Enter your message" rows="4" required></textarea>
                                    <span class="form-icon"><i class="bi bi-chat-square-dots icon-extra-medium"></i></span>
                                    <button class="btn btn-medium btn-white btn-box-shadow mt-30px fw-700 submit btn-round-edge" type="submit" :disabled="loading">
                                        <span v-if="loading" class="spinner-border spinner-border-sm me-2"></span>
                                        <span v-else>Book Now</span>
                                    </button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- end section -->

</template>

<script setup>
import { ref } from 'vue';
import api from '../services/api';

const formData = ref({
    name: '',
    email: '',
    date: '',
    time: '',
    message: ''
});

const status = ref({
    success: '',
    error: ''
});

const loading = ref(false);

const submitAppointmentForm = async () => {
    // Validate required fields
    if (!formData.value.name || !formData.value.email || !formData.value.date || !formData.value.time || !formData.value.message) {
        status.value.error = 'Please fill in all required fields.';
        return;
    }

    status.value = { success: '', error: '' };
    loading.value = true;

    try {
        const payload = {
            name: formData.value.name,
            email: formData.value.email,
            date: formData.value.date,
            time: formData.value.time,
            message: formData.value.message
        };

        const response = await api.post('/appointment', payload);

        status.value.success = response.data.message || 'Your appointment has been booked successfully!';
        formData.value = { name: '', email: '', date: '', time: '', message: '' };
    } catch (error) {
        console.error('Appointment form error:', error);
        console.error('Error response:', error.response);
        console.error('Error status:', error.response?.status);

        if (error.response?.status === 422) {
            status.value.error = Object.values(error.response.data.errors).flat().join(' ');
        } else if (error.response?.data?.message) {
            status.value.error = error.response.data.message;
        } else if (error.message) {
            status.value.error = error.message;
        } else {
            status.value.error = 'Failed to book appointment. Please check your connection and try again.';
        }
    } finally {
        loading.value = false;
    }
};
</script>

<style scoped>
</style>

