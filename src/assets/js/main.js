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



    // const burgerBtn = document.querySelector('#burger');
    // const burgerCloseBtn = document.querySelector('#burger-close');
    // const burgerMenu = document.querySelector('.header__burger__menu');
    // const closeMenu = () => {
    //     burgerMenu.classList.remove('active');
    // }

    // burgerBtn.addEventListener('click', function () {
    //     burgerMenu.classList.add('active');
    // })
    // burgerCloseBtn.addEventListener('click', function () {
    //     closeMenu();
    // })

    // document.addEventListener('click', (e) => {
    //     if (burgerMenu.classList.contains('active') && e.target.classList.contains('header__burger__menu')) {
    //         closeMenu();
    //     }
    // })

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

    // var swiper = new Swiper(".swiper-offer", {
    //     loop: true,
    //     centeredSlides: true,
    //     spaceBetween: 40,
    //     slidesPerView: 3.2,
    //     breakpoints: {
    //         320: {
    //             spaceBetween: 15,
    //             slidesPerView: 1.2,
    //         },
    //         640: {
    //             spaceBetween: 40,
    //             slidesPerView: 3.2,
    //         }
    //     },
    //     navigation: {
    //         nextEl: '.offer__btns .swiper-button-next',
    //         prevEl: '.offer__btns .swiper-button-prev',
    //     },
    // });

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
})

