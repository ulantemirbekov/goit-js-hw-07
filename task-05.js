const inputRef = document.querySelector('#name-input');
const outputRef = document.querySelector('#name-output');

function inputName() {
    inputRef.value
        ? outputRef.textContent = inputRef.value
        : outputRef.textContent = 'незнакомец';
};

inputRef.addEventListener('input', inputName);