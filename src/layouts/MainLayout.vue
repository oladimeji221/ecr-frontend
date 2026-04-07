<template>
  <div id="app" class="no-animation">
    <Header />
    <router-view :key="$route.fullPath"/>
    <Footer />
    <QuoteForm ref="quoteFormRef" />

    <!-- Floating WhatsApp Button -->
    <a href="https://wa.me/2348105568468" target="_blank" class="whatsapp-float" title="Chat with us on WhatsApp">
      <i class="fab fa-whatsapp"></i>
    </a>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import QuoteForm from '../components/QuoteForm.vue'

const quoteFormRef = ref(null);

// Make quote form accessible globally
if (typeof window !== 'undefined') {
  window.openQuoteForm = () => {
    if (quoteFormRef.value) {
      quoteFormRef.value.show();
    }
  };
}
</script>

<style scoped>
@keyframes pulse-whatsapp {
  0%   { transform: scale(1);    box-shadow: 0 0 0 0   rgba(37, 211, 102, 0.7); }
  70%  { transform: scale(1.05); box-shadow: 0 0 0 10px rgba(37, 211, 102, 0);   }
  100% { transform: scale(1);    box-shadow: 0 0 0 0   rgba(37, 211, 102, 0);   }
}

.whatsapp-float {
  position: fixed;
  bottom: 20px;
  left: 20px;
  z-index: 1000;
  background-color: #25d366;
  color: white;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  text-decoration: none;
  animation: pulse-whatsapp 2s infinite;
  transition: all 0.3s ease;
}

.whatsapp-float:hover {
  transform: scale(1.1);
}
</style>
