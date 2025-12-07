<template>
 
     <HeroSection />
    <!-- start banner slider -->
    <!-- <section class="p-0 position-relative border-bottom border-color-extra-medium-gray">
        <div class="container">
          
            <div class="row align-items-center">
                <div class="col-lg-6 icon-with-text-style-01 pt-40px pb-40px pe-8 lg-pe-15px xs-pb-30px border-end md-border-end-0 md-border-bottom border-color-extra-medium-gray" data-anime='{ "el": "childs", "translateX": [-30, 1], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue":200, "easing": "easeOutQuad" }'>
                    <div class="feature-box feature-box-left-icon-middle last-paragraph-no-margin">
                        <div class="feature-box-icon me-25px">
                            <img :src="'/images/logo.png'" class="h-65px" alt="">
                        </div>
                        <div class="feature-box-content">
                            <h6 class="text-dark-gray fw-400 mb-0 alt-font ls-minus-05px">Premier ICT Partner for <span class="text-decoration-line-bottom-medium">Digital Transformation</span></h6>
                            <p>Driving business excellence through expert ICT solutions.</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 pt-40px pb-40px xs-pt-30px ps-8 lg-ps-15px" data-anime='{ "el": "childs", "translateX": [30, 1], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue":200, "easing": "easeOutQuad" }'>
                    <h6 class="fw-400 mb-0 alt-font"><router-link to="http://portfolio.ecr-ts.com/" class="text-dark-gray text-dark-gray-hover">Check out our Portfolio<i class="bi bi-arrow-right align-middle icon-extra-medium position-relative top-3px md-top-0px ms-10px"></i></router-link></h6>
                </div>
            </div>
        </div>
    </section> -->
    <!-- end banner slider -->

       <!-- start section -->
    <section class="overlap-height bg-dark-gray text-white">
        <div class="container overlap-gap-section px-4">
            <div class="row justify-content-center align-items-center mb-6" data-anime='{ "el": "childs", "translateY": [30, 1], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue":200, "easing": "easeOutQuad" }'>
                <div class="col-auto pe-25px border-2 border-end border-color-white sm-border-end-0 sm-pe-15px">
                    <span class="fs-16 text-uppercase  fw-700 ls-1px">Our Services</span>
                </div>
                <div class="col-12 col-md-auto ps-25px sm-ps-15px text-center">
                    <h3 class="alt-font fw-400  ls-minus-1px mb-0">ECR Technology Services</h3>
                </div>
            </div>
            <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4 justify-content-center mb-4 service-grid" data-anime='{ "el": "childs", "translateY": [20, 0], "opacity": [0,1], "duration": 600, "delay": 300, "staggervalue": 300, "easing": "easeOutQuad" }'>
                <!-- start fancy text box item -->
                <div class="col">
                    <div class="services-box-style-01 hover-box mb-20px border border-color-white rounded-3 p-6">
                        <div class=" last-paragraph-no-margin text-center pt-3">
                            <h5 class="fs-25 fw-500  alt-font ">ECR Academy</h5>
                            <p class="lh-26">Education & Training.</p>
                        </div>
                    </div>
                </div>
                <!-- end fancy text box item -->
                <!-- start fancy text box item -->
                <div class="col">
                    <div class="services-box-style-01 hover-box mb-20px border border-color-white rounded-3">
                        <div class="p-25px last-paragraph-no-margin text-center">
                            <h5 class="fs-25 fw-500  alt-font">Software Development</h5>
                            <p class="lh-26">Software development transforms ideas into functional digital solutions through coding, testing, and innovation.</p>
                        </div>
                    </div>
                </div>
                <!-- end fancy text box item -->
                <!-- start fancy text box item -->
                <div class="col">
                    <div class="services-box-style-01 hover-box mb-20px border border-color-white rounded-3">
                        <div class="p-25px last-paragraph-no-margin text-center">
                            <h5 class="fs-25 fw-500  alt-font">Data Analytics
                            
                            </h5>
                            <p class="lh-26">Data analytics transforms raw information into actionable insights for smarter decision-making.</p>
                        </div>
                    </div>
                </div>
                <!-- end fancy text box item -->
                <!-- start fancy text box item -->
                <div class="col">
                    <div class="services-box-style-01 hover-box md-mb-20px border border-color-white rounded-3">
                        <div class="position-relative box-image border-radius-6px overflow-hidden">
                            
                        </div>
                        <div class="p-25px last-paragraph-no-margin text-center">
                            <h5 class="fs-25 fw-500  alt-font">IT Strategy & Consulting</h5>
                            <p class="lh-26">Comprehensive Managed IT Services tailored to optimize, protect, and grow your business</p>
                        </div>
                    </div>
                </div>
                <!-- end fancy text box item -->
                <!-- start fancy text box item -->
                <div class="col">
                    <div class="services-box-style-01 hover-box md-mb-20px border border-color-white rounded-3">
                        <div class="p-25px last-paragraph-no-margin text-center">
                            <h5 class="fs-25 fw-500  alt-font">Graphics Designing</h5>
                            <p class="lh-26">Creative graphic design services to elevate your brand identity.</p>
                        </div>
                    </div>
                </div>
                <!-- end fancy text box item -->
                <!-- start fancy text box item -->
                <div class="col">
                    <div class="services-box-style-01 hover-box border border-color-white rounded-3">
                        <div class="p-25px last-paragraph-no-margin text-center">
                            <h5 class="fs-25 fw-500  alt-font">Cyber Security Solution</h5>
                            <p class="lh-26">Comprehensive cyber security solutions to safeguard your data, systems, and reputation.</p>
                        </div>
                    </div>
                </div>
                <!-- end fancy text box item -->
            </div> 
            <!-- start pricing style -->
            <div class="row justify-content-between align-items-center mb-5 xs-mb-6">
                
            </div>
            <!-- end pricing style -->
            <div class="row">
                <div class="col-12 text-center" data-anime='{ "el": "childs", "translateY": [30, 1], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue":200, "easing": "easeOutQuad" }'>
                    <h6 class=" alt-font">We offer a wide range of services to help you achieve your business goals. <router-link to="/services" class="text-decoration-line-bottom-medium">Explore our services</router-link></h6>
                </div>
            </div>
        </div>
    </section>
    <!-- end section -->



        <!-- start section -->
        <section class="pt-4 pb-4">
           <div class="container">
                <div class="row row-cols-1 row-cols-lg-5 row-cols-md-3 row-cols-sm-2 clients-style-06 justify-content-center d-none d-sm-flex" data-anime='{ "el": "childs", "translateY": [-15, 0], "scale": [1.1, 1], "opacity": [0,1], "duration": 500, "delay": 100, "staggervalue": 300, "easing": "easeOutQuad" }'>
                    <div class="col client-box text-center md-mb-40px">
                        <a href=""><img :src="'/images/partners/auraportal_lixltc.png'" class="h-70px" alt=""></a>
                    </div>
                    <div class="col client-box text-center md-mb-40px">
                        <a href=""><img :src="'/images/partners/BCabs-logo_nndavy.png'" class="h-70px" alt=""></a>
                    </div>
                    <div class="col client-box text-center md-mb-40px">
                        <a href=""><img :src="'/images/partners/lms365_kq89rs.png'" class="h-70px" alt=""></a>
                    </div>
                    <div class="col client-box text-center sm-mb-40px">
                        <a href=""><img :src="'/images/partners/microsoft_yvhhkh.png'" class="h-70px" alt=""></a>
                    </div>
                    <div class="col client-box text-center">
                        <a href=""><img :src="'/images/partners/sharepoint_cqv5pe.png'" class="h-70px" alt=""></a>
                    </div>
                    </div>
                <div class="swiper clients-logo-swiper d-block d-sm-none">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide client-box text-center">
                            <a href=""><img :src="'/images/partners/auraportal_lixltc.png'" class="h-70px" alt=""></a>
                        </div>
                        <div class="swiper-slide client-box text-center">
                            <a href=""><img :src="'/images/partners/BCabs-logo_nndavy.png'" class="h-70px" alt=""></a>
                        </div>
                        <div class="swiper-slide client-box text-center">
                            <a href=""><img :src="'/images/partners/lms365_kq89rs.png'" class="h-70px" alt=""></a>
                        </div>
                        <div class="swiper-slide client-box text-center">
                            <a href=""><img :src="'/images/partners/microsoft_yvhhkh.png'" class="h-70px" alt=""></a>
                        </div>
                        <div class="swiper-slide client-box text-center">
                            <a href=""><img :src="'/images/partners/sharepoint_cqv5pe.png'" class="h-70px" alt=""></a>
                        </div>
                        </div>
                </div>
                 </div>
        </section>
        <!-- end section -->

    <!-- start banner slider -->
    <!-- <section class="p-0">
        <div class="container-fluid p-0"> 
            <div class="row align-items-center g-0">
                <div class="col-xl-6 col-lg-6 position-relative top-minus-2px md-mb-30px" data-anime='{ "effect": "slide", "color": "rgb(31,34,40)", "direction":"lr", "easing": "easeOutQuad", "duration": 600, "delay":500}'> 
                    <img :src="'/images/tech.jpg'" class="border-radius-rb-50px w-100" alt="">
                </div>
                <div class="col-xl-4 col-lg-6 offset-xl-1 lg-ps-15px lg-pe-15px text-center text-lg-start" data-anime='{ "el": "childs", "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay": 300, "staggervalue": 300, "easing": "easeOutQuad" }'> 
                    <span class="fs-16 text-uppercase text-gradient-san-blue-new-york-red fw-700 mb-10px ls-1px d-inline-block">About ECR</span>
                    <h2 class="alt-font fw-400 text-dark-gray w-95 xl-w-90 lg-w-100 ls-minus-1px">ECR Technology Services</h2>
                    <p class="mb-30px w-100 xl-w-90 lg-w-100 lg-mb-25px">ECR is an Information Communication Technology company incorporated in Nigeria in June 2012 under the Companies and Allied Matters Act 2004. We are a dynamic, ambitious and forward-thinking company. Our success has been built on our proven ability to help our clients align their business strategies with the appropriate IT strategies to achieve measurable outcomes. We offer a range of ICT consultancy services, including; IT Training, IT strategy and planning, business continuity planning, risk planning, information management, technology infrastructure design ....</p>
                    <div class="d-sm-flex align-items-center justify-content-center justify-content-lg-start">
                        <router-link to="/about" class="btn btn-large btn-dark-gray btn-hover-animation-switch btn-round-edge btn-box-shadow xs-me-20px xs-mb-10px">
