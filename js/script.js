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
        navText: ['<i class="fa fa-angle-left"</i>', '<i class="fa fa-angle-right"</i>' ]
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












