<template>
  <div id="app" class="no-animation">
    <Header />
    <router-view :key="$route.fullPath"/>
    <Footer />
    <QuoteForm ref="quoteFormRef" />
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
</style>
