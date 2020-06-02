$(document).ready(function(){
    $('.header__burger').on('click touchstart', function(){
        $('.header__burger, .header__row__menu').toggleClass('active');
        return false;
    });
});
/*const burger = document.querySelector('.header__burger');
burger.onclick = () =>{
    burger.classList.add('active');
};*/
