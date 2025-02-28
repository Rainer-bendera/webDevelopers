const wrapper = document.querySelector(".wrapper");
const lists = document.querySelector(".lists");
const body = document.querySelector("body");

wrapper.addEventListener("click", () => {
    lists.classList.toggle("aqua");
    wrapper.classList.toggle("aqua");
    body.classList.toggle("aqua");

    if(!wrapper.classList.contains("aqua") && !body.classList.contains("aqua")){
        localStorage.setItem("mode", "light");
    }
    localStorage.setItem("mode", "aqua");
})
wrapper.addEventListener("click", () => {wrapper.classList.toggle("active")});