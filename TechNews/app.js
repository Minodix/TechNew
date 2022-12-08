document.querySelector('.menu-btn').addEventListener('click', () =>{
    document.querySelector('.nav-menu').classList.toggle('show');/*"toggle"  it if it's present and adding it if it's not present.*/
});
/*EFECTO SCROLLREVEAL*/
ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.news-cards',{
    delay:500  /*500 milisegundos */
});
ScrollReveal().reveal('.cards-banner-one',{
    delay:500  /*500 milisegundos */
});
ScrollReveal().reveal('.cards-banner-two',{
    delay:500  /*500 milisegundos */
});