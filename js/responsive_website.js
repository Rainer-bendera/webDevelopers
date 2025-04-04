const menuOpen = document.querySelector(".openTime");
const menuClose = document.querySelector(".closeTime");


menuOpen.addEventListener("click" , ()=>{
    document.body.classList.toggle("show-mobile-menu");
});

menuClose.addEventListener("click", () => menuOpen.click());

// initialize swipper
const swiper = new Swiper('.slider-wrapper', {
    
    loop: true,
    spaceBetween: 25,
    grabCursor: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // rsponsive breakpoints
    breakpoints: {
        0: {
            slidesPerView: 1
        },

       768: {
            slidesPerView: 2
        },

        1024: {
            slidesPerView: 3
        }
    }
  });


