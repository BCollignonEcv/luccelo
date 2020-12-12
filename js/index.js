$('header .c_nav-icon').click(function(){
    if($('.c_nav-aside').hasClass('open')){
        $('.c_nav-aside').removeClass('open');
        $('.c_nav-aside').addClass('close');
    }else{
        $('.c_nav-aside').addClass('open');
        $('.c_nav-aside').removeClass('close');
    }
});