
<!-- Content -->
<div class="content container-fluid">
    <!-- Page Header -->
    <div class="page-header">
        <div class="row align-items-end">
            <div class="col-sm mb-2 mb-sm-0">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb breadcrumb-no-gutter">
                        <li class="breadcrumb-item"><a class="breadcrumb-link" href="javascript:;">Configuración</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Usuarios</li>
                    </ol>
                </nav>

                <h1 class="page-header-title">Usuarios</h1>
            </div>

            <div class="col-sm-auto">
                <button class="btn btn-primary add" data-action="agregar">
                    <i class="bi bi-plus mr-1"></i> Agregar
                </button>
            </div>
        </div>
        <!-- End Row -->
    </div>
    <!-- End Page Header -->

    <!-- Card -->
    <div class="card">
        <!-- Header -->
        <div class="card-header">
            <div class="row justify-content-between align-items-center flex-grow-1">
                <div class="col-sm-12 col-md-12 mb-3 mb-sm-0">
                    <form>
                        <!-- Search -->
                        <div class="input-group input-group-merge input-group-flush">
                            <div class="input-group-prepend">
                                <div class="input-group-text">
                                    <i class="tio-search"></i>
                                </div>
                            </div>
                            <input id="datatableSearch" type="search" class="form-control" placeholder="Buscar usuario" aria-label="Search users">
                        </div>
                        <!-- End Search -->
                    </form>
                </div>


            </div>
            <!-- End Row -->
        </div>
        <!-- End Header -->

        <!-- Table -->
        <div class="table-responsive datatable-custom">
            <table id="datatable" class="table table-lg table-borderless table-thead-bordered table-nowrap table-align-middle card-table" style="width: 100%"
                   data-hs-datatables-options='{
                     "columnDefs": [{
                        "targets": [0],
                        "orderable": false
                      }],
                     "order": [],
                     "info": {
                       "totalQty": "#datatableWithPaginationInfoTotalQty"
                     },
                     "search": "#datatableSearch",
                     "entries": "#datatableEntries",
                     "pageLength": 10,
                     "isResponsive": false,
                     "isShowPaging": false,
                     "pagination": "datatablePagination"
                   }'>
                <thead class="thead-light">
                <tr>
                    <th>Nombre</th>
                    <th>Rol</th>
                    <th>Activo / Inactivo</th>
                    <th>Acciones</th>
                </tr>
                </thead>
            </table>
        </div>
        <!-- End Table -->

        <!-- Footer -->
        <div class="card-footer">
            <!-- Pagination -->
            <div class="row justify-content-center justify-content-sm-between align-items-sm-center">
                <div class="col-sm mb-2 mb-sm-0">
                    <div class="d-flex justify-content-center justify-content-sm-start align-items-center">
                        <span class="mr-2">Mostrando:</span>

                        <!-- Select -->
                        <select id="datatableEntries" class="js-select2-custom"
                                data-hs-select2-options='{
                            "minimumResultsForSearch": "Infinity",
                            "customClass": "custom-select custom-select-sm custom-select-borderless",
                            "dropdownAutoWidth": true,
                            "width": true
                          }'>
                            <option value="10" selected>10</option>
                            <option value="15">15</option>
                            <option value="20">20</option>
                        </select>
                        <!-- End Select -->

                        <span class="text-secondary mr-2">de</span>

                        <!-- Pagination Quantity -->
                        <span id="datatableWithPaginationInfoTotalQty"></span>
                    </div>
                </div>

                <div class="col-sm-auto">
                    <div class="d-flex justify-content-center justify-content-sm-end">
                        <!-- Pagination -->
                        <nav id="datatablePagination" aria-label="Activity pagination"></nav>
                    </div>
                </div>
            </div>
            <!-- End Pagination -->
        </div>
        <!-- End Footer -->
    </div>
    <!-- End Card -->
</div>
<!-- End Content -->

@include('configuracion.usuarios.modal')
<!-- ========== END SECONDARY CONTENTS ========== -->

