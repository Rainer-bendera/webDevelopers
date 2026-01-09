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


var main = document.getElementById("main");
var small = document.getElementsByClassName("sm-img");

small[0].onclick = function(){
    main.src = small[0].src;
}

small[1].onclick = function(){
    main.src = small[1].src;
}

small[2].onclick = function(){
    main.src = small[2].src;
}

small[3].onclick = function(){
    main.src = small[3].src;
}

















// scroll reveal
const sr = ScrollReveal({
    origin: "top",
    distance: "80px",
    duration: 2050,
    reset: true
});

sr.reveal("#hero,#banner3,#newsletter,#footer1, #feature, #product1,#banner , #sm-banner", {delay:400})