<template>
                <header>
                    <!-- start navigation -->
                    <nav class="navbar navbar-expand-lg header-light bg-transparent disable-fixed">
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
                                    <button type="button" class="search-form-icon header-search-form border-0 bg-transparent p-0" @click="openSearchModal"><i class="fa-solid fa-magnifying-glass"></i></button>
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
                                <button class="navbar-toggler float-start" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav-clone" aria-controls="navbarNav-clone" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-line"></span>
                                    <span class="navbar-toggler-line"></span>
                                    <span class="navbar-toggler-line"></span>
                                    <span class="navbar-toggler-line"></span>
                                </button>
                            </div>
                            <!-- end mobile visible icons -->
                            <div class="collapse navbar-collapse justify-content-center" id="navbarNavMain"> 
                                <ul class="navbar-nav"> 
                                    
                                    <li class="nav-item dropdown dropdown-with-icon-style02">
                                        <router-link to="/services" class="nav-link">Services</router-link>
                                        <i class="fa-solid fa-angle-down dropdown-toggle" id="navbarDropdownMenuLinkServices" role="button" data-bs-toggle="dropdown" aria-expanded="false"></i>
                                        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLinkServices"> 
                                            <!-- <li><router-link to="/services" ><i class="fas fa-th-list me-2"></i>All Services</router-link></li> -->
                                            <li><router-link to="/services/education-training" ><i class="fas fa-graduation-cap me-2"></i>Education & Training</router-link></li> 
                                            <li><router-link to="/services/software-development" ><i class="fas fa-code me-2"></i>Software Development</router-link></li>  
                                            <li><router-link to="/services/data-analytics" ><i class="fas fa-chart-line me-2"></i>Data Analytics</router-link></li>                                                                                     
                                            <li><router-link to="/services/it-strategy-consulting" ><i class="fas fa-chess-knight me-2"></i>IT Strategy & Consulting</router-link></li>                                                                                  
                                            <li><router-link to="/services/graphics-designing" ><i class="fas fa-paint-brush me-2"></i>Graphics Designing</router-link></li>                                                                                             
                                            <li><router-link to="/services/cyber-security-solution" ><i class="fas fa-shield-alt me-2"></i>Cyber Security Solution</router-link></li>          
                                        </ul>
                                    </li>
                                    <li class="nav-item dropdown dropdown-with-icon-style02">
                                        <router-link to="" class="nav-link">Our Products</router-link>
                                        <i class="fa-solid fa-angle-down dropdown-toggle" id="navbarDropdownMenuLinkProducts" role="button" data-bs-toggle="dropdown" aria-expanded="false"></i>
                                        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLinkProducts"> 
                                             <li><a  href="https://ecracademy.com">ECR Academy</a></li>
                                                <li><a  href="#">Bookamia</a></li>
                                                <li><a  href="https://checkartisans.com">CheckArtisans</a></li>
                                                <li><a  href="https://qikpharma.com">QikPharma</a></li>
                                                <li><a  href="https://jacanabuilders.com">Jacana Builders</a></li>
                                                <li><a  href="https://ecrschools.com/">Ecr Schools</a></li>
                                        </ul>
                                    </li>
                                  
                                    <li class="nav-item"><a href="https://ecracademy.com" class="nav-link">Education & Training</a></li>
                                    <li class="nav-item"><router-link to="/insights" class="nav-link">Insights</router-link></li>
                                    <li class="nav-item"><router-link to="/about" class="nav-link">About</router-link></li>

                                    <!-- MOBILE Profile Link (Text) -->
                                    <li v-if="isAuthenticated" class="nav-item d-lg-none">
                                        <router-link to="/dashboard/profile" class="nav-link">Profile</router-link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                           
                         <div class="col-auto col-xl-3 col-lg-2 text-end md-pe-0">
                            <div class="header-icon d-none d-lg-flex">
                                <div class="header-search-icon icon">
                                    <button type="button" class="search-form-icon header-search-form border-0 bg-transparent p-0" @click="openSearchModal"><i class="fa-solid fa-magnifying-glass"></i></button>
                                    <!-- start search input -->
                                    <div class="search-form-wrapper">
                                        <button title="Close" type="button" class="search-close" @click="closeSearchModal">×</button>
                                        <form id="search-form" role="search" method="get" class="search-form text-left" @submit.prevent="handleSearch">
                                            <div class="search-form-box">
                                                <h2 class="text-dark-gray text-center fw-600 mb-4 ls-minus-1px">What are you looking for?</h2>
                                                <input class="search-input" id="search-form-input5e219ef164995" placeholder="Enter your keywords..." name="s" type="text" autocomplete="off">
                                                <button type="submit" class="search-button">
                                                    <i class="fa-solid fa-magnifying-glass" aria-hidden="true"></i> 
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                    <!-- end search input -->
                                </div>
                                
                                <!-- DESKTOP Profile Icon Dropdown -->
                                <div v-if="isAuthenticated" class="header-icon d-none d-lg-flex" :class="{ 'show': isUserDropdownOpen }">
                                    <a class="nav-link dropdown-toggle" href="#" @click.prevent="toggleUserDropdown" id="navbarDropdownMenuLink" role="button" :aria-expanded="isUserDropdownOpen">
                                        <i class="fas fa-user-circle fs-3"></i>
                                    </a>
                                    <ul class="dropdown-menu" :class="{ 'show': isUserDropdownOpen }" aria-labelledby="navbarDropdownMenuLink"> 
                                        <li><router-link to="/dashboard/blogs" class="dropdown-item"><i class="fas fa-blog me-2"></i>All Blogs</router-link></li>  
                                        <!-- Admin only items -->
                                        <li v-if="user?.is_admin"><router-link to="/dashboard/categories" class="dropdown-item"><i class="fas fa-layer-group me-2"></i>All Categories</router-link></li>   
                                        <li v-if="user?.is_admin"><router-link to="/dashboard/users" class="dropdown-item"><i class="fas fa-users me-2"></i>All Users</router-link></li>
                                        <li v-if="user?.is_admin"><router-link to="/dashboard/newsletter" class="dropdown-item"><i class="fas fa-envelope me-2"></i>Send Newsletter</router-link></li>  
                                        <!-- End admin only items -->
                                        <li><router-link to="/dashboard/profile" class="dropdown-item"><i class="fas fa-user me-2"></i>Profile</router-link></li>                                                                                                                                                                           
                                        <!-- <hr class="dropdown-divider"> -->
                                        <li><a href="#" class="dropdown-item" @click.prevent="handleLogout"><i class="fas fa-sign-out-alt me-2"></i>Log Out</a></li>          
                                    </ul>
                                </div>

                                <div class="header-button ms-20px d-none d-xl-inline-block">
                                    <router-link to="/appointment" class="btn btn-rounded btn-transparent-light-gray border-1 btn-medium btn-switch-text text-transform-none">
                                        <span>
                                            <span class="btn-double-text fw-600 text-white" data-text="Send Message">Send Message</span>
                                            <span><i class="fa-regular fa-envelope text-white"></i></span>
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
import { Collapse } from 'bootstrap'; 

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
  if (typeof window !== 'undefined' && window.$) {
    window.$('body').addClass('show-search-popup');
  } else {
    document.body.classList.add('show-search-popup');
  }
};

