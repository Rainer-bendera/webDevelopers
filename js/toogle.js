const body = document.querySelector("body"),
toogle = document.querySelector(".toogle");

toogle.addEventListener("click", () => {
    body.classList.toggle("dark");

    if(!body.classList.contains("dark")){
        return localStorage.setItem("mode", "light");
    }
    localStorage.setItem("mode", "dark");
    
})

toogle.addEventListener("click", () => toogle.classList.toggle("active"));