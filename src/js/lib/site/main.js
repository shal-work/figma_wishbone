$('.header__burger').on('click', () => { 
    toggleBurger();
    $('body').toggleOverflow();
});
$('.menu').on('click', () => {
    toggleBurger();
     $('body').offOverflow();
});


function toggleBurger () {
    $('.header').toggleClass("fadeIn--open");
    
    $('.header__burger').toggleBooleanAttribute('aria-expanded');
    const burger = document.querySelector('.header__burger');
    let expanded = burger.getAttribute('aria-expanded') === 'true';  
    if (Boolean(expanded)) {
        $('.header__burger').toggleChangeAttribute('aria-label', 'Закрыть меню');
    } else {
        $('.header__burger').toggleChangeAttribute('aria-label', 'Открыть меню');
    }
}

window.addEventListener('DOMContentLoaded', (e) => {
    const anchors = document.querySelectorAll('a[href*="#"]');
    for (let anchor of anchors) {
        anchor.addEventListener('click', function (e) {
            if(anchor.hash){
                e.preventDefault()
                const blockID = anchor.getAttribute('href').substring(1);
                document.getElementById(blockID).scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                })
            }
        })
    }
});