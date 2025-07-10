const body = document.querySelector("body"),
toogle = document.querySelector(".toogle");

let getMode = localStorage.getItem("mode");
if(getMode && getMode === "dark"){
    body.classList.toggle("dark");
    toogle.classList.toggle("white");
    toogle.classList.toggle("active");
}

toogle.addEventListener("click", () => {
    body.classList.toggle("dark");
    toogle.classList.toggle("white");


    if(!body.classList.contains("dark") && !toogle.classList.contains("dark")){
        return localStorage.setItem("mode", "light");
    }
    localStorage.setItem("mode", "dark");
    
})

toogle.addEventListener("click", () => toogle.classList.toggle("active"));