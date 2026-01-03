const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const close = document.getElementById("close");

if(bar){
    bar.addEventListener("click", () =>{
        nav.classList.add("expand");
    });
};


if(close){
    close.addEventListener("click", () =>{
        nav.classList.remove("expand");
    })
};


















// scroll reveal
const sr = ScrollReveal({
    origin: "top",
    distance: "80px",
    duration: 2050,
    reset: true
});

sr.reveal("#hero,#banner3,#newsletter,#footer1, #feature, #product1,#banner , #sm-banner", {delay:400})