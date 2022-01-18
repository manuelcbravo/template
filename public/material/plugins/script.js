// INITIALIZATION JS VALIDATE
// =======================================================
$('.js-validate').each(function() {
    $.HSCore.components.HSValidation.init($(this));
});

// INITIALIZATION JS FLATPICKR
// =======================================================
$('.js-flatpickr').each(function () {
    $.HSCore.components.HSFlatpickr.init($(this));
});

// INITIALIZATION OF COUNTERS
// =======================================================
$('.js-counter').each(function() {
    var counter = new HSCounter($(this)).init();
});

// INITIALIZATION OF STICKY BLOCKS
// =======================================================
$('.js-sticky-block').each(function () {
    var stickyBlock = new HSStickyBlock($(this), {
        targetSelector: $('#header').hasClass('navbar-fixed') ? '#header' : null
    }).init();
});

// INITIALIZATION OF SCROLL NAV
// =======================================================
var scrollspy = new HSScrollspy($('body'), {
    // !SETTING "resolve" PARAMETER AND RETURNING "resolve('completed')" IS REQUIRED
    beforeScroll: function(resolve) {
        if (window.innerWidth < 992) {
            $('#navbarVerticalNavMenu').collapse('hide').on('hidden.bs.collapse', function () {
                return resolve('completed');
            });
        } else {
            return resolve('completed');
        }
    }
}).init();

// INITIALIZATION OF PASSWORD STRENGTH MODULE
// =======================================================
$('.js-pwstrength').each(function () {
    var pwstrength = $.HSCore.components.HSPWStrength.init($(this));
});

// INITIALIZATION OF CUSTOM FILE
// =======================================================
$('.js-file-attach').each(function () {
    var customFile = new HSFileAttach($(this)).init();
});

// SELECT2
// =======================================================
$('.js-select2-custom').each(function () {
    var select2 = $.HSCore.components.HSSelect2.init($(this));
});

// INITIALIZATION INPUT MASKED
// =======================================================
$('.js-masked-input').each(function () {
    $.HSCore.components.HSMask.init($(this));
});