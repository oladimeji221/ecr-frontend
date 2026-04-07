<template>
  <div class="container py-5">
    <h1 class="text-center">Our Team</h1>
    <p class="text-center">Meet the people behind our success.</p>
  </div>
</template>

<script setup>
import { useSeo } from '@/composables/useSeo';
useSeo({
  title: 'Our Team - Meet the People Behind ECR',
  description: 'Meet the experienced professionals at ECR Technology Services driving digital transformation and ICT excellence across Nigeria and the UK.',
  url: 'https://www.ecr-ts.com/about/our-teams',
  schema: { '@context': 'https://schema.org', '@type': 'WebPage', name: 'Our Team - ECR Technology Services', url: 'https://www.ecr-ts.com/about/our-teams' }
});
</script>
