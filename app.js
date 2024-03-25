
const emblaNode = document.querySelector('.projects-container')
const options = { loop: false }
const plugins = [EmblaCarouselAutoplay()]
const emblaApi = EmblaCarousel(emblaNode, options, plugins)

console.log(emblaApi.slideNodes()) 
