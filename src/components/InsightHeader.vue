<template>
  <header class="insight-header">
    <!-- start navigation -->
    <nav class="navbar navbar-expand-lg  header-dark bg-white responsive-sticky text-dark-gray">
      <div class="container-fluid">
        <div class="col-auto">
          <router-link class="navbar-brand" to="/">
            <img src="/images/logo.png"
                 data-at2x="/images/logo.png" alt="" class="default-logo">
            <img src="/images/logo.png"
                 data-at2x="/images/logo.png" alt="" class="alt-logo">
            <img src="/images/logo.png"
                 data-at2x="/images/logo.png" alt="" class="mobile-logo">
          </router-link>
        </div> 
        <div class="col-auto col-xl-6 col-lg-8 menu-order position-static">
          <!-- start mobile visible icons -->
          <div class="d-flex align-items-center d-lg-none">
            <div class="header-search-icon icon me-3">
              <button type="button" class="search-form-icon header-search-form text-dark-gray border-0 bg-transparent p-0" @click="openSearchModal"><i class="fa-solid fa-magnifying-glass text-dark-gray"></i></button>
              <!-- start search input -->
              <div class="search-form-wrapper">
                <button title="Close" type="button" class="search-close" @click="closeSearchModal">×</button>
                <form id="search-form-mobile" role="search" method="get" class="search-form text-left" @submit.prevent="handleSearch">
                  <div class="search-form-box">
                    <h2 class="text-dark-gray text-center fw-600 mb-4 ls-minus-1px">What are you looking for?</h2>
                    <input class="search-input" placeholder="Enter your keywords..." name="s" type="text" autocomplete="off">
                    <button type="submit" class="search-button">
                      <i class="fa-solid fa-magnifying-glass" aria-hidden="true"></i> 
                    </button>
                  </div>
                </form>
              </div>
              <!-- end search input -->
            </div>
            <button class="navbar-toggler float-start" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavInsight" aria-controls="navbarNavInsight" aria-label="Toggle navigation">
              <span class="navbar-toggler-line"></span>
              <span class="navbar-toggler-line"></span>
              <span class="navbar-toggler-line"></span>
              <span class="navbar-toggler-line"></span>
            </button>
          </div>
          <!-- end mobile visible icons -->
          <div class="collapse navbar-collapse justify-content-center" id="navbarNavInsight"> 
            <ul class="navbar-nav"> 
              <li class="nav-item dropdown dropdown-with-icon-style02">
                <router-link to="/services" class="nav-link">Services</router-link>
                <i class="fa-solid fa-angle-down dropdown-toggle" id="navbarDropdownMenuLinkServicesInsight" role="button" data-bs-toggle="dropdown" aria-expanded="false"></i>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLinkServicesInsight"> 
                  <li><router-link to="/services/education-training" class="text-dark-gray"><i class="fas fa-graduation-cap me-2 text-dark-gray"></i>Education & Training</router-link></li> 
                  <li><router-link to="/services/software-development" class="text-dark-gray"><i class="fas fa-code me-2 text-dark-gray"></i>Software Development</router-link></li>  
                  <li><router-link to="/services/data-analytics" class="text-dark-gray"><i class="fas fa-chart-line me-2 text-dark-gray"></i>Data Analytics</router-link></li>                                                                                     
                  <li><router-link to="/services/it-strategy-consulting" class="text-dark-gray"><i class="fas fa-chess-knight me-2 text-dark-gray"></i>IT Strategy & Consulting</router-link></li>                                                                                  
                  <li><router-link to="/services/graphics-designing" class="text-dark-gray"><i class="fas fa-paint-brush me-2 text-dark-gray"></i>Graphics Designing</router-link></li>                                                                                             
                  <li><router-link to="/services/cyber-security-solution" class="text-dark-gray"><i class="fas fa-shield-alt me-2 text-dark-gray"></i>Cyber Security Solution</router-link></li>          
                </ul>
              </li>
              <li class="nav-item dropdown dropdown-with-icon-style02">
                <router-link to="" class="nav-link text-dark-gray">Our Products</router-link>
                <i class="fa-solid fa-angle-down dropdown-toggle text-dark-gray" id="navbarDropdownMenuLinkProductsInsight" role="button" data-bs-toggle="dropdown" aria-expanded="false"></i>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLinkProductsInsight"> 
                  <li><a href="https://ecracademy.com" class="text-dark-gray">ECR Academy</a></li>
                  <li><a href="#" class="text-dark-gray">Bookamia</a></li>
                  <li><a href="https://checkartisans.com" class="text-dark-gray">CheckArtisans</a></li>
                  <li><a href="https://qikpharma.com" class="text-dark-gray">QikPharma</a></li>
                  <li><a href="https://jacanabuilders.com" class="text-dark-gray">Jacana Builders</a></li>
                  <li><a href="https://ecrschools.com/" class="text-dark-gray">Ecr Schools</a></li>
                </ul>
              </li>
              <li class="nav-item"><a href="https://ecracademy.com" class="nav-link text-dark-gray">Education & Training</a></li>
              <li class="nav-item"><router-link to="/insights" class="nav-link text-dark-gray">Insights</router-link></li>
              <li class="nav-item"><router-link to="/about" class="nav-link text-dark-gray">About</router-link></li>
              <li v-if="isAuthenticated" class="nav-item dropdown dropdown-with-icon-style02" :class="{ 'show': isUserDropdownOpen }">
                <a class="nav-link dropdown-toggle text-dark-gray" href="#" @click.prevent="toggleUserDropdown" id="navbarDropdownMenuLinkInsight" role="button" :aria-expanded="isUserDropdownOpen">
                  <i class="fas fa-user-circle fs-3 text-dark-gray"></i>
                </a>
                <ul class="dropdown-menu bg-white" :class="{ 'show': isUserDropdownOpen }" aria-labelledby="navbarDropdownMenuLinkInsight"> 
                  <li><router-link to="/dashboard/blogs" class="dropdown-item text-dark-gray"><i class="fas fa-blog me-2 text-dark-gray"></i>All Blogs</router-link></li>  
                  <!-- Admin only items -->
                  <li v-if="user?.is_admin"><router-link to="/dashboard/categories" class="dropdown-item text-dark-gray"><i class="fas fa-layer-group me-2 text-dark-gray"></i>All Categories</router-link></li> 
                  <li v-if="user?.is_admin"><router-link to="/dashboard/users" class="dropdown-item text-dark-gray"><i class="fas fa-users me-2 text-dark-gray"></i>All Users</router-link></li>
                  <li v-if="user?.is_admin"><router-link to="/dashboard/newsletter" class="dropdown-item text-dark-gray"><i class="fas fa-envelope me-2 text-dark-gray"></i>Send Newsletter</router-link></li>    
                  <!-- End admin only items -->
                  <li><router-link to="/dashboard/profile" class="dropdown-item text-dark-gray"><i class="fas fa-user me-2 text-dark-gray"></i>Profile</router-link></li>                                                                                                                                                                           
                  <!-- <li><hr class="dropdown-divider"></li> -->
                  <li><a href="#" class="dropdown-item text-dark-gray" @click.prevent="handleLogout"><i class="fas fa-sign-out-alt me-2 text-dark-gray"></i>Log Out</a></li>          
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-auto col-xl-3 col-lg-2 text-end md-pe-0">
          <div class="header-icon d-none d-lg-flex">
            <div class="header-search-icon icon">
              <button type="button" class="search-form-icon header-search-form text-dark-gray border-0 bg-transparent p-0" @click="openSearchModal"><i class="fa-solid fa-magnifying-glass text-dark-gray"></i></button>
              <!-- start search input -->
              <div class="search-form-wrapper">
                <button title="Close" type="button" class="search-close" @click="closeSearchModal">×</button>
                <form id="search-form-insight" role="search" method="get" class="search-form text-left" @submit.prevent="handleSearch">
                  <div class="search-form-box">
                    <h2 class="text-dark-gray text-center fw-600 mb-4 ls-minus-1px">What are you looking for?</h2>
                    <input class="search-input" id="search-form-input-insight" placeholder="Enter your keywords..." name="s" type="text" autocomplete="off">
                    <button type="submit" class="search-button">
                      <i class="fa-solid fa-magnifying-glass" aria-hidden="true"></i> 
                    </button>
                  </div>
                </form>
              </div>
              <!-- end search input -->
            </div>
            <div class="header-button ms-20px d-none d-xl-inline-block">
              <router-link to="/appointment" class="btn btn-rounded btn-transparent-light-gray border-1 btn-medium btn-switch-text text-transform-none">
                <span>
                  <span class="btn-double-text fw-600 text-dark-gray" data-text="Send Message">Send Message</span>
                  <span><i class="fa-regular fa-envelope text-dark-gray"></i></span>
                </span>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <!-- end navigation -->
  </header>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useAuth } from '../composables/useAuth';
