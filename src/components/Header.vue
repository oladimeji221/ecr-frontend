<template>
                <header>
                    <!-- start navigation -->
                    <nav class="navbar navbar-expand-lg header-light bg-transparent disable-fixed">
                        <div class="container-fluid">
                            <div class="col-auto">
                                <router-link class="navbar-brand" to="/">
                                    <img src="/images/logo.webp"
                                         data-at2x="/images/logo.webp" alt="" class="default-logo">
                                    <img src="/images/logo.webp"
                                         data-at2x="/images/logo.webp" alt="" class="alt-logo">
                                    <img src="/images/logo.webp"
                                         data-at2x="/images/logo.webp" alt="" class="mobile-logo">
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
                                <button class="navbar-toggler float-start" type="button" aria-label="Toggle navigation" @click="toggleMobileMenu">
                                    <span class="navbar-toggler-line"></span>
                                    <span class="navbar-toggler-line"></span>
                                    <span class="navbar-toggler-line"></span>
                                    <span class="navbar-toggler-line"></span>
                                </button>
                            </div>
                            <!-- end mobile visible icons -->
                            <!-- Desktop nav (lg and up) -->
                            <div class="collapse navbar-collapse justify-content-center d-none d-lg-flex" id="navbarNavMain">
                                <ul class="navbar-nav">
                                    <li class="nav-item dropdown dropdown-with-icon-style02">
                                        <router-link to="/services" class="nav-link">Services</router-link>
                                        <i class="fa-solid fa-angle-down dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false"></i>
                                        <ul class="dropdown-menu">
                                            <li><router-link to="/services/education-training"><i class="fas fa-graduation-cap me-2"></i>Education & Training</router-link></li>
                                            <li><router-link to="/services/software-development"><i class="fas fa-code me-2"></i>Software Development</router-link></li>
                                            <li><router-link to="/services/data-analytics"><i class="fas fa-chart-line me-2"></i>Data Analytics</router-link></li>
                                            <li><router-link to="/services/it-strategy-consulting"><i class="fas fa-chess-knight me-2"></i>IT Strategy & Consulting</router-link></li>
                                            <li><router-link to="/services/graphics-designing"><i class="fas fa-paint-brush me-2"></i>Graphics Designing</router-link></li>
                                            <li><router-link to="/services/cyber-security-solution"><i class="fas fa-shield-alt me-2"></i>Cyber Security Solution</router-link></li>
                                        </ul>
                                    </li>
                                    <li class="nav-item dropdown dropdown-with-icon-style02">
                                        <router-link to="" class="nav-link">Our Products</router-link>
                                        <i class="fa-solid fa-angle-down dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false"></i>
                                        <ul class="dropdown-menu">
                                            <li><a href="https://ecracademy.com">ECR Academy</a></li>
                                            <li><a href="#">Bookamia</a></li>
                                            <li><a href="https://checkartisans.com">CheckArtisans</a></li>
                                            <li><a href="https://qikpharma.com">QikPharma</a></li>
                                            <li><a href="https://jacanabuilders.com">Jacana Builders</a></li>
                                            <li><a href="https://ecrschools.com/">Ecr Schools</a></li>
                                        </ul>
                                    </li>
                                    <li class="nav-item"><a href="https://ecracademy.com" class="nav-link">Education & Training</a></li>
                                    <li class="nav-item dropdown dropdown-with-icon-style02">
                                        <router-link to="/insights/news" class="nav-link">Insights</router-link>
                                        <i class="fa-solid fa-angle-down dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false"></i>
                                        <ul class="dropdown-menu">
                                            <li><router-link to="/insights/news"><i class="fas fa-newspaper me-2"></i>News</router-link></li>
                                            <li><router-link to="/insights/case-studies"><i class="fas fa-briefcase me-2"></i>Case Studies</router-link></li>
                                            <li><router-link to="/insights/white-papers"><i class="fas fa-file-alt me-2"></i>White Papers</router-link></li>
                                            <li><router-link to="/insights/trends"><i class="fas fa-chart-line me-2"></i>Trends</router-link></li>
                                        </ul>
                                    </li>
                                    <li class="nav-item dropdown dropdown-with-icon-style02">
                                        <router-link to="/about" class="nav-link">About</router-link>
                                        <i class="fa-solid fa-angle-down dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false"></i>
                                        <ul class="dropdown-menu">
                                            <li><router-link to="/about/company-overview"><i class="fas fa-building me-2"></i>Company Overview</router-link></li>
                                            <li><router-link to="/about/our-teams"><i class="fas fa-users me-2"></i>Our Team</router-link></li>
                                            <li><router-link to="/about/partners"><i class="fas fa-handshake me-2"></i>Partners</router-link></li>
                                            <li><router-link to="/about/careers"><i class="fas fa-briefcase me-2"></i>Careers</router-link></li>
                                        </ul>
                                    </li>
                                    <li class="nav-item dropdown dropdown-with-icon-style02">
                                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i class="fas fa-user-circle fs-3"></i>
                                        </a>
                                        <ul class="dropdown-menu">
                                            <template v-if="isAuthenticated">
                                                <li><router-link to="/dashboard/blogs" class="dropdown-item">All Blogs</router-link></li>
                                                <li v-if="user?.is_admin"><router-link to="/dashboard/categories" class="dropdown-item">All Categories</router-link></li>
                                                <li v-if="user?.is_admin"><router-link to="/dashboard/users" class="dropdown-item">All Users</router-link></li>
                                                <li v-if="user?.is_admin"><router-link to="/dashboard/newsletter" class="dropdown-item">Send Newsletter</router-link></li>
                                                <li><router-link to="/dashboard/profile" class="dropdown-item">Profile</router-link></li>
                                                <li><a href="#" class="dropdown-item" @click.prevent="handleLogout">Log Out</a></li>
                                            </template>
                                            <template v-else>
                                                <li><router-link to="/login" class="dropdown-item">Login</router-link></li>
                                                <li class="dropdown-submenu">
                                                    <a class="dropdown-item d-flex justify-content-between align-items-center" href="#">Register <i class="fa-solid fa-chevron-right fs-12"></i></a>
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

                            <!-- Mobile full-screen overlay menu -->
                            <Teleport to="body">
                                <div class="mobile-menu-overlay" :class="{ 'is-open': isMobileMenuOpen }">
                                    <div class="mobile-menu-header">
                                        <router-link to="/" class="mobile-logo-link">
                                            <img src="/images/logo.webp" alt="ECR" class="h-40px">
                                        </router-link>
                                        <button class="mobile-menu-close" @click="toggleMobileMenu" aria-label="Close menu">
                                            <i class="fa-solid fa-xmark"></i>
                                        </button>
                                    </div>
                                    <ul class="mobile-nav-list">
                                        <li class="mobile-nav-item">
                                            <div class="mobile-nav-row" @click="toggleDropdown('services')">
                                                <router-link to="/services" class="mobile-nav-link">Services</router-link>
                                                <i class="fa-solid fa-angle-down mobile-nav-arrow" :class="{ 'rotated': openDropdown === 'services' }"></i>
                                            </div>
                                            <ul v-show="openDropdown === 'services'" class="mobile-sub-menu">
                                                <li><router-link to="/services/education-training">Education & Training</router-link></li>
                                                <li><router-link to="/services/software-development">Software Development</router-link></li>
                                                <li><router-link to="/services/data-analytics">Data Analytics</router-link></li>
                                                <li><router-link to="/services/it-strategy-consulting">IT Strategy & Consulting</router-link></li>
                                                <li><router-link to="/services/graphics-designing">Graphics Designing</router-link></li>
                                                <li><router-link to="/services/cyber-security-solution">Cyber Security Solution</router-link></li>
                                            </ul>
                                        </li>
                                        <li class="mobile-nav-item">
                                            <div class="mobile-nav-row" @click="toggleDropdown('products')">
                                                <span class="mobile-nav-link">Our Products</span>
                                                <i class="fa-solid fa-angle-down mobile-nav-arrow" :class="{ 'rotated': openDropdown === 'products' }"></i>
                                            </div>
                                            <ul v-show="openDropdown === 'products'" class="mobile-sub-menu">
                                                <li><a href="https://ecracademy.com">ECR Academy</a></li>
                                                <li><a href="#">Bookamia</a></li>
                                                <li><a href="https://checkartisans.com">CheckArtisans</a></li>
                                                <li><a href="https://qikpharma.com">QikPharma</a></li>
                                                <li><a href="https://jacanabuilders.com">Jacana Builders</a></li>
                                                <li><a href="https://ecrschools.com/">Ecr Schools</a></li>
                                            </ul>
                                        </li>
                                        <li class="mobile-nav-item">
                                            <a href="https://ecracademy.com" class="mobile-nav-link">Education & Training</a>
                                        </li>
                                        <li class="mobile-nav-item">
                                            <div class="mobile-nav-row" @click="toggleDropdown('insights')">
                                                <router-link to="/insights/news" class="mobile-nav-link">Insights</router-link>
                                                <i class="fa-solid fa-angle-down mobile-nav-arrow" :class="{ 'rotated': openDropdown === 'insights' }"></i>
                                            </div>
                                            <ul v-show="openDropdown === 'insights'" class="mobile-sub-menu">
                                                <li><router-link to="/insights/news">News</router-link></li>
                                                <li><router-link to="/insights/case-studies">Case Studies</router-link></li>
                                                <li><router-link to="/insights/white-papers">White Papers</router-link></li>
                                                <li><router-link to="/insights/trends">Trends</router-link></li>
                                            </ul>
                                        </li>
                                        <li class="mobile-nav-item">
                                            <div class="mobile-nav-row" @click="toggleDropdown('about')">
                                                <router-link to="/about" class="mobile-nav-link">About</router-link>
                                                <i class="fa-solid fa-angle-down mobile-nav-arrow" :class="{ 'rotated': openDropdown === 'about' }"></i>
                                            </div>
                                            <ul v-show="openDropdown === 'about'" class="mobile-sub-menu">
                                                <li><router-link to="/about/company-overview">Company Overview</router-link></li>
                                                <li><router-link to="/about/our-teams">Our Team</router-link></li>
                                                <li><router-link to="/about/partners">Partners</router-link></li>
                                                <li><router-link to="/about/careers">Careers</router-link></li>
                                            </ul>
                                        </li>
                                        <li class="mobile-nav-item">
                                            <div class="mobile-nav-row" @click="toggleDropdown('account')">
                                                <span class="mobile-nav-link"><i class="fas fa-user-circle me-2"></i>Account</span>
                                                <i class="fa-solid fa-angle-down mobile-nav-arrow" :class="{ 'rotated': openDropdown === 'account' }"></i>
                                            </div>
                                            <ul v-show="openDropdown === 'account'" class="mobile-sub-menu">
                                                <template v-if="isAuthenticated">
                                                    <li><router-link to="/dashboard/blogs">All Blogs</router-link></li>
                                                    <li v-if="user?.is_admin"><router-link to="/dashboard/categories">All Categories</router-link></li>
                                                    <li v-if="user?.is_admin"><router-link to="/dashboard/users">All Users</router-link></li>
                                                    <li v-if="user?.is_admin"><router-link to="/dashboard/newsletter">Send Newsletter</router-link></li>
                                                    <li><router-link to="/dashboard/profile">Profile</router-link></li>
                                                    <li><a href="#" @click.prevent="handleLogout">Log Out</a></li>
                                                </template>
                                                <template v-else>
                                                    <li><router-link to="/login">Login</router-link></li>
                                                    <li><router-link :to="{ name: 'GuestRegister', query: { type: 'learner' } }">Register as Learner</router-link></li>
                                                    <li><router-link :to="{ name: 'GuestRegister', query: { type: 'partner' } }">Register as Partner</router-link></li>
                                                </template>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </Teleport>
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
import { onMounted, ref, watch } from 'vue';
import { useAuth } from '../composables/useAuth';
import { useRouter, useRoute } from 'vue-router';

