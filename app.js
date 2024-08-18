// SLIDER
const rootNode = document.querySelector('.project-view')
const viewNode = document.querySelector('.projects-container')

const prevButtonNode = rootNode.querySelector('.prev')
const nextButtonNode = rootNode.querySelector('.next')

const options = { loop: true}
const emblaApi = EmblaCarousel(viewNode, options)

prevButtonNode.addEventListener('click', emblaApi.scrollPrev, false)
nextButtonNode.addEventListener('click', emblaApi.scrollNext, false)



// SCROLL SNAP
document.addEventListener('wheel', function(event) {
    event.preventDefault(); // Prevent the default scroll behavior
  
    const sections = document.querySelectorAll('.section');
    const currentSection = Math.round(window.scrollY / window.innerHeight);
    
    if (event.deltaY > 0) {
      // Scrolling down
      if (currentSection < sections.length - 1) {
        window.scrollTo({
          top: window.innerHeight * (currentSection + 1),
          behavior: 'smooth'
        });
      }
    } else {
      // Scrolling up
      if (currentSection > 0) {
        window.scrollTo({
          top: window.innerHeight * (currentSection - 1),
          behavior: 'smooth'
        });
      }
    }
  }, { passive: false });



  
  