<span> 
                                <span class="btn-text">Read More</span>
                                <span class="btn-icon"><i class="fa-solid fa-arrow-right fs-14"></i></span>
                                <span class="btn-icon"><i class="fa-solid fa-arrow-right fs-14"></i></span>
                            </span>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </section> -->
    <!-- end banner slider -->

 


    <!-- start section -->
    <!-- <section class="border-bottom border-color-extra-medium-gray pt-4 pb-4">
        <div class="container">
            <div class="row align-items-center row-cols-1 row-cols-lg-3 row-cols-md-2 justify-content-center" data-anime='{ "el": "childs", "translateX": [-20, 0], "opacity": [0,1], "duration": 600, "delay": 300, "staggervalue": 300, "easing": "easeOutQuad" }'>  
                <div class="col process-step-style-08 border-end border-color-extra-medium-gray d-flex justify-content-center sm-border-end-0 md-mb-40px">
                    <div class="process-step-item d-flex align-items-start">
                        <div class="process-step-icon-wrap d-flex align-items-center col-auto">
                            <span class="number text-dark-gray fs-26 alt-font">01</span>
                            <span class="progress-step-separator bg-base-color w-20px separator-line-2px d-block ms-15px"></span>
                        </div>
                        <div class="col process-content last-paragraph-no-margin ms-15px">
                            <span class="d-block text-dark-gray fs-24 alt-font">Excellent care</span>
                            <p>No compromises</p>
                        </div>
                    </div> 
                </div>
              
                <div class="col process-step-style-08 border-end border-color-extra-medium-gray d-flex justify-content-center md-border-end-0 md-mb-40px">
                    <div class="process-step-item d-flex align-items-start">
                        <div class="process-step-icon-wrap d-flex align-items-center col-auto">
                            <span class="number text-dark-gray fs-26 alt-font">02</span>
                            <span class="progress-step-separator bg-base-color w-20px separator-line-2px d-block ms-15px"></span>
                        </div>
                        <div class="col process-content last-paragraph-no-margin ms-15px">
                            <span class="d-block text-dark-gray fs-24 alt-font">Cruelty free</span>
                            <p>No tested on animals</p>
                        </div>
                    </div> 
                </div>
               
                <div class="col process-step-style-08 d-flex justify-content-center">
                    <div class="process-step-item d-flex align-items-start">
                        <div class="process-step-icon-wrap d-flex align-items-center col-auto">
                            <span class="number text-dark-gray fs-26 alt-font">03</span>
                            <span class="progress-step-separator bg-base-color w-20px separator-line-2px d-block ms-15px"></span>
                        </div>
                        <div class="col process-content last-paragraph-no-margin ms-15px">
                            <span class="d-block text-dark-gray fs-24 alt-font">Certified experts</span>
                            <p>Professional people</p>
                        </div>
                    </div> 
                </div>
               
            </div>
        </div>
    </section> -->
    <!-- end section -->
 


    <!-- start section -->
     <!----- bg-gradient-solitude-blue-fair-pink ---->
    <!-- <section class=""> 
        <div class="container">
          
            <div class="row justify-content-center align-items-center mb-5 sm-mb-30px" data-anime='{ "el": "childs", "translateY": [30, 1], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue":200, "easing": "easeOutQuad" }'>
                <div class="col-auto pe-25px border-2 border-end border-color-dark-gray sm-border-end-0 sm-pe-15px">
                    <span class="fs-16 text-uppercase text-gradient-san-blue-new-york-red fw-700 ls-1px">Our Products</span>
                </div>
                <div class="col-12 col-md-auto ps-25px sm-ps-15px text-center">
                    <h3 class="alt-font fw-400 text-dark-gray ls-minus-1px mb-0">ECR Technology Products</h3>
                </div>
            </div>
            <div class="row row-cols-1 row-cols-lg-4 row-cols-md-4 clients-style-04" data-anime='{"opacity": [0,1], "duration": 400, "delay": 300, "staggervalue": 300, "easing": "easeOutQuad" }'>
                <div class="col text-center border-end border-bottom border-color-transparent-dark-very-light sm-border-end-0 transition-inner-all pt-40px pb-40px sm-pt-30px sm-pb-30px">
                    <div class="client-box">
                        <a href="#"><img :src="'/images/products/qik.png'" alt="" /></a>
                    </div>
                </div>
               
                <div class="col text-center border-end border-bottom border-color-transparent-dark-very-light sm-border-end-0 transition-inner-all pt-40px pb-40px sm-pt-30px sm-pb-30px">
                    <div class="client-box">
                        <a href="#"><img :src="'/images/products/bcabs.png'" alt="" /></a>
                    </div>
                </div>
              
                <div class="col text-center border-end border-bottom border-color-transparent-dark-very-light sm-border-end-0 transition-inner-all pt-40px pb-40px sm-pt-30px sm-pb-30px">
                    <div class="client-box">
                        <a href="#"><img :src="'/images/products/Bookamia1.png'" alt="" /></a>
                    </div>
                </div>
                
                <div class="col text-center border-bottom border-color-transparent-dark-very-light sm-border-end-0 transition-inner-all pt-40px pb-40px sm-pt-30px sm-pb-30px">
                    <div class="client-box">
                        <a href="#"><img :src="'/images/products/jacana.png'" alt="" width="150px" /></a>
                    </div>
                </div>
                
                <div class="col text-center border-end border-color-transparent-dark-very-light sm-border-end-0 sm-border-bottom transition-inner-all pt-40px pb-40px sm-pt-30px sm-pb-30px">
                    <div class="client-box">
                        <a href="#"><img :src="'/images/products/checkartisan.png'" alt="" /></a>
                    </div>
                </div>
                
                <div class="col text-center border-end border-color-transparent-dark-very-light sm-border-end-0 sm-border-bottom transition-inner-all pt-40px pb-40px sm-pt-30px sm-pb-30px">
                    <div class="client-box">
                        <a href="#"><img :src="'/images/products/ecr_academy.png'" alt="" /></a>
                    </div>
                </div>
                
                <div class="col text-center border-end border-color-transparent-dark-very-light sm-border-end-0 sm-border-bottom transition-inner-all pt-40px pb-40px sm-pt-30px sm-pb-30px">
                    <div class="client-box">
                    </div>
                </div>
                
                <div class="col text-center transition-inner-all pt-40px pb-40px">
                    <div class="client-box">
                    </div>
                </div>
            </div>
        </div>
    </section> -->
    <!-- end section -->
     
    <!-- start section -->
    <!-- <section class="cover-background p-0" style="background-image: url('/images/gradient.png')">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 align-self-end order-2 order-lg-1" data-anime='{ "el": "childs", "translateY": [100, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'>
                    <div class="outside-box-left-5 outside-box-right-5">
                        <img :src="'/images/laptop.png'"   alt="">
                    </div>
                </div>
                <div class="col-xl-5 col-lg-6 offset-xl-1 pt-8 pb-10 align-self-end order-1 order-lg-2" data-anime='{ "el": "childs", "translateY": [50, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'>
                    <span class="fs-16 text-uppercase text-base-color fw-600 mb-20px d-inline-block ls-2px">Our Core Services</span>
                    <h2 class="alt-font fw-400 text-white">Driving Digital Transformation.</h2>
                    <div class="accordion accordion-style-02 mb-25px xs-mb-15px" id="accordion-style-02" data-active-icon="icon-feather-minus" data-inactive-icon="icon-feather-plus">
                        <div class="accordion-item active-accordion">
                            <div class="accordion-header border-bottom border-color-transparent-white-light">
                                <a href="#" data-bs-toggle="collapse" data-bs-target="#accordion-style-02-01" aria-expanded="true" data-bs-parent="#accordion-style-02">
                                    <div class="accordion-title mb-0 position-relative text-white">
                                        <i class="fa-solid fa-arrow-right fs-14 "></i><span class="fw-500 fs-19">Business Process Management</span>
                                    </div>
                                </a>
                            </div>
                            <div id="accordion-style-02-01" class="accordion-collapse collapse show" data-bs-parent="#accordion-style-02">
                                <div class="accordion-body last-paragraph-no-margin border-bottom border-color-transparent-white-light">
                                    <p class="text-white opacity-5">We help businesses streamline their operations and improve efficiency with our Business Process Management solutions, powered by AuraQuantic iBPMS.</p>
                                </div>
                            </div>
                        </div>
                     
                        <div class="accordion-item">
                            <div class="accordion-header">
                                <a href="#" data-bs-toggle="collapse" data-bs-target="#accordion-style-02-02" aria-expanded="false" data-bs-parent="#accordion-style-02">
                                    <div class="accordion-title mb-0 position-relative text-white">
                                        <i class="fa-solid fa-arrow-right fs-14 "></i><span class="fw-500 fs-19">Learning Management Systems</span>
                                    </div>
                                </a>
                            </div>
                            <div id="accordion-style-02-02" class="accordion-collapse collapse" data-bs-parent="#accordion-style-02">
                                <div class="accordion-body last-paragraph-no-margin">
                                    <p class="text-white opacity-5">We provide and implement Learning Management Systems (LMS) using Learn365 to enhance corporate training and development.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a href="#" class="btn btn-large btn-base-color btn-hover-animation-switch btn-round-edge btn-box-shadow">
                        <span>
                            <span class="btn-text">Contact Us</span>
                        </span>
                    </a>
                </div>
            </div>
        </div>
    </section> -->
    <!-- end section -->


    <!-- start section -->
    <!-- <section class="p-0 border-bottom border-color-extra-medium-gray">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-xl-3 col-lg-4 md-mt-30px text-center text-lg-start">
                    <h5 class="alt-font text-dark-gray mb-0">Our Expertise</h5>
                </div>
                <div class="col-xl-9 col-lg-8 p-45px border-start border-color-extra-medium-gray text-center md-border-start-0 md-pt-15px md-pb-30px sm-ps-0 sm-pe-0">
                    <div class="swiper slider-one-slide magic-cursor" data-slider-options='{ "slidesPerView": 1, "loop": true, "pagination": { "el": ".slider-one-slide-pagination", "clickable": true }, "autoplay": { "delay": 3000, "disableOnInteraction": false }, "navigation": { "nextEl": ".swiper-button-next-nav", "prevEl": ".swiper-button-previous-nav" }, "keyboard": { "enabled": true, "onlyInViewport": true }, "effect": "slide" }'>
                        <div class="swiper-wrapper">
                            <div class="swiper-slide pe-60px ps-60px">
                                <div class="h-100 d-flex justify-content-center align-items-center flex-column">
                                    <div class="fs-20"><span class="text-dark-gray fw-600">AuraQuantic iBPMS:</span> We are experts in business process automation using AuraQuantic iBPMS.</div>
                                </div>
                            </div>
                            
                            <div class="swiper-slide pe-60px ps-60px">
                                <div class="h-100 d-flex justify-content-center align-items-center flex-column">
                                    <div class="fs-20"><span class="text-dark-gray fw-600">Learn365:</span> We provide seamless learning experiences on Microsoft 365 & Teams using Learn365.</div>
                                </div>
                            </div>
                          
                            <div class="swiper-slide pe-60px ps-60px">
                                <div class="h-100 d-flex justify-content-center align-items-center flex-column">
                                    <div class="fs-20"><span class="text-dark-gray fw-600">Data Analytics:</span> We offer data analytics training and consultancy to help you make sense of your data.</div>
                                </div>
                            </div>
                        </div>
                        <div class="swiper-button-previous-nav swiper-button-prev"><i class="bi bi-arrow-left icon-extra-medium text-dark-gray d-flex"></i></div>
                        <div class="swiper-button-next-nav swiper-button-next"><i class="bi bi-arrow-right icon-extra-medium text-dark-gray d-flex"></i></div>
                    </div>
                </div>
            </div>
        </div>
    </section> -->
    <!-- end section -->



        <!-- start section -->
        <!-- <section class="overlap-height position-relative">
            <div class="container overlap-gap-section"> 
                <div class="row mb-3">
                    <div class="col-12 col-xl-10" data-anime='{ "el": "childs", "translateY": [0, 0], "opacity": [0,1], "duration": 300, "delay": 0, "staggervalue": 150, "easing": "easeOutQuad" }'>
                        <h2 class="text-dark-gray fw-600 alt-font ls-minus-3px w-95 sm-w-100">Providing robust and scalable solutions.</h2>
                    </div>
                </div>
                <div class="row row-cols-1 row-cols-lg-4 row-cols-sm-2 justify-content-center text-center" data-anime='{ "el": "childs", "translateY": [15, 0], "opacity": [0,1], "duration": 800, "delay": 200, "staggervalue": 300, "easing": "easeOutQuad" }'>
                    <div class="col icon-with-text-style-11 border-0 overflow-visible md-mb-30px sm-mb-15px">
                        <div class="text-box-wrapper align-items-center d-flex position-relative overflow-hidden border-radius-6px">
                            <div class="text-center w-100">
                                <div class="text-box last-paragraph-no-margin p-15 xxl-p-10 lg-p-5">
                                    <img :src="'/images/it_strategy.png'" class="mb-30px d-block mx-auto" alt=""/> 
                                    <span class="text-dark-gray fw-600 fs-19">IT Strategy & Planning</span>
                                    <p>We help you align your business strategies with the appropriate IT strategies to achieve measurable outcomes.</p>
                                </div>
                                <div class="text-box-hover bg-dark-gray h-100 d-flex align-items-center justify-content-center flex-column">
                                    <p class="d-inline-block w-70 mb-10px text-white opacity-5 lg-w-90">Align your IT and business strategies for success.</p>
                                    <span class="fw-500 fs-19 text-white mb-20px">Strategy</span> 
                                </div>
                            </div>
                        </div>
                    </div> 
                
                    <div class="col icon-with-text-style-11 border-0 overflow-visible md-mb-30px sm-mb-15px">
                        <div class="text-box-wrapper align-items-center d-flex position-relative overflow-hidden border-radius-6px">
                            <div class="text-center w-100">
                                <div class="text-box last-paragraph-no-margin p-15 p-15 xxl-p-10 lg-p-5">
                                    <img :src="'/images/business.png'" class="mb-30px d-block mx-auto" alt=""/> 
                                    <span class="text-dark-gray fw-600 fs-19">Business Continuity</span> 
                                    <p>We provide business continuity planning and risk planning to ensure your business can operate in the event of a disaster.</p>
                                </div>
                                <div class="text-box-hover bg-dark-gray h-100 d-flex align-items-center justify-content-center flex-column">
                                    <p class="d-inline-block w-70 mb-10px text-white opacity-5 lg-w-90">Ensure your business is resilient to disruptions.</p>
                                    <span class="fw-500 fs-19 text-white mb-20px">Resilience</span> 
                                </div>
                            </div>
                        </div>
                    </div> 
                   
                    <div class="col icon-with-text-style-11 border-0 overflow-visible sm-mb-15px">
                        <div class="text-box-wrapper align-items-center d-flex position-relative overflow-hidden border-radius-6px">
                            <div class="text-center w-100">
                                <div class="text-box last-paragraph-no-margin p-15 p-15 xxl-p-10 lg-p-5">
                                    <img :src="'/images/infrastructure.png'" class="mb-30px d-block mx-auto" alt=""/> 
                                    <span class="text-dark-gray fw-600 fs-19">Infrastructure Design</span> 
                                    <p>We design and implement technology infrastructure to support your business goals.</p>
                                </div>
                                <div class="text-box-hover bg-dark-gray h-100 d-flex align-items-center justify-content-center flex-column">
                                    <p class="d-inline-block w-70 mb-10px text-white opacity-5 lg-w-90">Future-proof your business with a robust IT infrastructure.</p>
                                    <span class="fw-500 fs-19 text-white mb-20px">Infrastructure</span> 
                                </div>
                            </div>
                        </div>
                    </div> 
                    
                    <div class="col icon-with-text-style-11 border-0 overflow-visible">
                        <div class="text-box-wrapper align-items-center d-flex position-relative overflow-hidden border-radius-6px">
                            <div class="text-center w-100">
                                <div class="text-box last-paragraph-no-margin p-15 p-15 xxl-p-10 lg-p-5">
                                    <img :src="'/images/application.png'" class="mb-10px d-block mx-auto" alt=""/> 
                                    <span class="text-dark-gray fw-600 fs-19">Application Development</span> 
                                    <p>We develop custom applications to meet your specific business needs.</p>
                                </div>
                                <div class="text-box-hover bg-dark-gray h-100 d-flex align-items-center justify-content-center flex-column">
                                    <p class="d-inline-block w-70 mb-10px text-white opacity-5 lg-w-90">Custom applications to power your business.</p>
                                    <span class="fw-500 fs-19 text-white mb-20px">Development</span> 
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </section> -->
        <!-- end section --> 

        <!-- start section -->
        <!-- <section class="bg-dark-gray ">
            <div class="container overlap-section">
                <div class="row mb-8 g-0" data-anime='{"el": "childs", "translateY": [30, 0], "perspective": [1200,1200], "scale": [1.05, 1], "rotateX": [30, 0], "opacity": [0,1], "duration": 800, "delay": 200, "staggervalue": 300, "easing": "easeOutQuad" }'>
                    <div class="col-12 cover-background position-relative one-third-screen p-50px sm-p-30px overlap-image" style="background-image: url(/images/staff.jpg)">
                        <div class="row justify-content-end align-items-end h-100 g-0">
                            <div class="col-12 col-lg-6 col-md-8 progress-bar-style-01 bg-base-color">
                                <div class="p-14 lg-p-10">
                                    <div class="mb-20">
                                        <h4 class="alt-font text-dark-gray fw-600 ls-minus-2px">Highly experienced</h4>
                                    </div>
                                    <div class="progress mb-16 md-mb-60px bg-dark-gray-transparent-light">
                                        <div class="progress-bar-title d-inline-block text-dark-gray fs-16 fw-500">IT Consultants</div>
                                        <div class="progress-bar bg-dark-gray" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" aria-label="web-design">
                                            <span class="progress-bar-percent text-center bg-dark-gray fs-11 lh-12 text-white">100%</span>
                                        </div>
                                    </div>
                                    <div class="progress mb-16 md-mb-60px bg-dark-gray-transparent-light">
                                        <div class="progress-bar-title d-inline-block text-dark-gray fs-16 fw-500">Web Developers</div>
                                        <div class="progress-bar bg-dark-gray" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" aria-label="web-development">
                                            <span class="progress-bar-percent text-center bg-dark-gray fs-11 lh-12 text-white">100%</span>
                                        </div>
                                    </div>
                                    <div class="progress bg-dark-gray-transparent-light">
                                        <div class="progress-bar-title d-inline-block text-dark-gray fs-16 fw-500">Problem Solvers</div>
                                        <div class="progress-bar bg-dark-gray" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" aria-label="e-commerce-solutions">
                                            <span class="progress-bar-percent text-center bg-dark-gray fs-11 lh-12 text-white">100%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container"> 
                <div class="row mb-7 sm-mb-50px">
                    <div class="col-12 col-xl-9">
                        <h2 class="text-white fw-500 ls-minus-2px mb-0 alt-font">A trusted partner for your digital transformation journey.</h2>
                    </div>
                </div>
                <div class="row mb-6 sm-mb-30px">
                    <div class="col-12" data-anime='{ "el": "childs", "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'>
                        <div class="row align-items-center pt-40px g-0 pb-40px border-top border-bottom border-color-dark-gray position-relative">
                            <div class="col-md-1 text-start text-md-center sm-mb-20px">
                                <span class="fs-18 alt-font text-white">01</span>
                            </div>
                            <div class="col-md-5 offset-md-1 d-flex align-items-center sm-mb-20px">
                                <i class="fa-solid fa-chalkboard-teacher text-base-color icon-large me-20px"></i>
                                <span class="text-white fw-500 fs-30 alt-font">IT Training</span>
                            </div>
                            <div class="col-md-5 last-paragraph-no-margin">
                                <p>We offer a wide range of IT training programs to help you and your team stay ahead of the curve.</p>
                            </div>
                        </div>
                        <div class="row align-items-center pt-40px g-0 pb-40px border-bottom border-color-dark-gray position-relative">
                            <div class="col-md-1 text-start text-md-center sm-mb-20px">
                                <span class="fs-18 alt-font text-white">02</span>
                            </div>
                            <div class="col-md-5 offset-md-1 d-flex align-items-center sm-mb-20px flex-wrap">
                                <i class="fa-solid fa-user-tie text-base-color icon-large me-20px"></i>
                                <span class="text-white fw-500 fs-30 alt-font me-15px">IT Consultancy</span>
                            </div>
                            <div class="col-md-5 last-paragraph-no-margin">
                                <p>Our expert consultants provide strategic guidance to help you make the right IT decisions for your business.</p>
                            </div>
                        </div>
                        <div class="row align-items-center pt-40px g-0 pb-40px border-bottom border-color-dark-gray position-relative">
                            <div class="col-md-1 text-start text-md-center sm-mb-20px">
                                <span class="fs-18 alt-font text-white">03</span>
                            </div>
                            <div class="col-md-5 offset-md-1 d-flex align-items-center sm-mb-20px">
                                <i class="fa-solid fa-project-diagram text-base-color icon-large me-20px"></i>
                                <span class="text-white fw-500 fs-30 alt-font">Project Management</span>
                            </div>
                            <div class="col-md-5 last-paragraph-no-margin">
                                <p>We provide comprehensive project management services to ensure your IT projects are delivered on time and within budget.</p>
                            </div>
                        </div>
                        <div class="row align-items-center pt-40px g-0 pb-40px border-bottom border-color-dark-gray position-relative">
                            <div class="col-md-1 text-start text-md-center sm-mb-20px">
                                <span class="fs-18 alt-font text-white">04</span>
                            </div>
                            <div class="col-md-5 offset-md-1 d-flex align-items-center sm-mb-20px">
                                <i class="fa-solid fa-laptop-code text-base-color icon-large me-20px"></i>
                                <span class="text-white fw-500 fs-30 alt-font">Application Development</span>
                            </div>
                            <div class="col-md-5 last-paragraph-no-margin">
                                <p>We design, develop, and deploy custom applications to meet your unique business requirements.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-lg-12 col-md-10 text-center" data-anime='{ "el": "childs", "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'> 
                        <div class="text-white fs-20">Ready to start your digital transformation journey? <a href="demo-digital-agency-contact.html" class="text-base-color text-decoration-line-bottom">Contact us now</a></div>
                    </div>
                </div>
            </div>
        </section> -->
        <!-- end section -->

        <!-- start page title -->
        <section class="pb-0 md-pt-0 bg-dark-gray pt-0">
            <div class="container">
                <div class="row align-items-center justify-content-center">
                    <div class="col-12 col-xl-6 col-lg-8 text-center position-relative page-title-double-large">
                        <div class="d-flex flex-column justify-content-center extra-very-small-screen">
                            <h1 class="text-white alt-font ls-minus-1px fw-700">Featured Insights</h1>
                            <!-- <h2 class="text-white d-inline-block fw-400 ls-0px w-80 xs-w-100 mx-auto"></h2>  -->
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- end page title -->

             <!-- start section -->
      <section class="pt-0 ps-11 pe-11 xl-ps-2 xl-pe-2 bg-dark-gray pb-0"> 
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12 swiper insights-swiper">
                        <div class="swiper-wrapper">
                           
                            <!-- start blog item -->
                            <div v-if="loading" class="swiper-slide text-center">
                                <div class="spinner-border text-white" role="status">
                                    <span class="visually-hidden">Loading...</span>
                                </div>
                            </div>
                            <div v-else-if="blogs.length === 0" class="swiper-slide text-center">
                                <p class="text-white">No blogs found.</p>
                            </div>
                            <div v-for="blog in blogs" :key="blog.id" class="swiper-slide">
                                <div class="card border-0 border-radius-4px box-shadow-extra-large box-shadow-extra-large-hover">
                                    <div class="blog-image">
                                        <router-link :to="`/insights/${blog.slug}`" class="d-block"><img :src="blog.image" alt="" /></router-link>
                                        <div class="blog-categories">
                                            <a href="#" class="categories-btn bg-white text-dark-gray text-dark-gray-hover text-uppercase alt-font fw-700">{{ blog.category.name }}</a>
                                        </div>
                                    </div>
                                    <div class="card-body p-12">
                                        <router-link :to="`/insights/${blog.slug}`" class="card-title mb-15px fw-600 fs-17 lh-26 text-dark-gray d-inline-block blog-title-link">{{ blog.title }}</router-link>
                                        <div class="author d-flex justify-content-center align-items-center position-relative overflow-hidden fs-14 text-uppercase">
                                            <div class="me-auto">
                                                <span class="blog-date fw-500 d-inline-block">{{ formatDate(blog.createdAt || blog.created_at) }}</span>
                                                <div class="d-inline-block author-name">By <a href="#" class="text-dark-gray text-decoration-line-bottom fw-600 author-link">{{ blog.user.name }}</a></div>
                                            </div>
                                            <!-- <div class="like-count">
                                                <a href="#"><i class="fa-regular fa-heart text-red d-inline-block"></i><span class="text-dark-gray align-middle fw-600">{{ blog.likes_count }}</span></a>
                                            </div>   -->
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- end blog item -->
                        </div>
                        <div class="swiper-pagination"></div>
                        <div class="swiper-button-prev"></div>
                        <div class="swiper-button-next"></div>
                    </div>
                </div>  
            </div>
        </section>
        <!-- end section -->

           <!-- start section --> 
    <section class="position-relative overflow-hidden pt-0 mt-60px"> 
        <div class="container"> 
            <div class="row" data-anime='{"el": "childs", "translateY": [0, 0], "opacity": [0,1], "duration": 1200, "delay": 0, "staggervalue": 150, "easing": "easeOutQuad" }'>
                <div class="col-xl-3 col-lg-4 md-mb-35px text-center text-lg-start" style="position: relative; z-index: 100;"> 
                    <span class="fs-16 text-uppercase text-gradient-san-blue-new-york-red fw-700 ls-1px mb-5px d-inline-block">Testimonial</span>
                    <h4 class="alt-font fw-400 text-dark-gray ls-minus-1px">Our happy clients.</h4>
                    <div class="d-flex justify-content-center justify-content-lg-start" style="position: relative; z-index: 100;">
                        <!-- start slider navigation -->
                        <button @click="prevTestimonial" @mousedown.stop @touchstart.stop class="testimonial-nav-btn border border-color-extra-medium-gray bg-transparent p-2 me-2" type="button" style="position: relative; z-index: 1000;">
                            <i class="bi bi-arrow-left-short icon-very-medium text-dark-gray"></i>
                        </button>
                        <button @click="nextTestimonial" @mousedown.stop @touchstart.stop class="testimonial-nav-btn border border-color-extra-medium-gray bg-transparent p-2" type="button" style="position: relative; z-index: 1000;">
                            <i class="bi bi-arrow-right-short icon-very-medium text-dark-gray"></i>
                        </button>
                        <!-- end slider navigation -->
                    </div>
                </div>
                <div class="col-xl-9 col-lg-8 review-style-10 position-relative ps-4 lg-ps-15px">
                    <div class="outside-box-right-25 sm-outside-box-right-0">
                        <div class="testimonial-slider-container">
                            <div class="testimonial-slider-wrapper" :style="{ transform: `translateX(-${currentTestimonialIndex * (100 / slidesPerView)}%)` }">
                                <div 
                                    v-for="(testimonial, index) in testimonials" 
                                    :key="index"
                                    class="testimonial-slide"
                                    :style="{ width: `${100 / slidesPerView}%` }"
                                >
                                    <!-- start review item -->
                                    <div class="border border-color-extra-medium-gray border-radius-6px d-flex h-100">
                                        <div class="p-15px">
                                            <div class="vertical-title-center align-items-center">
                                                <div class="title fs-16 text-dark-gray fw-700 text-uppercase ls-1px">{{ testimonial.name }}</div>
                                            </div>
                                        </div>
                                        <div class="p-40px border-start border-color-extra-medium-gray d-flex justify-content-center xs-p-25px">
                                            <div>
                                                <p class="mb-10px w-95 xl-w-100">{{ testimonial.message }}</p>
                                                <div class="text-gradient-san-blue-new-york-red d-inline-block fs-20">
                                                    <i v-for="n in 5" :key="n" class="bi bi-star-fill"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div> 
                                    <!-- end review item --> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- end section -->

     
    
    <!-- start section -->
    <!-- <section class="p-0 h-550px sm-h-auto position-relative">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.2740186539704!2d7.492721776010853!3d5.526302694453882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1042c3309977a607%3A0xbdf0153179e42eea!2sECR%20Technology%20services!5e0!3m2!1sen!2sng!4v1760698493872!5m2!1sen!2sng" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" class="position-absolute top-0 left-0"></iframe>
        <div class="container h-100 position-relative sm-pt-30px sm-pb-30px pointer-events-none" data-anime='{"translateX": [50, 0], "opacity": [0,1], "duration": 1200, "delay": 0, "staggervalue": 150, "easing": "easeOutQuad" }'>
            <div class="row h-100 align-items-end justify-content-end align-items-lg-center pointer-events-none">
                <div class="col-md-auto pointer-events-all"> 
                    <div class="bg-white box-shadow-quadruple-large w-380px md-w-300px sm-w-100 border-radius-6px md-mb-20px xs-mb-0">
                        <div class="ps-60px pe-60px pt-50px pb-40px md-p-30px text-center text-md-start">
                            <h4 class="alt-font text-dark-gray mb-10px">Contact us</h4>
                            <span class="text-dark-gray fw-600">ECR Technology Services</span>
                            <p class="w-80 mb-10px lh-30 sm-w-100">51 Macaulay Street, By Ikot Ekpene Road Umuahia Abia State, Nigeria</p>
                            <div class="w-100 d-block">
                                <span class="d-block"><span class="fw-600 text-dark-gray">Phone:</span> <a href="tel:+4401616696279" class="text-medium-gray">+44 0161 669 6279</a></span>
                                <span class="d-block"><span class="fw-600 text-dark-gray"></span> <a href="tel:+2348105568468" class="text-medium-gray">+234 810 556 8468</a></span>
                                <span class="d-block"><span class="fw-600 text-dark-gray">Email:</span> <a href="mailto:info@ecr-ts.com" class="text-dark-gray text-decoration-line-bottom fw-500">info@ecr-ts.com</a></span>
                            </div>
                        </div>
                        <div class="text-center pt-15px pb-15px border-top border-color-extra-medium-gray">
                            <a href="https://maps.app.goo.gl/c2ZRBYuumrNAhBC46" target="_blank" class="btn btn-link btn-hover-animation-switch btn-large text-dark-gray text-uppercase btn-icon-left fw-700 p-0">
                                <span>
                                    <span class="btn-text">Show on google maps</span>
                                    <span class="btn-icon"><i class="fa-solid fa-map-pin"></i></span>
                                    <span class="btn-icon"><i class="fa-solid fa-map-pin"></i></span>
                                </span> 
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section> -->
    <!-- end section -->

