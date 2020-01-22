$(document).ready(function(){

    $('.owl-carousel').owlCarousel({
        items:1,
        dots:true,
        nav:false,
        loop:true
    });
    $('#load_more').click(function() {
        $('.hide').slideToggle(1000);
        $(this).toggleClass('load_more2');
    });
    // nav-link color
    $('.nav-link').click(function () {
        $('.nav-link').removeClass('active');
        $(this).addClass('active');
    })
    // scroll menu after intro
    $(function () {
        var header=$('#header'),
            introH=$('#intro').innerHeight(),
            scrollOffset=0;
        $(window).on('scroll',function () {
            scrollOffset=$(this).scrollTop();
            if(scrollOffset>=introH){
                header.addClass('fixed');
            }else{
                header.removeClass('fixed');
            }
        })
    })
    // change navbar-toggler
    $('#navbar-toggler').click(function () {
        $(this).toggleClass('navbar-toggler1')
    })
    // show chart after scroll
    var skills=$('#skills');
    var skillsTop=skills.offset().top;
    $(window).on('scroll',function(){
        var windowTop=$(this).scrollTop();
        if(windowTop>skillsTop){
            $(function() {
                $('.chart').easyPieChart({
                    barColor:'#ff0036',
                    scaleColor:false,
                    trackColor:'#e0e0e0',
                    lineCap:'circle',
                });
            });
        }
    })
    // show map after scroll
    var blog=$('#blog');
    var blogTop=blog.offset().top;
    $(window).bind('scroll',function(){
        var windowTop=$(this).scrollTop();
        if(windowTop>blogTop){
            $('#map').attr('src','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2564.940001021024!2d36.22976861524681!3d49.99373432804918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4127a0f001ed6faf%3A0xf236772a61f868b6!2z0YPQuy4g0KHRg9C80YHQutCw0Y8sIDUsINCl0LDRgNGM0LrQvtCyLCDQpdCw0YDRjNC60L7QstGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCA2MTAwMA!5e0!3m2!1sru!2sua!4v1572081223788!5m2!1sru!2sua')
            $(window).unbind('scroll')
        }
    })
});
