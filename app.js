const rootNode = document.querySelector('.project-view')
const viewNode = document.querySelector('.projects-container')

const prevButtonNode = rootNode.querySelector('.prev')
const nextButtonNode = rootNode.querySelector('.next')


const emblaApi = EmblaCarousel(viewNode)

prevButtonNode.addEventListener('click', emblaApi.scrollPrev, false)
nextButtonNode.addEventListener('click', emblaApi.scrollNext, false)