const closeSearchModal = () => {
  if (typeof window !== 'undefined' && window.$) {
    window.$('body').removeClass('show-search-popup');
  } else {
    document.body.classList.remove('show-search-popup');
  }
};

const handleSearch = (e) => {
    e.preventDefault();
    const searchInput = e.target.querySelector('input[name="s"]');
    const searchTerm = searchInput?.value?.trim();
    
    if (searchTerm) {
        closeSearchModal();
        router.push({ path: '/search', query: { q: searchTerm } });
    }
};

onMounted(() => {
    document.body.setAttribute('data-mobile-nav-style', 'full-screen-menu');
    getUser(); 

    // Manual initialization of the template's mobile menu logic
    // This ensures the "Purple Overlay" (cloned menu) exists even if main.js ran before Vue rendered.
    if (typeof window.$ !== 'undefined') {
        const $ = window.$;
        const mobileStyle = 'full-screen-menu';
        
        // Only run if the clone container doesn't exist yet
        if (!$('.navbar-' + mobileStyle + '-inner').length) {
            
            // Wrap content if needed (logic from main.js)
            if (!$('.page-layout').length) {
                if (!$('.box-layout').length && mobileStyle == 'modern') {
                    $('section, footer').wrapAll('<div class="page-layout"></div>');
                } else {
                    $('section').wrapAll('<div class="page-layout"></div>');
                }
            }

            // Clone the toggler and menu
            const userIsAdmin = user.value?.is_admin || false; // Capture current state if needed
            
            // Clone Toggler
            // We use .navbar-toggler from this component
            // Note: We need to clone it deep to keep icon spans
            // But we must remove the Vue listeners from the clone to avoid confusion, 
            // though jQuery clone(true) copies events, standard clone() does not.
            // main.js uses clone(true), but we'll use clone() to be safer with Vue.
            $('.navbar .navbar-toggler').clone(false).addClass('navbar-toggler-clone').insertAfter('.page-layout');
            
            // Clone Menu
            $('.navbar .navbar-collapse').clone(false).addClass('navbar-collapse-clone').attr('id', 'navbarNav-clone').insertAfter('.page-layout');

            // Wrap them in the inner container
            $('.navbar-toggler-clone, .navbar-collapse-clone').wrapAll('<div class="navbar-' + mobileStyle + '-inner"></div>');
            
            // Setup attributes on the CLONE's toggler (not our Vue one)
            $('.navbar-toggler-clone').attr('data-bs-toggle', 'collapse').attr('data-bs-target', '#navbarNav-clone');
            
            // Re-initialize custom scrollbar if needed (from main.js)
            if (typeof $.fn.mCustomScrollbar === 'function') {
                 if ($('.navbar-collapse-clone').length) {
                     var scrollOptions = $('.navbar-collapse-clone').attr('data-scroll-options') || '{ "theme": "light" }';
                     if (typeof (scrollOptions) !== 'undefined' && scrollOptions !== null) {
                         scrollOptions = $.parseJSON(scrollOptions);
                         $('.navbar-collapse-clone').mCustomScrollbar(scrollOptions);
                     }
                 }
            }
        }
    }
});
</script>

<style scoped>
@media (max-width: 991px) {
    /* Force hide the original menu to prevent it from showing up 
       underneath the full-screen clone */
    #navbarNavMain {
        display: none !important;
    }
}
</style>