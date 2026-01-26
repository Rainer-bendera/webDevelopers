// select all stars
const stars = document.querySelectorAll(".stars i");

stars.forEach((star, index1) =>{
    star.addEventListener("click", () => {
        console.log(star);
        stars.forEach((star, index2) =>{
            index1 >= index2 ? star.classList.add("color") : star.classList.remove("color");
        })
    })
})