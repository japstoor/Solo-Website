$(window).on('load', function() {
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
});

/*-----------Team--------*/
$(function(){
    $("#team-members").owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"</i>', '<i class="fa fa-angle-right"</i>' ],
            responsive : {
                // breakpoint from 0 up
                0 : {
                    items: 1
                    
                },
                // breakpoint from 480 up
                480 : {
                    items : 2
                    
                }
        }

    });
});

/*------------Progress bars------------------*/
$(function(){
    
    $("#progress-elements").waypoint(function(){
        
        $(".progress-bar").each(function(){
            $(this).animate({width: $(this).attr("aria-valuenow") + "%"
        }, 1000);
        });
        this.distroy();
    }, {offset: 'bottom-in-view'});
    
});

/*-----------------responsive tabs----------------*/

$(function () {
    $("#servies-tabs").responsiveTabs({
        animation: 'slide'
    });
});

//------------------------ portfolio ----------------------
$(function(){
    $(".filter-btn").click( function(){
        var value = $(this).attr("data-filter");
        if(value == "*" ){
            $(".filter").show("1000");
        } 
        else{
        $(".filter").not("." + value).hide("1000");
        $(".filter").filter("." + value).show("1000");
        }
        $(this).addClass('active').siblings().removeClass('active');
    });
});
/*--------------------Magnifier---------------*/
$(function (){
    $('#portfolio-wapper').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled: true
        }
        
      });
});

/*---------------Testimonials----------------*/
$(function(){
    $("#testimonial-slider").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"</i>', '<i class="fa fa-angle-right"</i>' ]
    });
});

/*---------------------Stats--------------------*/
$(function(){
    $(".counter").counterUp({
        delay: 10,
        time: 3000
    });
});

/*-----------------clients--------------------------*/
$(function(){
    $("#clients-list").owlCarousel({
        items: 6,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"</i>', '<i class="fa fa-angle-right"</i>' ],
        responsive : {
            // breakpoint from 0 up
            0 : {
                items: 2
                
            },
            // breakpoint from 480 up
            480 : {
                items : 3
                
            },
            766: {
                items: 6
            }
    }
    });
});

/*---------------Navigation----------------*/
/*---show and hide white navigation */

$(function (){
    showHideNav();
    $(window).scroll(function(){
        
        showHideNav();

 });
 
 function showHideNav() {
    if($(window).scrollTop () > 50 ) {
        $ ("nav").addClass("white-nav-top");

        $(".navbar-brand img").attr("src","img/logo/logo-dark.png");
        // show back to top btn
        $("#back-to-top").fadeIn();
    } else {
        $ ("nav").removeClass("white-nav-top");

        $(".navbar-brand img").attr("src","img/logo/logo.png");

        // hide back to top btn
        $("#back-to-top").fadeOut();
    }

 }
});


$(function(){
    $("a.smooth-scroll").click(function(event) {
        event.preventDefault();
        var section_id = $(this).attr("href");

        $("html, body").animate({
            scrollTop: $(section_id).offset().top
        }, 1250, "easeInOutExpo");
    });
});

/*----------------Mobile Menu ----------------*/
$(function (){
    $("#mobile-nav-open-btn").click(function(){
        $(".mobile-nav").css("height", "100%");
    });
    $(".mobile-nav-close-btn , .mobile-nav a").click(function(){
        $(".mobile-nav").css("height", "0");
    });
});
