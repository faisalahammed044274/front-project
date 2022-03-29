/*---------------------------------------------------------------

    Template Name: Bestbook - Ebook Landing HTML Template
    Template URL: [demo url]
    Description: This is a landing page for E-book made with bootstrap 5
    Author: Digitshack
    Author URL: https://themeforest.net/user/digitshack
    Version: 1.0

-----------------------------------------------------------------

    JS INDEX
    ==================

    1. Preloader
    2. Testimonial Slider

----------------------------------------------------------------*/

"use strict";

/*================================= 
* 1. Preloader
==================================*/

var preloader = document.querySelector('.preloader');
setTimeout(function(){
    preloader.style.display = "none";
},700)

/*================================= 
* 2. Testimonial Slider
==================================*/

var slider = tns({
    container: '.my-slider',
    items: 3,
    mouseDrag: true,
    // autoplay: true,
    autoplayButtonOutput: false,
    controlsContainer: '#custom-control',
    nav: false,
    // speed: 2000,
    responsive: {
        0: {
            items: 1
        },
        992: {
            items: 2
        },
        1440: {
            items: 3
        }
    }
});