const forms = document.querySelector(".forms"),
    pwShowHide = document.querySelectorAll(".eye-icon"),
    links = document.querySelectorAll(".link");

    console.log(forms, pwShowHide, links);

    pwShowHide.forEach(eyeIcon => {
        eyeIcon.addEventListener("click", ()  => {
            let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");
            console.log(pwFields);

            pwFields.forEach(password => {
                if(password.type === "password"){
                    password.type = "text";
                eyeIcon.classList.replace("bx-hide", "bx-show");
                return;
            }

            password.type = "password";
                eyeIcon.classList.replace("bx-show", "bx-hide");
            })
        })
    })

    links.forEach(link => {
        link.addEventListener("click",e => {
            e.preventDefault();
            forms.classList.toggle("show-signup");
        })
    })