</template>

<script setup>
import HeroSection from '@/components/HeroSection.vue';
import { onMounted, ref, computed, onUnmounted } from 'vue';
import Swiper from 'swiper';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/bundle';
import api from '../services/api';

const blogs = ref([]);
const loading = ref(false);

// Testimonials data
const testimonials = ref([
    {
        name: 'Adebayo Adekunle',
        message: "ECR's expertise in business process management has been a game-changer for our organization. Their solutions are innovative and their support is top-notch."
    },
    {
        name: 'Chioma Okoro',
        message: 'The learning management system implemented by ECR has transformed our employee training. It\'s user-friendly, and the ECR team was incredibly supportive throughout the process.'
    },
    {
        name: 'Emeka Nwosu',
        message: 'We are extremely pleased with the web and mobile applications developed by ECR. They are professional, and delivered a high-quality product on time and within budget.'
    }
]);

const currentTestimonialIndex = ref(0);
const slidesPerView = ref(3);
let autoplayInterval = null;

// Calculate max index based on slides per view
const maxIndex = computed(() => {
    return Math.max(0, testimonials.value.length - slidesPerView.value);
});

// Update slides per view based on screen size
const updateSlidesPerView = () => {
    const width = window.innerWidth;
    if (width < 768) {
        slidesPerView.value = 1;
    } else if (width < 1024) {
        slidesPerView.value = 2;
    } else {
        slidesPerView.value = 3;
    }
    // Reset index if needed
    if (currentTestimonialIndex.value > maxIndex.value) {
        currentTestimonialIndex.value = maxIndex.value;
    }
};

