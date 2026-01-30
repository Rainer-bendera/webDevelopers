//selecting all input fields
const input = document.querySelectorAll(".code input"),
 button = document.querySelector("button");

//  iterate over all input
input.forEach((inputs, index1) => {
    inputs.addEventListener("keyup", e =>{


        // This code get the current input element and stores it in currentInput variable
        // this code get the sibling element of the current input element and stores it in the nextInput
        // this code get the sibling element of the current input element and stores it in the prevousInput
        const currentInput = inputs,
        nextInput = inputs.nextElementSibling,
        prevInput = inputs.previousElementSibling;

        if(currentInput.value.length > 1){
            currentInput.value = "";
            return;
        }
        
        // If the next input is disabled and the current input is not empty
        // enable the next input and focus on it
        if(nextInput && nextInput.hasAttribute("disabled") && currentInput.value !== ""){
            nextInput.removeAttribute("disabled");
            nextInput.focus();
        }


        // if the backspace is clicked
       if(e.key === "Backspace"){
        // iterate over each input again
        input.forEach((inputs, index2) => {
            // if the index1 of the current input is less than or equal to the index2 of the input in the outer loop
            //and the previous element exists, set the disabled attribute on the input and focus on the previous element
            if(index1 <= index2 && prevInput){
                inputs.setAttribute("disabled", true);
                currentInput.value = "";
                prevInput.focus();
            }
        })
       }

    // if the fourth input whose index is 3 is not empty and has no disabled attribute the add active class
    // if not not then remove the active class
    if(!input[3].disabled && input[3].value !== ""){
        button.classList.add("active");
        return;
    }
    button.classList.remove("active");

    });
})


//  focus the first input which index is 0 on window load
 window.addEventListener("load", () => input[0].focus())
