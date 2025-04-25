document.addEventListener('DOMContentLoaded', function () {

    try {
        const btns = document.querySelectorAll('[data-modal]');
        const body = document.querySelector('body');
        const btnClose = document.querySelectorAll('[data-modal-close]');

        btns.forEach(btn => {
            btn.addEventListener('click', e => {
                e.preventDefault();
                const modalId = e.target.closest('[data-modal]').getAttribute('data-modal');
                const modal = document.getElementById(modalId);
                if (modal) {
                    modal.classList.add('modal--active');
                    body.style.overflow = 'hidden';
                    addModalEventListeners(modal);
                }
            });
        });

        btnClose.forEach(close => {
            close.addEventListener('click', e => {
                const modal = e.target.closest('.modal');
                if (modal) {
                    closeModal(modal);
                }
            });
        });

        function addModalEventListeners(modal) {
            modal.addEventListener('keydown', onModalKeyDown);
            modal.addEventListener('click', onModalClick);
        }

        function removeModalEventListeners(modal) {
            modal.removeEventListener('keydown', onModalKeyDown);
            modal.removeEventListener('click', onModalClick);
        }

        function closeModal(modal) {
            modal.classList.remove('modal--active');
            body.style.overflowY = '';
            removeModalEventListeners(modal);
        }

        function onModalKeyDown(e) {
            const modal = e.currentTarget;
            if (e.key === 'Escape') {
                closeModal(modal);
            }
        }

        function onModalClick(e) {
            const modalContent = e.currentTarget.querySelector('.modal__content');
            if (!modalContent.contains(e.target)) {
                closeModal(e.currentTarget);
            }
        }


    } catch (error) {
    }



    const page = document.querySelector('.wrapper');
    const burgerBtn = document.querySelector('#burger');
    const burgerCloseBtn = document.querySelector('#burger-close');
    const burgerMenu = document.querySelector('.header__burger__menu');
    const closeMenu = () => {
        burgerMenu.classList.remove('active');
        page.classList.remove('locked');
    }

    burgerBtn.addEventListener('click', function () {
        burgerMenu.classList.add('active');
        page.classList.add('locked');

    })
    burgerCloseBtn.addEventListener('click', function () {
        closeMenu();
    })

    document.addEventListener('click', (e) => {
        if (burgerMenu.classList.contains('active') && e.target.classList.contains('header__burger__menu')) {
            closeMenu();
        }
    })

    // const headerLinks = document.querySelectorAll('.header__link');
    // headerLinks.forEach((item) => {
    //     item.addEventListener('click', () => {
    //         const dropdown = item.parentNode.querySelector('.header__dropdown');
    //         if (dropdown) {
    //             dropdown.classList.toggle('active');
    //         }
    //     })
    // })


    // var details = document.querySelectorAll("details");
    // for (let i = 0; i < details.length; i++) {
    //     details[i].addEventListener("toggle", accordion);
    // }
    // function accordion(event) {
    //     if (!event.target.open) return;
    //     var details = event.target.parentNode.children;
    //     for (let i = 0; i < details.length; i++) {
    //         if (details[i].tagName != "DETAILS" ||
    //             !details[i].hasAttribute('open') ||
    //             event.target == details[i]) {
    //             continue;
    //         }
    //         details[i].removeAttribute("open");
    //     }
    // }

    var swiper = new Swiper(".swiper-about", {
        loop: true,
        centeredSlides: true,
        spaceBetween: 100,
        slidesPerView: 1,

        navigation: {
            nextEl: '.swiper-about .swiper-button-next',
            prevEl: '.swiper-about .swiper-button-prev',
        },
        // If we need pagination
        pagination: {
            el: '.swiper-about .swiper-pagination',
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
    var swiperCases = new Swiper(".swiper-cases", {
        loop: false,
        centeredSlides: true,
        spaceBetween: 100,
        slidesPerView: 1,
        effect: 'fade',

        navigation: {
            nextEl: '.swiper-cases .swiper-button-next',
            prevEl: '.swiper-cases .swiper-button-prev',
        },
        // If we need pagination
        pagination: {
            el: '.swiper-cases .swiper-pagination',
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
    var swiperQuality = new Swiper(".quality-swiper", {
        loop: false,
        centeredSlides: true,
        spaceBetween: 100,
        slidesPerView: 1,
        effect: 'fade',

        navigation: {
            nextEl: '.quality-swiper .swiper-button-next',
            prevEl: '.quality-swiper .swiper-button-prev',
        },
        // If we need pagination
        pagination: {
            el: '.quality-swiper .swiper-pagination',
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
    var swiperLettersContent = new Swiper(".letters__content__swiper", {
        loop: false,
        centeredSlides: true,
        spaceBetween: 100,
        slidesPerView: 1,
        effect: 'fade',
        navigation: {
            nextEl: '.letters__swiper .swiper-button-next',
            prevEl: '.letters__swiper .swiper-button-prev',
        },
        // If we need pagination
        pagination: {
            el: '.letters__swiper .swiper-pagination',
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
    var swiperLetters = new Swiper(".letters__swiper", {
        loop: false,
        centeredSlides: true,
        thumbs: {
            swiperDescr: swiperLettersContent
        },
        spaceBetween: 100,
        slidesPerView: 1,
        effect: 'fade',

        navigation: {
            nextEl: '.letters__swiper .swiper-button-next',
            prevEl: '.letters__swiper .swiper-button-prev',
        },
        // If we need pagination
        pagination: {
            el: '.letters__swiper .swiper-pagination',
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

    var swiperArch = new Swiper(".arch__swiper", {
        loop: false,
        centeredSlides: true,
        direction: 'horizontal',
        spaceBetween: 10,
        slidesPerView: 1,
        slidesPerGroup: 1,
        // effect: 'fade',

        navigation: {
            nextEl: '.arch__swiper .swiper-button-next',
            prevEl: '.arch__swiper .swiper-button-prev',
        },
        // If we need pagination
        pagination: {
            el: '.arch__swiper .swiper-pagination',
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

    // const readmoreBtn = document.querySelector('#readmore');
    // const readmoreText = document.querySelector('.hidden');
    // if (readmoreBtn) {
    //     readmoreBtn.addEventListener('click', () => {
    //         readmoreText.classList.add('show');
    //         readmoreBtn.style.display = 'none';
    //     })
    // }

    // const showTab = (elTabBtn) => {
    //     const elTab = elTabBtn.closest('.tab');
    //     if (elTabBtn.classList.contains('tab-btn-active')) {
    //         return;
    //     }
    //     const targetId = elTabBtn.dataset.targetId;
    //     const elTabPane = elTab.querySelector(`.tab-pane[data-id="${targetId}"]`);
    //     if (elTabPane) {
    //         const elTabBtnActive = elTab.querySelector('.tab-btn-active');
    //         elTabBtnActive.classList.remove('tab-btn-active');
    //         const elTabPaneShow = elTab.querySelector('.tab-pane-show');
    //         elTabPaneShow.classList.remove('tab-pane-show');
    //         elTabBtn.classList.add('tab-btn-active');
    //         elTabPane.classList.add('tab-pane-show');
    //     }
    // }

    // document.addEventListener('click', (e) => {
    //     if (e.target && !e.target.closest('.tab-btn')) {
    //         return;
    //     }
    //     const elTabBtn = e.target.closest('.tab-btn');
    //     showTab(elTabBtn);
    // });
    // if (document.querySelectorAll('[data-fancybox]')) {
    //     Fancybox.bind('[data-fancybox]', {
    //     });
    // }

    const rangeWrappers = document.querySelectorAll('.quiz__range');
    if (rangeWrappers) {
        rangeWrappers.forEach((item) => {
            const range = item.querySelector('input[type="range"]'),
                rangeV = item.querySelector('.range-value'),
                setValue = () => {
                    const
                        newValue = Number((range.value - range.min) * 100 / (range.max - range.min)),
                        newPosition = 10 - (newValue * 0.2);
                    rangeV.innerHTML = `<span>${range.value}</span>`;
                    rangeV.style.left = `calc(${newValue}% + (${newPosition}px))`;
                };
            setValue();
            range.addEventListener('input', setValue);
        })
    }

    const quizForm = document.querySelector('#quiz');
    if (quizForm) {
        const quizSteps = quizForm.querySelectorAll('.step');
        const quizPrevButton = quizForm.querySelector('.quiz__prev__btn');
        const quizNextButton = quizForm.querySelector('.quiz__next__btn');
        let counter = 1;
        const stepsAmount = quizSteps.length;

        const removeActiveStyles = (elems) => elems.forEach((item) => item.classList.remove('active'));

        const addActiveStyleOnQuizStep = (elems, counter) => {
            removeActiveStyles(elems);
            console.log(elems);
            elems[counter - 1].classList.add('active');
        }

        quizNextButton.addEventListener('click', () => {
            counter += 1;
            addActiveStyleOnQuizStep(quizSteps, counter);
            if (counter > 1) {
                quizPrevButton.disabled = false;
            }
            if (stepsAmount === counter) {
                quizPrevButton.classList.add('d-none');

                quizNextButton.querySelector('span').textContent = 'Отправить данные';
                setTimeout(() => {
                    quizNextButton.type = "submit";
                }, 0);

            }
        })
        quizPrevButton.addEventListener('click', () => {
            counter -= 1;
            addActiveStyleOnQuizStep(quizSteps, counter);
            if (counter === 1) {
                quizPrevButton.disabled = true;
            }
            if (stepsAmount !== counter) {
                quizNextButton.querySelector('span').textContent = 'Далее';
                quizNextButton.type = "button";
                quizPrevButton.classList.remove('d-none');


            }
        })
    }
    if (document.querySelectorAll('[data-fancybox]')) {
        Fancybox.bind('[data-fancybox]', {
        });
    }

})

