$(function () {

    $('.main_full').fullpage({
        anchors: ['main_visual', 'main_content', 'main_movie', 'mian_product', 'main_event', 'main_customer', 'footer'],
        //navigation: true,
        afterLoad: function (a, i) {
            $('.aside li')
                .eq(i - 1)
                .addClass('on')
                .siblings()
                .removeClass('on');
            $('.main_full .section')
                .eq(i - 1)
                .addClass('on')
                .siblings()
                .removeClass('on');
            if (i == 2 || i == 4 || i == 5 || i == 6 || i == 7) {
                $('.header').addClass('on')
            } else {
                $('.header').removeClass('on')
            }
        }
    });

    $('.main_visual_slide').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        pauseOnHover: false,
        pauseOnFocus: false,
        useTransform: false
    });


    $('#bgndVideo').YTPlayer({
        videoURL: 'https://youtu.be/TWlRhK8Ll-Q',
        containment: '.main_movie',
        showControls: false,
        playOnlyIfVisible: true,
    });


    let sw = true;

    $('.main_movie .switch').on('click', function () {
        $(this).toggleClass('on');
        if (sw) {
            $('#bgndVideo').YTPPause();
        } else {
            $('#bgndVideo').YTPPlay();
        }
        sw = !sw;
    });


    $('.main_product_slide').slick({
        slidesToShow: 4,
        arrows: false,
        dots: true,
    });


    $('.mian_product .arrows .prev').on('click', function () {
        $('.main_product_slide').slick('slickPrev')
    });

    $('.mian_product .arrows .next').on('click', function () {
        $('.main_product_slide').slick('slickNext')
    });


    $('.main_event_slide').slick({
        slidesToShow: 5,
        centerMode: true,
        centerPadding: 0,
        arrows: false,
    });


    $('.main_event .arrows .prev').on('click', function () {
        $('.main_event_slide').slick('slickPrev')
    });

    $('.main_event .arrows .next').on('click', function () {
        $('.main_event_slide').slick('slickNext')
    });

    $('.main_customer .news .news_menu button').on('click', function () {
        let idx = $(this).parent().index();//0,1
        $('.main_customer .news .news_content>ul')
            .eq(idx)
            .addClass('on')
            .siblings()
            .removeClass('on');

        $(this).parent().addClass('on').siblings().removeClass('on')
    });

    $('.to_top button').on('click', function () {
        $('html,body').animate({ scrollTop: 0 }, 600)
    });


    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        console.log(sct);

        if (sct > 800) {
            $('.to_top').addClass('on')
        } else {
            $('.to_top').removeClass('on')
        }
    });

    $('#f_lnk').on('change', function () {
        let lnk = $(this).val();
        console.log(lnk);

        if (lnk) {
            window.open(lnk)
        }
    })


    //AOS.init();

});