const nextTestimonial = (e) => {
    if (e) {
        e.preventDefault();
        e.stopPropagation();
    }
    stopAutoplay(); // Pause autoplay when user interacts
    if (currentTestimonialIndex.value < maxIndex.value) {
        currentTestimonialIndex.value++;
    } else {
        currentTestimonialIndex.value = 0; // Loop back to start
    }
    // Restart autoplay after a delay
    setTimeout(() => {
        startAutoplay();
    }, 5000);
};

const prevTestimonial = (e) => {
    if (e) {
        e.preventDefault();
        e.stopPropagation();
    }
    stopAutoplay(); // Pause autoplay when user interacts
    if (currentTestimonialIndex.value > 0) {
        currentTestimonialIndex.value--;
    } else {
        currentTestimonialIndex.value = maxIndex.value; // Loop to end
    }
    // Restart autoplay after a delay
    setTimeout(() => {
        startAutoplay();
    }, 5000);
};

const startAutoplay = () => {
    autoplayInterval = setInterval(() => {
        nextTestimonial();
    }, 3000);
};

const stopAutoplay = () => {
    if (autoplayInterval) {
        clearInterval(autoplayInterval);
        autoplayInterval = null;
    }
};

const formatDate = (dateString) => {
    if (!dateString) return 'Invalid Date';
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return 'Invalid Date';
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
};