const { isAuthenticated, logout, getUser, user } = useAuth();
const router = useRouter();
const route = useRoute();
const isUserDropdownOpen = ref(false);
const isMobileMenuOpen = ref(false);
const openDropdown = ref(null);

const toggleMobileMenu = () => {
    isMobileMenuOpen.value = !isMobileMenuOpen.value;
    if (!isMobileMenuOpen.value) openDropdown.value = null;
};

const toggleDropdown = (name) => {
    openDropdown.value = openDropdown.value === name ? null : name;
};

// Close menu on route change
watch(() => route.path, () => {
    isMobileMenuOpen.value = false;
    openDropdown.value = null;
});

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
/* Desktop dropdown submenu */
.dropdown-submenu {
    position: relative;
}
.dropdown-submenu .dropdown-menu {
    top: 0;
    left: 100%;
    margin-top: 0;
    margin-left: -1px;
    display: none !important;
    position: absolute;
    z-index: 1000;
}
.dropdown-submenu:hover > .dropdown-menu {
    display: block !important;
}
.dropdown-submenu:after {
    content: "";
    position: absolute;
    top: 0;
    left: 100%;
    height: 100%;
    width: 20px;
    background: transparent;
    z-index: 10;
}
.dropdown-menu {
    overflow: visible !important;
}

