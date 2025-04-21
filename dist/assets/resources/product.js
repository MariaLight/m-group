var swiperProduct = new Swiper(".product-single-swiper", {
    loop: false,
    centeredSlides: true,
    direction: 'horizontal',
    spaceBetween: 10,
    slidesPerView: 1,
    slidesPerGroup: 1,
    // effect: 'fade',

    navigation: {
        nextEl: '.product-single-swiper .swiper-button-next',
        prevEl: '.product-single-swiper .swiper-button-prev',
    },
    // If we need pagination
    pagination: {
        el: '.product-single-swiper .swiper-pagination',
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

const inc = document.getElementsByClassName("stepper");
for (let i = 0; i < inc.length; i++) {
    let incI = inc[i].querySelector("input"),
        id = incI.getAttribute("id"),
        min = incI.getAttribute("min"),
        max = incI.getAttribute("max"),
        step = incI.getAttribute("step");
    document
        .getElementById(id)
        .previousElementSibling.setAttribute(
            "onclick",
            "stepperInput('" + id + "', -" + step + ", " + min + ")"
        ); // Down
    document
        .getElementById(id)
        .nextElementSibling.setAttribute(
            "onclick",
            "stepperInput('" + id + "', " + step + ", " + max + ")"
        ); // Up
}
function stepperInput(id, s, m) {
    const el = document.getElementById(id);
    if (s > 0) {
        if (parseInt(el.value) < m) {
            el.value = parseInt(el.value) + s;
        }
    } else {
        if (parseInt(el.value) > m) {
            el.value = parseInt(el.value) + s;
        }
    }
    // Execute other functions when stepping below
}