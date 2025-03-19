const wrapper = document.querySelector(".wrapper");
const cards = document.querySelector(".cards");
const arrowBtn = document.querySelectorAll(".wrapper i");
const firstCardWidth = cards.querySelector(".card").offsetWidth;


arrowBtn.forEach(btn =>{
    btn.addEventListener("click", ()=>{
        cards.scrollLeft += btn.id === "left"? - firstCardWidth : firstCardWidth;
    })
})


let isDragging = false, startX, startScrollLeft;

const dragging = (e) =>{
    if(!isDragging) return;
    cards.scrollLeft =startScrollLeft - (e.pageX -startX); 
}

const startDrag = e =>{
    isDragging = true;
    cards.classList.add("dragging");
    startX = e.pageX;
    startScrollLeft = cards.scrollLeft;
}

const stop = () =>{
    isDragging = false;
    cards.classList.remove("dragging");
}

cards.addEventListener("mousemove", dragging);
cards.addEventListener("mousedown", startDrag);
cards.addEventListener("mouseup", stop);