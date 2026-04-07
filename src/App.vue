<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script setup>
import { computed, onMounted, watch, onBeforeUnmount, nextTick } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import MainLayout from './layouts/MainLayout.vue';
import AuthLayout from './layouts/AuthLayout.vue';
import InsightLayout from './layouts/InsightLayout.vue';
import GuestDashboardLayout from './layouts/GuestDashboardLayout.vue';
import { useAuth } from './composables/useAuth';

const route = useRoute();
const router = useRouter();
const { getUser, logout, isAuthenticated } = useAuth(); // Add isAuthenticated

const layouts = {
  MainLayout,
  AuthLayout,
  InsightLayout,
  GuestDashboardLayout,
};

const layout = computed(() => {
  return layouts[route.meta.layout] || MainLayout;
});

// Inactivity Logout Logic
let inactivityTimer;

const resetInactivityTimer = () => {
  clearTimeout(inactivityTimer);

  // Only start the timer if the user is logged in
  if (isAuthenticated.value) { 
    inactivityTimer = setTimeout(() => {
        logout();
        router.push({ name: 'Login', query: { inactive: 'true' } });
    }, 30 * 60 * 1000); // 30 minutes
  }
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

const handleAssetLoading = (path) => {
    // Load main dashboard assets only for /dashboard routes, excluding /guest dashboard
    if (path.startsWith('/dashboard') && !path.startsWith('/guest')) {
        addDashboardAssets();
    } else {
        removeDashboardAssets();
    }
};

// Force any data-anime elements that are still invisible to become visible
const forceAnimeVisible = () => {
  document.querySelectorAll('[data-anime]').forEach((el) => {
    const makeVisible = (node) => {
      if (getComputedStyle(node).opacity === '0') {
        node.style.opacity = '1';
        node.style.transform = 'none';
        node.style.filter = 'none';
      }
    };
    makeVisible(el);
    el.querySelectorAll('*').forEach(makeVisible);
  });
};

// Re-trigger the template's animation library after Vue renders new route content.
// main.js is a deferred script — it runs AFTER Vue mounts and sets data-anime
// elements to opacity:0. We dispatch scroll events at increasing intervals to
// wake IntersectionObservers, then force-show anything still invisible at 2s.
const triggerAnimationReinit = () => {
  nextTick(() => {
    // Give main.js time to load and set up observers, then trigger scroll
    [200, 500, 900].forEach((ms) => setTimeout(() => {
      window.dispatchEvent(new Event('scroll'));
    }, ms));

    // Hard fallback — if anything is still invisible after 2s, force it visible
    setTimeout(forceAnimeVisible, 2000);
  });
};

onMounted(() => {
  getUser();
  handleAssetLoading(route.path);
  setupInactivityListeners();
  resetInactivityTimer();
  triggerAnimationReinit();
});

watch(() => route.path, (newPath) => {
  handleAssetLoading(newPath);
  triggerAnimationReinit();
});

onBeforeUnmount(() => {
  removeDashboardAssets();
  removeInactivityListeners();
});
</script>