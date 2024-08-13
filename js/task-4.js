const mainForm = document.querySelector('.login-form');
const emailInput = mainForm.children[0].lastElementChild;
const pwdInput = mainForm.children[1].lastElementChild;
const gatheredInfo = {
    email: "",
    password: ""
}

const collectInfo = (event) => {
    event.preventDefault();
    if (emailInput.value === "" || pwdInput.value === "") {
        alert('All form fields must be filled in');
    } else {
        gatheredInfo.email = emailInput.value;
        gatheredInfo.password = pwdInput.value;
        console.log(gatheredInfo);
        mainForm.reset();
    }
}

mainForm.addEventListener("submit", collectInfo);
