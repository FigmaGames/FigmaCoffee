  document.addEventListener('DOMContentLoaded', function() {
    const carouselTrack = document.querySelector('.carousel-track');
    const slides = document.querySelectorAll('.carousel-slide');
    const prevButton = document.querySelector('.carousel-prev');
    const nextButton = document.querySelector('.carousel-next');
    const indicators = document.querySelectorAll('.carousel-indicator');
    
    let currentIndex = 0;
    const slideWidth = 100;
    
    function updateCarousel() {
      carouselTrack.style.transform = `translateX(-${currentIndex * slideWidth}%)`;
      
      indicators.forEach((indicator, index) => {
        if (index === currentIndex) {
          indicator.classList.add('bg-yellow-600');
          indicator.classList.remove('bg-gray-500');
        } else {
          indicator.classList.remove('bg-yellow-600');
          indicator.classList.add('bg-gray-500');
        }
      });
    }
    
    nextButton.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % slides.length;
      updateCarousel();
    });
    
    prevButton.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      updateCarousel();
    });
    
    indicators.forEach((indicator, index) => {
      indicator.addEventListener('click', () => {
        currentIndex = index;
        updateCarousel();
      });
    });
    
    updateCarousel();
  });