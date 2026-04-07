import { createRouter, createWebHistory } from 'vue-router'
import { useAuth } from '../composables/useAuth'
// Guest Dashboard
import GuestDashboardLayout from '../layouts/GuestDashboardLayout.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../pages/Home.vue'),
    meta: { layout: 'MainLayout' }
  },
  {
    path: '/product',
    name: 'Product',
    component: () => import('../pages/Product.vue'),
    meta: { layout: 'MainLayout' }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../pages/About.vue'),
    meta: { layout: 'MainLayout' }
  },
  {
    path: '/about/company-overview',
    name: 'CompanyOverview',
    component: () => import('../pages/About/CompanyOverview.vue'),
    meta: { layout: 'MainLayout' }
  },
  {
    path: '/about/our-teams',
    name: 'OurTeams',
    component: () => import('../pages/About/OurTeams.vue'),
    meta: { layout: 'MainLayout' }
  },
  {
    path: '/about/partners',
    name: 'Partners',
    component: () => import('../pages/About/Partners.vue'),
    meta: { layout: 'MainLayout' }
  },
  {
    path: '/about/careers',
    name: 'Careers',
    component: () => import('../pages/About/Careers.vue'),
    meta: { layout: 'MainLayout' }
  },
  {
    path: '/services/education-training',
    name: 'EducationTraining',
    component: () => import('../pages/services/EducationTraining.vue'),
    meta: { layout: 'MainLayout' }
  },
  {
    path: '/services/software-development',
    name: 'SoftwareDevelopment',
    component: () => import('../pages/services/SoftwareDevelopment.vue'),
    meta: { layout: 'MainLayout' }
  },
  {
    path: '/services/data-analytics',
    name: 'DataAnalytics',
    component: () => import('../pages/services/DataAnalytics.vue'),
    meta: { layout: 'MainLayout' }
  },
  {
    path: '/services/it-strategy-consulting',
    name: 'ITStrategyConsulting',
    component: () => import('../pages/services/ITStrategyConsulting.vue'),
    meta: { layout: 'MainLayout' }
  },
  {
    path: '/services/graphics-designing',
    name: 'GraphicsDesigning',
    component: () => import('../pages/services/GraphicsDesigning.vue'),
    meta: { layout: 'MainLayout' }
  },
  {
    path: '/services/cyber-security-solution',
    name: 'CyberSecuritySolution',
    component: () => import('../pages/services/CyberSecuritySolution.vue'),
    meta: { layout: 'MainLayout' }
  },
  {
    path: '/education',
    name: 'Education',
    component: () => import('../pages/Education.vue'),
    meta: { layout: 'MainLayout' }
  },
  {
    path: '/insights/news',
    name: 'News',
    component: () => import('../pages/Insights/News.vue'),
    meta: { layout: 'MainLayout' }
  },
  {
    path: '/insights/case-studies',
    name: 'CaseStudies',
    component: () => import('../pages/Insights/CaseStudies.vue'),
    meta: { layout: 'MainLayout' }
  },
  {
    path: '/insights/white-papers',
    name: 'WhitePapers',
    component: () => import('../pages/Insights/WhitePapers.vue'),
    meta: { layout: 'MainLayout' }
  },
  {
    path: '/insights/trends',
    name: 'Trends',
    component: () => import('../pages/Insights/Trends.vue'),
    meta: { layout: 'MainLayout' }
  },
  {
    path: '/search',
    name: 'SearchResults',
    component: () => import('../pages/SearchResults.vue'),
    meta: { layout: 'MainLayout' }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../pages/Contact.vue'),
    meta: { layout: 'MainLayout' }
  },
  {
    path: '/appointment',
    name: 'Appointment',
    component: () => import('../pages/Appointment.vue'),
    meta: { layout: 'MainLayout' }
  },
  {
    path: '/services',
    name: 'Services',
    component: () => import('../pages/Services.vue'),
    meta: { layout: 'MainLayout' }
  },
  {
    path: '/insights/:slug',
    name: 'SingleInsights',
    component: () => import('../pages/SingleInsights.vue'),
    meta: { layout: 'InsightLayout' }
  }, {
    path: '/dashboard/blogs',
    name: 'dashboard.blogs',
    component: () => import('../pages/Dashboard/Blogs.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/dashboard/categories',
    name: 'Categories',
    component: () => import('../pages/Dashboard/Categories.vue'),
    meta: { layout: 'MainLayout', requiresAuth: true, requiresAdmin: true }
  },
  {
    path: '/dashboard/create-blog',
    name: 'CreateBlog',
    component: () => import('../pages/Dashboard/CreateBlog.vue'),
    meta: { layout: 'MainLayout', requiresAuth: true }
  },
  {
    path: '/dashboard/edit-blog/:slug',
    name: 'EditBlog',
    component: () => import('../pages/Dashboard/EditBlog.vue'),
    meta: { layout: 'MainLayout', requiresAuth: true }
  },
  {
    path: '/dashboard/manage-comments',
    name: 'ManageComments',
    component: () => import('../pages/Dashboard/ManageComments.vue'),
    meta: { layout: 'MainLayout', requiresAuth: true, requiresAdmin: true }
  },
  {
    path: '/dashboard/profile',
    name: 'dashboard.profile',
    component: () => import('../pages/Dashboard/Profile.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/dashboard/users',
    name: 'dashboard.users',
    component: () => import('../pages/Dashboard/AllUsers.vue'),
    meta: { requiresAuth: true, requiresAdmin: true }
  },
  {
    path: '/dashboard/newsletter',
    name: 'dashboard.newsletter',
    component: () => import('../pages/Dashboard/Newsletter.vue'),
    meta: { requiresAuth: true, requiresAdmin: true }
  },
  // Auth routes
  {
    path: '/login',
    name: 'Login',
    component: () => import('../pages/Auth/Login.vue'),
    meta: { layout: 'AuthLayout' }
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../pages/Auth/Register.vue'),
    meta: { layout: 'AuthLayout' }
  },
  {
    path: '/guest-register',
    name: 'GuestRegister',
    component: () => import('../pages/Auth/GuestRegister.vue'),
    meta: { layout: 'GuestDashboardLayout' }
  },
  {
    path: '/guest-login',
    name: 'GuestLogin',
    component: () => import('../pages/Auth/GuestLogin.vue'),
    meta: { layout: 'GuestDashboardLayout' }
  },
  // Guest Dashboard Routes - All nested routes automatically use GuestDashboardLayout
  {
    path: '/guest',
    meta: { layout: 'GuestDashboardLayout' },
    children: [
      {
        path: 'dashboard',
        name: 'GuestDashboard',
        component: () => import('../pages/GuestDashboard/Overview.vue'),
      },
      // Add more guest dashboard pages here
      // Example:
      // {
      //   path: 'profile',
      //   name: 'GuestProfile',
      //   component: () => import('../pages/GuestDashboard/Profile.vue'),
      // },
      // {
      //   path: 'settings',
      //   name: 'GuestSettings',
      //   component: () => import('../pages/GuestDashboard/Settings.vue'),
      // },
    ]
  },
  {
    path: '/forgot-password',
    name: 'ForgotPassword',
    component: () => import('../pages/Auth/ForgotPassword.vue'),
    meta: { layout: 'AuthLayout' }
  },
  {
    path: '/reset-password',
    name: 'ResetPassword',
    component: () => import('../pages/Auth/ResetPassword.vue'),
    meta: { layout: 'AuthLayout' }
  },
  {
    path: '/under-construction',
    name: 'UnderConstruction',
    component: () => import('../pages/UnderConstruction.vue'),
    meta: { layout: 'MainLayout' } // Or another layout if preferred
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  // Add scroll behavior to handle page transitions
  scrollBehavior(to, from, savedPosition) {
    // If there's a saved position (browser back/forward), use it
    if (savedPosition) {
      return savedPosition
    }
    // If there's a hash, scroll to the element with that ID
    else if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
        top: 100 // offset from top
      }
    }
    // Otherwise, scroll to top
    else {
      return { top: 0, behavior: 'smooth' }
    }
  }
})

// This ensures that the page is scrolled to top on route change and handles authentication
router.beforeEach(async (to, from, next) => {
  // Trigger a small delay to ensure the DOM is updated
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 100);

  // Check if route requires authentication (all /dashboard routes)
  if (to.meta.requiresAuth || to.path.startsWith('/dashboard')) {
    const { isAuthenticated, getUser, user } = useAuth();

    // Ensure we have the latest user data
    await getUser();

    if (!isAuthenticated.value) {
      // Redirect to login if not authenticated
      next({ name: 'Login', query: { redirect: to.fullPath } });
      return;
    }

    // Check if route requires admin
    if (to.meta.requiresAdmin) {
      if (!user.value?.is_admin) {
        // Redirect to dashboard/blogs if not admin
        next({ name: 'dashboard.blogs' });
        return;
      }
    }
  }

  next();
});

export default router
