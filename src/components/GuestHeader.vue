<script setup>

</script>

<template>
    <header class="nxl-header">
        <div class="header-wrapper">
            <!--! [Start] Header Left !-->
            <div class="header-left d-flex align-items-center gap-4">
                <!--! [Start] nxl-head-mobile-toggler !-->
                <a href="javascript:void(0);" class="nxl-head-mobile-toggler" id="mobile-collapse">
                    <div class="hamburger hamburger--arrowturn">
                        <div class="hamburger-box">
                            <div class="hamburger-inner"></div>
                        </div>
                    </div>
                </a>
                <!--! [Start] nxl-head-mobile-toggler !-->
                <!--! [Start] nxl-navigation-toggle !-->
                <div class="nxl-navigation-toggle">
                    <a href="javascript:void(0);" id="menu-mini-button">
                        <font-awesome-icon :icon="['fas', 'align-left']" />
                    </a>
                    <a href="javascript:void(0);" id="menu-expend-button" style="display: none">
                        <font-awesome-icon :icon="['fas', 'arrow-right']" />
                    </a>
                </div>
                <!--! [End] nxl-navigation-toggle !-->
                <!--! [Start] nxl-lavel-mega-menu-toggle !-->
                <div class="nxl-lavel-mega-menu-toggle d-flex d-lg-none">
                    <a href="javascript:void(0);" id="nxl-lavel-mega-menu-open">
                        <font-awesome-icon :icon="['fas', 'align-left']" />
                    </a>
                </div>
                <!--! [End] nxl-lavel-mega-menu-toggle !-->
                <!--! [Start] nxl-lavel-mega-menu !-->
                <div class="nxl-drp-link nxl-lavel-mega-menu">
                    <div class="nxl-lavel-mega-menu-toggle d-flex d-lg-none">
                        <a href="javascript:void(0)" id="nxl-lavel-mega-menu-hide">
                            <font-awesome-icon :icon="['fas', 'arrow-left']" class="me-2" />
                            <span>Back</span>
                        </a>
                    </div>
                    <!--! [Start] nxl-lavel-mega-menu-wrapper !-->
                    <div class="nxl-lavel-mega-menu-wrapper d-flex gap-3">
                        <!--! [Start] nxl-lavel-menu !-->
                        <div class="dropdown nxl-h-item nxl-lavel-menu">
                            <a href="javascript:void(0);" class="avatar-text avatar-md bg-primary text-white"
                                data-bs-toggle="dropdown" data-bs-auto-close="outside">
                                <font-awesome-icon :icon="['fas', 'plus']" />
                            </a>
                            <div class="dropdown-menu nxl-h-dropdown">
                                <div class="dropdown nxl-level-menu">
                                    <a href="javascript:void(0);" class="dropdown-item">
                                        <span class="hstack">
                                            <font-awesome-icon :icon="['fas', 'paper-plane']" />
                                            <font-awesome-icon :icon="['fas', 'chevron-right']" class="ms-auto me-0" />
                                        </span>
                                    </a>
                                    <div class="dropdown-menu nxl-h-dropdown">
                                        <a href="apps-chat.html" class="dropdown-item">
                                            <font-awesome-icon :icon="['fas', 'circle']" class="me-3" />
                                            <span>Chat</span>
                                        </a>
                                        <a href="apps-email.html" class="dropdown-item">
                                            <font-awesome-icon :icon="['fas', 'circle']" class="me-3" />
                                            <span>Email</span>
                                        </a>
                                        <a href="apps-tasks.html" class="dropdown-item">
                                            <font-awesome-icon :icon="['fas', 'circle']" class="me-3" />
                                            <span>Tasks</span>
                                        </a>
                                        <a href="apps-notes.html" class="dropdown-item">
                                            <font-awesome-icon :icon="['fas', 'circle']" class="me-3" />
                                            <span>Notes</span>
                                        </a>
                                        <a href="apps-storage.html" class="dropdown-item">
                                            <font-awesome-icon :icon="['fas', 'circle']" class="me-3" />
                                            <span>Storage</span>
                                        </a>
                                        <a href="apps-calendar.html" class="dropdown-item">
                                            <font-awesome-icon :icon="['fas', 'circle']" class="me-3" />
                                            <span>Calendar</span>
                                        </a>
                                    </div>
                                </div>
                                <div class="dropdown-divider"></div>
                                <div class="dropdown nxl-level-menu">
                                    <a href="javascript:void(0);" class="dropdown-item">
                                        <span class="hstack">
                                            <font-awesome-icon :icon="['fas', 'chart-bar']" />
                                            <span>Reports</span>
                                        </span>
                                        <font-awesome-icon :icon="['fas', 'chevron-right']" class="ms-auto me-0" />
                                    </a>
                                    <div class="dropdown-menu nxl-h-dropdown">
                                        <a href="reports-sales.html" class="dropdown-item">
                                            <font-awesome-icon :icon="['fas', 'circle']" class="me-3" />
                                            <span>Sales Report</span>
                                        </a>
                                        <a href="reports-leads.html" class="dropdown-item">
                                            <font-awesome-icon :icon="['fas', 'circle']" class="me-3" />
                                            <span>Leads Report</span>
                                        </a>
                                        <a href="reports-project.html" class="dropdown-item">
                                            <font-awesome-icon :icon="['fas', 'circle']" class="me-3" />
                                            <span>Project Report</span>
                                        </a>
                                        <a href="reports-timesheets.html" class="dropdown-item">
                                            <font-awesome-icon :icon="['fas', 'circle']" class="me-3" />
                                            <span>Timesheets Report</span>
                                        </a>
                                    </div>
                                </div>
                                <div class="dropdown nxl-level-menu">
                                    <a href="javascript:void(0);" class="dropdown-item">
                                        <span class="hstack">
                                            <font-awesome-icon :icon="['fas', 'at']" />
                                            <span>Proposal</span>
                                        </span>
                                        <font-awesome-icon :icon="['fas', 'chevron-right']" class="ms-auto me-0" />
                                    </a>
                                    <div class="dropdown-menu nxl-h-dropdown">
                                        <a href="proposal.html" class="dropdown-item">
                                            <font-awesome-icon :icon="['fas', 'circle']" class="me-3" />
                                            <span>Proposal</span>
                                        </a>
                                        <a href="proposal-view.html" class="dropdown-item">
                                            <font-awesome-icon :icon="['fas', 'circle']" class="me-3" />
                                            <span>Proposal View</span>
                                        </a>
                                        <a href="proposal-edit.html" class="dropdown-item">
                                            <font-awesome-icon :icon="['fas', 'circle']" class="me-3" />
                                            <span>Proposal Edit</span>
                                        </a>
                                        <a href="proposal-create.html" class="dropdown-item">
                                            <font-awesome-icon :icon="['fas', 'circle']" class="me-3" />
                                            <span>Proposal Create</span>
                                        </a>
                                    </div>
                                </div>
                                <div class="dropdown nxl-level-menu">
                                    <a href="javascript:void(0);" class="dropdown-item">
                                        <span class="hstack">
                                            <font-awesome-icon :icon="['fas', 'dollar-sign']" />
                                            <span>Payment</span>
                                        </span>
                                        <font-awesome-icon :icon="['fas', 'chevron-right']" class="ms-auto me-0" />
                                    </a>
                                    <div class="dropdown-menu nxl-h-dropdown">
                                        <a href="payment.html" class="dropdown-item">
                                            <font-awesome-icon :icon="['fas', 'circle']" class="me-3" />
                                            <span>Payment</span>
                                        </a>
                                        <a href="invoice-view.html" class="dropdown-item">
                                            <font-awesome-icon :icon="['fas', 'circle']" class="me-3" />
                                            <span>Invoice View</span>
                                        </a>
                                        <a href="invoice-create.html" class="dropdown-item">
                                            <font-awesome-icon :icon="['fas', 'circle']" class="me-3" />
                                            <span>Invoice Create</span>
                                        </a>
                                    </div>
                                </div>
                                <div class="dropdown nxl-level-menu">
                                    <a href="javascript:void(0);" class="dropdown-item">
                                        <span class="hstack">
                                            <font-awesome-icon :icon="['fas', 'users']" />
                                            <span>Customers</span>
                                        </span>
                                        <font-awesome-icon :icon="['fas', 'chevron-right']" class="ms-auto me-0" />
                                    </a>
                                    <div class="dropdown-menu nxl-h-dropdown">
                                        <a href="customers.html" class="dropdown-item">
                                            <font-awesome-icon :icon="['fas', 'circle']" class="me-3" />
                                            <span>Customers</span>
                                        </a>
                                        <a href="customers-view.html" class="dropdown-item">
                                            <font-awesome-icon :icon="['fas', 'circle']" class="me-3" />
                                            <span>Customers View</span>
                                        </a>
                                        <a href="customers-create.html" class="dropdown-item">
                                            <font-awesome-icon :icon="['fas', 'circle']" class="me-3" />
                                            <span>Customers Create</span>
                                        </a>
                                    </div>
                                </div>
                                <div class="dropdown nxl-level-menu">
                                    <a href="javascript:void(0);" class="dropdown-item">
                                        <span class="hstack">
                                            <font-awesome-icon :icon="['fas', 'exclamation-circle']" />
                                            <span>Leads</span>
                                        </span>
                                        <font-awesome-icon :icon="['fas', 'chevron-right']" class="ms-auto me-0" />
                                    </a>
                                    <div class="dropdown-menu nxl-h-dropdown">
                                        <a href="leads.html" class="dropdown-item">
                                            <font-awesome-icon :icon="['fas', 'circle']" class="me-3" />
                                            <span>Leads</span>
                                        </a>
                                        <a href="leads-view.html" class="dropdown-item">
                                            <font-awesome-icon :icon="['fas', 'circle']" class="me-3" />
                                            <span>Leads View</span>
                                        </a>
                                        <a href="leads-create.html" class="dropdown-item">
                                            <font-awesome-icon :icon="['fas', 'circle']" class="me-3" />
                                            <span>Leads Create</span>
                                        </a>
                                    </div>
                                </div>
                                <div class="dropdown nxl-level-menu">
                                    <a href="javascript:void(0);" class="dropdown-item">
                                        <span class="hstack">
                                            <font-awesome-icon :icon="['fas', 'briefcase']" />
                                            <span>Projects</span>
                                        </span>
                                        <font-awesome-icon :icon="['fas', 'chevron-right']" class="ms-auto me-0" />
                                    </a>
                                    <div class="dropdown-menu nxl-h-dropdown">
                                        <a href="projects.html" class="dropdown-item">
                                            <font-awesome-icon :icon="['fas', 'circle']" class="me-3" />
                                            <span>Projects</span>
                                        </a>
                                        <a href="projects-view.html" class="dropdown-item">
                                            <font-awesome-icon :icon="['fas', 'circle']" class="me-3" />
                                            <span>Projects View</span>
                                        </a>
                                        <a href="projects-create.html" class="dropdown-item">
                                            <font-awesome-icon :icon="['fas', 'circle']" class="me-3" />
                                            <span>Projects Create</span>
                                        </a>
                                    </div>
                                </div>
                                <div class="dropdown nxl-level-menu">
                                    <a href="javascript:void(0);" class="dropdown-item">
                                        <span class="hstack">
                                            <font-awesome-icon :icon="['fas', 'table-cells-large']" />
                                            <span>Widgets</span>
                                        </span>
                                        <font-awesome-icon :icon="['fas', 'chevron-right']" class="ms-auto me-0" />
                                    </a>
                                    <div class="dropdown-menu nxl-h-dropdown">
                                        <a href="widgets-lists.html" class="dropdown-item">
                                            <font-awesome-icon :icon="['fas', 'circle']" class="me-3" />
                                            <span>Lists</span>
                                        </a>
                                        <a href="widgets-tables.html" class="dropdown-item">
                                            <font-awesome-icon :icon="['fas', 'circle']" class="me-3" />
                                            <span>Tables</span>
                                        </a>
                                        <a href="widgets-charts.html" class="dropdown-item">
                                            <font-awesome-icon :icon="['fas', 'circle']" class="me-3" />
                                            <span>Charts</span>
                                        </a>
                                        <a href="widgets-statistics.html" class="dropdown-item">
                                            <font-awesome-icon :icon="['fas', 'circle']" class="me-3" />
                                            <span>Statistics</span>
                                        </a>
                                    </div>
                                </div>
                                <div class="dropdown nxl-level-menu">
                                    <a href="javascript:void(0);" class="dropdown-item">
                                        <span class="hstack">
                                            <font-awesome-icon :icon="['fas', 'power-off']" />
                                            <span>Authentication</span>
                                        </span>
                                        <font-awesome-icon :icon="['fas', 'chevron-right']" class="ms-auto me-0" />
                                    </a>
                                    <div class="dropdown-menu nxl-h-dropdown">
                                        <div class="dropdown nxl-level-menu">
                                            <a href="javascript:void(0);" class="dropdown-item">
                                                <span class="hstack">
                                                    <font-awesome-icon :icon="['fas', 'circle']" class="me-3" />
                                                    <span>Login</span>
                                                </span>
                                                <font-awesome-icon :icon="['fas', 'chevron-right']"
                                                    class="ms-auto me-0" />
                                            </a>
                                            <div class="dropdown-menu nxl-h-dropdown">
                                                <a href="auth-login-cover.html" class="dropdown-item">
                                                    <font-awesome-icon :icon="['fas', 'circle']" class="me-3" />
                                                    <span>Cover</span>
                                                </a>
                                                <a href="auth-login-minimal.html" class="dropdown-item">
                                                    <font-awesome-icon :icon="['fas', 'circle']" class="me-3" />
                                                    <span>Minimal</span>
                                                </a>
                                                <a href="auth-login-creative.html" class="dropdown-item">
                                                    <font-awesome-icon :icon="['fas', 'circle']" class="me-3" />
                                                    <span>Creative</span>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="dropdown nxl-level-menu">
                                            <a href="javascript:void(0);" class="dropdown-item">
                                                <span class="hstack">
                                                    <font-awesome-icon :icon="['fas', 'circle']" class="me-3" />
                                                    <span>Register</span>
                                                </span>
                                                <font-awesome-icon :icon="['fas', 'chevron-right']"
                                                    class="ms-auto me-0" />
                                            </a>
                                            <div class="dropdown-menu nxl-h-dropdown">
                                                <a href="auth-register-cover.html" class="dropdown-item">
                                                    <font-awesome-icon :icon="['fas', 'circle']" class="me-3" />
                                                    <span>Cover</span>
                                                </a>
                                                <a href="auth-register-minimal.html" class="dropdown-item">
                                                    <font-awesome-icon :icon="['fas', 'circle']" class="me-3" />
                                                    <span>Minimal</span>
                                                </a>
                                                <a href="auth-register-creative.html" class="dropdown-item">
                                                    <font-awesome-icon :icon="['fas', 'circle']" class="me-3" />
                                                    <span>Creative</span>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="dropdown nxl-level-menu">
                                            <a href="javascript:void(0);" class="dropdown-item">
                                                <span class="hstack">
                                                    <font-awesome-icon :icon="['fas', 'circle']" class="me-3" />
                                                    <span>Error-404</span>
                                                </span>
                                                <font-awesome-icon :icon="['fas', 'chevron-right']"
                                                    class="ms-auto me-0" />
                                            </a>
                                            <div class="dropdown-menu nxl-h-dropdown">
                                                <a href="auth-404-cover.html" class="dropdown-item">
                                                    <font-awesome-icon :icon="['fas', 'circle']" class="me-3" />
                                                    <span>Cover</span>
                                                </a>
                                                <a href="auth-404-minimal.html" class="dropdown-item">
                                                    <font-awesome-icon :icon="['fas', 'circle']" class="me-3" />
                                                    <span>Minimal</span>
                                                </a>
                                                <a href="auth-404-creative.html" class="dropdown-item">
                                                    <font-awesome-icon :icon="['fas', 'circle']" class="me-3" />
                                                    <span>Creative</span>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="dropdown nxl-level-menu">
                                            <a href="javascript:void(0);" class="dropdown-item">
                                                <span class="hstack">
                                                    <font-awesome-icon :icon="['fas', 'circle']" class="me-3" />
                                                    <span>Reset Pass</span>
                                                </span>
                                                <font-awesome-icon :icon="['fas', 'chevron-right']"
                                                    class="ms-auto me-0" />
                                            </a>
                                            <div class="dropdown-menu nxl-h-dropdown">
                                                <a href="auth-reset-cover.html" class="dropdown-item">
                                                    <font-awesome-icon :icon="['fas', 'circle']" class="me-3" />
                                                    <span>Cover</span>
                                                </a>
                                                <a href="auth-reset-minimal.html" class="dropdown-item">
                                                    <font-awesome-icon :icon="['fas', 'circle']" class="me-3" />
                                                    <span>Minimal</span>
                                                </a>
                                                <a href="auth-reset-creative.html" class="dropdown-item">
                                                    <font-awesome-icon :icon="['fas', 'circle']" class="me-3" />
                                                    <span>Creative</span>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="dropdown nxl-level-menu">
                                            <a href="javascript:void(0);" class="dropdown-item">
                                                <span class="hstack">
                                                    <font-awesome-icon :icon="['fas', 'circle']" class="me-3" />
                                                    <span>Verify OTP</span>
                                                </span>
                                                <font-awesome-icon :icon="['fas', 'chevron-right']"
                                                    class="ms-auto me-0" />
                                            </a>
                                            <div class="dropdown-menu nxl-h-dropdown">
                                                <a href="auth-verify-cover.html" class="dropdown-item">
                                                    <font-awesome-icon :icon="['fas', 'circle']" class="me-3" />
                                                    <span>Cover</span>
                                                </a>
                                                <a href="auth-verify-minimal.html" class="dropdown-item">
                                                    <font-awesome-icon :icon="['fas', 'circle']" class="me-3" />
                                                    <span>Minimal</span>
                                                </a>
                                                <a href="auth-verify-creative.html" class="dropdown-item">
                                                    <font-awesome-icon :icon="['fas', 'circle']" class="me-3" />
                                                    <span>Creative</span>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="dropdown nxl-level-menu">
                                            <a href="javascript:void(0);" class="dropdown-item">
                                                <span class="hstack">
                                                    <font-awesome-icon :icon="['fas', 'circle']" class="me-3" />
                                                    <span>Maintenance</span>
                                                </span>
                                                <font-awesome-icon :icon="['fas', 'chevron-right']"
                                                    class="ms-auto me-0" />
                                            </a>
                                            <div class="dropdown-menu nxl-h-dropdown">
                                                <a href="auth-maintenance-cover.html" class="dropdown-item">
                                                    <font-awesome-icon :icon="['fas', 'circle']" class="me-3" />
                                                    <span>Cover</span>
                                                </a>
                                                <a href="auth-maintenance-minimal.html" class="dropdown-item">
                                                    <font-awesome-icon :icon="['fas', 'circle']" class="me-3" />
                                                    <span>Minimal</span>
                                                </a>
                                                <a href="auth-maintenance-creative.html" class="dropdown-item">
                                                    <font-awesome-icon :icon="['fas', 'circle']" class="me-3" />
                                                    <span>Creative</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="dropdown-divider"></div>
                                <a href="javascript:void(0);" class="dropdown-item">
                                    <font-awesome-icon :icon="['fas', 'plus']" />
                                    <span>Add New Items</span>
                                </a>
                            </div>
                        </div>
                        <!--! [End] nxl-lavel-menu !-->
                        <!--! [Start] nxl-h-item nxl-mega-menu !-->
                        <div class="dropdown nxl-h-item nxl-mega-menu">
                            <a href="javascript:void(0);" class="btn btn-light-brand" data-bs-toggle="dropdown"
                                data-bs-auto-close="outside"> Mega Menu </a>
                            <div class="dropdown-menu nxl-h-dropdown" id="mega-menu-dropdown">
                                <div class="d-lg-flex align-items-start">
                                    <!--! [Start] nxl-mega-menu-tabs !-->
                                    <div class="nav flex-column nxl-mega-menu-tabs" role="tablist"
                                        aria-orientation="vertical">
                                        <button class="nav-link active nxl-mega-menu-sm" data-bs-toggle="pill"
                                            data-bs-target="#v-pills-general" type="button" role="tab">
                                            <span class="menu-icon">
                                                <font-awesome-icon :icon="['fas', 'airplay']" />
                                            </span>
                                            <span class="menu-title">General</span>
                                            <span class="menu-arrow">
                                                <font-awesome-icon :icon="['fas', 'chevron-right']" />
                                            </span>
                                        </button>
                                        <button class="nav-link nxl-mega-menu-md" data-bs-toggle="pill"
                                            data-bs-target="#v-pills-applications" type="button" role="tab">
                                            <span class="menu-icon">
                                                <font-awesome-icon :icon="['fas', 'paper-plane']" />
                                            </span>
                                            <span class="menu-title">Applications</span>
                                            <span class="menu-arrow">
                                                <font-awesome-icon :icon="['fas', 'chevron-right']" />
                                            </span>
                                        </button>
                                        <button class="nav-link nxl-mega-menu-lg" data-bs-toggle="pill"
                                            data-bs-target="#v-pills-integrations" type="button" role="tab">
                                            <span class="menu-icon">
                                                <font-awesome-icon :icon="['fas', 'link']" />
                                            </span>
                                            <span class="menu-title">Integrations</span>
                                            <span class="menu-arrow">
                                                <font-awesome-icon :icon="['fas', 'chevron-right']" />
                                            </span>
                                        </button>
                                        <button class="nav-link nxl-mega-menu-xl" data-bs-toggle="pill"
                                            data-bs-target="#v-pills-components" type="button" role="tab">
                                            <span class="menu-icon">
                                                <font-awesome-icon :icon="['fas', 'layer-group']" />
                                            </span>
                                            <span class="menu-title">Components</span>
                                            <span class="menu-arrow">
                                                <font-awesome-icon :icon="['fas', 'chevron-right']" />
                                            </span>
                                        </button>
                                        <button class="nav-link nxl-mega-menu-xxl" data-bs-toggle="pill"
                                            data-bs-target="#v-pills-authentication" type="button" role="tab">
                                            <span class="menu-icon">
                                                <font-awesome-icon :icon="['fas', 'microchip']" />
                                            </span>
                                            <span class="menu-title">Authentication</span>
                                            <span class="menu-arrow">
                                                <font-awesome-icon :icon="['fas', 'chevron-right']" />
                                            </span>
                                        </button>
                                        <button class="nav-link nxl-mega-menu-full" data-bs-toggle="pill"
                                            data-bs-target="#v-pills-miscellaneous" type="button" role="tab">
                                            <span class="menu-icon">
                                                <font-awesome-icon :icon="['fab', 'bluetooth-b']" />
                                            </span>
                                            <span class="menu-title">Miscellaneous</span>
                                            <span class="menu-arrow">
                                                <font-awesome-icon :icon="['fas', 'chevron-right']" />
                                            </span>
                                        </button>
                                    </div>
                                    <!--! [End] nxl-mega-menu-tabs !-->
                                    <!--! [Start] nxl-mega-menu-tabs-content !-->
                                    <div class="tab-content nxl-mega-menu-tabs-content">
                                        <!--! [Start] v-pills-general !-->
                                        <div class="tab-pane fade show active" id="v-pills-general" role="tabpanel">
                                            <div class="mb-4 rounded-3 border">
                                                <img src="/guest/assets/images/banner/mockup.png" alt=""
                                                    class="img-fluid rounded-3" />
                                            </div>
                                            <h6 class="fw-bolder">Duralux - Admin Dashboard UiKit</h6>
                                            <p class="fs-12 fw-normal text-muted text-truncate-3-line">Get started
                                                Duralux with Duralux up and running. Duralux bootstrap template docs
                                                helps you to get started with simple html codes.</p>
                                            <a href="javascript:void(0);" class="fs-13 fw-bold text-primary">Get Started
                                                &rarr;</a>
                                        </div>
                                        <!--! [End] v-pills-general !-->
                                        <!--! [Start] v-pills-applications !-->
                                        <div class="tab-pane fade" id="v-pills-applications" role="tabpanel">
                                            <div class="row g-4">
                                                <div class="col-lg-6">
                                                    <h6 class="dropdown-item-title">Applications</h6>
                                                    <a href="apps-chat.html" class="dropdown-item">
                                                        <font-awesome-icon :icon="['fas', 'circle']" class="me-3" />
                                                        <span>Chat</span>
                                                    </a>
                                                    <a href="apps-email.html" class="dropdown-item">
                                                        <font-awesome-icon :icon="['fas', 'circle']" class="me-3" />
                                                        <span>Email</span>
                                                    </a>
                                                    <a href="apps-tasks.html" class="dropdown-item">
                                                        <font-awesome-icon :icon="['fas', 'circle']" class="me-3" />
                                                        <span>Tasks</span>
                                                    </a>
                                                    <a href="apps-notes.html" class="dropdown-item">
                                                        <font-awesome-icon :icon="['fas', 'circle']" class="me-3" />
                                                        <span>Notes</span>
                                                    </a>
                                                    <a href="apps-storage.html" class="dropdown-item">
                                                        <font-awesome-icon :icon="['fas', 'circle']" class="me-3" />
                                                        <span>Storage</span>
                                                    </a>
                                                    <a href="apps-calendar.html" class="dropdown-item">
                                                        <font-awesome-icon :icon="['fas', 'circle']" class="me-3" />
                                                        <span>Calendar</span>
                                                    </a>
                                                </div>
                                                <div class="col-lg-6">
                                                    <div class="nxl-mega-menu-image">
                                                        <img src="/guest/assets/images/general/full-avatar.png" alt=""
                                                            class="img-fluid full-user-avtar" />
                                                    </div>
                                                </div>
                                            </div>
                                            <hr class="border-top-dashed" />
                                            <div class="d-lg-flex align-items-center justify-content-between">
                                                <div>
                                                    <h6 class="menu-item-heading text-truncate-1-line">Need more
                                                        application?</h6>
                                                    <p class="fs-12 text-muted mb-0 text-truncate-3-line">We are ready
                                                        to build custom applications.</p>
                                                </div>
                                                <div class="mt-2 mt-lg-0">
                                                    <a href="mailto:wrapcoders@gmail.com"
                                                        class="fs-13 fw-bold text-primary">Contact Us &rarr;</a>
                                                </div>
                                            </div>
                                        </div>
                                        <!--! [End] v-pills-applications !-->
                                        <!--! [Start] v-pills-integrations !-->
                                        <div class="tab-pane fade" id="v-pills-integrations" role="tabpanel">
                                            <div class="row g-lg-4 nxl-mega-menu-integrations">
                                                <div
                                                    class="col-lg-12 d-lg-flex align-items-center justify-content-between mb-4 mb-lg-0">
                                                    <div>
                                                        <h6 class="fw-bolder text-dark">Integrations</h6>
                                                        <p class="fs-12 text-muted mb-0">Connect amazing apps on your
                                                            bucket.</p>
                                                    </div>
                                                    <div class="mt-2 mt-lg-0">
                                                        <a href="javascript:void(0);" class="fs-13 text-primary">Add New
                                                            &rarr;</a>
                                                    </div>
                                                </div>
                                                <div class="col-lg-4">
                                                    <a href="javascript:void(0);" class="dropdown-item">
                                                        <div class="menu-item-icon">
                                                            <img src="/guest/assets/images/brand/app-store.png" alt=""
                                                                class="img-fluid" />
                                                        </div>
                                                        <div class="menu-item-title">App Store</div>
                                                        <div class="menu-item-arrow">
                                                            <font-awesome-icon :icon="['fas', 'arrow-right']" />
                                                        </div>
                                                    </a>
                                                    <a href="javascript:void(0);" class="dropdown-item">
                                                        <div class="menu-item-icon">
                                                            <img src="/guest/assets/images/brand/spotify.png" alt=""
                                                                class="img-fluid" />
                                                        </div>
                                                        <div class="menu-item-title">Spotify</div>
                                                        <div class="menu-item-arrow">
                                                            <font-awesome-icon :icon="['fas', 'arrow-right']" />
                                                        </div>
                                                    </a>
                                                    <a href="javascript:void(0);" class="dropdown-item">
                                                        <div class="menu-item-icon">
                                                            <img src="/guest/assets/images/brand/figma.png" alt=""
                                                                class="img-fluid" />
                                                        </div>
                                                        <div class="menu-item-title">Figma</div>
                                                        <div class="menu-item-arrow">
                                                            <font-awesome-icon :icon="['fas', 'arrow-right']" />
                                                        </div>
                                                    </a>
                                                    <a href="javascript:void(0);" class="dropdown-item">
                                                        <div class="menu-item-icon">
                                                            <img src="/guest/assets/images/brand/shopify.png" alt=""
                                                                class="img-fluid" />
                                                        </div>
                                                        <div class="menu-item-title">Shopify</div>
                                                        <div class="menu-item-arrow">
                                                            <font-awesome-icon :icon="['fas', 'arrow-right']" />
                                                        </div>
                                                    </a>
                                                    <a href="javascript:void(0);" class="dropdown-item">
                                                        <div class="menu-item-icon">
                                                            <img src="/guest/assets/images/brand/paypal.png" alt=""
                                                                class="img-fluid" />
                                                        </div>
                                                        <div class="menu-item-title">Paypal</div>
                                                        <div class="menu-item-arrow">
                                                            <font-awesome-icon :icon="['fas', 'arrow-right']" />
                                                        </div>
                                                    </a>
                                                </div>
                                                <div class="col-lg-4">
                                                    <a href="javascript:void(0);" class="dropdown-item">
                                                        <div class="menu-item-icon">
                                                            <img src="/guest/assets/images/brand/gmail.png" alt=""
                                                                class="img-fluid" />
                                                        </div>
                                                        <div class="menu-item-title">Gmail</div>
                                                        <div class="menu-item-arrow">
                                                            <font-awesome-icon :icon="['fas', 'arrow-right']" />
                                                        </div>
                                                    </a>
                                                    <a href="javascript:void(0);" class="dropdown-item">
                                                        <div class="menu-item-icon">
                                                            <img src="/guest/assets/images/brand/dropbox.png" alt=""
                                                                class="img-fluid" />
                                                        </div>
                                                        <div class="menu-item-title">Dropbox</div>
                                                        <div class="menu-item-arrow">
                                                            <font-awesome-icon :icon="['fas', 'arrow-right']" />
                                                        </div>
                                                    </a>
                                                    <a href="javascript:void(0);" class="dropdown-item">
                                                        <div class="menu-item-icon">
                                                            <img src="/guest/assets/images/brand/google-drive.png"
                                                                alt="" class="img-fluid" />
                                                        </div>
                                                        <div class="menu-item-title">Google Drive</div>
                                                        <div class="menu-item-arrow">
                                                            <font-awesome-icon :icon="['fas', 'arrow-right']" />
                                                        </div>
                                                    </a>
                                                    <a href="javascript:void(0);" class="dropdown-item">
                                                        <div class="menu-item-icon">
                                                            <img src="/guest/assets/images/brand/github.png" alt=""
                                                                class="img-fluid" />
                                                        </div>
                                                        <div class="menu-item-title">Github</div>
                                                        <div class="menu-item-arrow">
                                                            <font-awesome-icon :icon="['fas', 'arrow-right']" />
                                                        </div>
                                                    </a>
                                                    <a href="javascript:void(0);" class="dropdown-item">
                                                        <div class="menu-item-icon">
                                                            <img src="/guest/assets/images/brand/gitlab.png" alt=""
                                                                class="img-fluid" />
                                                        </div>
                                                        <div class="menu-item-title">Gitlab</div>
                                                        <div class="menu-item-arrow">
                                                            <font-awesome-icon :icon="['fas', 'arrow-right']" />
                                                        </div>
                                                    </a>
                                                </div>
                                                <div class="col-lg-4">
                                                    <a href="javascript:void(0);" class="dropdown-item">
                                                        <div class="menu-item-icon">
                                                            <img src="/guest/assets/images/brand/facebook.png" alt=""
                                                                class="img-fluid" />
                                                        </div>
                                                        <div class="menu-item-title">Facebook</div>
                                                        <div class="menu-item-arrow">
                                                            <font-awesome-icon :icon="['fas', 'arrow-right']" />
                                                        </div>
                                                    </a>
                                                    <a href="javascript:void(0);" class="dropdown-item">
                                                        <div class="menu-item-icon">
                                                            <img src="/guest/assets/images/brand/pinterest.png" alt=""
                                                                class="img-fluid" />
                                                        </div>
                                                        <div class="menu-item-title">Pinterest</div>
                                                        <div class="menu-item-arrow">
                                                            <font-awesome-icon :icon="['fas', 'arrow-right']" />
                                                        </div>
                                                    </a>
                                                    <a href="javascript:void(0);" class="dropdown-item">
                                                        <div class="menu-item-icon">
                                                            <img src="/guest/assets/images/brand/instagram.png" alt=""
                                                                class="img-fluid" />
                                                        </div>
                                                        <div class="menu-item-title">Instagram</div>
                                                        <div class="menu-item-arrow">
                                                            <font-awesome-icon :icon="['fas', 'arrow-right']" />
                                                        </div>
                                                    </a>
                                                    <a href="javascript:void(0);" class="dropdown-item">
                                                        <div class="menu-item-icon">
                                                            <img src="/guest/assets/images/brand/twitter.png" alt=""
                                                                class="img-fluid" />
                                                        </div>
                                                        <div class="menu-item-title">Twitter</div>
                                                        <div class="menu-item-arrow">
                                                            <font-awesome-icon :icon="['fas', 'arrow-right']" />
                                                        </div>
                                                    </a>
                                                    <a href="javascript:void(0);" class="dropdown-item">
                                                        <div class="menu-item-icon">
                                                            <img src="/guest/assets/images/brand/youtube.png" alt=""
                                                                class="img-fluid" />
                                                        </div>
                                                        <div class="menu-item-title">Youtube</div>
                                                        <div class="menu-item-arrow">
                                                            <font-awesome-icon :icon="['fas', 'arrow-right']" />
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                            <hr class="border-top-dashed" />
                                            <p class="fs-13 text-muted mb-0">Need help? Contact our <a
                                                    href="javascript:void(0);" class="fst-italic">support center</a></p>
                                        </div>
                                        <!--! [End] v-pills-integrations !-->
                                        <!--! [Start] v-pills-components !-->
                                        <div class="tab-pane fade" id="v-pills-components" role="tabpanel">
                                            <div class="row g-4 align-items-center">
                                                <div class="col-xl-8">
                                                    <div class="row g-4">
                                                        <div class="col-lg-4">
                                                            <h6 class="dropdown-item-title">Navigation</h6>
                                                            <a href="javascript:void(0);" class="dropdown-item">CRM</a>
                                                            <a href="javascript:void(0);"
                                                                class="dropdown-item">Analytics</a>
                                                            <a href="javascript:void(0);"
                                                                class="dropdown-item">Sales</a>
                                                            <a href="javascript:void(0);"
                                                                class="dropdown-item">Leads</a>
                                                            <a href="javascript:void(0);"
                                                                class="dropdown-item">Projects</a>
                                                            <a href="javascript:void(0);"
                                                                class="dropdown-item">Timesheets</a>
                                                        </div>
                                                        <div class="col-lg-4">
                                                            <h6 class="dropdown-item-title">Pages</h6>
                                                            <a href="javascript:void(0);" class="dropdown-item">Leads
                                                            </a>
                                                            <a href="javascript:void(0);"
                                                                class="dropdown-item">Payments</a>
                                                            <a href="javascript:void(0);"
                                                                class="dropdown-item">Projects</a>
                                                            <a href="javascript:void(0);"
                                                                class="dropdown-item">Proposals</a>
                                                            <a href="javascript:void(0);"
                                                                class="dropdown-item">Customers</a>
                                                            <a href="javascript:void(0);"
                                                                class="dropdown-item">Documentations</a>
                                                        </div>
                                                        <div class="col-lg-4">
                                                            <h6 class="dropdown-item-title">Authentication</h6>
                                                            <a href="javascript:void(0);"
                                                                class="dropdown-item">Login</a>
                                                            <a href="javascript:void(0);"
                                                                class="dropdown-item">Regiser</a>
                                                            <a href="javascript:void(0);"
                                                                class="dropdown-item">Error-404</a>
                                                            <a href="javascript:void(0);" class="dropdown-item">Reset
                                                                Pass</a>
                                                            <a href="javascript:void(0);" class="dropdown-item">Verify
                                                                OTP</a>
                                                            <a href="javascript:void(0);"
                                                                class="dropdown-item">Maintenance</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-xl-4">
                                                    <div class="nxl-mega-menu-image">
                                                        <img src="/guest/assets/images/banner/1.jpg" alt=""
                                                            class="img-fluid" />
                                                    </div>
                                                    <div class="mt-4">
                                                        <a href="mailto:wrapcoders@gmail.com" class="fs-13 fw-bold">View
                                                            all resources on Duralux &rarr;</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <!--! [End] v-pills-components !-->
                                        <!--! [Start] v-pills-authentication !-->
                                        <div class="tab-pane fade" id="v-pills-authentication" role="tabpanel">
                                            <div class="row g-4 align-items-center nxl-mega-menu-authentication">
                                                <div class="col-xl-8">
                                                    <div class="row g-4">
                                                        <div class="col-lg-4">
                                                            <h6 class="dropdown-item-title">Cover</h6>
                                                            <a href="auth-login-cover.html" class="dropdown-item">
                                                                <font-awesome-icon :icon="['fas', 'circle']"
                                                                    class="me-3" />
                                                                <span>Login</span>
                                                            </a>
                                                            <a href="auth-register-cover.html" class="dropdown-item">
                                                                <font-awesome-icon :icon="['fas', 'circle']"
                                                                    class="me-3" />
                                                                <span>Register</span>
                                                            </a>
                                                            <a href="auth-404-cover.html" class="dropdown-item">
                                                                <font-awesome-icon :icon="['fas', 'circle']"
                                                                    class="me-3" />
                                                                <span>Error-404</span>
                                                            </a>
                                                            <a href="auth-reset-cover.html" class="dropdown-item">
                                                                <font-awesome-icon :icon="['fas', 'circle']"
                                                                    class="me-3" />
                                                                <span>Reset Pass</span>
                                                            </a>
                                                            <a href="auth-verify-cover.html" class="dropdown-item">
                                                                <font-awesome-icon :icon="['fas', 'circle']"
                                                                    class="me-3" />
                                                                <span>Verify OTP</span>
                                                            </a>
                                                            <a href="auth-maintenance-cover.html" class="dropdown-item">
                                                                <font-awesome-icon :icon="['fas', 'circle']"
                                                                    class="me-3" />
                                                                <span>Maintenance</span>
                                                            </a>
                                                        </div>
                                                        <div class="col-lg-4">
                                                            <h6 class="dropdown-item-title">Minimal</h6>
                                                            <a href="auth-login-minimal.html" class="dropdown-item">
                                                                <font-awesome-icon :icon="['fas', 'circle']"
                                                                    class="me-3" />
                                                                <span>Login</span>
                                                            </a>
                                                            <a href="auth-register-minimal.html" class="dropdown-item">
                                                                <font-awesome-icon :icon="['fas', 'circle']"
                                                                    class="me-3" />
                                                                <span>Register</span>
                                                            </a>
                                                            <a href="auth-404-minimal.html" class="dropdown-item">
                                                                <font-awesome-icon :icon="['fas', 'circle']"
                                                                    class="me-3" />
                                                                <span>Error-404</span>
                                                            </a>
                                                            <a href="auth-reset-minimal.html" class="dropdown-item">
                                                                <font-awesome-icon :icon="['fas', 'circle']"
                                                                    class="me-3" />
                                                                <span>Reset Pass</span>
                                                            </a>
                                                            <a href="auth-verify-minimal.html" class="dropdown-item">
                                                                <font-awesome-icon :icon="['fas', 'circle']"
                                                                    class="me-3" />
                                                                <span>Verify OTP</span>
                                                            </a>
                                                            <a href="auth-maintenance-minimal.html"
                                                                class="dropdown-item">
                                                                <font-awesome-icon :icon="['fas', 'circle']"
                                                                    class="me-3" />
                                                                <span>Maintenance</span>
                                                            </a>
                                                        </div>
                                                        <div class="col-lg-4">
                                                            <h6 class="dropdown-item-title">Creative</h6>
                                                            <a href="auth-login-creative.html" class="dropdown-item">
                                                                <font-awesome-icon :icon="['fas', 'circle']"
                                                                    class="me-3" />
                                                                <span>Login</span>
                                                            </a>
                                                            <a href="auth-register-creative.html" class="dropdown-item">
                                                                <font-awesome-icon :icon="['fas', 'circle']"
                                                                    class="me-3" />
                                                                <span>Register</span>
                                                            </a>
                                                            <a href="auth-404-creative.html" class="dropdown-item">
                                                                <font-awesome-icon :icon="['fas', 'circle']"
                                                                    class="me-3" />
                                                                <span>Error-404</span>
                                                            </a>
                                                            <a href="auth-reset-creative.html" class="dropdown-item">
                                                                <font-awesome-icon :icon="['fas', 'circle']"
                                                                    class="me-3" />
                                                                <span>Reset Pass</span>
                                                            </a>
                                                            <a href="auth-verify-creative.html" class="dropdown-item">
                                                                <font-awesome-icon :icon="['fas', 'circle']"
                                                                    class="me-3" />
                                                                <span>Verify OTP</span>
                                                            </a>
                                                            <a href="auth-maintenance-creative.html"
                                                                class="dropdown-item">
                                                                <font-awesome-icon :icon="['fas', 'circle']"
                                                                    class="me-3" />
                                                                <span>Maintenance</span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-xl-4">
                                                    <div id="carouselResourcesCaptions" class="carousel slide"
                                                        data-bs-ride="carousel">
                                                        <div class="carousel-indicators">
                                                            <button type="button"
                                                                data-bs-target="#carouselResourcesCaptions"
                                                                data-bs-slide-to="0" class="active"
                                                                aria-current="true"></button>
                                                            <button type="button"
                                                                data-bs-target="#carouselResourcesCaptions"
                                                                data-bs-slide-to="1"></button>
                                                            <button type="button"
                                                                data-bs-target="#carouselResourcesCaptions"
                                                                data-bs-slide-to="2"></button>
                                                            <button type="button"
                                                                data-bs-target="#carouselResourcesCaptions"
                                                                data-bs-slide-to="3"></button>
                                                            <button type="button"
                                                                data-bs-target="#carouselResourcesCaptions"
                                                                data-bs-slide-to="4"></button>
                                                            <button type="button"
                                                                data-bs-target="#carouselResourcesCaptions"
                                                                data-bs-slide-to="5"></button>
                                                        </div>
                                                        <div class="carousel-inner rounded-3">
                                                            <div class="carousel-item active">
                                                                <div class="nxl-mega-menu-image">
                                                                    <img src="/guest/assets/images/banner/6.jpg" alt=""
                                                                        class="img-fluid d-block w-100" />
                                                                </div>
                                                                <div class="carousel-caption">
                                                                    <h5
                                                                        class="carousel-caption-title text-truncate-1-line">
                                                                        Shopify eCommerce Store</h5>
                                                                    <p class="carousel-caption-desc">Some representative
                                                                        placeholder content for the first slide.</p>
                                                                </div>
                                                            </div>
                                                            <div class="carousel-item">
                                                                <div class="nxl-mega-menu-image">
                                                                    <img src="/guest/assets/images/banner/5.jpg" alt=""
                                                                        class="img-fluid d-block w-100" />
                                                                </div>
                                                                <div class="carousel-caption">
                                                                    <h5
                                                                        class="carousel-caption-title text-truncate-1-line">
                                                                        iOS Apps Development</h5>
                                                                    <p class="carousel-caption-desc">Some representative
                                                                        placeholder content for the second slide.</p>
                                                                </div>
                                                            </div>
                                                            <div class="carousel-item">
                                                                <div class="nxl-mega-menu-image">
                                                                    <img src="/guest/assets/images/banner/4.jpg" alt=""
                                                                        class="img-fluid d-block w-100" />
                                                                </div>
                                                                <div class="carousel-caption">
                                                                    <h5
                                                                        class="carousel-caption-title text-truncate-1-line">
                                                                        Figma Dashboard Design</h5>
                                                                    <p class="carousel-caption-desc">Some representative
                                                                        placeholder content for the third slide.</p>
                                                                </div>
                                                            </div>
                                                            <div class="carousel-item">
                                                                <div class="nxl-mega-menu-image">
                                                                    <img src="/guest/assets/images/banner/3.jpg" alt=""
                                                                        class="img-fluid d-block w-100" />
                                                                </div>
                                                                <div class="carousel-caption">
                                                                    <h5
                                                                        class="carousel-caption-title text-truncate-1-line">
                                                                        React Dashboard Design</h5>
                                                                    <p class="carousel-caption-desc">Some representative
                                                                        placeholder content for the third slide.</p>
                                                                </div>
                                                            </div>
                                                            <div class="carousel-item">
                                                                <div class="nxl-mega-menu-image">
                                                                    <img src="/guest/assets/images/banner/2.jpg" alt=""
                                                                        class="img-fluid d-block w-100" />
                                                                </div>
                                                                <div class="carousel-caption">
                                                                    <h5
                                                                        class="carousel-caption-title text-truncate-1-line">
                                                                        Standup Team Meeting</h5>
                                                                    <p class="carousel-caption-desc">Some representative
                                                                        placeholder content for the third slide.</p>
                                                                </div>
                                                            </div>
                                                            <div class="carousel-item">
                                                                <div class="nxl-mega-menu-image">
                                                                    <img src="/guest/assets/images/banner/1.jpg" alt=""
                                                                        class="img-fluid d-block w-100" />
                                                                </div>
                                                                <div class="carousel-caption">
                                                                    <h5
                                                                        class="carousel-caption-title text-truncate-1-line">
                                                                        Zoom Team Meeting</h5>
                                                                    <p class="carousel-caption-desc">Some representative
                                                                        placeholder content for the third slide.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <button class="carousel-control-prev" type="button"
                                                            data-bs-target="#carouselResourcesCaptions"
                                                            data-bs-slide="prev">
                                                            <span class="carousel-control-prev-icon"
                                                                aria-hidden="true"></span>
                                                            <span class="visually-hidden">Previous</span>
                                                        </button>
                                                        <button class="carousel-control-next" type="button"
                                                            data-bs-target="#carouselResourcesCaptions"
                                                            data-bs-slide="next">
                                                            <span class="carousel-control-next-icon"
                                                                aria-hidden="true"></span>
                                                            <span class="visually-hidden">Next</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <!--! [End] v-pills-authentication !-->
                                        <!--! [Start] v-pills-miscellaneous !-->
                                        <div class="tab-pane fade nxl-mega-menu-miscellaneous"
                                            id="v-pills-miscellaneous" role="tabpanel">
                                            <!-- Nav tabs -->
                                            <ul class="nav nav-tabs flex-column flex-lg-row nxl-mega-menu-miscellaneous-tabs"
                                                role="tablist">
                                                <li class="nav-item" role="presentation">
                                                    <button class="nav-link active" data-bs-toggle="tab"
                                                        data-bs-target="#v-pills-projects" type="button" role="tab">
                                                        <span class="menu-icon">
                                                            <font-awesome-icon :icon="['fas', 'podcast']" />
                                                        </span>
                                                        <span class="menu-title">Projects</span>
                                                    </button>
                                                </li>
                                                <li class="nav-item" role="presentation">
                                                    <button class="nav-link" data-bs-toggle="tab"
                                                        data-bs-target="#v-pills-services" type="button" role="tab">
                                                        <span class="menu-icon">
                                                            <font-awesome-icon :icon="['fas', 'square-check']" />
                                                        </span>
                                                        <span class="menu-title">Services</span>
                                                    </button>
                                                </li>
                                                <li class="nav-item" role="presentation">
                                                    <button class="nav-link" data-bs-toggle="tab"
                                                        data-bs-target="#v-pills-features" type="button" role="tab">
                                                        <span class="menu-icon">
                                                            <font-awesome-icon :icon="['fas', 'airplay']" />
                                                        </span>
                                                        <span class="menu-title">Features</span>
                                                    </button>
                                                </li>
                                                <li class="nav-item" role="presentation">
                                                    <button class="nav-link" data-bs-toggle="tab"
                                                        data-bs-target="#v-pills-blogs" type="button" role="tab">
                                                        <span class="menu-icon">
                                                            <font-awesome-icon :icon="['fas', 'bold']" />
                                                        </span>
                                                        <span class="menu-title">Blogs</span>
                                                    </button>
                                                </li>
                                            </ul>
                                            <!-- Tab panes -->
                                            <div class="tab-content nxl-mega-menu-miscellaneous-content">
                                                <div class="tab-pane fade active show" id="v-pills-projects"
                                                    role="tabpanel">
                                                    <div class="row g-4">
                                                        <div class="col-xxl-2 d-lg-none d-xxl-block">
                                                            <h6 class="dropdown-item-title">Categories</h6>
                                                            <a href="javascript:void(0);"
                                                                class="dropdown-item">Support</a>
                                                            <a href="javascript:void(0);"
                                                                class="dropdown-item">Services</a>
                                                            <a href="javascript:void(0);"
                                                                class="dropdown-item">Applicatios</a>
                                                            <a href="javascript:void(0);"
                                                                class="dropdown-item">eCommerce</a>
                                                            <a href="javascript:void(0);"
                                                                class="dropdown-item">Development</a>
                                                            <a href="javascript:void(0);"
                                                                class="dropdown-item">Miscellaneous</a>
                                                        </div>
                                                        <div class="col-xxl-10">
                                                            <div class="row g-4">
                                                                <div class="col-xl-6">
                                                                    <div class="d-lg-flex align-items-center gap-3">
                                                                        <div class="wd-150 rounded-3">
                                                                            <img src="/guest/assets/images/banner/1.jpg"
                                                                                alt="" class="img-fluid rounded-3" />
                                                                        </div>
                                                                        <div class="mt-3 mt-lg-0 ms-lg-3 item-text">
                                                                            <a href="javascript:void(0);">
                                                                                <h6
                                                                                    class="menu-item-heading text-truncate-1-line">
                                                                                    Shopify eCommerce Store</h6>
                                                                            </a>
                                                                            <p
                                                                                class="fs-12 fw-normal text-muted mb-0 text-truncate-2-line">
                                                                                Lorem ipsum dolor sit amet, consectetur
                                                                                adipisicing elit. Sint nam ullam iure
                                                                                eum sed rerum libero quis doloremque
                                                                                maiores veritatis?</p>
                                                                            <div class="hstack gap-2 mt-3">
                                                                                <div class="avatar-image avatar-sm">
                                                                                    <img src="/guest/assets/images/avatar/1.png"
                                                                                        alt="" class="img-fluid" />
                                                                                </div>
                                                                                <a href="javascript:void(0);"
                                                                                    class="fs-12">Alexandra Della</a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-xl-6">
                                                                    <div class="d-lg-flex align-items-center gap-3">
                                                                        <div class="wd-150 rounded-3">
                                                                            <img src="/guest/assets/images/banner/2.jpg"
                                                                                alt="" class="img-fluid rounded-3" />
                                                                        </div>
                                                                        <div class="mt-3 mt-lg-0 ms-lg-3 item-text">
                                                                            <a href="javascript:void(0);">
                                                                                <h6
                                                                                    class="menu-item-heading text-truncate-1-line">
                                                                                    iOS Apps Development</h6>
                                                                            </a>
                                                                            <p
                                                                                class="fs-12 fw-normal text-muted mb-0 text-truncate-2-line">
                                                                                Lorem ipsum dolor sit amet, consectetur
                                                                                adipisicing elit. Sint nam ullam iure
                                                                                eum sed rerum libero quis doloremque
                                                                                maiores veritatis?</p>
                                                                            <div class="hstack gap-2 mt-3">
                                                                                <div class="avatar-image avatar-sm">
                                                                                    <img src="/guest/assets/images/avatar/2.png"
                                                                                        alt="" class="img-fluid" />
                                                                                </div>
                                                                                <a href="javascript:void(0);"
                                                                                    class="fs-12">Green Cute</a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-xl-6">
                                                                    <div class="d-lg-flex align-items-center gap-3">
                                                                        <div class="wd-150 rounded-3">
                                                                            <img src="/guest/assets/images/banner/3.jpg"
                                                                                alt="" class="img-fluid rounded-3" />
                                                                        </div>
                                                                        <div class="mt-3 mt-lg-0 ms-lg-3 item-text">
                                                                            <a href="javascript:void(0);">
                                                                                <h6
                                                                                    class="menu-item-heading text-truncate-1-line">
                                                                                    Figma Dashboard Design</h6>
                                                                            </a>
                                                                            <p
                                                                                class="fs-12 fw-normal text-muted mb-0 text-truncate-2-line">
                                                                                Lorem ipsum dolor sit amet, consectetur
                                                                                adipisicing elit. Sint nam ullam iure
                                                                                eum sed rerum libero quis doloremque
                                                                                maiores veritatis?</p>
                                                                            <div class="hstack gap-2 mt-3">
                                                                                <div class="avatar-image avatar-sm">
                                                                                    <img src="/guest/assets/images/avatar/3.png"
                                                                                        alt="" class="img-fluid" />
                                                                                </div>
                                                                                <a href="javascript:void(0);"
                                                                                    class="fs-12">Malanie Hanvey</a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-xl-6">
                                                                    <div class="d-lg-flex align-items-center gap-3">
                                                                        <div class="wd-150 rounded-3">
                                                                            <img src="/guest/assets/images/banner/4.jpg"
                                                                                alt="" class="img-fluid rounded-3" />
                                                                        </div>
                                                                        <div class="mt-3 mt-lg-0 ms-lg-3 item-text">
                                                                            <a href="javascript:void(0);">
                                                                                <h6
                                                                                    class="menu-item-heading text-truncate-1-line">
                                                                                    React Dashboard Design</h6>
                                                                            </a>
                                                                            <p
                                                                                class="fs-12 fw-normal text-muted mb-0 text-truncate-2-line">
                                                                                Lorem ipsum dolor sit amet, consectetur
                                                                                adipisicing elit. Sint nam ullam iure
                                                                                eum sed rerum libero quis doloremque
                                                                                maiores veritatis?</p>
                                                                            <div class="hstack gap-2 mt-3">
                                                                                <div class="avatar-image avatar-sm">
                                                                                    <img src="/guest/assets/images/avatar/4.png"
                                                                                        alt="" class="img-fluid" />
                                                                                </div>
                                                                                <a href="javascript:void(0);"
                                                                                    class="fs-12">Kenneth Hune</a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="tab-pane fade" id="v-pills-services" role="tabpanel">
                                                    <div class="row g-4 nxl-mega-menu-miscellaneous-services">
                                                        <div class="col-xl-8">
                                                            <div class="row g-4">
                                                                <div class="col-lg-6">
                                                                    <div class="d-flex align-items-start gap-3">
                                                                        <div
                                                                            class="avatar-text avatar-lg rounded bg-primary text-white">
                                                                            <font-awesome-icon
                                                                                :icon="['fas', 'chart-bar']"
                                                                                class="mx-auto" />
                                                                        </div>
                                                                        <div>
                                                                            <a href="javascript:void(0);">
                                                                                <h6
                                                                                    class="menu-item-heading text-truncate-1-line">
                                                                                    Analytics Services</h6>
                                                                            </a>
                                                                            <p
                                                                                class="fs-12 fw-normal text-muted mb-0 text-truncate-2-line">
                                                                                Lorem ipsum dolor sit amet consectetur
                                                                                adipisicing elit Unde numquam rem
                                                                                dignissimos. elit Unde numquam rem
                                                                                dignissimos.</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-lg-6">
                                                                    <div class="d-flex align-items-start gap-3">
                                                                        <div
                                                                            class="avatar-text avatar-lg rounded bg-danger text-white">
                                                                            <font-awesome-icon
                                                                                :icon="['fas', 'feather']"
                                                                                class="mx-auto" />
                                                                        </div>
                                                                        <div>
                                                                            <a href="javascript:void(0);">
                                                                                <h6
                                                                                    class="menu-item-heading text-truncate-1-line">
                                                                                    Content Writing</h6>
                                                                            </a>
                                                                            <p
                                                                                class="fs-12 fw-normal text-muted mb-0 text-truncate-2-line">
                                                                                Lorem ipsum dolor sit amet consectetur
                                                                                adipisicing elit Unde numquam rem
                                                                                dignissimos. elit Unde numquam rem
                                                                                dignissimos.</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-lg-6">
                                                                    <div class="d-flex align-items-start gap-3">
                                                                        <div
                                                                            class="avatar-text avatar-lg rounded bg-warning text-white">
                                                                            <font-awesome-icon :icon="['fas', 'bell']"
                                                                                class="mx-auto" />
                                                                        </div>
                                                                        <div>
                                                                            <a href="javascript:void(0);">
                                                                                <h6
                                                                                    class="menu-item-heading text-truncate-1-line">
                                                                                    SEO (Search Engine Optimization)
                                                                                </h6>
                                                                            </a>
                                                                            <p
                                                                                class="fs-12 fw-normal text-muted mb-0 text-truncate-2-line">
                                                                                Lorem ipsum dolor sit amet consectetur
                                                                                adipisicing elit Unde numquam rem
                                                                                dignissimos. elit Unde numquam rem
                                                                                dignissimos.</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-lg-6">
                                                                    <div class="d-flex align-items-start gap-3">
                                                                        <div
                                                                            class="avatar-text avatar-lg rounded bg-success text-white">
                                                                            <font-awesome-icon
                                                                                :icon="['fas', 'shield-halved']"
                                                                                class="mx-auto" />
                                                                        </div>
                                                                        <div>
                                                                            <a href="javascript:void(0);">
                                                                                <h6
                                                                                    class="menu-item-heading text-truncate-1-line">
                                                                                    Security Services</h6>
                                                                            </a>
                                                                            <p
                                                                                class="fs-12 fw-normal text-muted mb-0 text-truncate-2-line">
                                                                                Lorem ipsum dolor sit amet consectetur
                                                                                adipisicing elit Unde numquam rem
                                                                                dignissimos. elit Unde numquam rem
                                                                                dignissimos.</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-lg-6">
                                                                    <div class="d-flex align-items-start gap-3">
                                                                        <div
                                                                            class="avatar-text avatar-lg rounded bg-teal text-white">
                                                                            <font-awesome-icon
                                                                                :icon="['fas', 'cart-shopping']"
                                                                                class="mx-auto" />
                                                                        </div>
                                                                        <div>
                                                                            <a href="javascript:void(0);">
                                                                                <h6
                                                                                    class="menu-item-heading text-truncate-1-line">
                                                                                    eCommerce Services</h6>
                                                                            </a>
                                                                            <p
                                                                                class="fs-12 fw-normal text-muted mb-0 text-truncate-2-line">
                                                                                Lorem ipsum dolor sit amet consectetur
                                                                                adipisicing elit Unde numquam rem
                                                                                dignissimos. elit Unde numquam rem
                                                                                dignissimos.</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-lg-6">
                                                                    <div class="d-flex align-items-start gap-3">
                                                                        <div
                                                                            class="avatar-text avatar-lg rounded bg-dark text-white">
                                                                            <font-awesome-icon
                                                                                :icon="['fas', 'life-ring']"
                                                                                class="mx-auto" />
                                                                        </div>
                                                                        <div>
                                                                            <a href="javascript:void(0);">
                                                                                <h6
                                                                                    class="menu-item-heading text-truncate-1-line">
                                                                                    Support Services</h6>
                                                                            </a>
                                                                            <p
                                                                                class="fs-12 fw-normal text-muted mb-0 text-truncate-2-line">
                                                                                Lorem ipsum dolor sit amet consectetur
                                                                                adipisicing elit Unde numquam rem
                                                                                dignissimos. elit Unde numquam rem
                                                                                dignissimos.</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-lg-12">
                                                                    <div
                                                                        class="p-3 bg-soft-dark text-dark rounded d-lg-flex align-items-center justify-content-between">
                                                                        <div class="fs-13">
                                                                            <font-awesome-icon :icon="['fas', 'star']"
                                                                                class="me-2" />
                                                                            <span>View all services on Duralux.</span>
                                                                        </div>
                                                                        <div class="mt-2 mt-lg-0">
                                                                            <a href="javascript:void(0);"
                                                                                class="fs-13 text-primary">Learn More
                                                                                &rarr;</a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-4">
                                                            <div id="carouselServicesCaptions" class="carousel slide"
                                                                data-bs-ride="carousel">
                                                                <div class="carousel-indicators">
                                                                    <button type="button"
                                                                        data-bs-target="#carouselServicesCaptions"
                                                                        data-bs-slide-to="0" class="active"
                                                                        aria-current="true"></button>
                                                                    <button type="button"
                                                                        data-bs-target="#carouselServicesCaptions"
                                                                        data-bs-slide-to="1"></button>
                                                                    <button type="button"
                                                                        data-bs-target="#carouselServicesCaptions"
                                                                        data-bs-slide-to="2"></button>
                                                                    <button type="button"
                                                                        data-bs-target="#carouselServicesCaptions"
                                                                        data-bs-slide-to="3"></button>
                                                                    <button type="button"
                                                                        data-bs-target="#carouselServicesCaptions"
                                                                        data-bs-slide-to="4"></button>
                                                                    <button type="button"
                                                                        data-bs-target="#carouselServicesCaptions"
                                                                        data-bs-slide-to="5"></button>
                                                                </div>
                                                                <div class="carousel-inner rounded-3">
                                                                    <div class="carousel-item active">
                                                                        <div class="nxl-mega-menu-image">
                                                                            <img src="/guest/assets/images/banner/6.jpg"
                                                                                alt=""
                                                                                class="img-fluid d-block w-100" />
                                                                        </div>
                                                                        <div class="carousel-caption">
                                                                            <h5
                                                                                class="carousel-caption-title text-truncate-1-line">
                                                                                Shopify eCommerce Store</h5>
                                                                            <p class="carousel-caption-desc">Some
                                                                                representative placeholder content for
                                                                                the first slide.</p>
                                                                        </div>
                                                                    </div>
                                                                    <div class="carousel-item">
                                                                        <div class="nxl-mega-menu-image">
                                                                            <img src="/guest/assets/images/banner/5.jpg"
                                                                                alt=""
                                                                                class="img-fluid d-block w-100" />
                                                                        </div>
                                                                        <div class="carousel-caption">
                                                                            <h5
                                                                                class="carousel-caption-title text-truncate-1-line">
                                                                                iOS Apps Development</h5>
                                                                            <p class="carousel-caption-desc">Some
                                                                                representative placeholder content for
                                                                                the second slide.</p>
                                                                        </div>
                                                                    </div>
                                                                    <div class="carousel-item">
                                                                        <div class="nxl-mega-menu-image">
                                                                            <img src="/guest/assets/images/banner/4.jpg"
                                                                                alt=""
                                                                                class="img-fluid d-block w-100" />
                                                                        </div>
                                                                        <div class="carousel-caption">
                                                                            <h5
                                                                                class="carousel-caption-title text-truncate-1-line">
                                                                                Figma Dashboard Design</h5>
                                                                            <p class="carousel-caption-desc">Some
                                                                                representative placeholder content for
                                                                                the third slide.</p>
                                                                        </div>
                                                                    </div>
                                                                    <div class="carousel-item">
                                                                        <div class="nxl-mega-menu-image">
                                                                            <img src="/guest/assets/images/banner/3.jpg"
                                                                                alt=""
                                                                                class="img-fluid d-block w-100" />
                                                                        </div>
                                                                        <div class="carousel-caption">
                                                                            <h5
                                                                                class="carousel-caption-title text-truncate-1-line">
                                                                                React Dashboard Design</h5>
                                                                            <p class="carousel-caption-desc">Some
                                                                                representative placeholder content for
                                                                                the third slide.</p>
                                                                        </div>
                                                                    </div>
                                                                    <div class="carousel-item">
                                                                        <div class="nxl-mega-menu-image">
                                                                            <img src="/guest/assets/images/banner/2.jpg"
                                                                                alt=""
                                                                                class="img-fluid d-block w-100" />
                                                                        </div>
                                                                        <div class="carousel-caption">
                                                                            <h5
                                                                                class="carousel-caption-title text-truncate-1-line">
                                                                                Standup Team Meeting</h5>
                                                                            <p class="carousel-caption-desc">Some
                                                                                representative placeholder content for
                                                                                the third slide.</p>
                                                                        </div>
                                                                    </div>
                                                                    <div class="carousel-item">
                                                                        <div class="nxl-mega-menu-image">
                                                                            <img src="/guest/assets/images/banner/1.jpg"
                                                                                alt=""
                                                                                class="img-fluid d-block w-100" />
                                                                        </div>
                                                                        <div class="carousel-caption">
                                                                            <h5
                                                                                class="carousel-caption-title text-truncate-1-line">
                                                                                Zoom Team Meeting</h5>
                                                                            <p class="carousel-caption-desc">Some
                                                                                representative placeholder content for
                                                                                the third slide.</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <button class="carousel-control-prev" type="button"
                                                                    data-bs-target="#carouselServicesCaptions"
                                                                    data-bs-slide="prev">
                                                                    <span class="carousel-control-prev-icon"
                                                                        aria-hidden="true"></span>
                                                                    <span class="visually-hidden">Previous</span>
                                                                </button>
                                                                <button class="carousel-control-next" type="button"
                                                                    data-bs-target="#carouselServicesCaptions"
                                                                    data-bs-slide="next">
                                                                    <span class="carousel-control-next-icon"
                                                                        aria-hidden="true"></span>
                                                                    <span class="visually-hidden">Next</span>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="tab-pane fade" id="v-pills-features" role="tabpanel">
                                                    <div class="row g-4 nxl-mega-menu-miscellaneous-features">
                                                        <div class="col-xl-8">
                                                            <div class="row g-4">
                                                                <div class="col-lg-6">
                                                                    <div class="d-flex align-items-start gap-3">
                                                                        <div
                                                                            class="avatar-text avatar-lg bg-soft-primary text-primary border-soft-primary rounded">
                                                                            <font-awesome-icon :icon="['fas', 'bell']"
                                                                                class="mx-auto" />
                                                                        </div>
                                                                        <div>
                                                                            <a href="javascript:void(0);">
                                                                                <h6
                                                                                    class="menu-item-heading text-truncate-1-line">
                                                                                    Notifications</h6>
                                                                            </a>
                                                                            <p
                                                                                class="fs-12 fw-normal text-muted mb-0 text-truncate-2-line">
                                                                                Lorem ipsum dolor sit amet consectetur
                                                                                adipisicing elit Unde numquam rem
                                                                                dignissimos. elit Unde numquam rem
                                                                                dignissimos.</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-lg-6">
                                                                    <div class="d-flex align-items-start gap-3">
                                                                        <div
                                                                            class="avatar-text avatar-lg bg-soft-danger text-danger border-soft-danger rounded">
                                                                            <font-awesome-icon
                                                                                :icon="['fas', 'chart-bar']"
                                                                                class="mx-auto" />
                                                                        </div>
                                                                        <div>
                                                                            <a href="javascript:void(0);">
                                                                                <h6
                                                                                    class="menu-item-heading text-truncate-1-line">
                                                                                    Analytics</h6>
                                                                            </a>
                                                                            <p
                                                                                class="fs-12 fw-normal text-muted mb-0 text-truncate-2-line">
                                                                                Lorem ipsum dolor sit amet consectetur
                                                                                adipisicing elit Unde numquam rem
                                                                                dignissimos. elit Unde numquam rem
                                                                                dignissimos.</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-lg-6">
                                                                    <div class="d-flex align-items-start gap-3">
                                                                        <div
                                                                            class="avatar-text avatar-lg bg-soft-success text-success border-soft-success rounded">
                                                                            <font-awesome-icon :icon="['fas', 'link']"
                                                                                class="mx-auto" />
                                                                        </div>
                                                                        <div>
                                                                            <a href="javascript:void(0);">
                                                                                <h6
                                                                                    class="menu-item-heading text-truncate-1-line">
                                                                                    Ingetrations</h6>
                                                                            </a>
                                                                            <p
                                                                                class="fs-12 fw-normal text-muted mb-0 text-truncate-2-line">
                                                                                Lorem ipsum dolor sit amet consectetur
                                                                                adipisicing elit Unde numquam rem
                                                                                dignissimos. elit Unde numquam rem
                                                                                dignissimos.</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-lg-6">
                                                                    <div class="d-flex align-items-start gap-3">
                                                                        <div
                                                                            class="avatar-text avatar-lg bg-soft-indigo text-indigo border-soft-indigo rounded">
                                                                            <font-awesome-icon :icon="['fas', 'book']"
                                                                                class="mx-auto" />
                                                                        </div>
                                                                        <div>
                                                                            <a href="javascript:void(0);">
                                                                                <h6
                                                                                    class="menu-item-heading text-truncate-1-line">
                                                                                    Documentations</h6>
                                                                            </a>
                                                                            <p
                                                                                class="fs-12 fw-normal text-muted mb-0 text-truncate-2-line">
                                                                                Lorem ipsum dolor sit amet consectetur
                                                                                adipisicing elit Unde numquam rem
                                                                                dignissimos. elit Unde numquam rem
                                                                                dignissimos.</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-lg-6">
                                                                    <div class="d-flex align-items-start gap-3">
                                                                        <div
                                                                            class="avatar-text avatar-lg bg-soft-warning text-warning border-soft-warning rounded">
                                                                            <font-awesome-icon
                                                                                :icon="['fas', 'shield-halved']"
                                                                                class="mx-auto" />
                                                                        </div>
                                                                        <div>
                                                                            <a href="javascript:void(0);">
                                                                                <h6
                                                                                    class="menu-item-heading text-truncate-1-line">
                                                                                    Security</h6>
                                                                            </a>
                                                                            <p
                                                                                class="fs-12 fw-normal text-muted mb-0 text-truncate-2-line">
                                                                                Lorem ipsum dolor sit amet consectetur
                                                                                adipisicing elit Unde numquam rem
                                                                                dignissimos. elit Unde numquam rem
                                                                                dignissimos.</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-lg-6">
                                                                    <div class="d-flex align-items-start gap-3">
                                                                        <div
                                                                            class="avatar-text avatar-lg bg-soft-teal text-teal border-soft-teal rounded">
                                                                            <font-awesome-icon
                                                                                :icon="['fas', 'life-ring']"
                                                                                class="mx-auto" />
                                                                        </div>
                                                                        <div>
                                                                            <a href="javascript:void(0);">
                                                                                <h6
                                                                                    class="menu-item-heading text-truncate-1-line">
                                                                                    Support</h6>
                                                                            </a>
                                                                            <p
                                                                                class="fs-12 fw-normal text-muted mb-0 text-truncate-2-line">
                                                                                Lorem ipsum dolor sit amet consectetur
                                                                                adipisicing elit Unde numquam rem
                                                                                dignissimos. elit Unde numquam rem
                                                                                dignissimos.</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-xxl-3 offset-xxl-1 col-xl-4">
                                                            <div class="nxl-mega-menu-image">
                                                                <img src="/guest/assets/images/banner/1.jpg" alt=""
                                                                    class="img-fluid" />
                                                            </div>
                                                            <div class="mt-4">
                                                                <a href="mailto:wrapcoders@gmail.com"
                                                                    class="fs-13 fw-bold">View all features on Duralux
                                                                    &rarr;</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="tab-pane fade" id="v-pills-blogs" role="tabpanel">
                                                    <div class="row g-4">
                                                        <div class="col-xxl-2 d-lg-none d-xxl-block">
                                                            <h6 class="dropdown-item-title">Categories</h6>
                                                            <a href="javascript:void(0);"
                                                                class="dropdown-item">Support</a>
                                                            <a href="javascript:void(0);"
                                                                class="dropdown-item">Services</a>
                                                            <a href="javascript:void(0);"
                                                                class="dropdown-item">Applicatios</a>
                                                            <a href="javascript:void(0);"
                                                                class="dropdown-item">eCommerce</a>
                                                            <a href="javascript:void(0);"
                                                                class="dropdown-item">Development</a>
                                                            <a href="javascript:void(0);"
                                                                class="dropdown-item">Miscellaneous</a>
                                                        </div>
                                                        <div class="col-xxl-10">
                                                            <div class="row g-4">
                                                                <div class="col-xxl-4 col-lg-6">
                                                                    <div class="d-flex align-items-center gap-3">
                                                                        <div class="wd-100 rounded-3">
                                                                            <img src="/guest/assets/images/banner/1.jpg"
                                                                                alt=""
                                                                                class="img-fluid rounded-3 border border-3" />
                                                                        </div>
                                                                        <div>
                                                                            <a href="javascript:void(0);">
                                                                                <h6
                                                                                    class="menu-item-heading text-truncate-1-line">
                                                                                    Lorem ipsum dolor sit</h6>
                                                                            </a>
                                                                            <p
                                                                                class="fs-12 fw-normal text-muted mb-0 text-truncate-2-line">
                                                                                Lorem ipsum, dolor sit amet consectetur
                                                                                adipisicing elit. Eius dolor quo commodi
                                                                                nisi animi error minus quia aliquam.</p>
                                                                            <span class="fs-11 text-gray-500">26 March,
                                                                                2023</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-xxl-4 col-lg-6">
                                                                    <div class="d-flex align-items-center gap-3">
                                                                        <div class="wd-100 rounded-3">
                                                                            <img src="/guest/assets/images/banner/2.jpg"
                                                                                alt=""
                                                                                class="img-fluid rounded-3 border border-3" />
                                                                        </div>
                                                                        <div>
                                                                            <a href="javascript:void(0);">
                                                                                <h6
                                                                                    class="menu-item-heading text-truncate-1-line">
                                                                                    Lorem ipsum dolor sit</h6>
                                                                            </a>
                                                                            <p
                                                                                class="fs-12 fw-normal text-muted mb-0 text-truncate-2-line">
                                                                                Lorem ipsum, dolor sit amet consectetur
                                                                                adipisicing elit. Eius dolor quo commodi
                                                                                nisi animi error minus quia aliquam.</p>
                                                                            <span class="fs-11 text-gray-500">26 March,
                                                                                2023</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-xxl-4 col-lg-6">
                                                                    <div class="d-flex align-items-center gap-3">
                                                                        <div class="wd-100 rounded-3">
                                                                            <img src="/guest/assets/images/banner/3.jpg"
                                                                                alt=""
                                                                                class="img-fluid rounded-3 border border-3" />
                                                                        </div>
                                                                        <div>
                                                                            <a href="javascript:void(0);">
                                                                                <h6
                                                                                    class="menu-item-heading text-truncate-1-line">
                                                                                    Lorem ipsum dolor sit</h6>
                                                                            </a>
                                                                            <p
                                                                                class="fs-12 fw-normal text-muted mb-0 text-truncate-2-line">
                                                                                Lorem ipsum, dolor sit amet consectetur
                                                                                adipisicing elit. Eius dolor quo commodi
                                                                                nisi animi error minus quia aliquam.</p>
                                                                            <span class="fs-11 text-gray-500">26 March,
                                                                                2023</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-xxl-4 col-lg-6">
                                                                    <div class="d-flex align-items-center gap-3">
                                                                        <div class="wd-100 rounded-3">
                                                                            <img src="/guest/assets/images/banner/4.jpg"
                                                                                alt=""
                                                                                class="img-fluid rounded-3 border border-3" />
                                                                        </div>
                                                                        <div>
                                                                            <a href="javascript:void(0);">
                                                                                <h6
                                                                                    class="menu-item-heading text-truncate-1-line">
                                                                                    Lorem ipsum dolor sit</h6>
                                                                            </a>
                                                                            <p
                                                                                class="fs-12 fw-normal text-muted mb-0 text-truncate-2-line">
                                                                                Lorem ipsum, dolor sit amet consectetur
                                                                                adipisicing elit. Eius dolor quo commodi
                                                                                nisi animi error minus quia aliquam.</p>
                                                                            <span class="fs-11 text-gray-500">26 March,
                                                                                2023</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-xxl-4 col-lg-6">
                                                                    <div class="d-flex align-items-center gap-3">
                                                                        <div class="wd-100 rounded-3">
                                                                            <img src="/guest/assets/images/banner/5.jpg"
                                                                                alt=""
                                                                                class="img-fluid rounded-3 border border-3" />
                                                                        </div>
                                                                        <div>
                                                                            <a href="javascript:void(0);">
                                                                                <h6
                                                                                    class="menu-item-heading text-truncate-1-line">
                                                                                    Lorem ipsum dolor sit</h6>
                                                                            </a>
                                                                            <p
                                                                                class="fs-12 fw-normal text-muted mb-0 text-truncate-2-line">
                                                                                Lorem ipsum, dolor sit amet consectetur
                                                                                adipisicing elit. Eius dolor quo commodi
                                                                                nisi animi error minus quia aliquam.</p>
                                                                            <span class="fs-11 text-gray-500">26 March,
                                                                                2023</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-xxl-4 col-lg-6">
                                                                    <div class="d-flex align-items-center gap-3">
                                                                        <div class="wd-100 rounded-3">
                                                                            <img src="/guest/assets/images/banner/6.jpg"
                                                                                alt=""
                                                                                class="img-fluid rounded-3 border border-3" />
                                                                        </div>
                                                                        <div>
                                                                            <a href="javascript:void(0);">
                                                                                <h6
                                                                                    class="menu-item-heading text-truncate-1-line">
                                                                                    Lorem ipsum dolor sit</h6>
                                                                            </a>
                                                                            <p
                                                                                class="fs-12 fw-normal text-muted mb-0 text-truncate-2-line">
                                                                                Lorem ipsum, dolor sit amet consectetur
                                                                                adipisicing elit. Eius dolor quo commodi
                                                                                nisi animi error minus quia aliquam.</p>
                                                                            <span class="fs-11 text-gray-500">26 March,
                                                                                2023</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-lg-12">
                                                                    <div
                                                                        class="p-3 bg-soft-dark text-dark rounded d-flex align-items-center justify-content-between gap-4">
                                                                        <div class="fs-13 text-truncate-1-line">
                                                                            <font-awesome-icon :icon="['fas', 'star']"
                                                                                class="me-2" />
                                                                            <strong>Version 2.3.2 is out!</strong>
                                                                            <span>Learn more about our news and schedule
                                                                                reporting.</span>
                                                                        </div>
                                                                        <div class="wd-100 text-end">
                                                                            <a href="javascript:void(0);"
                                                                                class="fs-13 text-primary">Learn More
                                                                                &rarr;</a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!--! [End] v-pills-miscellaneous !-->
                                        </div>
                                        <!--! [End] nxl-mega-menu-tabs-content !-->
                                    </div>
                                </div>
                            </div>
                            <!--! [End] nxl-h-item nxl-mega-menu !-->
                        </div>
                        <!--! [End] nxl-lavel-mega-menu-wrapper !-->
                    </div>
                    <!--! [End] nxl-lavel-mega-menu !-->
                </div>
                <!--! [End] Header Left !-->
                <!--! [Start] Header Right !-->
                <div class="header-right ms-auto">
                    <div class="d-flex align-items-center">
                        <div class="dropdown nxl-h-item nxl-header-search">
                            <a href="javascript:void(0);" class="nxl-head-link me-0" data-bs-toggle="dropdown"
                                data-bs-auto-close="outside">
                                <font-awesome-icon :icon="['fas', 'search']" />
                            </a>
                            <div class="dropdown-menu dropdown-menu-end nxl-h-dropdown nxl-search-dropdown">
                                <div class="input-group search-form">
                                    <span class="input-group-text">
                                        <font-awesome-icon :icon="['fas', 'search']" class="fs-6 text-muted" />
                                    </span>
                                    <input type="text" class="form-control search-input-field"
                                        placeholder="Search...." />
                                    <span class="input-group-text">
                                        <button type="button" class="btn-close"></button>
                                    </span>
                                </div>
                                <div class="dropdown-divider mt-0"></div>
                                <div class="search-items-wrapper">
                                    <div class="searching-for px-4 py-2">
                                        <p class="fs-11 fw-medium text-muted">I'm searching for...</p>
                                        <div class="d-flex flex-wrap gap-1">
                                            <a href="javascript:void(0);"
                                                class="flex-fill border rounded py-1 px-2 text-center fs-11 fw-semibold">Projects</a>
                                            <a href="javascript:void(0);"
                                                class="flex-fill border rounded py-1 px-2 text-center fs-11 fw-semibold">Leads</a>
                                            <a href="javascript:void(0);"
                                                class="flex-fill border rounded py-1 px-2 text-center fs-11 fw-semibold">Contacts</a>
                                            <a href="javascript:void(0);"
                                                class="flex-fill border rounded py-1 px-2 text-center fs-11 fw-semibold">Inbox</a>
                                            <a href="javascript:void(0);"
                                                class="flex-fill border rounded py-1 px-2 text-center fs-11 fw-semibold">Invoices</a>
                                            <a href="javascript:void(0);"
                                                class="flex-fill border rounded py-1 px-2 text-center fs-11 fw-semibold">Tasks</a>
                                            <a href="javascript:void(0);"
                                                class="flex-fill border rounded py-1 px-2 text-center fs-11 fw-semibold">Customers</a>
                                            <a href="javascript:void(0);"
                                                class="flex-fill border rounded py-1 px-2 text-center fs-11 fw-semibold">Notes</a>
                                            <a href="javascript:void(0);"
                                                class="flex-fill border rounded py-1 px-2 text-center fs-11 fw-semibold">Affiliate</a>
                                            <a href="javascript:void(0);"
                                                class="flex-fill border rounded py-1 px-2 text-center fs-11 fw-semibold">Storage</a>
                                            <a href="javascript:void(0);"
                                                class="flex-fill border rounded py-1 px-2 text-center fs-11 fw-semibold">Calendar</a>
                                        </div>
                                    </div>
                                    <div class="dropdown-divider"></div>
                                    <div class="recent-result px-4 py-2">
                                        <h4 class="fs-13 fw-normal text-gray-600 mb-3">Recnet <span
                                                class="badge small bg-gray-200 rounded ms-1 text-dark">3</span></h4>
                                        <div class="d-flex align-items-center justify-content-between mb-4">
                                            <div class="d-flex align-items-center gap-3">
                                                <div class="avatar-text rounded">
                                                    <font-awesome-icon :icon="['fas', 'airplay']" />
                                                </div>
                                                <div>
                                                    <a href="javascript:void(0);"
                                                        class="font-body fw-bold d-block mb-1">CRM dashboard
                                                        redesign</a>
                                                    <p class="fs-11 text-muted mb-0">Home / project / crm</p>
                                                </div>
                                            </div>
                                            <div>
                                                <a href="javascript:void(0);"
                                                    class="badge border rounded text-dark">/<font-awesome-icon
                                                        :icon="['fas', 'terminal']" class="ms-1 fs-10" /></a>
                                            </div>
                                        </div>
                                        <div class="d-flex align-items-center justify-content-between mb-4">
                                            <div class="d-flex align-items-center gap-3">
                                                <div class="avatar-text rounded">
                                                    <font-awesome-icon :icon="['fas', 'file-circle-plus']" />
                                                </div>
                                                <div>
                                                    <a href="javascript:void(0);"
                                                        class="font-body fw-bold d-block mb-1">Create new document</a>
                                                    <p class="fs-11 text-muted mb-0">Home / tasks / docs</p>
                                                </div>
                                            </div>
                                            <div>
                                                <a href="javascript:void(0);" class="badge border rounded text-dark">N
                                                    /<font-awesome-icon :icon="['fas', 'terminal']"
                                                        class="ms-1 fs-10" /></a>
                                            </div>
                                        </div>
                                        <div class="d-flex align-items-center justify-content-between">
                                            <div class="d-flex align-items-center gap-3">
                                                <div class="avatar-text rounded">
                                                    <font-awesome-icon :icon="['fas', 'user-plus']" />
                                                </div>
                                                <div>
                                                    <a href="javascript:void(0);"
                                                        class="font-body fw-bold d-block mb-1">Invite project
                                                        colleagues</a>
                                                    <p class="fs-11 text-muted mb-0">Home / project / invite</p>
                                                </div>
                                            </div>
                                            <div>
                                                <a href="javascript:void(0);" class="badge border rounded text-dark">P
                                                    /<font-awesome-icon :icon="['fas', 'terminal']"
                                                        class="ms-1 fs-10" /></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="dropdown-divider my-3"></div>
                                    <div class="users-result px-4 py-2">
                                        <h4 class="fs-13 fw-normal text-gray-600 mb-3">Users <span
                                                class="badge small bg-gray-200 rounded ms-1 text-dark">5</span></h4>
                                        <div class="d-flex align-items-center justify-content-between mb-4">
                                            <div class="d-flex align-items-center gap-3">
                                                <div class="avatar-image rounded">
                                                    <img src="/guest/assets/images/avatar/1.png" alt=""
                                                        class="img-fluid" />
                                                </div>
                                                <div>
                                                    <a href="javascript:void(0);"
                                                        class="font-body fw-bold d-block mb-1">Alexandra Della</a>
                                                    <p class="fs-11 text-muted mb-0">alex.della@outlook.com</p>
                                                </div>
                                            </div>
                                            <a href="javascript:void(0);" class="avatar-text avatar-md">
                                                <font-awesome-icon :icon="['fas', 'chevron-right']" />
                                            </a>
                                        </div>
                                        <div class="d-flex align-items-center justify-content-between mb-4">
                                            <div class="d-flex align-items-center gap-3">
                                                <div class="avatar-image rounded">
                                                    <img src="/guest/assets/images/avatar/2.png" alt=""
                                                        class="img-fluid" />
                                                </div>
                                                <div>
                                                    <a href="javascript:void(0);"
                                                        class="font-body fw-bold d-block mb-1">Green Cute</a>
                                                    <p class="fs-11 text-muted mb-0">green.cute@outlook.com</p>
                                                </div>
                                            </div>
                                            <a href="javascript:void(0);" class="avatar-text avatar-md">
                                                <font-awesome-icon :icon="['fas', 'chevron-right']" />
                                            </a>
                                        </div>
                                        <div class="d-flex align-items-center justify-content-between mb-4">
                                            <div class="d-flex align-items-center gap-3">
                                                <div class="avatar-image rounded">
                                                    <img src="/guest/assets/images/avatar/3.png" alt=""
                                                        class="img-fluid" />
                                                </div>
                                                <div>
                                                    <a href="javascript:void(0);"
                                                        class="font-body fw-bold d-block mb-1">Malanie Hanvey</a>
                                                    <p class="fs-11 text-muted mb-0">malanie.anvey@outlook.com</p>
                                                </div>
                                            </div>
                                            <a href="javascript:void(0);" class="avatar-text avatar-md">
                                                <font-awesome-icon :icon="['fas', 'chevron-right']" />
                                            </a>
                                        </div>
                                        <div class="d-flex align-items-center justify-content-between mb-4">
                                            <div class="d-flex align-items-center gap-3">
                                                <div class="avatar-image rounded">
                                                    <img src="/guest/assets/images/avatar/4.png" alt=""
                                                        class="img-fluid" />
                                                </div>
                                                <div>
                                                    <a href="javascript:void(0);"
                                                        class="font-body fw-bold d-block mb-1">Kenneth Hune</a>
                                                    <p class="fs-11 text-muted mb-0">kenth.hune@outlook.com</p>
                                                </div>
                                            </div>
                                            <a href="javascript:void(0);" class="avatar-text avatar-md">
                                                <font-awesome-icon :icon="['fas', 'chevron-right']" />
                                            </a>
                                        </div>
                                        <div class="d-flex align-items-center justify-content-between mb-0">
                                            <div class="d-flex align-items-center gap-3">
                                                <div class="avatar-image rounded">
                                                    <img src="/guest/assets/images/avatar/5.png" alt=""
                                                        class="img-fluid" />
                                                </div>
                                                <div>
                                                    <a href="javascript:void(0);"
                                                        class="font-body fw-bold d-block mb-1">Archie Cantones</a>
                                                    <p class="fs-11 text-muted mb-0">archie.cones@outlook.com</p>
                                                </div>
                                            </div>
                                            <a href="javascript:void(0);" class="avatar-text avatar-md">
                                                <font-awesome-icon :icon="['fas', 'chevron-right']" />
                                            </a>
                                        </div>
                                    </div>
                                    <div class="dropdown-divider my-3"></div>
                                    <div class="file-result px-4 py-2">
                                        <h4 class="fs-13 fw-normal text-gray-600 mb-3">Files <span
                                                class="badge small bg-gray-200 rounded ms-1 text-dark">3</span></h4>
                                        <div class="d-flex align-items-center justify-content-between mb-4">
                                            <div class="d-flex align-items-center gap-3">
                                                <div class="avatar-image bg-gray-200 rounded">
                                                    <img src="/guest/assets/images/file-icons/css.png" alt=""
                                                        class="img-fluid" />
                                                </div>
                                                <div>
                                                    <a href="javascript:void(0);"
                                                        class="font-body fw-bold d-block mb-1">Project Style CSS</a>
                                                    <p class="fs-11 text-muted mb-0">05.74 MB</p>
                                                </div>
                                            </div>
                                            <a href="javascript:void(0);" class="avatar-text avatar-md">
                                                <font-awesome-icon :icon="['fas', 'download']" />
                                            </a>
                                        </div>
                                        <div class="d-flex align-items-center justify-content-between mb-4">
                                            <div class="d-flex align-items-center gap-3">
                                                <div class="avatar-image bg-gray-200 rounded">
                                                    <img src="/guest/assets/images/file-icons/zip.png" alt=""
                                                        class="img-fluid" />
                                                </div>
                                                <div>
                                                    <a href="javascript:void(0);"
                                                        class="font-body fw-bold d-block mb-1">Dashboard Project Zip</a>
                                                    <p class="fs-11 text-muted mb-0">46.83 MB</p>
                                                </div>
                                            </div>
                                            <a href="javascript:void(0);" class="avatar-text avatar-md">
                                                <font-awesome-icon :icon="['fas', 'download']" />
                                            </a>
                                        </div>
                                        <div class="d-flex align-items-center justify-content-between mb-0">
                                            <div class="d-flex align-items-center gap-3">
                                                <div class="avatar-image bg-gray-200 rounded">
                                                    <img src="/guest/assets/images/file-icons/pdf.png" alt=""
                                                        class="img-fluid" />
                                                </div>
                                                <div>
                                                    <a href="javascript:void(0);"
                                                        class="font-body fw-bold d-block mb-1">Project Document PDF</a>
                                                    <p class="fs-11 text-muted mb-0">12.85 MB</p>
                                                </div>
                                            </div>
                                            <a href="javascript:void(0);" class="avatar-text avatar-md">
                                                <font-awesome-icon :icon="['fas', 'download']" />
                                            </a>
                                        </div>
                                    </div>
                                    <div class="dropdown-divider mt-3 mb-0"></div>
                                    <a href="javascript:void(0);"
                                        class="p-3 fs-10 fw-bold text-uppercase text-center d-block">Loar More</a>
                                </div>
                            </div>
                        </div>
                        <div class="dropdown nxl-h-item nxl-header-language d-none d-sm-flex">
                            <a href="javascript:void(0);" class="nxl-head-link me-0 nxl-language-link"
                                data-bs-toggle="dropdown" data-bs-auto-close="outside">
                                <img src="/guest/assets/vendors/img/flags/4x3/us.svg" alt="" class="img-fluid wd-20" />
                            </a>
                            <div class="dropdown-menu dropdown-menu-end nxl-h-dropdown nxl-language-dropdown">
                                <div class="dropdown-divider mt-0"></div>
                                <div class="language-items-wrapper">
                                    <div class="select-language px-4 py-2 hstack justify-content-between gap-4">
                                        <div class="lh-lg">
                                            <h6 class="mb-0">Select Language</h6>
                                            <p class="fs-11 text-muted mb-0">12 languages avaiable!</p>
                                        </div>
                                        <a href="javascript:void(0);" class="avatar-text avatar-md"
                                            data-bs-toggle="tooltip" title="Add Language">
                                            <font-awesome-icon :icon="['fas', 'plus']" />
                                        </a>
                                    </div>
                                    <div class="dropdown-divider"></div>
                                    <div class="row px-4 pt-3">
                                        <div class="col-sm-4 col-6 language_select">
                                            <a href="javascript:void(0);" class="d-flex align-items-center gap-2">
                                                <div class="avatar-image avatar-sm"><img
                                                        src="/guest/assets/vendors/img/flags/1x1/sa.svg" alt=""
                                                        class="img-fluid" /></div>
                                                <span>Arabic</span>
                                            </a>
                                        </div>
                                        <div class="col-sm-4 col-6 language_select">
                                            <a href="javascript:void(0);" class="d-flex align-items-center gap-2">
                                                <div class="avatar-image avatar-sm"><img
                                                        src="/guest/assets/vendors/img/flags/1x1/bd.svg" alt=""
                                                        class="img-fluid" /></div>
                                                <span>Bengali</span>
                                            </a>
                                        </div>
                                        <div class="col-sm-4 col-6 language_select">
                                            <a href="javascript:void(0);" class="d-flex align-items-center gap-2">
                                                <div class="avatar-image avatar-sm"><img
                                                        src="/guest/assets/vendors/img/flags/1x1/ch.svg" alt=""
                                                        class="img-fluid" /></div>
                                                <span>Chinese</span>
                                            </a>
                                        </div>
                                        <div class="col-sm-4 col-6 language_select">
                                            <a href="javascript:void(0);" class="d-flex align-items-center gap-2">
                                                <div class="avatar-image avatar-sm"><img
                                                        src="/guest/assets/vendors/img/flags/1x1/nl.svg" alt=""
                                                        class="img-fluid" /></div>
                                                <span>Dutch</span>
                                            </a>
                                        </div>
                                        <div class="col-sm-4 col-6 language_select active">
                                            <a href="javascript:void(0);" class="d-flex align-items-center gap-2">
                                                <div class="avatar-image avatar-sm"><img
                                                        src="/guest/assets/vendors/img/flags/1x1/us.svg" alt=""
                                                        class="img-fluid" /></div>
                                                <span>English</span>
                                            </a>
                                        </div>
                                        <div class="col-sm-4 col-6 language_select">
                                            <a href="javascript:void(0);" class="d-flex align-items-center gap-2">
                                                <div class="avatar-image avatar-sm"><img
                                                        src="/guest/assets/vendors/img/flags/1x1/fr.svg" alt=""
                                                        class="img-fluid" /></div>
                                                <span>French</span>
                                            </a>
                                        </div>
                                        <div class="col-sm-4 col-6 language_select">
                                            <a href="javascript:void(0);" class="d-flex align-items-center gap-2">
                                                <div class="avatar-image avatar-sm"><img
                                                        src="/guest/assets/vendors/img/flags/1x1/de.svg" alt=""
                                                        class="img-fluid" /></div>
                                                <span>German</span>
                                            </a>
                                        </div>
                                        <div class="col-sm-4 col-6 language_select">
                                            <a href="javascript:void(0);" class="d-flex align-items-center gap-2">
                                                <div class="avatar-image avatar-sm"><img
                                                        src="/guest/assets/vendors/img/flags/1x1/in.svg" alt=""
                                                        class="img-fluid" /></div>
                                                <span>Hindi</span>
                                            </a>
                                        </div>
                                        <div class="col-sm-4 col-6 language_select">
                                            <a href="javascript:void(0);" class="d-flex align-items-center gap-2">
                                                <div class="avatar-image avatar-sm"><img
                                                        src="/guest/assets/vendors/img/flags/1x1/ru.svg" alt=""
                                                        class="img-fluid" /></div>
                                                <span>Russian</span>
                                            </a>
                                        </div>
                                        <div class="col-sm-4 col-6 language_select">
                                            <a href="javascript:void(0);" class="d-flex align-items-center gap-2">
                                                <div class="avatar-image avatar-sm"><img
                                                        src="/guest/assets/vendors/img/flags/1x1/es.svg" alt=""
                                                        class="img-fluid" /></div>
                                                <span>Spanish</span>
                                            </a>
                                        </div>
                                        <div class="col-sm-4 col-6 language_select">
                                            <a href="javascript:void(0);" class="d-flex align-items-center gap-2">
                                                <div class="avatar-image avatar-sm"><img
                                                        src="/guest/assets/vendors/img/flags/1x1/tr.svg" alt=""
                                                        class="img-fluid" /></div>
                                                <span>Turkish</span>
                                            </a>
                                        </div>
                                        <div class="col-sm-4 col-6 language_select">
                                            <a href="javascript:void(0);" class="d-flex align-items-center gap-2">
                                                <div class="avatar-image avatar-sm"><img
                                                        src="/guest/assets/vendors/img/flags/1x1/pk.svg" alt=""
                                                        class="img-fluid" /></div>
                                                <span>Urdo</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="nxl-h-item d-none d-sm-flex">
                            <div class="full-screen-switcher">
                                <a href="javascript:void(0);" class="nxl-head-link me-0"
                                    onclick="$('body').fullScreenHelper('toggle');">
                                    <font-awesome-icon :icon="['fas', 'maximize']" class="maximize" />
                                    <font-awesome-icon :icon="['fas', 'minimize']" class="minimize" />
                                </a>
                            </div>
                        </div>
                        <div class="nxl-h-item dark-light-theme">
                            <a href="javascript:void(0);" class="nxl-head-link me-0 dark-button">
                                <font-awesome-icon :icon="['fas', 'moon']" />
                            </a>
                            <a href="javascript:void(0);" class="nxl-head-link me-0 light-button" style="display: none">
                                <font-awesome-icon :icon="['fas', 'sun']" />
                            </a>
                        </div>
                        <div class="dropdown nxl-h-item">
                            <a href="javascript:void(0);" class="nxl-head-link me-0" data-bs-toggle="dropdown"
                                role="button" data-bs-auto-close="outside">
                                <font-awesome-icon :icon="['fas', 'clock']" />
                                <span class="badge bg-success nxl-h-badge">2</span>
                            </a>
                            <div class="dropdown-menu dropdown-menu-end nxl-h-dropdown nxl-timesheets-menu">
                                <div class="d-flex justify-content-between align-items-center timesheets-head">
                                    <h6 class="fw-bold text-dark mb-0">Timesheets</h6>
                                    <a href="javascript:void(0);" class="fs-11 text-success text-end ms-auto"
                                        data-bs-toggle="tooltip" title="Upcomming Timers">
                                        <font-awesome-icon :icon="['fas', 'clock']" />
                                        <span>3 Upcomming</span>
                                    </a>
                                </div>
                                <div
                                    class="d-flex justify-content-between align-items-center flex-column timesheets-body">
                                    <font-awesome-icon :icon="['fas', 'clock']" class="fs-1 mb-4" />
                                    <p class="text-muted">No started timers found yes!</p>
                                    <a href="javascript:void(0);" class="btn btn-sm btn-primary">Started Timer</a>
                                </div>
                                <div class="text-center timesheets-footer">
                                    <a href="javascript:void(0);" class="fs-13 fw-semibold text-dark">Alls
                                        Timesheets</a>
                                </div>
                            </div>
                        </div>
                        <div class="dropdown nxl-h-item">
                            <a class="nxl-head-link me-3" data-bs-toggle="dropdown" href="index.html#" role="button"
                                data-bs-auto-close="outside">
                                <font-awesome-icon :icon="['fas', 'bell']" />
                                <span class="badge bg-danger nxl-h-badge">3</span>
                            </a>
                            <div class="dropdown-menu dropdown-menu-end nxl-h-dropdown nxl-notifications-menu">
                                <div class="d-flex justify-content-between align-items-center notifications-head">
                                    <h6 class="fw-bold text-dark mb-0">Notifications</h6>
                                    <a href="javascript:void(0);" class="fs-11 text-success text-end ms-auto"
                                        data-bs-toggle="tooltip" title="Make as Read">
                                        <font-awesome-icon :icon="['fas', 'check']" />
                                        <span>Make as Read</span>
                                    </a>
                                </div>
                                <div class="notifications-item">
                                    <img src="/guest/assets/images/avatar/2.png" alt="" class="rounded me-3 border" />
                                    <div class="notifications-desc">
                                        <a href="javascript:void(0);" class="font-body text-truncate-2-line"> <span
                                                class="fw-semibold text-dark">Malanie Hanvey</span> We should talk about
                                            that at lunch!</a>
                                        <div class="d-flex justify-content-between align-items-center">
                                            <div
                                                class="notifications-date text-muted border-bottom border-bottom-dashed">
                                                2 minutes ago</div>
                                            <div class="d-flex align-items-center float-end gap-2">
                                                <a href="javascript:void(0);"
                                                    class="d-block wd-8 ht-8 rounded-circle bg-gray-300"
                                                    data-bs-toggle="tooltip" title="Make as Read"></a>
                                                <a href="javascript:void(0);" class="text-danger"
                                                    data-bs-toggle="tooltip" title="Remove">
                                                    <font-awesome-icon :icon="['fas', 'times']" class="fs-12" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="notifications-item">
                                    <img src="/guest/assets/images/avatar/3.png" alt="" class="rounded me-3 border" />
                                    <div class="notifications-desc">
                                        <a href="javascript:void(0);" class="font-body text-truncate-2-line"> <span
                                                class="fw-semibold text-dark">Valentine Maton</span> You can download
                                            the latest invoices now.</a>
                                        <div class="d-flex justify-content-between align-items-center">
                                            <div
                                                class="notifications-date text-muted border-bottom border-bottom-dashed">
                                                36 minutes ago</div>
                                            <div class="d-flex align-items-center float-end gap-2">
                                                <a href="javascript:void(0);"
                                                    class="d-block wd-8 ht-8 rounded-circle bg-gray-300"
                                                    data-bs-toggle="tooltip" title="Make as Read"></a>
                                                <a href="javascript:void(0);" class="text-danger"
                                                    data-bs-toggle="tooltip" title="Remove">
                                                    <font-awesome-icon :icon="['fas', 'times']" class="fs-12" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="notifications-item">
                                    <img src="/guest/assets/images/avatar/4.png" alt="" class="rounded me-3 border" />
                                    <div class="notifications-desc">
                                        <a href="javascript:void(0);" class="font-body text-truncate-2-line"> <span
                                                class="fw-semibold text-dark">Archie Cantones</span> Don't forget to
                                            pickup Jeremy after school!</a>
                                        <div class="d-flex justify-content-between align-items-center">
                                            <div
                                                class="notifications-date text-muted border-bottom border-bottom-dashed">
                                                53 minutes ago</div>
                                            <div class="d-flex align-items-center float-end gap-2">
                                                <a href="javascript:void(0);"
                                                    class="d-block wd-8 ht-8 rounded-circle bg-gray-300"
                                                    data-bs-toggle="tooltip" title="Make as Read"></a>
                                                <a href="javascript:void(0);" class="text-danger"
                                                    data-bs-toggle="tooltip" title="Remove">
                                                    <font-awesome-icon :icon="['fas', 'times']" class="fs-12" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="text-center notifications-footer">
                                    <a href="javascript:void(0);" class="fs-13 fw-semibold text-dark">Alls
                                        Notifications</a>
                                </div>
                            </div>
                        </div>
                        <div class="dropdown nxl-h-item">
                            <a href="javascript:void(0);" data-bs-toggle="dropdown" role="button"
                                data-bs-auto-close="outside">
                                <img src="/guest/assets/images/avatar/1.png" alt="user-image"
                                    class="img-fluid user-avtar me-0" />
                            </a>
                            <div class="dropdown-menu dropdown-menu-end nxl-h-dropdown nxl-user-dropdown">
                                <div class="dropdown-header">
                                    <div class="d-flex align-items-center">
                                        <img src="/guest/assets/images/avatar/1.png" alt="user-image"
                                            class="img-fluid user-avtar" />
                                        <div>
                                            <h6 class="text-dark mb-0">Alexandra Della <span
                                                    class="badge bg-soft-success text-success ms-1">PRO</span></h6>
                                            <span class="fs-12 fw-medium text-muted">alex.della@outlook.com</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="dropdown">
                                    <a href="javascript:void(0);" class="dropdown-item" data-bs-toggle="dropdown">
                                        <span class="hstack">
                                                        <font-awesome-icon :icon="['fas', 'circle']" class="wd-10 ht-10 border border-2 border-gray-1 bg-success rounded-circle me-2" />
                                            <span>Active</span>
                                        </span>
                                        <font-awesome-icon :icon="['fas', 'chevron-right']" class="ms-auto me-0" />
                                    </a>
                                    <div class="dropdown-menu">
                                        <a href="javascript:void(0);" class="dropdown-item">
                                            <span class="hstack">
                                                <font-awesome-icon :icon="['fas', 'circle']" class="wd-10 ht-10 border border-2 border-gray-1 bg-warning rounded-circle me-2" />
                                                <span>Always</span>
                                            </span>
                                        </a>
                                        <a href="javascript:void(0);" class="dropdown-item">
                                            <span class="hstack">
                                                <font-awesome-icon :icon="['fas', 'circle']" class="wd-10 ht-10 border border-2 border-gray-1 bg-success rounded-circle me-2" />
                                                <span>Active</span>
                                            </span>
                                        </a>
                                        <a href="javascript:void(0);" class="dropdown-item">
                                            <span class="hstack">
                                                <font-awesome-icon :icon="['fas', 'circle']" class="wd-10 ht-10 border border-2 border-gray-1 bg-danger rounded-circle me-2" />
                                                <span>Bussy</span>
                                            </span>
                                        </a>
                                        <a href="javascript:void(0);" class="dropdown-item">
                                            <span class="hstack">
                                                <font-awesome-icon :icon="['fas', 'circle']"
                                                    class="wd-10 ht-10 border border-2 border-gray-1 bg-info rounded-circle me-2" />
                                                <span>Inactive</span>
                                            </span>
                                        </a>
                                        <a href="javascript:void(0);" class="dropdown-item">
                                            <span class="hstack">
                                                <font-awesome-icon :icon="['fas', 'circle']"
                                                    class="wd-10 ht-10 border border-2 border-gray-1 bg-dark rounded-circle me-2" />
                                                <span>Disabled</span>
                                            </span>
                                        </a>
                                        <div class="dropdown-divider"></div>
                                        <a href="javascript:void(0);" class="dropdown-item">
                                            <span class="hstack">
                                                <i
                                                    class="wd-10 ht-10 border border-2 border-gray-1 bg-primary rounded-circle me-2"></i>
                                                <span>Cutomization</span>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                                <div class="dropdown-divider"></div>
                                <div class="dropdown">
                                    <a href="javascript:void(0);" class="dropdown-item" data-bs-toggle="dropdown">
                                        <span class="hstack">
                                            <font-awesome-icon :icon="['fas', 'dollar-sign']" class="me-2" />
                                            <span>Subscriptions</span>
                                        </span>
                                        <font-awesome-icon :icon="['fas', 'chevron-right']" class="ms-auto me-0" />
                                    </a>
                                    <div class="dropdown-menu">
                                        <a href="javascript:void(0);" class="dropdown-item">
                                            <span class="hstack">
                                                <font-awesome-icon :icon="['fas', 'circle']" class="me-3" />
                                                <span>Plan</span>
                                            </span>
                                        </a>
                                        <a href="javascript:void(0);" class="dropdown-item">
                                            <span class="hstack">
                                                <font-awesome-icon :icon="['fas', 'circle']" class="me-3" />
                                                <span>Billings</span>
                                            </span>
                                        </a>
                                        <a href="javascript:void(0);" class="dropdown-item">
                                            <span class="hstack">
                                                <font-awesome-icon :icon="['fas', 'circle']" class="me-3" />
                                                <span>Referrals</span>
                                            </span>
                                        </a>
                                        <a href="javascript:void(0);" class="dropdown-item">
                                            <span class="hstack">
                                                <font-awesome-icon :icon="['fas', 'circle']" class="me-3" />
                                                <span>Payments</span>
                                            </span>
                                        </a>
                                        <a href="javascript:void(0);" class="dropdown-item">
                                            <span class="hstack">
                                                <font-awesome-icon :icon="['fas', 'circle']" class="me-3" />
                                                <span>Statements</span>
                                            </span>
                                        </a>
                                        <div class="dropdown-divider"></div>
                                        <a href="javascript:void(0);" class="dropdown-item">
                                            <span class="hstack">
                                                <font-awesome-icon :icon="['fas', 'circle']" class="me-3" />
                                                <span>Subscriptions</span>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                                <div class="dropdown-divider"></div>
                                <a href="javascript:void(0);" class="dropdown-item">
                                    <font-awesome-icon :icon="['fas', 'user']" />
                                    <span>Profile Details</span>
                                </a>
                                <a href="javascript:void(0);" class="dropdown-item">
                                    <font-awesome-icon :icon="['fas', 'chart-line']" />
                                    <span>Activity Feed</span>
                                </a>
                                <a href="javascript:void(0);" class="dropdown-item">
                                    <font-awesome-icon :icon="['fas', 'dollar-sign']" />
                                    <span>Billing Details</span>
                                </a>
                                <a href="javascript:void(0);" class="dropdown-item">
                                    <font-awesome-icon :icon="['fas', 'bell']" />
                                    <span>Notifications</span>
                                </a>
                                <a href="javascript:void(0);" class="dropdown-item">
                                    <font-awesome-icon :icon="['fas', 'cog']" />
                                    <span>Account Settings</span>
                                </a>
                                <div class="dropdown-divider"></div>
                                <a href="auth-login-minimal.html" class="dropdown-item">
                                    <font-awesome-icon :icon="['fas', 'sign-out-alt']" />
                                    <span>Logout</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <!--! [End] Header Right !-->
            </div>
        </div>
    </header>
</template>

<style scoped>
.hstack>svg {
    margin-right: 1rem;
}
</style>