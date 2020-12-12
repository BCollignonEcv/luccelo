$('header .c_nav-icon').click(function(){
    if($('.c_nav-aside').hasClass('open')){
        $('.c_nav-aside').removeClass('open');
        $('.c_nav-aside').addClass('close');
    }else{
        $('.c_nav-aside').addClass('open');
        $('.c_nav-aside').removeClass('close');
    }
});

$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    if(scroll === 0){
        $('#sect-carte').removeClass('scrolled');
    }else{
        $('#sect-carte').addClass('scrolled');
    }
});