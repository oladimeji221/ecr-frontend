<template>
  <div id="app" class="no-animation insight-layout">
    <InsightHeader />
    <router-view :key="$route.fullPath"/>
    <Footer />
    <QuoteForm ref="quoteFormRef" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import InsightHeader from '../components/InsightHeader.vue'
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
.insight-layout {
  /* Custom layout styles for insights pages */
  /* You can add global styles that apply to all insights pages here */
  overflow-x: hidden; /* Prevent horizontal scroll */
}

/* Ensure router-view allows overflow for overlap sections */
.insight-layout :deep(> *),
.insight-layout :deep(router-view) {
  overflow: visible;
}

/* Example: Custom background or spacing for insights pages */
.insight-layout :deep(main) {
  /* Add any custom main content styling */
  overflow: visible;
}
</style>

