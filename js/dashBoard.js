const hamberger = document.querySelector(".toggle-btn");
const toggler = document.querySelector("#icon");

hamberger.addEventListener("click", function(){
    document.querySelector("#sidebar").classList.toggle("expand");
    toggler.classList.toggle("expand");
    toggler.classList.toggle("icon");

    
})