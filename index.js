const form = document.querySelector("#form");
const usrname = document.querySelector("#usrname");
const email = document.querySelector("#email");
const pssword = document.querySelector("#pssword");
const pssword2 = document.querySelector("#pssword2");


function showError (input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");

    formControl.className = "form-control error";
    small.innerText = message;
}


function showSuccess (input) {
    const formControl = input.parentElement;    
    formControl.className = "form-control success";

}


function checkLength (input, min, max) {
    if (input.value.length < min) {

        showError(input, `Please enter atleast ${min} characters`);

    } else if (input.value.length > max) {

        showError(input, `The length cannot exceed ${max} characters`); 

    } else {
        showSuccess(input);
    }
}


function checkEmail (input) {
    if (!input.value.includes("@") || !input.value.includes(".")) {
        showError(input, "Please enter the correct format.");
    } else {
        showSuccess(input);
    }
}


function checkPsswords(input1, input2) {
    if (input1.value !== input2.value) {

        showError(input2, "Passwords must match.");

    } else {
        if (input1.value === input2.value && input1.value.trim() === "") {
            showError(input2, "Passwords must match.");
        } else {
            showSuccess(input1);
            showSuccess(input2);
        }
    }
}


function checkInputs(inputArray) {
    inputArray.forEach((input) => {
        if (input.value.trim() === "") {

            showError(input, "Enter the required fields.");
        } 
    })
}


form.addEventListener("submit", function(e) {
    e.preventDefault();
    
    checkInputs([usrname, pssword, pssword2, email]);
    checkLength(usrname, 4, 15);
    checkEmail(email);
    checkLength(pssword, 6);
    checkLength(pssword2, 6);
    checkPsswords(pssword, pssword2)
})