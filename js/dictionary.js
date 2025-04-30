// selecting all filter cards and filter buttons
const filterButtons = document.querySelectorAll(".filter-button button");
const filterableCards = document.querySelectorAll(".filter-cards .card");
console.log(filterButtons, filterableCards);

// defining the filter cards
const filterCards = f =>{
    document.querySelector(".active").classList.remove("active")
    f.target.classList.add("active");

    // iterate over each filterable cards
    filterableCards.forEach(card => {
        card.classList.add('hide');

        if(card.dataset.name === f.target.dataset.name || f.target.dataset.name === "all"){
            card.classList.remove("hide");
        }
    });
};

filterButtons.forEach(button => button.addEventListener("click",filterCards));

let view = document.querySelector("view");
let call = document.getElementById("call");

