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
    $(document).on('input', 'input[type=text]', function(){
        // store current positions in variables
        var start = this.selectionStart,
            end = this.selectionEnd;
        this.value = this.value.toUpperCase();
        // restore from variables...
        this.setSelectionRange(start, end);
    });

    $(document).on('input', 'textarea', function(){
        // store current positions in variables
        var start = this.selectionStart,
            end = this.selectionEnd;
        this.value = this.value.toUpperCase();
        // restore from variables...
        this.setSelectionRange(start, end);
    });

    ///JET LINK
    $("body").on("click",".nav-jet-link",function(){
        const id = $(this)
        var ruta = ($(this).data("action"));
        var id_destino = ($(this).data("id-destino"));
        var id_origen = ($(this).data("id-origen"));

        RUTA(id, ruta, id_destino, id_origen);
    });

    ///OPEN MODAL
    $('body').off('click','button.add').on('click',"button.add", function(event){
        var Open =  $("#"+$(this).data('action')+"");
        clear(Open);
        Open.modal('show');
        $("#id").val('');
    });

    ///CLEAR MODAL
    function clear(modal){
        //modal.find('form').trigger("reset");
        //$(".custom-select").val('').trigger('change');
        //$(".is-invalid").removeClass("is-invalid");
        //$(".is-valid").removeClass("is-valid");
        form = modal.find('form');
        form.trigger("reset");
        form.find('.custom-select').val('').trigger('change');
        form.find('.is-invalid').removeClass("is-invalid");
        form.find('.is-valid').removeClass("is-valid");
        form.find('.indeterminate-checkbox').prop("checked", false);
    }

    @auth()
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
    @endauth

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
            willOpen () {
                Swal.showLoading ()
            },
            didClose () {
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
    function error(mesage) {
        var respuesta
        var titulo = 'Oops...'
        if (mesage.status == 0){
            titulo = 'Revise su conexión a internet'
            respuesta = 'Revise su conexión a internet, es posible que necesite conectarse a una red estable para continuar'
        }else if(mesage.status == 401) {
            titulo = 'Sesión terminada'
            respuesta = 'Sesión terminada'
            document.getElementById('logout-form').submit();
        }else{
            respuesta = (mesage)? mesage.responseText : 'Algo salio mal, intente mas tarde.'
        }

        Swal.fire({
            icon: 'error',
            title: titulo,
            text: respuesta,
        })
    }

    ///CONVERT SIZES IN BYTES TO KB, MB, GB
    function formatBytes(a,b=2,k=1024){with(Math){let d=floor(log(a)/log(k));return 0==a?"0 Bytes":parseFloat((a/pow(k,d)).toFixed(max(0,b)))+" "+["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"][d]}}

    ///RUTAS
    function RUTA(id, ruta, id_destino, id_origen){
        var RUTA = ((!!id_destino && !!id_origen)? route(ruta, {id: id_destino, id2: id_origen}) : route(ruta+'.index'));

        $.ajax({
            url: RUTA,
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
                $("#main_content").fadeIn();

                if(id_destino && id_origen){
                    var link = document.getElementById('nav-link-'+ruta);
                    $(".nav-jet-link").removeClass("active");
                    link.className += " active";
                }
            },
            error: function(data)
            {
                error(data)
            }
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
</script>
{{--PLUGINS END--}}

{{--SCRIPT SINGLE PAGE--}}
@stack('js')

</body>
</html>
