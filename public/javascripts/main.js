document.addEventListener('DOMContentLoaded', () => {
    const elementsCarousel = document.querySelectorAll('.carousel');
    M.Carousel.init(elementsCarousel, {
        duration: 500,
        shift: 5,
        padding: 5,
        numVisible: 1,
        indicators: true,
        noWrap: true
    });
});