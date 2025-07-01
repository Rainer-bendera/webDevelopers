// selecting active link 
const openMenu = document.querySelector(".bx-menu");
const links = document.querySelectorAll(".nav_list");
const navlink =  document.querySelectorAll(".nav_list .nav_item");
const selectedButton = document.querySelectorAll(".nav_list .nav_item");


// selecting button when clicked
const clicked = f =>{
    document.querySelector(".active").classList.remove("active");
    f.target.classList.add("active");
}

selectedButton.forEach(button => {
    button.addEventListener("click", clicked)
})

// open menu
openMenu.addEventListener("click", () =>{
    document.body.classList.toggle("open_menu");
});

// close menu
navlink.forEach(nav_link =>{
    nav_link.addEventListener("click", () => {openMenu.click()} )
})

// scrollreveal
const sr = ScrollReveal({
    origin:'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

// scroll home
sr.reveal('.home_title',{})
sr.reveal('.button',{delay: 200})
sr.reveal('.home_img',{delay: 400})
sr.reveal('.home_social-icon',{interval: 200})


// scroll about
sr.reveal('.about_img',{})
sr.reveal('.about_subtitle',{delay: 200})
sr.reveal('.about_text',{delay: 400})

// scroll skills
sr.reveal('.skills_img',{delay: 400})
sr.reveal('.skills_subtitle',{})
sr.reveal('.skills_text',{delay: 200})
sr.reveal('.skills_data',{interval: 200})

// scroll work
sr.reveal('.work_img',{interval: 200})


// scroll work
sr.reveal('.contact_input',{interval: 200})