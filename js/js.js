$( ".slide-menu-togle" ).click(function() {
    $(".menu").toggleClass('menu-isclosed');
    $(".slide-menu").toggleClass('slide-menu-isclosed');
    $(".slide-menu-contacts").toggleClass('slide-menu-contacts-isclosed');
    $(".slide-menu-icon").toggleClass('slide-menu-icon-isclosed');
    $(".container").toggleClass('container-closed-m');
});

$('body').on("click", ".sgn-btn-continue", function(e){
   $(".sign-form, .sign-in__form-code").toggle();
});