import { useRouter } from 'vue-router';

const { isAuthenticated, logout, getUser, user } = useAuth();
const router = useRouter();
const isUserDropdownOpen = ref(false);

const toggleUserDropdown = () => {
  isUserDropdownOpen.value = !isUserDropdownOpen.value;
};

const handleLogout = async () => {
  await logout();
  router.push('/login');
};

const openSearchModal = () => {
  // Trigger the search modal by adding the class that main.js listens for
  if (typeof window !== 'undefined' && window.$) {
    window.$('body').addClass('show-search-popup');
  } else {
    // Fallback if jQuery isn't available yet
    document.body.classList.add('show-search-popup');
  }
};

const closeSearchModal = () => {
  // Close the search modal by removing the class
  if (typeof window !== 'undefined' && window.$) {
    window.$('body').removeClass('show-search-popup');
  } else {
    // Fallback if jQuery isn't available yet
    document.body.classList.remove('show-search-popup');
  }
};

const handleSearch = (e) => {
  e.preventDefault();
  const searchInput = e.target.querySelector('input[name="s"]');
  const searchTerm = searchInput?.value?.trim();
  
  if (searchTerm) {
    // Close search modal
    closeSearchModal();
    // Navigate to search results page
    router.push({ path: '/search', query: { q: searchTerm } });
  }
};

