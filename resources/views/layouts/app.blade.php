<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <!-- Title -->
    <title>{{ config('app.name', 'Laravel') }}</title>
    <link rel="shortcut icon" href="favicon.ico" />

    <!-- Font -->
    <script src="https://kit.fontawesome.com/fafe0cfffd.js" crossorigin="anonymous"></script>
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet" />

    <!-- PWA  -->
    <meta name="theme-color" content="{{ ($activePage == 'login')? '#151040':'#f7f9fc' }}"/>
    <meta name="theme-color"/>
{{--    <link rel="manifest" href="{{ asset('/manifest.json') }}">--}}

    <!-- Styles -->
    <link rel="stylesheet" href="{{ mix('css/vendor.css') }}">
    <link rel="stylesheet" href="{{ mix('css/theme.css') }}?v=1.1">
    <link rel="stylesheet" href="{{ mix('css/docs.css') }}">


    <!-- CSS Implementing Plugins -->
    <link rel="stylesheet" href="{{ mix('css/toastr.css') }}">
    <link rel="stylesheet" href="{{ asset('css/style.css?v=0.1') }}">

    <!-- Bootstrap Icons -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.0/font/bootstrap-icons.css">
    @routes
    @stack('css')
</head>

{{--@include('layouts/Preloader')--}}

<body class="scrollbar {{ $activePage == 'login' ? 'd-flex align-items-center min-h-100 bg-dark-blue' : 'footer-offset' }}" data-offset="80"
      data-hs-scrollspy-options='{
        "target": "#navbarSettings"
      }'>

@auth()
    <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
        @csrf
    </form>
    @include('layouts.page_templates.auth')
@endauth

@guest()
    @include('layouts.page_templates.guest')
@endguest


<!-- JAVASCRIPT ================================================== -->

<!-- JS Implementing Plugins -->
<script src="{{ mix('js/hs-navbar-vertical-aside-mini-cache.js') }}"></script>
<script src="{{ mix('js/vendor.js') }}"></script>
<script src="{{ mix('js/demo.js') }}"></script>

<!-- JS Front -->
<script src="{{ mix('js/theme.js') }}"></script>
<script src="{{ mix('js/sweetalert2.js') }}"></script>
<script src="{{ mix('js/toastr.js') }}"></script>
<script src="{{ mix('js/moment.js') }}"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.19.2/locale/es.js"></script>

<script src="https://kit.fontawesome.com/93c9ada402.js" crossorigin="anonymous"></script>

<script>
    ///OPEN MODAL
    $(".add").on('click', function(event){
        var Open =  $("#"+$(this).data('action')+"");
        clear(Open);
        Open.modal('show');
        $("#id").val('');

    });

    ///CATALOGOS
    function catalogos()
    {
        var a=[];$.ajax(
            {
                url:"{{ route('catalogos') }}",type:"get",async:!1,cache:!1,success:function(b){a=b}
            });
            return a
    };
    var cat = catalogos()

    ///TEXT NONE
    function none(txt){
        return (txt)? txt : 'N/A' ;
    }

    ///TEXT CASH
    function dinero(txt){
        return (txt)? parseFloat(txt).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') : 'N/A' ;
    }

    ///TEXT FECHA
    function fecha(txt){
        return (txt)? moment(txt).format('DD/MM/YYYY') : 'N/A' ;
    }

    ///SWAL LOADING
    function loading(){
        Swal.fire({
            title: 'Cargando...',
            onBeforeOpen () {
                Swal.showLoading ()
            },
            onAfterClose () {
                Swal.hideLoading()
            },
            allowOutsideClick: false,
            allowEscapeKey: false,
            allowEnterKey: false
        });
    }

    ///SWAL CLOSE
    function loading_close(){
        Swal.close()
    }

    ///SWAL ERROR
    function error(mesage){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: (mesage)? mesage : 'Algo salio mal, intente mas tarde.',
        })
    }
</script>

{{--PLUGINS--}}
<script>
    ////TOASTR
    toastr.options = {
        "close": true,
        "debug": false,
        "newestOnTop": false,
        "progressBar": true,
        "positionClass": "toast-top-right",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "1000",
        "hideDuration": "1000",
        "timeOut": "8000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    };

    ///MOMENT
    moment.locale('es');

    $(document).on('ready', function () {
        @auth()
        if(localStorage.getItem("Status"))
        {
            toastr.success(localStorage.getItem("Status"));
            localStorage.clear();
        }
        @endauth
        //DARK MODE STORAGE
        const currentTheme = localStorage.getItem("theme");
        const themeColor = document.querySelector('meta[name=theme-color]');

        if (currentTheme === "dark") {
            document.body.classList.add("dark-theme");
            themeColor.setAttribute('content', '#110D33')
        }

        // initialization of navbar vertical navigation
        var sidebar = $('.js-navbar-vertical-aside').hsSideNav();

        // initialization of tooltip in navbar vertical menu
        $('.js-nav-tooltip-link').tooltip({ boundary: 'window' })

        $(".js-nav-tooltip-link").on("show.bs.tooltip", function (e) {
            if (!$("body").hasClass("navbar-vertical-aside-mini-mode")) {
                return false;
            }
        });

        $('.js-hs-unfold-invoker').each(function () {
            var unfold = new HSUnfold($(this)).init();
        });

        ///AJAX TOKEN
        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });
    });

    ///JET LINK
    $("body").on("click",".nav-jet-link",function(){
        const id = $(this)
        var ruta = ($(this).data("action"));

        $.ajax({
            url: route(ruta+'.index'),
            beforeSend: function(){
                $('#main_content').empty();
                $('#spinner_content').show();
            },
            success: function(data)
            {
                $('#main_content').html(data);
            },
            complete: function(){
                $('#spinner_content').hide();
                $(".nav-jet-link").removeClass("active");
                id.toggleClass("active")
                $("#main_content").fadeIn();
            },
            error: function(data)
            {
                error(data)
            }
        })
    });
</script>
{{--PLUGINS END--}}

{{--SCRIPT SINGLE PAGE--}}
@stack('js')

</body>
</html>
