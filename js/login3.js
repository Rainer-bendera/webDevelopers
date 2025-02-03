let login = document.getElementById("login");
let button = document.getElementById("button");
let name = document.getElementById("name"), maxHeight = "0";
let signup = document.getElementById("signup");
let title = document.getElementById("title");

    login.onclick = function(){
        name.style.maxHeight = "0";
        title.innerHTML = "Login";
        button.login.innerHTML = "Login";
        login.innerHTML = "signup"
    }

    signup.onclick = function(){
        name.style.maxHeight = "65px";
        title.innerHTML = "Signup";
        
    }
    