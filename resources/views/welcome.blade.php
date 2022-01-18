@extends('layouts.app', ['activePage' => 'welcome'])

@section('content')
    <div id="spinner_content" class="content container-fluid" style="height: 80vh;">
        <div class="text-center" style="line-height: 80vh;">
            <div class="spinner-border text-primary" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div>
    </div>

    <!-- Content -->
    <div id="main_content"></div>
    <!-- End Content -->
@endsection

@push('js')
<script>
    $('#spinner_content').hide();
</script>
@endpush