const initializeInsightsSwiper = (blogsCount) => {
  new Swiper('.insights-swiper', {
    modules: [Autoplay, Navigation, Pagination],
    loop: blogsCount >= 4, // Conditionally enable loop mode
    spaceBetween: 30,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 30
        }
    }
  });
};

const fetchBlogs = async () => {
    loading.value = true;
    try {
        const response = await api.get('/blogs');
        blogs.value = response.data;
        initializeInsightsSwiper(blogs.value.length); // Initialize Swiper after fetching blogs
    } catch (error) {
        console.error('Failed to fetch blogs:', error);
    } finally {
        loading.value = false;
    }
};

onMounted(() => {
  // Initialize clients logo swiper
  new Swiper('.clients-logo-swiper', {
    modules: [Autoplay],
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 1,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    speed: 4000,
  });

  fetchBlogs();

  // Initialize testimonial slider
  updateSlidesPerView();
  window.addEventListener('resize', updateSlidesPerView);
  startAutoplay();
});

onUnmounted(() => {
  stopAutoplay();
  window.removeEventListener('resize', updateSlidesPerView);
});
</script>

<style scoped>
.service-grid {
  display: flex; /* Ensure flex container */
  flex-wrap: wrap; /* Allow items to wrap */
  align-items: stretch; /* Make children equal height */
}

