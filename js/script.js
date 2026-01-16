const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const close = document.getElementById("close");
const body = document.querySelector("body");

bar.addEventListener("click", () =>{
    nav.classList.toggle("expand");
    document.body.classList.toggle("expand");
});

close.addEventListener('click', () => bar.click());

// bar.addEventListener("click", () =>{
    
// });

var main = document.getElementById("main");
var small = document.getElementsByClassName("sm-img");

for(let i = 0; i < small.length; i++){
    small[i].onclick = function(){
        main.src = small[i].src;
    }
}

















// scroll reveal
const sr = ScrollReveal({
    origin: "top",
    distance: "80px",
    duration: 2050,
    reset: true
});

sr.reveal("#hero,#banner3,#newsletter,#footer1, #feature, #product1,#banner , #sm-banner, #blog, #pagnation, .blog-header", {delay:400})
sr.reveal("#about-head, #about-app, .about", {delay:800});
sr.reveal(".about", {delay:500})