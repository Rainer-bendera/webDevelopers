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