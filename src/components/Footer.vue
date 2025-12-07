<template>
    <div v-if="showNewsletterPopup" id="subscribe-popup" class="container subscribe-popup contact-form-style-01 position-fixed text-center xs-p-0">
        <!-- start contact form -->
        <div class="row g-0 position-relative">
            <div class="col-lg-12">
                <div class="p-14 xl-p-11 bg-white">
                    <span class="mb-5px d-block text-dark-gray">Subscribe to our newsletter</span>
                    <h3 class="d-inline-block alt-font fw-600 text-dark-gray mb-8 ls-minus-1px">Stay Updated</h3>
                    <form @submit.prevent="subscribe">
                        <div class="position-relative form-group mb-15px">
                            <span class="form-icon"><i class="bi bi-person text-dark-gray"></i></span>
                            <input type="text" v-model="formData.firstname" name="firstname" class="form-control text-dark required" placeholder="Enter your first name*" />
                        </div>
                        <div class="position-relative form-group mb-15px">
                            <span class="form-icon"><i class="bi bi-person text-dark-gray"></i></span>
                            <input type="text" v-model="formData.lastname" name="lastname" class="form-control text-dark required" placeholder="Enter your last name*" />
                        </div>
                        <div class="position-relative form-group mb-15px">
                            <span class="form-icon"><i class="bi bi-envelope text-dark-gray"></i></span>
                            <input type="email" v-model="formData.email" name="email" class="form-control text-dark required" placeholder="Enter your email*" />
                        </div>
                        <div class="position-relative form-group form-textarea">
                            <button class="btn btn-medium btn-box-shadow btn-round-edge w-100 btn-base-color submit mt-15px text-white" type="submit">Subscribe</button>
                            <div class="form-results mt-20px d-none"></div>
                        </div>
                    </form>
                    <label for="newsletter-off" class="fs-15 mt-15px text-dark-gray">
                        <input class="w-auto me-10px position-relative top-1px p-0" type="checkbox" v-model="dontShowAgain" id="newsletter-off" name="newsletter-off">
                        Don't show this popup again
                    </label>
                </div>
            </div>
            <button title="Close (Esc)" type="button" @click="closePopup" class="mfp-close text-dark-gray"></button>
        </div>
        <!-- end contact form -->
    </div>
  <footer class="p-0 bg-gradient-blue-ironstone-brown mb-0">
      <div class="pt-40px pb-40px border-bottom border-color-transparent-white-light">
          <div class="container">
              <div class="row">
                  <div class="col-12 text-center">
                      <h6 class="text-white mb-0 alt-font">Let's start a project together. <router-link to="/contact" class="text-white text-decoration-line-bottom-medium d-inline-block">Get in touch</router-link><i class="bi bi-arrow-right align-middle icon-extra-medium ms-10px"></i></h6>
                  </div>
              </div>
          </div>
      </div>
      <div class="container">
          <div class="row justify-content-center pt-55px pb-55px sm-pt-40px sm-pb-40px">
              <!-- start footer column -->
              <div class="col-lg-3 col-md-12 col-sm-6 last-paragraph-no-margin text-center text-sm-start text-md-center text-lg-start md-mb-30px">
                  <router-link to="/" class="footer-logo d-inline-block"><img :src="'/images/logo.png'" :data-at2x="'/images/logo.png'" alt=""></router-link>
              </div>
              <!-- end footer column -->
              <!-- start footer column -->
              <div class="col-lg-3 col-md-4 col-sm-6 sm-mb-30px last-paragraph-no-margin text-center text-sm-start">
                  <span class="d-block text-base-color fs-15 ls-1px mb-5px text-uppercase fw-600">Umuahia Office</span>
                  <p class="lh-30 w-80 text-white lg-w-100">51 Macaulay Street, By Ikot Ekpene Road, Umuahia Abia State, Nigeria</p>
              </div>
              <!-- end footer column -->  
              <!-- start footer column -->
              <div class="col-lg-3 col-md-4 col-sm-6 xs-mb-30px last-paragraph-no-margin text-center text-sm-start">
                  <span class="d-block text-base-color fs-15 ls-1px mb-5px text-uppercase fw-600">UK Office</span>
                  <p class="lh-30 w-80 text-white lg-w-100">ECR Technology Services 18 Burrswood Avenue Bury Lancs, BL9 5HW United Kingdom </p>
              </div>
              <!-- start footer column -->
              <div class="col-lg-3 col-md-4 col-sm-6 last-paragraph-no-margin text-center text-sm-start">
                <span class="d-block text-base-color fs-15 ls-1px mb-5px text-uppercase fw-600">Need support?</span>
                  <a href="tel:01616696279" class="text-white lh-30">0161-669-6279</a><br>
                  <a href="tel:+2348105568468" class="text-white lh-30">+234 (0) 810 556 8468</a><br>
                  <a href="mailto:info@ecr-ts.com" class="text-white">info@ecr-ts.com</a>

                  <span class="d-block text-base-color fs-15 ls-1px mb-10px text-uppercase fw-600 mt-20px">Connect with us</span>
                  <div class="elements-social social-icon-style-09">
                      <ul class="medium-icon light">
                          <li><a class="facebook" href="#" target="_blank"><i class="fa-brands fa-facebook-f"></i><span></span></a></li>
                          <li><a class="instagram" href="#" target="_blank"><i class="fa-brands fa-instagram"></i><span></span></a></li>
                          <li><a class="twitter" href="#" target="_blank"><i class="fa-brands fa-twitter"></i><span></span></a></li>  
                      </ul>
                  </div>
              </div>
              <!-- end footer column -->
          </div>
          </div>
      <div class="pt-20px pb-20px border-top border-color-transparent-white-light">
          <div class="container"> 
              <div class="row align-items-center"> 
                  <div class="col-xxl-8 col-lg-7 text-center text-lg-start md-mb-10px">
                      <ul class="footer-navbar fs-16"> 
                          <li class="nav-item"><router-link to="/" class="nav-link">Home</router-link></li>
                          <li class="nav-item"><router-link to="/services" class="nav-link">Services</router-link></li>
                          <li class="nav-item"><router-link to="/product" class="nav-link">Our Products</router-link></li>
                          <li class="nav-item"><router-link to="/insights" class="nav-link">Insights</router-link></li>
                          <li class="nav-item"><a href="https://ecracademy.com" class="nav-link">ECR Academy</a></li>
                          <li class="nav-item"><router-link to="/about" class="nav-link">About Us</router-link></li>
                        <li class="nav-item"><router-link to="/contact" class="nav-link">Contact Us</router-link></li>

                      </ul>
                  </div> 
                  <div class="col-xxl-4 col-lg-5 fs-16 last-paragraph-no-margin text-white text-center text-lg-start">
                      <p>&copy; 2025 ECR Technology Services</p>
                  </div> 
              </div> 
          </div>
      </div>
  </footer>

  <!-- Custom Alert Toast -->
  <transition name="alert-fade">
    <div v-if="alertMessage" :class="['custom-alert', alertType]" @click="closeAlert">
      <div class="alert-content">
        <i :class="alertType === 'success' ? 'bi bi-check-circle-fill' : 'bi bi-exclamation-circle-fill'"></i>
        <span>{{ alertMessage }}</span>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import api from '../services/api';

