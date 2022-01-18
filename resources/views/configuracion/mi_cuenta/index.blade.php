<!-- Content -->
<div class="content container-fluid">
<!-- Page Header -->
<div class="page-header">
<div class="row align-items-end">
    <div class="col-sm mb-2 mb-sm-0">
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb breadcrumb-no-gutter">
                <li class="breadcrumb-item"><a class="breadcrumb-link" href="javascript:;">Configuración</a></li>
                <li class="breadcrumb-item active" aria-current="page">Mi cuenta</li>
            </ol>
        </nav>

        <h1 class="page-header-title">Mi cuenta</h1>
    </div>
</div>
<!-- End Row -->
</div>
<!-- End Page Header -->

<div class="row">
    <div class="col-lg-3">
        <!-- Navbar -->
        <div class="navbar-vertical navbar-expand-lg mb-3 mb-lg-5">
            <!-- Navbar Toggle -->
            <button type="button" class="navbar-toggler btn btn-block btn-white mb-3" aria-label="Toggle navigation" aria-expanded="false" aria-controls="navbarVerticalNavMenu" data-toggle="collapse" data-target="#navbarVerticalNavMenu">
                <span class="d-flex justify-content-between align-items-center">
                    <span class="h5 mb-0">Menu</span>
                    <span class="navbar-toggle-default">
                        <i class="tio-menu-hamburger"></i>
                    </span>
                    <span class="navbar-toggle-toggled">
                        <i class="tio-clear"></i>
                    </span>
                </span>
            </button>
            <!-- End Navbar Toggle -->

            <div id="navbarVerticalNavMenu" class="collapse navbar-collapse">
                <!-- Navbar Nav -->
                <ul id="navbarSettings" class="js-sticky-block js-scrollspy navbar-nav navbar-nav-lg nav-tabs card card-navbar-nav"
                    data-hs-sticky-block-options='{
                       "parentSelector": "#navbarVerticalNavMenu",
                       "breakpoint": "lg",
                       "startPoint": "#navbarVerticalNavMenu",
                       "endPoint": "#stickyBlockEndPoint",
                       "stickyOffsetTop": 20
                     }'>
                    <li class="nav-item">
                        <a class="nav-link active" href="#content">
                            <i class="tio-user-outlined nav-icon"></i>Información básica
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#emailSection">
                            <i class="tio-online nav-icon"></i> Email
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#passwordSection">
                            <i class="tio-lock-outlined nav-icon"></i>Contraseña
                        </a>
                    </li>
                </ul>
                <!-- End Navbar Nav -->
            </div>
        </div>
        <!-- End Navbar -->
    </div>
    <div class="col-lg-9">
        <!-- Avatar -->
        <form class="text-center" id="avatarForm" enctype="multipart/form-data">
            <div class="card mb-3 mb-lg-5">
                <!-- Profile Cover -->
                <div class="profile-cover">
                    <div class="profile-cover-img-wrapper">
                        <img id="profileCoverImg" class="profile-cover-img" src="{{ asset('material/wallpapers') }}/mountain.jpg" alt="Image Description">
                    </div>
                </div>
                <!-- End Profile Cover -->

                <label class="avatar avatar-xxl avatar-circle avatar-border-lg avatar-uploader profile-cover-avatar" for="avatarUploader">
                    <img id="avatar" class="avatar-img" src="{{ config('app.avatar').auth()->user()->avatar }}" alt="Image Description">
                    <input type="hidden" value="{{ auth()->user()->id }}" name="id">
                    <input type="file" class="js-file-attach avatar-uploader-input" id="avatarUploader" name="avatarUploader"
                           data-hs-file-attach-options='{
                              "textTarget": "#avatar",
                              "mode": "image",
                              "targetAttr": "src",
                              "allowTypes": [".png", ".jpeg", ".jpg"],
                              "maxFileSize": 51200
                           }'>

                    <span class="avatar-uploader-trigger">
                        <i class="bi bi-camera-fill avatar-uploader-icon shadow-soft"></i>
                    </span>
                </label>

                <button type="submit" class="js-file-attach-reset-img btn btn-white d-none update_avatar">Actualizar foto de perfil</button>

            </div>
        </form>
        <!-- End Avatar -->

        <input type="hidden" value="{{(auth()->user()->id)}}" id="id_user">
        <!-- Card -->
        <div class="card mb-3 mb-lg-5">
            <div class="card-header">
                <h2 class="card-title h4">Información básica</h2>
            </div>

            <!-- Body -->
            <div class="card-body">
                <!-- Form -->
                <form class="js-validate" id="form-infoB">
                    <!-- Form Group -->
                    <div class="row form-group">
                        <label for="emailLabel" class="col-sm-3 col-form-label input-label">Nombre(s)</label>

                        <div class="col-sm-9 js-form-message">
                            <input type="text" class="form-control" id="nombre" name="nombre" aria-label="text" required data-msg="Ingresa su Nombre(s)." autocomplete="off">
                        </div>
                    </div>
                    <!-- End Form Group -->

                    <!-- Form Group -->
                    <div class="row form-group">
                        <label for="emailLabel" class="col-sm-3 col-form-label input-label">Apellido(s)</label>

                        <div class="col-sm-9 js-form-message">
                            <input type="text" class="form-control" id="apellidos" name="apellidos" aria-label="text" required data-msg="Ingrese su Apellido(s)." autocomplete="off">
                        </div>
                    </div>
                    <!-- End Form Group -->

                    <!-- Form Group -->
                    <div class="row form-group">

                        <label for="emailLabel" class="col-sm-3 col-form-label input-label">Nacionalidad</label>

                        <div class="col-sm-9 js-form-message">
                            <select class="js-select2-custom custom-select" size="1" style="opacity: 0;" id="nacionalidad" name="nacionalidad" required data-msg="Seleccione su nacionalidad."
                                    data-hs-select2-options='{
                                                    "minimumResultsForSearch": "Infinity",
                                                    "placeholder": "Seleccione una nacionalidad"
                                                }'>
                                <option value=""> Seleccionar</option>
                                <option value="1"> S/N</option>
                            </select>
                        </div>
                    </div>
                    <!-- End Form Group -->

                    <!-- Form Group -->
                    <div class="row form-group">
                        <label for="emailLabel" class="col-sm-3 col-form-label input-label">Fecha de nacimiento</label>

                        <div class="col-sm-9 js-form-message">
                            <input type="text" class="js-flatpickr form-control flatpickr-custom" id="fecha_nacimiento" name="fecha_nacimiento" placeholder="Selecciona una fecha"
                                   data-hs-flatpickr-options='{
                                 "dateFormat": "Y/m/d"
                               }'
                                   required data-msg="Ingrese su fecha de nacimiento."
                            >
                        </div>
                    </div>
                    <!-- End Form Group -->

                    <!-- Form Group -->
                    <div class="row form-group">
                        <label for="emailLabel" class="col-sm-3 col-form-label input-label">Género</label>

                        <div class="col-sm-9 js-form-message">
                            <select class="js-select2-custom custom-select" size="1" style="opacity: 0;" id="genero" name="genero" required data-msg="Seleccione un genero."
                                    data-hs-select2-options='{
                                                "minimumResultsForSearch": "Infinity",
                                                "placeholder": "Selecciona un genero"
                                            }'>
                                <option value=""> Seleccionar</option>
                                <option value="1"> Masculino</option>
                                <option value="2"> Femenino</option>

                            </select>
                        </div>
                    </div>
                    <!-- End Form Group -->

                    <!-- Form Group -->
                    <div class="row form-group">
                        <label for="phoneLabel" class="col-sm-3 col-form-label input-label">Celular</label>

                        <div class="col-sm-9">
                            <input type="text" class="js-masked-input form-control" id="celular" name="celular" placeholder="(000)000-0000" aria-label="(000)000-0000"
                                   data-hs-mask-options='{
                           "template": "(000)000-0000"
                         }' autocomplete="off">
                        </div>
                    </div>
                    <!-- End Form Group -->

                    <!-- Form Group -->
                    <div class="row form-group">
                        <label for="locationLabel" class="col-sm-3 col-form-label input-label">Domicilio</label>

                        <div class="col-sm-9">
                            <select class="js-select2-custom custom-select js-form-message" size="1" style="opacity: 0;" id="pais_residencia" name="pais_residencia" required data-msg="Seleccione su pais de residencia."
                                    data-hs-select2-options='{
                                            "minimumResultsForSearch": "Infinity",
                                            "placeholder": "Seleccione su pais de residencia"
                                        }'>
                                <option value=""> Seleccionar</option>
                                <option value="1"> S/N</option>
                            </select>

                            <textarea class="form-control mb-3 mt-4" id="direccion" name="direccion" placeholder="Dirección" autocomplete="off" required data-msg="Ingrse su direccion completa"></textarea>
                        </div>
                    </div>
                    <!-- End Form Group -->

                    <div class="d-flex justify-content-end">
                        <button type="submit" class="btn btn-success snd">Guardar</button>
                    </div>
                </form>
                <!-- End Form -->
            </div>
            <!-- End Body -->
        </div>
        <!-- End Card -->

        <!-- Card -->
        <form class="js-validate" id="form-email">
            <div id="emailSection" class="card mb-3 mb-lg-5">
                <div class="card-header">
                    <h3 class="card-title h4">Email</h3>
                </div>

                <!-- Body -->
                <div class="card-body">
                    <p>Su dirección de correo electrónico actual es: <span class="font-weight-bold">{{(auth()->user()->email)}}</span></p>

                    <!-- Form -->
                    <form>
                        <!-- Form Group -->
                        <div class="row form-group">
                            <label for="newEmailLabel" class="col-sm-3 col-form-label input-label">Nueva dirección de correo electrónico</label>

                            <div class="col-sm-9">
                                <div class="js-form-message">
                                    <input type="email" class="form-control" name="email" id="email" required data-msg="Ingrese su nuevo correo electrónico" autocomplete="off">
                                </div>
                            </div>
                        </div>
                        <!-- End Form Group -->

                        <div class="d-flex justify-content-end">
                            <button type="submit" class="btn btn-success snd">Guardar</button>
                        </div>
                    </form>
                    <!-- End Form -->
                </div>
                <!-- End Body -->
            </div>
        </form>
        <!-- End Card -->

        <!-- Card -->
        <div id="passwordSection" class="card mb-3 mb-lg-5">
            <div class="card-header">
                <h4 class="card-title">Cambia tu contraseña</h4>
            </div>

            <!-- Body -->
            <div class="card-body">
                <!-- Form -->
                <form class="js-validate" id="form-password">
                    <!-- Form Group -->
                    <div class="row form-group">
                        <label for="newPassword" class="col-sm-3 col-form-label input-label">Nueva contraseña</label>

                        <div class="col-sm-9">
                            <input type="password" class="js-pwstrength form-control" name="password" placeholder="********" aria-label="********"
                                   data-hs-pwstrength-options='{
                                 "ui": {
                                   "container": "#changePasswordForm",
                                   "viewports": {
                                     "progress": "#passwordStrengthProgress",
                                     "verdict": "#passwordStrengthVerdict"
                                   }
                                 }
                               }' required>

                            <p id="passwordStrengthVerdict" class="form-text"></p>

                            <div id="passwordStrengthProgress" class="mb-3"></div>

                            <h5>Requisitos de contraseña</h5>

                            <p class="font-size-sm mb-2">Asegúrese de que se cumplen estos requisitos:</p>

                            <ul class="font-size-sm">
                                <li>Mínimo 8 caracteres de largo - cuanto más, mejor</li>
                                <li>Al menos un carácter en minúsculas</li>
                                <li>Al menos un carácter en mayúsculas</li>
                                <li>Al menos un número, símbolo o carácter de espacio en blanco</li>
                            </ul>
                        </div>
                    </div>
                    <!-- End Form Group -->

                    <div class="d-flex justify-content-end">
                        <button type="submit" class="btn btn-success snd">Guardar</button>
                    </div>
                </form>
                <!-- End Form -->
            </div>
            <!-- End Body -->
        </div>
        <!-- End Card -->

        <!-- Sticky Block End Point -->
        <div id="stickyBlockEndPoint"></div>
    </div>
