<template>
  <div class="container py-5">
    <h1 class="text-center">Careers</h1>
    <p class="text-center">Join our team.</p>
  </div>
</template>

<script setup>
import { useSeo } from '@/composables/useSeo';
useSeo({
  title: 'Careers - Join Our Team',
  description: 'Explore career opportunities at ECR Technology Services. Join a dynamic team of ICT professionals committed to delivering cutting-edge digital solutions across Nigeria and beyond.',
  url: 'https://www.ecr-ts.com/about/careers',
  schema: { '@context': 'https://schema.org', '@type': 'WebPage', name: 'Careers at ECR Technology Services', url: 'https://www.ecr-ts.com/about/careers' }
});
</script>
