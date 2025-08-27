const requirementList = document.querySelectorAll(".containerList li");
const eye = document.querySelector(".inputField i");
const input = document.querySelector(".inputField input");


const requirement = [
    {RegExp: /.{8,}/, index: 0},
    {RegExp: /[0-9]/, index: 1},
    {RegExp: /[a-z]/, index: 2},
    {RegExp: /[^A-Za-z0-9]/, index: 3},
    {RegExp: /[A-Z]/, index: 4},
]

input.addEventListener("keyup", e => {
    requirement.forEach(item => {
        const isValid = item.RegExp.test(e.target.value);
        const requirementItem = requirementList[item.index];

        if(isValid){
            requirementItem.firstElementChild.className = "fas fa-check";
            requirementItem.classList.add(isValid);
        }

        else{
            requirementItem.firstElementChild.className = "far fa-circle";
            requirementItem.classList.remove(isValid);
        }
    })
})

eye.addEventListener("click", () =>{
    input.type = input.type === "password" ? "text" : "password";

    eye.className = `far fa-eye${input.type === "password" ? "" : "-slash"}`;
})
