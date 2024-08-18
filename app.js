const rootNode = document.querySelector('.project-view')
const viewNode = document.querySelector('.projects-container')

const prevButtonNode = rootNode.querySelector('.prev')
const nextButtonNode = rootNode.querySelector('.next')

const options = { loop: true}
const emblaApi = EmblaCarousel(viewNode, options)

prevButtonNode.addEventListener('click', emblaApi.scrollPrev, false)
nextButtonNode.addEventListener('click', emblaApi.scrollNext, false)






// SCROLL SPEED
let isScrolling = false;

function scrollPage(amount) {
    window.scrollBy({
        top: amount,
        left: 0,
        behavior: 'smooth'
    });
}

function handleScroll(event) {
    event.preventDefault();
    
    if (!isScrolling) {
        isScrolling = true;

        const scrollAmount = window.innerHeight / 4; 
        const direction = event.deltaY > 0 || event.touches && event.touches[0].clientY < startY ? 1 : -1;
        
        scrollPage(scrollAmount * direction);
        
        setTimeout(() => {
            isScrolling = false;
        }, 300); 
    }
}

function handleTouchMove(event) {
  const deltaX = Math.abs(event.touches[0].clientX - startX);
  const deltaY = Math.abs(event.touches[0].clientY - startY);

  // Only scroll if the movement is more vertical than horizontal
  if (deltaY > deltaX) {
      handleScroll(event);
  }
}

// Desktop (Mouse Wheel)
document.addEventListener('wheel', handleScroll, { passive: false });

// Mobile (Touch)
let startY = 0;
document.addEventListener('touchstart', (event) => {
    startY = event.touches[0].clientY;
    startX = event.touches[0].clientX;
}, { passive: false });

document.addEventListener('touchmove', handleScroll, { passive: false });

