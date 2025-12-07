<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script setup>
import { computed, onMounted, watch, onBeforeUnmount } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import MainLayout from './layouts/MainLayout.vue';
import AuthLayout from './layouts/AuthLayout.vue';
import { useAuth } from './composables/useAuth';

const route = useRoute();
const router = useRouter();
const { getUser, logout } = useAuth();

import InsightLayout from './layouts/InsightLayout.vue';

const layouts = {
  MainLayout,
  AuthLayout,
  InsightLayout,
};

const layout = computed(() => {
  return layouts[route.meta.layout] || MainLayout;
});

// Inactivity Logout Logic
let inactivityTimer;

const resetInactivityTimer = () => {
  clearTimeout(inactivityTimer);
  inactivityTimer = setTimeout(() => {
    logout();
    router.push({ name: 'Login', query: { inactive: 'true' } });
  }, 30 * 60 * 1000); // 30 minutes
};

const setupInactivityListeners = () => {
  window.addEventListener('mousemove', resetInactivityTimer);
  window.addEventListener('mousedown', resetInactivityTimer);
  window.addEventListener('keypress', resetInactivityTimer);
  window.addEventListener('scroll', resetInactivityTimer);
};

const removeInactivityListeners = () => {
  window.removeEventListener('mousemove', resetInactivityTimer);
  window.removeEventListener('mousedown', resetInactivityTimer);
  window.removeEventListener('keypress', resetInactivityTimer);
  window.removeEventListener('scroll', resetInactivityTimer);
  clearTimeout(inactivityTimer);
};

function ensureLink(id, href) {
  if (!document.getElementById(id)) {
    const link = document.createElement('link');
    link.id = id;
    link.rel = 'stylesheet';
    link.href = href;
    document.head.appendChild(link);
  }
}

function ensureScript(id, src) {
  if (!document.getElementById(id)) {
    const s = document.createElement('script');
    s.id = id;
    s.src = src;
    s.defer = true;
    document.body.appendChild(s);
  }
}

function removeEl(id) {
  const el = document.getElementById(id);
  if (el) el.remove();
}

function addDashboardAssets() {
  ensureLink('dashboard-css-app', '/css/app.min.css');
  ensureScript('dashboard-main-js', '/js/main.js');
}

function removeDashboardAssets() {
  removeEl('dashboard-css-app');
  removeEl('dashboard-main-js');
}

onMounted(() => {
  getUser();
  if (route.path.startsWith('/dashboard')) addDashboardAssets();
  setupInactivityListeners();
  resetInactivityTimer();
});

watch(() => route.path, (p) => {
  if (p.startsWith('/dashboard')) addDashboardAssets();
  else removeDashboardAssets();
});

onBeforeUnmount(() => {
  removeDashboardAssets();
  removeInactivityListeners();
});
</script>