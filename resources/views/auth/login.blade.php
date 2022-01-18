@extends('layouts.app', ['activePage' => 'login', 'class' => 'off-canvas-sidebar'])

@section('content')
    <div class="position-relative bg-img-hero-login">
        <main id="content" role="main" class="main pt-0">
            <!-- Content -->
            <div class="container-fluid px-3">
                <div class="row">
                    <!-- Cover -->
                    <div class="col-lg-6 px-0">
                        <!-- Logo & Language -->
                        <div class="position-absolute top-0 left-0 right-0 mt-3 mx-3">
                            <div class="d-none d-lg-flex justify-content-between">
                                <a href="#">
                                    <img class="w-100" src="{{ asset('material') }}/logos/logo.svg" alt="Logo" style="min-width: 7rem; max-width: 7rem;">
                                </a>
                            </div>
                        </div>
                        <!-- End Logo & Language -->
                    </div>
                    <!-- End Cover -->

                    <div class="col-lg-6 d-flex justify-content-center align-items-center vh-100">
                        <!-- Card -->
                        <div class="w-100 card card-lg mb-5 blur" style="max-width: 30rem;">
                            <div class="d-flex d-lg-none justify-content-between p-4">
                                <a href="#" class="w-100 text-center">
                                    <img class="w-100" src="{{ asset('material') }}/logos/logo-vertical.svg" alt="Image Description" style="min-width: 7rem; max-width: 7rem;">
                                </a>
                            </div>
                            <div class="card-body card-body-login">
                                <!-- Form -->
                                <form id="login" class="js-validate">
                                    @csrf
                                    <div class="text-center">
                                        <div class="mb-5">
                                            <h1 class="display-4">Iniciar sesión</h1>
                                        </div>
                                    </div>

                                    <!-- Form Group -->
                                    <div class="form-group">
                                        <div class="form-label-group">
                                            <input type="email" id="email" name="email" class="form-control" placeholder="{{ __('Correo electrónico') }}" required autofocus autocomplete="email">
                                            <label for="email">{{ __('Correo electrónico') }}</label>
                                        </div>
                                    </div>

                                    <!-- Form Group -->
                                    <div class="form-group">
                                        <div class="form-label-group">
                                            <input type="password" id="password" name="password" class="form-control" placeholder="{{ __('Contraseña') }}" required autofocus autocomplete="current-password">
                                            <label for="password">{{ __('Contraseña') }}</label>
                                        </div>

                                        @if (Route::has('password.request'))
                                            <small>
                                                <a href="{{ route('password.request') }}">{{ __('¿Olvidaste Tu Contraseña?') }}</a>
                                            </small>
                                        @endif
                                    </div>
                                    <!-- End Form Group -->

                                    <!-- Checkbox -->
                                    <div class="form-group">
                                        <div class="custom-control custom-checkbox">
                                            <input type="checkbox" class="custom-control-input" id="termsCheckbox" name="remember">
                                            <label class="custom-control-label font-size-sm text-muted" for="termsCheckbox">Recuérdame</label>
                                        </div>
                                    </div>
                                    <!-- End Checkbox -->

                                    <button class="btn btn-lg btn-block btn-grad-blue text-light" type="submit" id="btn_login">

                                        <span class="indicator-label">
                                            {{ __('Iniciar sesión') }}
                                        </span>

                                        <span class="indicator-progress" style="display: none">
                                            <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                            Validando...
                                        </span>
                                    </button>
                                </form>
                                <!-- End Form -->
                            </div>
                            <!-- Footer -->
                            <div class="text-center">
                                <small class="text-cap mb-4">powered by SI group</small>
                            </div>
                            <!-- End Footer -->
                        </div>
                        <!-- End Card -->
                    </div>
                </div>
                <!-- End Row -->
            </div>
            <!-- End Content -->
        </main>
    </div>
@endsection

@push('js')


    <script>

        ///LOGIN
        const submitButton = document.getElementById('btn_login');
        submitButton.addEventListener('click', function (e) {

            // Prevent default button action
            e.preventDefault();
            var form = $("#login");

            // Validate form before submit
            if (form.valid()) {
                $.ajax({
                    url: '{{ route('authenticate') }}',
                    type : 'POST',
                    data : form.serialize(),
                    dataType: 'json',
                    beforeSend: function(){
                        $('.indicator-label').hide();
                        $('.indicator-progress').show();
                        submitButton.disabled = true;
                    },
                    success : function(data)
                    {
                        var response = data.status;

                        if(response === true)
                        {
                            $('.indicator-label').show();
                            $('.indicator-progress').hide();

                            window.location.replace('{{ url('/') }}');
                        }
                        else if(response === false )
                        {
                            $('.indicator-label').show();
                            $('.indicator-progress').hide();
                            $('#email').removeClass('is-valid').addClass('is-invalid');
                            $('#password').removeClass('is-valid').addClass('is-invalid');

                            // Enable button
                            submitButton.disabled = false;

                            Swal.fire({
                                icon: "error",
                                title: "Oops...",
                                text: 'Credenciales de autentificación incorrectos!',
                                allowOutsideClick: false,
                            }).then((result) => {
                                if (result.isConfirmed) {
                                    $('.card-body-login').shake();
                                }
                            });
                        }
                    }
                });
            }
        });
    </script>
@endpush