(function ($) {
    'use strict';

$(window).load(function() {
    $('#preloader-wrapper').fadeOut('slow');
});

    $('.gallery-slider').owlCarousel(
        {
        pagination : true,
        autoPlay : 5000,
        itemsDesktop  :  [1500,4],
        itemsDesktopSmall :  [979,3]
        }
    );

    // Gallery Popup
    $('.image-popup').magnificPopup({type:'image'});

})(jQuery);


function about(){
    window.location.href='/about';
}

function Backtohome(){
    window.location.href='/';
}

function AlertHello(){
    alert("Hello! I am an alert box!!");
}

function hello(){
    window.location.href='/HelloAlert';
}
function button1(){
    window.location.href='/form';
}
function Submit(){
    const inputdata = document.getElementById('submit').value;
    alert("you have entered "+ inputdata);

}
