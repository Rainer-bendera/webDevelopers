const navLinks = document.querySelectorAll(".navMenu .navLink");
const menuOpen = document.querySelector(".openTime");
const menuClose = document.querySelector(".closeTime");
const selectedButton = document.querySelectorAll(".navMenu .navLink");
const body = document.querySelector("body");

// active button when clicked

const clickedButton = f =>{
  document.querySelector(".active").classList.remove("active");
  f.target.classList.add("active");
  saveData();
}

 

selectedButton.forEach(btn => {
  btn.addEventListener("click", clickedButton);
  
})



menuOpen.addEventListener("click" , ()=>{
    document.body.classList.toggle("show-mobile-menu");
});

// close menu when the close button is clicked
menuClose.addEventListener("click", () => menuOpen.click());


// close menu when the navlink button is clicked
navLinks.forEach(link => {
  link.addEventListener("click", () => menuOpen.click())
})

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


  // scroll reveal
  const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2050,
    reset: true
  })

  // scroll hero
  sr.reveal('.heroDetails',{})
  sr.reveal('.heroImage',{})
  sr.reveal('.buttons',{delay: 400})

  sr.reveal('.slider-wrapper', {})



function saveData(){
  localStorage.setItem("data", body.innerHTML);
}

function showData(){
  body.innerHTML = localStorage.getItem("data")
}
 

