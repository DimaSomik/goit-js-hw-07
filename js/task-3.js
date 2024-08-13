const nameInput = document.getElementById('name-input');
nameInput.addEventListener("input", greetingsName);

function greetingsName() {
    const output = document.getElementById('name-output');
    const purifiedName = nameInput.value.trim();
    if (purifiedName == "") {
        output.textContent = "Anonymous";
    } else {
        output.textContent = purifiedName;
    }
} 

