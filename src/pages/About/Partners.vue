<template>
  <div class="container py-5">
    <h1 class="text-center">Partners</h1>
    <p class="text-center">Our trusted partners.</p>
  </div>
</template>

<script setup>
import { useSeo, orgSchema } from '@/composables/useSeo';
useSeo({
  title: 'Our Partners - Technology Alliances',
  description: 'ECR Technology Services partners with leading global technology brands including Microsoft, AuraQuantic, Learn365, and SharePoint to deliver world-class digital solutions.',
  url: 'https://www.ecr-ts.com/about/partners',
  schema: { '@context': 'https://schema.org', '@type': 'WebPage', name: 'Partners - ECR Technology Services', url: 'https://www.ecr-ts.com/about/partners', about: orgSchema }
});
</script>
