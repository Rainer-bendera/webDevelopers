const inputField = document.querySelector(".inputField input");
const eye = document.querySelector(".inputField i");
const requirementList = document.querySelectorAll(".containerList li");

const requirement = [
    {regex: /.{8,}/, index: 0},
    {regex: /[0-9]/, index: 1},
    {regex: /[a-z]/, index: 2},
    {regex: /[^A-Za-z0-9]/, index: 3},
    {regex: /[A-Z]/, index: 4}, 
]

inputField.addEventListener("keyup", (e) =>{
    requirement.forEach(item => {
        const isValid = item.regex.test(e.target.value);
        const requirementItem = requirementList[item.index];

        if(isValid){
            requirementItem.firstElementChild.className = "fas fa-check";
            requirementItem.classList.add("valid");
        }
        else
        {
            requirementItem.firstElementChild.classList = "far fa-circle";
            requirementItem.classList.remove("valid");
        }
    })

});

eye.addEventListener("click", () =>{
    inputField.type = inputField.type === "password" ? "text" : "password";


    eye.classList = `far fa-eye${inputField.type === "password" ? "" : "-slash"}`;
})