new Typed('#typed', {
    strings: ['Selamat datang di Perpustakaan Online', 'Mari membaca !!!', 'Tersedia e-book gratis lohh !!!'],
    typeSpeed: 100,
    delaySpeed: 7000,
    loop: true
});

new Typed('#typed-quote', {
    strings: ['Membaca adalah napas hidup dan jembatan emas ke masa depan.'],
    typeSpeed: 20,
    delaySpeed: 7000,
    loop: false,
    showCursor: false,
});

// logika fixed navbar
$(document).ready(function() {
    $(window).bind('scroll', function() {
        var navHeight = $(window).height() + 180;
        if ($(window).scrollTop() > navHeight) {
            $('#navbar-konten-perpustakaan').addClass(['fixed-left', 'card', 'card-body']);
        } else {
            $('#navbar-konten-perpustakaan').removeClass('fixed-left');
        }
    });
});

// activate scrollspy on sections navigation
$('body').scrollspy({
    target: '#navbar-konten-perpustakaan',
    offset: 0
});

$(function() {
    $('[data-toggle="tooltip"]').tooltip()
})

$('body').scrollspy({ target: 'navbar-konten-perpustakaan' })