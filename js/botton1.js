const color = document.querySelector(".color");
const body = document.querySelector("body");

color.addEventListener("click", () => {
    body.classList.toggle("aqua");

    if(!body.classList.contains("aqua")){
        return localStorage.setItem("mode", "light");
    }
    
    {
        localStorage.setItem("mode", "aqua");
    }
});
color.addEventListener("click", () => {color.classList.toggle("active")});

function search (){
    let filter = document.getElementById("find").value.toUpperCase();
    let item = document.querySelectorAll(".card");
    let l = document.getElementsByTagName("h3");

    for(var i=0; i<=l.length; i++){
       let a = item[i].getElementsByTagName("h3")[0];
       let value = a.innerHTML || a.innerText || a.textContent;

       if(value.toUpperCase().indexOf(filter) > -1){
        item[i].style.display = "";
       }
       else
       {
        item[i].style.display = "None";
       }
 
    }
}