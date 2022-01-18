@include('layouts.menu.sidebar')
@include('layouts.menu.navbars.auth')
<main id="content" role="main" class="main pointer-event">
    @yield('content')
    @include('layouts.footers.auth')
</main>

