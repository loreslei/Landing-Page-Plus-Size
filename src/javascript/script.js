$(document).ready(function(){
    $('#mobile_btn').on('click', function(){
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');
    });

    const sections = $('section');
    const navItems = $('.nav-item');

    $(window).on('scroll', function(){
        const header = $('header');
        let activeSectionIndex = 0;
        const scrollPosition = $(window).scrollTop() - header.outerHeight();
        if (scrollPosition <= 0){
            header.css('box-shadow', 'none');
        }else{
            header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.1)');
        }

        sections.each(function(i){
            const section = $(this);
            const sectionTop = section.offset().top - 30;
            const sectionBottom = sectionTop + section.outerHeight();
            if (scrollPosition + 300 >= sectionTop && scrollPosition + 300 < sectionBottom){
                activeSectionIndex = i;
                return false;
            }
        });
        navItems.removeClass('active');
        $(navItems[activeSectionIndex]).addClass('active');
    });

    ScrollReveal().reveal('#cta',{
        origin: 'left',
        distance: '20%',
        duration: 2000,
        reset: true
    });

    ScrollReveal().reveal('#roupa',{
        origin: 'left',
        distance: '20%',
        duration: 2000,
        reset: true
    });

    ScrollReveal().reveal('#main-girl',{
        origin: 'right',
        distance: '20%',
        duration: 2000,
        reset: true
    });

    ScrollReveal().reveal('#historia',{
        origin: 'right',
        distance: '20%',
        duration: 2000,
        reset: true
    });
});