function initializeCarousel(){
  const rootNode = document.querySelector('.project-view')
  const viewNode = document.querySelector('.projects-container')

  const prevButtonNode = rootNode.querySelector('.prev')
  const nextButtonNode = rootNode.querySelector('.next')

  const options = { loop: true}
  const emblaApi = EmblaCarousel(viewNode, options)

  prevButtonNode.addEventListener('click', emblaApi.scrollPrev, false)
  nextButtonNode.addEventListener('click', emblaApi.scrollNext, false)

}


// SCROLL ANIMATION
const scrollElements = document.querySelectorAll(".js-scroll");

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el)
    }
  })
}

window.addEventListener("scroll", () => { 
  handleScrollAnimation();
});




// SPEED ROLE
let scrollTimeout;
let scrollSpeed = 0.9;  

let isTouchDevice = 'ontouchstart' in document.documentElement;

// Desktop: Slow down wheel-based scrolling
if (!isTouchDevice) {
    window.addEventListener('wheel', function(event) {
        event.preventDefault();
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(function() {
            let newScrollPosition = window.scrollY + (event.deltaY * scrollSpeed);
            window.scrollTo({
                top: newScrollPosition,
                behavior: 'auto'
            });
        }, 10);
    }, { passive: false });
}

// Mobile: Slow down touch-based scrolling
else {
    let startY = 0;
    let currentScroll = 0;

    window.addEventListener('touchstart', function(event) {
        startY = event.touches[0].clientY; // Record the starting touch position
        currentScroll = window.scrollY;    // Record the current scroll position
    });

    window.addEventListener('touchmove', function(event) {
        event.preventDefault();
        let touchY = event.touches[0].clientY;
        let deltaY = startY - touchY; // Calculate the distance moved
        let newScrollPosition = currentScroll + (deltaY * scrollSpeed); // Adjust scroll based on speed
        window.scrollTo({
            top: newScrollPosition,
            behavior: 'auto'
        });
    }, { passive: false });
}