/* ── Mobile full-screen overlay ── */
.mobile-menu-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: #2E3844;
    z-index: 99999;
    overflow-y: auto;
    transform: translateY(-100%);
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    padding: 0 0 40px;
}
.mobile-menu-overlay.is-open {
    transform: translateY(0);
}

/* Header row inside overlay */
.mobile-menu-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 24px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.12);
}
.mobile-logo-link img {
    height: 40px;
    width: auto;
}
.mobile-menu-close {
    background: none;
    border: none;
    color: #fff;
    font-size: 24px;
    cursor: pointer;
    padding: 4px 8px;
    line-height: 1;
}
.mobile-menu-close:hover {
    color: #ccc;
}

/* Nav list */
.mobile-nav-list {
    list-style: none;
    margin: 0;
    padding: 0;
}
.mobile-nav-item {
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

/* Row with link + arrow */
.mobile-nav-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 24px;
    cursor: pointer;
}
.mobile-nav-link {
    color: #fff !important;
    font-size: 16px;
    font-weight: 600;
    text-decoration: none;
    letter-spacing: 0.3px;
    flex: 1;
}
.mobile-nav-link:hover {
    color: #ccc !important;
}
/* Plain anchor rows (no dropdown) */
.mobile-nav-item > a.mobile-nav-link {
    display: block;
    padding: 16px 24px;
    color: #fff !important;
    font-size: 16px;
    font-weight: 600;
    text-decoration: none;
}

/* Arrow icon */
.mobile-nav-arrow {
    color: #fff;
    font-size: 14px;
    transition: transform 0.3s ease;
    flex-shrink: 0;
    margin-left: 8px;
}
.mobile-nav-arrow.rotated {
    transform: rotate(180deg);
}

/* Sub-menu */
.mobile-sub-menu {
    list-style: none;
    margin: 0;
    padding: 0 0 8px 24px;
    background: rgba(0, 0, 0, 0.2);
}
.mobile-sub-menu li {
    padding: 0;
}
.mobile-sub-menu li a,
.mobile-sub-menu li :deep(a) {
    display: block;
    padding: 10px 16px;
    color: rgba(255, 255, 255, 0.82) !important;
    font-size: 14px;
    text-decoration: none;
    transition: color 0.2s;
}
.mobile-sub-menu li a:hover,
.mobile-sub-menu li :deep(a:hover) {
    color: #fff !important;
}
</style>