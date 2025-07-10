const wrapper = document.querySelector(".wrapper");
const lists = document.querySelector(".lists");
const body = document.querySelector("body");


let getMode = localStorage.getItem("mode");
if(getMode && getMode === "dark"){
    lists.classList.toggle("aqua");
    wrapper.classList.toggle("aqua");
    body.classList.toggle("dark");
}

wrapper.addEventListener("click", () => {
    lists.classList.toggle("aqua");
    wrapper.classList.toggle("aqua");
    body.classList.toggle("aqua");

    if(!wrapper.classList.contains("dark") && !body.classList.contains("dark")){
       return localStorage.setItem("mode", "light");
    }

    {
        return localStorage.setItem("mode", "aqua");
    }
});
wrapper.addEventListener("click", () => {wrapper.classList.toggle("active")});