const showNewsletterPopup = ref(false);
const dontShowAgain = ref(false);
const formData = ref({
    firstname: '',
    lastname: '',
    email: '',
});

// Custom alert system
const alertMessage = ref('');
const alertType = ref('success'); // 'success' or 'error'
let alertTimeout = null;

const showAlert = (message, type = 'success') => {
    alertMessage.value = message;
    alertType.value = type;
    
    // Clear existing timeout
    if (alertTimeout) {
        clearTimeout(alertTimeout);
    }
    
    // Auto-dismiss after 4 seconds
    alertTimeout = setTimeout(() => {
        closeAlert();
    }, 4000);
};

const closeAlert = () => {
    alertMessage.value = '';
    if (alertTimeout) {
        clearTimeout(alertTimeout);
        alertTimeout = null;
    }
};

onMounted(() => {
    // Check if popup has been shown in this session
    const hasShownInSession = sessionStorage.getItem('newsletterPopupShown') === 'true';
    // Check if user permanently disabled it
    const permanentlyHidden = localStorage.getItem('hideNewsletterPopup') === 'true';
    
    if (!hasShownInSession && !permanentlyHidden) {
        setTimeout(() => {
            showNewsletterPopup.value = true;
            // Mark as shown in this session
            sessionStorage.setItem('newsletterPopupShown', 'true');
        }, 300000); // 5 minutes
    }
});

const closePopup = () => {
    if (dontShowAgain.value) {
        // Permanently hide across all sessions
        localStorage.setItem('hideNewsletterPopup', 'true');
    }
    // Mark as shown in this session (even if they just close it)
    sessionStorage.setItem('newsletterPopupShown', 'true');
    showNewsletterPopup.value = false;
};

const subscribe = async () => {
    try {
        const response = await api.post('/newsletter-subscriptions', formData.value);
        console.log('Subscription successful:', response.data);
        showAlert('Thank you for subscribing!', 'success');
        closePopup();
        formData.value = { firstname: '', lastname: '', email: '' }; // Reset form
    } catch (error) {
        console.error('Subscription failed:', error.response?.data || error.message);
        const errorMsg = error.response?.data?.message || 'Subscription failed. Please try again or check your email if already subscribed.';
        showAlert(errorMsg, 'error');
        if (error.response?.status === 422) {
            // Handle validation errors, e.g., show specific messages
            console.error('Validation errors:', error.response.data.errors);
        }
    }
};
</script>

<style scoped>
#subscribe-popup {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1050; /* High z-index to be on top */
    background: rgba(0,0,0,0.8); /* Darker background for more contrast */
    padding: 20px;
    border-radius: 8px;
    width: 90%;
    max-width: 500px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.3);
    color: white; /* Text color for the popup */
}
#subscribe-popup .mfp-close {
    position: absolute;
    top: 10px;
    right: 10px;
    color: white;
}
#subscribe-popup .form-control {
    background-color: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.3);
    color: white;
}

/* Custom Alert Toast Styles */
.custom-alert {
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 1060;
    min-width: 300px;
    max-width: 500px;
    padding: 16px 20px;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    cursor: pointer;
    animation: slideInRight 0.3s ease-out;
}

.custom-alert.success {
    background-color: #10b981;
    color: white;
}

.custom-alert.error {
    background-color: #ef4444;
    color: white;
}

.alert-content {
    display: flex;
    align-items: center;
    gap: 12px;
}

.alert-content i {
    font-size: 20px;
    flex-shrink: 0;
}

.alert-content span {
    flex: 1;
    font-size: 14px;
    font-weight: 500;
    line-height: 1.5;
}

/* Alert animations */
.alert-fade-enter-active,
.alert-fade-leave-active {
    transition: opacity 0.3s ease, transform 0.3s ease;
}

.alert-fade-enter-from {
    opacity: 0;
    transform: translateX(100%);
}

.alert-fade-leave-to {
    opacity: 0;
    transform: translateX(100%);
}

@keyframes slideInRight {
    from {
        transform: translateX(100%);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
}
</style>
