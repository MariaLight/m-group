const swiperGalleries = document.querySelectorAll('.swiper-cases');
swiperGalleries.forEach((gallery) => {
    new Swiper(gallery, {
        loop: false,
        centeredSlides: true,
        spaceBetween: 100,
        slidesPerView: 1,
        effect: 'fade',

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        // If we need pagination
        pagination: {
            el: ' .swiper-pagination',
            type: 'fraction',
            formatFractionCurrent: function (number) {
                return ('0' + number).slice(-2);
            },
            formatFractionTotal: function (number) {
                return ('0' + number).slice(-2);
            },
            renderFraction: function (currentClass, totalClass) {
                return '<span class="' + currentClass + '"></span>' +
                    ' / ' +
                    '<span class="' + totalClass + '"></span>';
            }
        },
    });
})