onMounted(() => {
  document.body.setAttribute('data-mobile-nav-style', 'full-screen-menu');
  getUser();
});
</script>

<style scoped>
.insight-header {
  /* Custom styling for insights header */
  position: relative;
  z-index: 1000;
}

/* Ensure all text in insight header is dark-gray */
.insight-header :deep(.nav-link),
.insight-header :deep(.navbar-nav a),
.insight-header :deep(.dropdown-item),
.insight-header :deep(.dropdown-menu a),
.insight-header :deep(.navbar-brand),
.insight-header :deep(i),
.insight-header :deep(.fa-solid),
.insight-header :deep(.fa-regular),
.insight-header :deep(.fas) {
  color: #2d3748 !important; /* dark-gray color */
}

.insight-header :deep(.nav-link:hover),
.insight-header :deep(.navbar-nav a:hover),
.insight-header :deep(.dropdown-item:hover),
.insight-header :deep(.navbar-brand:hover) {
  color: #1a202c !important; /* darker on hover */
}

/* Navbar toggler lines */
.insight-header :deep(.navbar-toggler-line) {
  background-color: #2d3748 !important;
}

/* Search icon */
.insight-header :deep(.search-form-icon),
.insight-header :deep(.header-search-icon i) {
  color: #2d3748 !important;
}

/* User icon */
.insight-header :deep(.fa-user-circle) {
  color: #2d3748 !important;
}

/* Dropdown icons */
.insight-header :deep(.dropdown-toggle) {
  color: #2d3748 !important;
}

/* Search button styling to match anchor */
.insight-header :deep(.search-form-icon) {
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
}

.insight-header :deep(.search-form-icon:hover) {
  opacity: 0.8;
}

/* Send Message button hover styles - text and icon should be white on hover */
.insight-header :deep(.btn-switch-text:hover .btn-double-text),
.insight-header :deep(.btn-switch-text:hover .fa-envelope),
.insight-header :deep(.btn-switch-text:hover i),
.insight-header :deep(.btn-switch-text:hover span),
.insight-header :deep(.btn-switch-text:hover span i),
.insight-header :deep(.btn-switch-text:hover .fa-regular) {
  color: #ffffff !important;
}
</style>