<script src="{{ config('app.plugins') }}script.js"></script>
<!-- JS Plugins Init. -->
<script>
    $.each(cat.rol, function(index, value) {
        $('#rol').append('<option value="'+ value.id +'">'+ value.nombre+'</option>');
    });

    // initialization of datatables
    var datatable = $.HSCore.components.HSDatatables.init($('#datatable'), {
        dom: 'Bfrtip',
        buttons: [
            {
                extend: 'copy',
                className: 'd-none'
            },
            {
                extend: 'excel',
                className: 'd-none'
            },
            {
                extend: 'csv',
                className: 'd-none'
            },
            {
                extend: 'pdf',
                className: 'd-none'
            },
            {
                extend: 'print',
                className: 'd-none'
            },
        ],
        select: {
            style: 'multi',
            selector: 'td:first-child input[type="checkbox"]',
            classMap: {
                checkAll: '#datatableCheckAll',
                counter: '#datatableCounter',
                counterInfo: '#datatableCounterInfo'
            }
        },
        language: {
            zeroRecords: '<div class="text-center p-4">' +
                '<img class="mb-3" src="{{ config('app.svg') }}illustrations/sorry.svg" alt="Image Description" style="width: 7rem;">' +
                '<p class="mb-0">No hay información para mostrar</p>' +
                '</div>'
        },
        ajax: '{{ route('usuarioslist') }}',
        columns: [{
            render: function ( data, type, row ) {
                return '<div class="d-flex align-items-center"><div class="avatar avatar-soft-primary avatar-circle">'+
                    '<span class="avatar-initials">'+row.nombre[0]+'</span>'+
                    '</div> <div class="ml-3">' + row.nombre + ' ' + row.apellidos + '</div></div>';
            }
        },{
            data: 'nombre_rol'
        },{
            render: function ( data, type, row ) {
                var checked="";
                if(row.estatus == 1){
                    checked = "checked"
                }
                return '<label class="toggle-switch mx-2" for="customSwitch'+ row.id+'">'+
                    '<input type="checkbox" class="js-toggle-switch toggle-switch-input" data-id="'+ row.id+'" id="customSwitch'+ row.id+'" '+checked+'>'+
                    '<span class="toggle-switch-label">'+
                    '<span class="toggle-switch-indicator"></span>'+
                    '</span>'+
                    '</label>';
            }
        },{
            data: 'id',
            render: function(data, type) { return '<button class="btn btn-sm btn-primary add" data-action="edit" data-id="'+data+'"><i class="bi bi-pencil-square"></i></button> <button class="btn btn-sm btn-danger rmv" data-id="'+data+'" data-action="{{ url('usuarios') }}/' + data + '"> <i class="bi bi-trash"></i></button>'; }
        }
        ]
    });

    $('body').off('click','button.add').on('click',"button.add", function(event){
        $("#UserModal").modal('show');
        $("#id").val('');
        $('#UserModal').find('form').trigger("reset");

    });

    $("table").on("click","button.add",function(){
        $("#UserModal").modal('show');
        $('#UserModal').find('form').trigger('reset');
        var id = $(this).data('id');

        $.ajax({
            type: "get",
            url: "{{ url('usuarios') }}/"+id+'/edit',
            beforeSend: function(){
                loading();
            },
            success: function(data){
                $.each(data.usuario, function(index, value) {
                    if(index === 'rol') {
                        $('#rol').val(value).trigger('change');
                    } else if(index === 'id_agencia') {
                        $('#id_agencia').val(value).trigger('change');
                    }
                    $('#'+index+'').val(value);
                });
                loading_close();
            },
            fail: function (data){
                loading_close();
                error();
            }
        });

    });

    $("table").on("click","button.rmv",function(){
        var current_object = $(this);
        Swal.fire({
            title: '¿Desea eliminar?',
            text: "Si elimina este registro no se podrá recuperar",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Eliminar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.value) {
                var action = current_object.attr('data-action');
                var token = jQuery('meta[name="csrf-token"]').attr('content');
                var id = current_object.attr('data-id');

                $.ajax
                ({
                    type: "delete",
                    url: action,
                    dataType: "JSON",
                    data: {
                        "id": id,
                        "_token": token,
                    },
                    beforeSend: function(){
                        loading();
                    },
                    success: function(data)
                    {
                        datatable.ajax.reload();
                        toastr.success("Eliminado correctamente");
                        loading_close();
                    },
                    fail: function(data)
                    {
                        loading_close();
                        error()
                    }
                });
            }
        })
    });

    $('body').off('click','#submit').on('click', '#submit', function (event) {
        var form = $("#userdata");
        var rol = $("#rol").val();
        if( rol == 13 || rol == 14) {
            if ($('#id_agencia').attr('required')) $('#id_agencia').removeAttr('required');
        }else{
            if (!($('#id_agencia').attr('required'))) $('#id_agencia').attr("required", true);
        }
        if(form.valid()){
            event.preventDefault()
            $.ajax({
                url: '{{ route('usuarios.store') }}',
                type: "POST",
                data: form.serialize(),
                dataType: 'json',
                beforeSend: function(){
                    loading();
                },
                success: function (data) {
                    if(data.respuesta) {
                        $("#UserModal").modal('hide');
                        toastr.success( data.mensaje );
                        datatable.ajax.reload();
                    }
                    loading_close();
                },
                error: function (data) {
                    loading_close();
                    error();
                }
            });
        }

    });

    $("table").on("change",".toggle-switch-input",function(){
        var id = $(this).attr('data-id');
        var che = '';
        if( $(this).is(":checked") ){
            che=1
        }else{
            che=0
        }

        $.ajax({
            url: '{{ route('usuarios.store') }}',
            type: "POST",
            data: 'id='+id+'&estatus='+che,
            dataType: 'json',
            beforeSend: function(){
                loading();
            },
            success: function (data) {
                if(data.respuesta) {
                    toastr.success( data.mensaje );
                    datatable.ajax.reload();
                }
                loading_close();
            },
            error: function (data) {
                loading_close();
                error();
            }
        });

    });

    $('#rol').on('change', function() {
        var id = this.value;
        if(id == '13' || id == '14'){
            $('.agen').hide();
            $('#id_agencia').val('').trigger('change')
            $('#id_agencia').prop('require',false)
        }else {
            $('.agen').show();
            $('#id_agencia').val('').trigger('change')
            $('#id_agencia').prop('require',true)
        }
    });
</script>
