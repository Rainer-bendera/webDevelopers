const toggleDropdown = (dropdown, menu, isOpen) => {
    dropdown.classList.toggle("open", isOpen);
    menu.style.height = isOpen ? `${menu.scrollHeight}px` : 0;
}

const closeAllDropdowns = () =>{
    document.querySelectorAll(".dropdown-container.open").forEach(openDropdown => {
        toggleDropdown(openDropdown, openDropdown.querySelector(".dropdown-menu"), false)
    })
};


document.querySelectorAll(".dropdown-toggle").forEach(button => {
    button.addEventListener("click", e => {
        e.preventDefault();

        const dropdown = e.target.closest(".dropdown-container");
        const isOpen = dropdown.classList.contains("open");
        const menu = dropdown.querySelector(".dropdown-menu");
        
        closeAllDropdowns();

        toggleDropdown(dropdown, menu, !isOpen);
        
    });
});



document.querySelectorAll(".openButton").forEach(button => {
    button.addEventListener("click", () =>{

        document.querySelector(".sidebar").classList.toggle("collapse");
    })
})