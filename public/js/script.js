/* ================================
|   |   |   Preloader
================================ */
$(window).on('load', function() {
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
});

/* ================================
|   |   |   Team
================================ */
$(function () {
    $("#team-members").owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            }
        }
    });
});

/* ================================
|   |   |   Progress Bars
================================ */
$(function() {

    $("#progress-elements").waypoint(function() {

        $(".progress-bar").each(function() {

            $(this).animate({
                width: $(this).attr("aria-valuenow") + "%"
            }, 1000);
        });
        this.destroy();
    }, {
        offset: 'bottom-in-view'
    });
});


/* ================================
|   |   |   Services Tabs
================================ */

$(function () {

    $("#services-tabs").responsiveTabs({
        animation: 'slide'
    });

    $("#servicesB-tabs").responsiveTabs({
        animation: 'slide'
    });

    $("#servicesC-tabs").responsiveTabs({
        animation: 'slide'
    });

});


// $(function () {
//
//     $("#services2-tabs").responsiveTabs({
//         animation: 'slide'
//     });
//
// });


/* ================================
|   |   |   Portfolio
================================ */


$('.gallery-list-item').click(function () {
    let value = $(this).attr('data-filter');
    if(value === 'all') {
        $('.filter').show(300);
    }else {
        $('.filter').not('.' + value).hide(300);
        $('.filter').filter('.' + value).show(300);
    }
});

$('.gallery-list-item').click(function () {
    $(this).addClass('active-item').siblings()
        .removeClass('active-item');
});


/* ================================
|   |   |   Magnifier
================================ */

$(function () {

    $("#portfolio-wrapper").magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        },
        image: {
            titleSrc: function (item) {
                var markup = '';
                if (item.el[0].hasAttribute("data-title")) {
                    markup += '<a>' + item.el.attr('data-title') + '</a>';
                }
                return markup
            }
        }
    });

});



/* ================================
|   |   |   Testimonials
================================ */
$(function() {
    $("#testimonial-slider").owlCarousel({
        items: 1,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>']
    });
});


/* ================================
|   |   |   Stats
================================ */
$(function () {

    $(".counter").counterUp({
        delay: 10,
        time: 2000
    });

});


/* ================================
|   |   |   Clients
================================ */
$(function() {
    $("#clients-list").owlCarousel({
        items: 6,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 2
            },
            480: {
                items: 3
            },
            768: {
                items: 6
            }
        }
    });
});


/* ================================
|   |   |   Google Map
================================ */
$(window).on('load', function () {

    // Map Variables
    var addressString = '230 Broadway, NY, New York 10007, USA';
    var myLatlng = {lat: 40.712685, lng: -74.005920};

    //1. Render Map
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 11,
        center: myLatlng
    });

    // 2. Add Marker
    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: "Click To See Address"
    });

    // 3. Add Info Window
    var infowindow = new google.maps.InfoWindow({
        content: addressString
    });

    // Show info window when user clicks marker
    marker.addListener('click', function () {
        infowindow.open(map, marker);
    });

    // 4. Resize Function
    google.maps.event.addDomListener(window, 'resize', function() {

        var center = map.getCenter();
        google.maps.event.trigger(map, 'resize');
        map.setCenter(center);
    });

});



/* ================================
|   |   |   Navigation
================================ */

/* Show & Hide White Navigation */
$(function () {

    // show/hide nav on page load
    showHideNav();

    $(window).scroll(function () {

        // show/hide nav on window's scroll
        showHideNav();

    });

    function showHideNav() {

        if( $(window).scrollTop() > 50 ) {

            // Show white nav
            $("nav").addClass("white-nav-top");

            // Show dark logo
            $(".navbar-brand img").attr("src", "img/logo/luxury-spaces-logo.png");

            // Show back to top
            $("#back-to-top").fadeIn();

        } else {

            // Hide white nav
            $("nav").removeClass("white-nav-top");

            // Show logo
            $(".navbar-brand img").attr("src", "img/logo/luxury-spaces-logo.png");

            // Show back to top
            $("#back-to-top").fadeOut();
        }
    }

});

// Smooth Scrolling
$(function () {

    $("a.smooth-scroll").click(function(event) {

        event.preventDefault();

        // get selection id like #about, #services, #work, #team and etc.
        var section_id = $(this).attr("href");

        $("html, body").animate({
            scrollTop: $(section_id).offset().top - 64
        }, 1250, "easeInOutExpo");

    });

});



/* ================================
|   |   |   Mobile menu
================================ */

$(function() {

    $("#mobile-nav-open-btn").click(function() {
        $("#mobile-nav").css("height", "100%");
    });

    $("#mobile-nav-close-btn, #mobile-nav a").click(function() {
        $("#mobile-nav").css("height", "0%");
    });
});
