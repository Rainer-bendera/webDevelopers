// selecting all cards and buttons
const filterButton = document.querySelectorAll(".filter-button button");
const filterableCard = document.querySelectorAll(".filter-cards .card");

// difining the card function
const filterCard = f =>{
    document.querySelector(".active").classList.remove("active");
    f.target.classList.add("active");
    console.log(f.target);

    filterableCard.forEach(card => {
        card.classList.add("hide");

        if(card.dataset.name === f.target.dataset.name || f.target.dataset.name === "all"){
            card.classList.remove("hide");
        }
    })
}

filterButton.forEach(button => button.addEventListener("click", filterCard));