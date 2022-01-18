<div id="headerMain" class="d-none">
    <header id="header"
            class="navbar navbar-expand-xl navbar-fixed navbar-height navbar-flush navbar-container navbar-bordered navbar-dark">
        <div class="navbar-nav-wrap">
            <div class="navbar-brand-wrapper">
                <!-- Logo -->
                <a class="navbar-brand" href="#" aria-label="Front">
                    <img class="navbar-brand-logo" src="{{ asset('material') }}/logos/logo_light.svg" alt="Logo" style="max-width: 3rem; min-width: 3rem">
                </a>
                <!-- End Logo -->
            </div>

            <!-- Top menu start -->
            <div class="navbar-nav-wrap-content-left">
                <!-- Navbar Vertical Toggle -->
                <button type="button" class="js-navbar-vertical-aside-toggle-invoker close ml-3">
                    <i class="bi bi-chevron-bar-right navbar-vertical-aside-toggle-full-align"
                       data-template='<div class="tooltip d-none d-sm-block" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>'
                       data-toggle="tooltip" data-placement="right" title="Mostrar menú" style="color: white"></i>
                </button>
                <!-- End Navbar Vertical Toggle -->
            </div>
            <!-- Top menu end -->

            <!-- User menu start -->
            <div class="navbar-nav-wrap-content-right">
                <!-- Navbar -->
                <ul class="navbar-nav align-items-center flex-row">

                    <!-- Notifications -->
                    <li class="nav-item d-sm-inline-block">
                        <div class="hs-unfold">
                            <a class="js-hs-unfold-invoker btn btn-icon btn-ghost-light rounded-circle mr-2" href="javascript:;"
                               data-hs-unfold-options='{
                                    "target": "#activitySidebar",
                                    "type": "css-animation",
                                    "animationIn": "fadeInRight",
                                    "animationOut": "fadeOutRight",
                                    "hasOverlay": true,
                                    "smartPositionOff": true
                                   }' id="btn_notificacion">
                                <i class="bi bi-bell tio-lg"></i>
                                <span class="btn-status btn-sm-status btn-status-primary" id="no_notificaciones"></span>
                            </a>
                        </div>
                        <!-- Activity -->
                    </li>

                    <!-- User account -->
                    <li class="nav-item">
                        <!-- Account -->
                        <div class="hs-unfold">
                            <a class="js-hs-unfold-invoker navbar-dropdown-account-wrapper" href="javascript:;"
                               data-hs-unfold-options='{
                                    "target": "#accountNavbarDropdown",
                                    "type": "css-animation"
                                  }' id="menu_logout">
                                <div class="avatar avatar-sm avatar-circle">
                                    <img class="avatar-img" src="{{ asset('uploads/avatars') }}/{{ auth()->user()->avatar }}" alt="Image Description">
                                    <span class="avatar-status avatar-sm-status avatar-status-success"></span>
                                </div>
                            </a>

                            <div id="accountNavbarDropdown"
                                 class="hs-unfold-content dropdown-unfold dropdown-menu dropdown-menu-right navbar-dropdown-menu navbar-dropdown-account"
                                 style="width: 16rem;">
                                <div class="dropdown-item">
                                    <div class="media align-items-center">
                                        <div class="avatar avatar-sm avatar-circle mr-2">
                                            <img class="avatar-img" src="{{ asset('uploads/avatars') }}/{{ auth()->user()->avatar }}" alt="Image Description">
                                        </div>
                                        <div class="media-body">
                                            <span class="card-title h5">{{ auth()->user()->nombre .' '.auth()->user()->ap_paterno }}</span>
                                            <span class="card-text">{{ auth()->user()->email }}</span>
                                        </div>
                                    </div>
                                </div>

                                <div class="dropdown-divider"></div>

                                <a class="dropdown-item nav-jet-link" href="#" data-action="mi_cuenta" title="Mi cuenta">
                                    <span class="text-truncate pr-2" title="Profile &amp; account">Mi cuenta</span>
                                </a>

                                <div class="dropdown-divider"></div>

                                <a class="dropdown-item" href="{{ route('logout') }}" onclick="event.preventDefault();document.getElementById('logout-form').submit();">
                                    <span class="text-truncate pr-2" title="Sign out">Cerrar sesión</span>
                                </a>
                            </div>
                        </div>
                        <!-- End Account -->
                    </li>
                </ul>
                <!-- End Navbar -->
            </div>
            <!-- User menu end -->
        </div>
    </header>
</div>

<!-- Activity -->
<div id="activitySidebar" class="hs-unfold-content sidebar sidebar-bordered sidebar-box-shadow" style="width: 18rem">
    <div class="card card-lg sidebar-card">
        <div class="card-header">
            <h4 class="card-header-title">Notificaciones</h4>

            <!-- Toggle Button -->
            <a class="js-hs-unfold-invoker btn btn-icon btn-xs btn-ghost-dark ml-2" href="javascript:;"
               data-hs-unfold-options='{
              "target": "#activitySidebar",
              "type": "css-animation",
              "animationIn": "fadeInRight",
              "animationOut": "fadeOutRight",
              "hasOverlay": true,
              "smartPositionOff": true
             }'>
                <i class="bi bi-x tio-lg"></i>
            </a>
            <!-- End Toggle Button -->
        </div>

        <!-- Body -->
        <div class="card-body-height vh-100">
            <!-- Tab Content -->

            <ul class="list-group list-group-flush" id="list_notifications">
            </ul>

            <div class="text-center mt-4" id="spinnerNList">
                <div class="spinner-border text-primary spinner-border-sm" style="width: 3rem; height: 3rem;" role="status" >
                    <span class="sr-only">Loading...</span>
                </div>
            </div>
        </div>
        <!-- End Tab Content -->
    </div>
</div>
<!-- End Activity -->