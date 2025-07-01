const selectButton = document.querySelectorAll(".free-button button");

const selButton = f =>{
    document.querySelector(".active").classList.remove("active");
    f.target.classList.add("active");
    console.log(f.target);
}
selectButton.forEach(button => button.addEventListener("click", selButton));


// scrollReval
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

sr.reveal('.text', {})