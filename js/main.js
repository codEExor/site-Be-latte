$(function() {

    $('.testimonials_slider-section').slick({
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 900,
        slidesToShow: 1,
        slidesToScroll: 1,
    });
});


//кнопка наверх
window.addEventListener('scroll', function() {
    let scroll = document.querySelector('.scroll_to_top');
    scroll.classList.toggle("active", window.scrollY > 500)
})

function scrollTopTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}


// плавный scroll для ссылки на меню
let anchors = document.querySelectorAll('a[href*="#"]');

for (anchor of anchors) {
    if (anchor) {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            anchorId = this.getAttribute('href')
            document.querySelector(anchorId).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        })
    }
}

//menu adaptive (burger)
$(function() {

    $('.menu__btn').on('click', function() {
        $('.navbar-nav').toggleClass('navbar-nav--active');
    });

});