.service-grid > .col {
  display: flex; /* Make column a flex container */
}

.service-grid > .col > .services-box-style-01 {
  flex-grow: 1; /* Allow the service box to grow and fill the column height */
}

.service-grid > .col {
  transition: transform 0.3s ease-in-out, background-color 0.3s ease-in-out, color 0.3s ease-in-out, border-color 0.3s ease-in-out;
}

@media (min-width: 768px) {
.service-grid > .col:hover {
  transform: scale(0.95);
  background-color: white;
  color: black;
  border-color: black !important;
}

.service-grid > .col:hover .alt-font,
.service-grid > .col:hover p {
  color: black !important;
}

.text-decoration-line-bottom-medium:hover {
  color: white !important;
}
}

/* <-- ADDED: Styles for the new logo swiper --> */
.clients-logo-swiper .swiper-slide {
  width: auto; /* Lets swiper determine width based on content */
  max-width: 150px; /* Prevents logos from being too wide */
}

.clients-logo-swiper .swiper-wrapper {
  /* This makes the continuous scroll animation smooth */
  transition-timing-function: linear;
}

/* Add padding to the bottom of the slider to make space for pagination */
.insights-swiper {
  padding-bottom: 50px;
}

/* Style the pagination dots */
:deep(.insights-swiper-pagination.swiper-pagination-bullets .swiper-pagination-bullet) {
  background-color: #fff; /* Make dots white */
  opacity: 0.5;
}

