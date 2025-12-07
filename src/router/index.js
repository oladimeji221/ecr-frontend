import { createRouter, createWebHistory } from 'vue-router'
import { useAuth } from '../composables/useAuth'
import Home from '../pages/Home.vue'
import Product from '../pages/Product.vue'
import About from '../pages/About.vue'
import Education from '../pages/Education.vue'
import Insights from '../pages/Insights.vue'
import SingleInsights from '../pages/SingleInsights.vue'
import Contact from '../pages/Contact.vue'
import Appointment from '../pages/Appointment.vue'
import Services from '../pages/Services.vue'
import Blogs from '../pages/Dashboard/Blogs.vue'
import Categories from '../pages/Dashboard/Categories.vue'
import CreateBlog from '../pages/Dashboard/CreateBlog.vue'
import ManageComments from '../pages/Dashboard/ManageComments.vue'
import Profile from '../pages/Dashboard/Profile.vue'


import EducationTraining from '../pages/services/EducationTraining.vue'
import SoftwareDevelopment from '../pages/services/SoftwareDevelopment.vue'
import DataAnalytics from '../pages/services/DataAnalytics.vue'
import ITStrategyConsulting from '../pages/services/ITStrategyConsulting.vue'
import GraphicsDesigning from '../pages/services/GraphicsDesigning.vue'
import CyberSecuritySolution from '../pages/services/CyberSecuritySolution.vue'

import Login from '../pages/Auth/Login.vue'
import Register from '../pages/Auth/Register.vue'
import ForgotPassword from '../pages/Auth/ForgotPassword.vue'
import ResetPassword from '../pages/Auth/ResetPassword.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { layout: 'MainLayout' }
  },
  {
    path: '/product',
    name: 'Product',
    component: Product,
    meta: { layout: 'MainLayout' }
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: { layout: 'MainLayout' }
  },
  {
    path: '/services/education-training',
    name: 'EducationTraining',
    component: EducationTraining,
    meta: { layout: 'MainLayout' }
  },
  {
    path: '/services/software-development',
    name: 'SoftwareDevelopment',
    component: SoftwareDevelopment,
    meta: { layout: 'MainLayout' }
  },
  {
    path: '/services/data-analytics',
    name: 'DataAnalytics',
    component: DataAnalytics,
    meta: { layout: 'MainLayout' }
  },
  {
    path: '/services/it-strategy-consulting',
    name: 'ITStrategyConsulting',
    component: ITStrategyConsulting,
    meta: { layout: 'MainLayout' }
  },
  {
    path: '/services/graphics-designing',
    name: 'GraphicsDesigning',
    component: GraphicsDesigning,
    meta: { layout: 'MainLayout' }
  },
  {
    path: '/services/cyber-security-solution',
    name: 'CyberSecuritySolution',
    component: CyberSecuritySolution,
    meta: { layout: 'MainLayout' }
  },
  {
    path: '/education',
    name: 'Education',
    component: Education,
    meta: { layout: 'MainLayout' }
  },
  {
    path: '/insights',
    name: 'Insights',
    component: Insights,
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
    component: Contact,
    meta: { layout: 'MainLayout' }
  },
  {
    path: '/appointment',
    name: 'Appointment',
    component: Appointment,
    meta: { layout: 'MainLayout' }
  },
  {
    path: '/services',
    name: 'Services',
    component: Services,
    meta: { layout: 'MainLayout' }
  },
              {
                  path: '/insights/:slug',
                  name: 'SingleInsights',
                  component: SingleInsights,
                  meta: { layout: 'InsightLayout' }
              },            {
                path: '/dashboard/blogs',
                name: 'dashboard.blogs',
                component: () => import('../pages/Dashboard/Blogs.vue'),
                meta: { requiresAuth: true }
            },
  {
    path: '/dashboard/categories',
    name: 'Categories',
    component: Categories,
    meta: { layout: 'MainLayout', requiresAuth: true, requiresAdmin: true }
  },
  {
    path: '/dashboard/create-blog',
    name: 'CreateBlog',
    component: CreateBlog,
    meta: { layout: 'MainLayout', requiresAuth: true }
  },
  {
    path: '/dashboard/manage-comments',
    name: 'ManageComments',
    component: ManageComments,
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
    component: Login,
    meta: { layout: 'AuthLayout' }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: { layout: 'AuthLayout' }
  },
  {
    path: '/forgot-password',
    name: 'ForgotPassword',
    component: ForgotPassword,
    meta: { layout: 'AuthLayout' }
  },
  {
    path: '/reset-password',
    name: 'ResetPassword',
    component: ResetPassword,
    meta: { layout: 'AuthLayout' }
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
