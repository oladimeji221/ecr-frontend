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
                                    <li class="nav-item dropdown dropdown-with-icon-style02">
                                        <router-link to="/insights/news" class="nav-link">Insights</router-link>
                                        <i class="fa-solid fa-angle-down dropdown-toggle" id="navbarDropdownMenuLinkInsights" role="button" data-bs-toggle="dropdown" aria-expanded="false"></i>
                                        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLinkInsights"> 
                                            <li><router-link to="/insights/news"><i class="fas fa-newspaper me-2"></i>News</router-link></li>
                                            <li><router-link to="/insights/case-studies"><i class="fas fa-briefcase me-2"></i>Case Studies</router-link></li>
                                            <li><router-link to="/insights/white-papers"><i class="fas fa-file-alt me-2"></i>White Papers</router-link></li>
                                            <li><router-link to="/insights/trends"><i class="fas fa-chart-line me-2"></i>Trends</router-link></li>
                                        </ul>
                                    </li>
                                    <li class="nav-item dropdown dropdown-with-icon-style02">
                                        <router-link to="/about" class="nav-link">About</router-link>
                                        <i class="fa-solid fa-angle-down dropdown-toggle" id="navbarDropdownMenuLinkAbout" role="button" data-bs-toggle="dropdown" aria-expanded="false"></i>
                                        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLinkAbout"> 
                                            <li><router-link to="/about/company-overview"><i class="fas fa-building me-2"></i>Company Overview</router-link></li>
                                            <li><router-link to="/about/our-teams"><i class="fas fa-users me-2"></i>Our Team</router-link></li>
                                            <li><router-link to="/about/partners"><i class="fas fa-handshake me-2"></i>Partners</router-link></li>
                                            <li><router-link to="/about/careers"><i class="fas fa-briefcase me-2"></i>Careers</router-link></li>
                                        </ul>
                                    </li>

                                    <!-- Combined Dropdown for All Users -->
                                    <li class="nav-item dropdown dropdown-with-icon-style02">
                                        <a class="nav-link dropdown-toggle" href="#" id="userActionsDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i class="fas fa-user-circle fs-3"></i>
                                        </a>
                                        <ul class="dropdown-menu" aria-labelledby="userActionsDropdown">
                                            <!-- Authenticated User Links -->
                                            <template v-if="isAuthenticated">
                                                <li><router-link to="/dashboard/blogs" class="dropdown-item">All Blogs</router-link></li>
                                                <li v-if="user?.is_admin"><router-link to="/dashboard/categories" class="dropdown-item">All Categories</router-link></li>
                                                <li v-if="user?.is_admin"><router-link to="/dashboard/users" class="dropdown-item">All Users</router-link></li>
                                                <li v-if="user?.is_admin"><router-link to="/dashboard/newsletter" class="dropdown-item">Send Newsletter</router-link></li>
                                                <li><router-link to="/dashboard/profile" class="dropdown-item">Profile</router-link></li>
                                                <li><a href="#" class="dropdown-item" @click.prevent="handleLogout">Log Out</a></li>
                                            </template>
                                            <!-- Guest (Not Authenticated) Links -->
                                            <template v-else>
                                                <li><router-link to="/login" class="dropdown-item">Login</router-link></li>
                                                <li class="dropdown-submenu">
                                                    <a class="dropdown-item d-flex justify-content-between align-items-center" href="#">
                                                        Register
                                                        <i class="fa-solid fa-chevron-right fs-12"></i>
                                                    </a>
                                                    <ul class="dropdown-menu">
                                                        <li><router-link :to="{ name: 'GuestRegister', query: { type: 'learner' } }" class="dropdown-item">As a Learner</router-link></li>
                                                        <li><router-link :to="{ name: 'GuestRegister', query: { type: 'partner' } }" class="dropdown-item">As a Partner</router-link></li>
                                                    </ul>
                                                </li>
                                            </template>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                           
                         <div class="col-auto col-xl-3 col-lg-2 text-end md-pe-0">
                            <div class="header-icon d-none d-lg-flex">
                                <div class="header-search-icon icon">
                                    <button type="button" class="search-form-icon header-search-form border-0 bg-transparent p-0" @click="openSearchModal"><i class="fa-solid fa-magnifying-glass"></i></button>
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
});
</script>

<style scoped>
@media (max-width: 991px) {
    #navbarNavMain {
        display: none !important;
    }
}
/* Ensure submenu displays correctly */
/* Ensure submenu displays correctly */
.dropdown-submenu {
    position: relative;
}

.dropdown-submenu .dropdown-menu {
    top: 0;
    left: 100%;
    margin-top: 0; /* Remove gap */
    margin-left: -1px; /* Slight overlap to ensure contact */
    display: none !important;
    position: absolute;
    z-index: 1000;
}

.dropdown-submenu:hover > .dropdown-menu {
    display: block !important;
}

/* Invisible bridge to prevent menu from closing when moving mouse */
.dropdown-submenu:after {
    content: "";
    position: absolute;
    top: 0;
    left: 100%;
    height: 100%;
    width: 20px; /* Width of the bridge */
    background: transparent;
    z-index: 10;
}

/* Ensure the parent dropdown allows overflow */
.dropdown-menu {
    overflow: visible !important;
}
</style>