:deep(.insights-swiper-pagination.swiper-pagination-bullets .swiper-pagination-bullet-active) {
  opacity: 1;
}

/* Style the navigation arrows */
:deep(.insights-swiper-prev),
:deep(.insights-swiper-next) {
  color: #fff; /* Make arrows white */
}

/* On small screens, the arrows can overlap the content. 
   This moves them down to the bottom, near the pagination dots. */
@media (max-width: 767px) {
  :deep(.insights-swiper-prev),
  :deep(.insights-swiper-next) {
    top: auto;
    bottom: 0px; /* Position at the bottom */
  }

  :deep(.insights-swiper-prev) {
    left: 30%; /* Adjust as needed */
  }

  :deep(.insights-swiper-next) {
    right: 30%; /* Adjust as needed */
  }
}
/* END: NEW STYLES */

/* Fix blog title and author link hover colors */
.blog-title-link {
  color: #1a1a1a !important;
  text-decoration: none;
  transition: color 0.3s ease;
}

.blog-title-link:hover {
  color: #1a1a1a !important;
  text-decoration: none;
}

.author-link {
  color: #1a1a1a !important;
  text-decoration: none;
  transition: color 0.3s ease;
}

.author-link:hover {
  color: #1a1a1a !important;
  text-decoration: underline;
}

