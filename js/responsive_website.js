const menuOpen = document.querySelector(".openTime");
const menuClose = document.querySelector(".closeTime");

menuOpen.addEventListener("click" , ()=>{
    document.body.classList.toggle("show-mobile-menu");
});

menuClose.addEventListener("click", () => menuOpen.click());