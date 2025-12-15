<template>
  <div id="guest-dashboard-layout">
    <slot />
  </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount } from 'vue';

// --- Duralux Theme Assets ---
const guestAssets = {
  css: [
    { id: 'duralux-css-1', href: '/guest/assets/css/bootstrap.min.css' },
    { id: 'duralux-css-2', href: '/guest/assets/vendors/css/vendors.min.css' },
    { id: 'duralux-css-3', href: '/guest/assets/vendors/css/daterangepicker.min.css' },
    { id: 'duralux-css-4', href: '/guest/assets/css/theme.min.css' },

    { id: 'font-awesome', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css' }
  ],
  js: [
    { id: 'jquery', src: 'https://code.jquery.com/jquery-3.6.0.min.js' },
    { id: 'duralux-js-1', src: '/guest/assets/vendors/js/vendors.min.js' },
    { id: 'duralux-js-2', src: '/guest/assets/vendors/js/daterangepicker.min.js' },
    { id: 'duralux-js-3', src: '/guest/assets/vendors/js/apexcharts.min.js' },
    { id: 'duralux-js-4', src: '/guest/assets/vendors/js/circle-progress.min.js' },
    { id: 'duralux-js-5', src: '/guest/assets/js/common-init.min.js' },
    { id: 'duralux-js-6', src: '/guest/assets/js/dashboard-init.min.js' },
    { id: 'duralux-js-7', src: '/guest/assets/js/theme-customizer-init.min.js' }
  ]
};

const loadScript = (js) => {
  return new Promise((resolve, reject) => {
    if (!document.getElementById(js.id)) {
      const script = document.createElement('script');
      script.id = js.id;
      script.src = js.src;
      script.async = false;
      script.onload = () => {
        if (js.id === 'jquery') {
          window.jQuery = window.$;
        }
        resolve();
      };
      script.onerror = reject;
      document.body.appendChild(script);
    } else {
      resolve();
    }
  });
};

const loadAssets = async () => {
  // Load CSS files
  guestAssets.css.forEach(css => {
    if (!document.getElementById(css.id)) {
      const link = document.createElement('link');
      link.id = css.id;
      link.rel = 'stylesheet';
      link.href = css.href;
      document.head.appendChild(link);
    }
  });

  // Load JS files sequentially
  for (const js of guestAssets.js) {
    await loadScript(js);
  }
};

const unloadAssets = () => {
  // Remove CSS files
  guestAssets.css.forEach(css => {
    const link = document.getElementById(css.id);
    if (link) {
      link.remove();
    }
  });

  // Remove JS files
  guestAssets.js.forEach(js => {
    const script = document.getElementById(js.id);
    if (script) {
      script.remove();
    }
  });
};

onMounted(() => {
  loadAssets();
});

onBeforeUnmount(() => {
  unloadAssets();
});
</script>

<style>
/* Guest Dashboard Layout Styles */
#guest-dashboard-layout {
  min-height: 100vh;
}

/* Feather to Font Awesome Icon Mapping */
[class*="feather-"] {
  font-family: "Font Awesome 6 Free" !important;
  font-weight: 900 !important;
  font-style: normal !important;
  font-size: inherit;
  line-height: 1;
  display: inline-block;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
}

/* Hide any text content inside icon elements */
[class*="feather-"]::before {
  font-family: "Font Awesome 6 Free" !important;
  font-weight: 900 !important;
}

.feather-airplay::before { content: "\f26c" !important; } /* tv */
.feather-cast::before { content: "\f519" !important; } /* broadcast-tower */
.feather-send::before { content: "\f1d8" !important; } /* paper-plane */
.feather-at-sign::before { content: "\40" !important; } /* @ */
.feather-dollar-sign::before { content: "\24" !important; } /* $ */
.feather-users::before { content: "\f0c0" !important; } /* users */
.feather-alert-circle::before { content: "\f06a" !important; } /* exclamation-circle */
.feather-briefcase::before { content: "\f0b1" !important; } /* briefcase */
.feather-layout::before { content: "\f009" !important; } /* th-large */
.feather-settings::before { content: "\f013" !important; } /* cog */
.feather-power::before { content: "\f011" !important; } /* power-off */
.feather-life-buoy::before { content: "\f1cd" !important; } /* life-ring */
.feather-chevron-right::before { content: "\f054" !important; } /* chevron-right */
.feather-sunrise::before { content: "\f185" !important; } /* sun */
.feather-command::before { content: "\f120" !important; } /* terminal */
.feather-align-left::before { content: "\f036" !important; } /* align-left */
.feather-arrow-right::before { content: "\f061" !important; } /* arrow-right */
.feather-arrow-left::before { content: "\f060" !important; } /* arrow-left */
.feather-search::before { content: "\f002" !important; } /* search */
.feather-bell::before { content: "\f0f3" !important; } /* bell */
.feather-user::before { content: "\f007" !important; } /* user */
.feather-log-out::before { content: "\f2f5" !important; } /* sign-out-alt */
.feather-plus::before { content: "\2b" !important; } /* plus */
.feather-link-2::before { content: "\f0c1" !important; } /* link */
.feather-layers::before { content: "\f5fd" !important; } /* layer-group */
.feather-cpu::before { content: "\f2db" !important; } /* microchip */
.feather-bluetooth::before { content: "\f293" !important; } /* bluetooth */
.feather-check-square::before { content: "\f14a" !important; } /* check-square */
.feather-bold::before { content: "\f032" !important; } /* bold */
.feather-bar-chart-2::before { content: "\f080" !important; } /* chart-bar */
.feather-feather::before { content: "\f52d" !important; } /* feather */
.feather-shield::before { content: "\f3ed" !important; } /* shield-alt */
.feather-shopping-cart::before { content: "\f07a" !important; } /* shopping-cart */
.feather-book::before { content: "\f02d" !important; } /* book */
.feather-star::before { content: "\f005" !important; } /* star */
.feather-file-plus::before { content: "\f319" !important; } /* file-plus */
.feather-user-plus::before { content: "\f234" !important; } /* user-plus */
</style>