/* Testimonial slider Vue-based styles */
.testimonial-slider-container {
  width: 100%;
  overflow: hidden;
  position: relative;
}

.testimonial-slider-wrapper {
  display: flex;
  transition: transform 0.5s ease-in-out;
  will-change: transform;
}

.testimonial-slide {
  flex-shrink: 0;
  padding-right: 15px;
  padding-left: 15px;
  box-sizing: border-box;
}

.testimonial-slide > div {
  height: 100%;
  display: flex;
}

/* Navigation buttons */
.testimonial-nav-btn {
  cursor: pointer !important;
  transition: all 0.3s ease;
  border-radius: 4px;
  z-index: 1000 !important;
  position: relative !important;
  outline: none;
  border: 1px solid #e0e0e0 !important;
  pointer-events: auto !important;
  touch-action: manipulation;
}

.testimonial-nav-btn:hover {
  background-color: #f0f0f0;
  border-color: #1a1a1a !important;
}

.testimonial-nav-btn:active {
  transform: scale(0.95);
}

.testimonial-nav-btn:focus {
  outline: 2px solid #1a1a1a;
  outline-offset: 2px;
}

.testimonial-nav-btn i {
  pointer-events: none;
}

/* Ensure buttons are clickable and not blocked */
.testimonial-nav-btn * {
  pointer-events: none;
}

/* Ensure the testimonial container has proper constraints */
.review-style-10 {
  overflow: hidden;
}

.outside-box-right-25 {
  overflow: hidden;
}

/* Responsive adjustments */
@media (max-width: 1023px) {
  .testimonial-slide {
    padding-right: 10px;
    padding-left: 10px;
  }
}

@media (max-width: 767px) {
  .testimonial-slide {
    padding-right: 5px;
    padding-left: 5px;
  }
}

</style>