</div>
<!-- End Row -->
</div>
<!-- End Content -->

<script src="{{ config('app.plugins') }}script.js"></script>

<script>
    ///REEMPLAZE AVATAR
    $("#avatarUploader").change(function(){
        if (this.files.length != 0){
            $('.update_avatar').removeClass("d-none");
        }
    });

    ///UPDATE AVATAR
    $('.update_avatar').click(function (event) {
        event.preventDefault();
        var form = $(this).closest('form');
        var url = route('mi_cuenta.store')
        var formData = new FormData(form[0]);

        if(form.valid()){
            $.ajax({
                url: url,
                type: "POST",
                dataType: 'json',
                data: formData,
                processData: false,
                contentType: false,
                beforeSend: function(){
                    $('#spinner_content').show();
                    $('#main_content').hide();
                },
                success: function (data) {
                    location.reload();
                },
                complete: function (data){
                    $('#spinner_content').hide();
                    $('#main_content').show();
                },
                error: function (data) {
                    $('#spinner_content').hide();
                    error(data.responseText)
                }
            });
        }
    });

    ///CREATED OR EDIT
    $('body').off("click",'.snd').on('click', '.snd', function (event) {
        var form = $("#"+$(this).parents('form').attr('id')+"");
        var id = $("#id_user").val();
        if(form.valid()){
            event.preventDefault()
            $.ajax({
                url: '{{ route('mi_cuenta.store') }}',
                type: "POST",
                data: form.serialize() + "&id=" + id,
                dataType: 'json',
                beforeSend: function(){
                    loading();
                },
                success: function (data) {
                    if(data.respuesta) {
                        toastr.success( data.mensaje );
                    }
                },
                error: function (data) {
                    error();
                },
                complete: function(){
                    loading_close();
                }
            });
        }
    });

    ///EDIT
    $.ajax({
        type: "get",
        url: "{{ url('mi_cuenta') }}/"+$("#id_user").val()+'/edit',
        success: function(data){
            $.each(data.usuario, function(index, value) {
                if(index === 'genero'){
                    $('#genero').val(value).trigger('change');
                }else{
                    $('#'+index+'').val(value);
                }
            });
            $.each(data.domicilio, function(index, value) {
                $('#'+index+'').attr('placeholder', value);
                $('#'+index+'').val(value);
            });
        },
        fail: function (data){
            error();
        }
    });
</script>