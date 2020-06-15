// variables para el contenedor y las peliculas
const row_carousel = document.querySelector('.carousel-movies')
const movies = document.querySelectorAll('.movie')
// variables para las flechas
const arrow_left = document.getElementById('button-left')
const arrow_right = document.getElementById('button-right')

// Event listeners

arrow_right.addEventListener('click', ()=>{
    row_carousel.scrollLeft += row_carousel.offsetWidth
    // row_carousel.scrollLeft+=352
});
arrow_left.addEventListener('click', ()=>{
    row_carousel.scrollLeft -= row_carousel.offsetWidth
    // row_carousel.scrollLeft-=352
});