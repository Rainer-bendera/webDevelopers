const inputField = document.querySelector(".inputField input");
const eye = document.querySelector(".inputField i");
const requirementList = document.querySelectorAll(".containerList li");

const requirement = [
    {regex: /.{8,}/, index: 0},
    {regex: /[a-z]/, index: 1},
    {regex: /[A-Z]/, index: 2},
    {regex: /[^A-Za-z0-9]/, index: 3},
    {regex: /[0-9]/, index: 4}, 
]

inputField.addEventListener("keyup", (e) =>{
    requirement.forEach(item => {

    })

});