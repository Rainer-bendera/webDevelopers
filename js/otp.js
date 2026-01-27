//selecting all input fields
const input = document.querySelectorAll(".code input"),
 button = document.querySelector("button");

//  iterate over all input
input.forEach((inputs, index1) => {
    inputs.addEventListener("keyup", () =>{


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

    })
})


//  focus the first input which index is 0 on window load
 window.addEventListener("load", () => input[0].focus())
