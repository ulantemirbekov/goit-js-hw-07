const inputRef = document.querySelector("#validation-input");

inputRef.addEventListener('blur', (event) => {
    let input = event.target.value
    if (inputRef.dataset.length == input.length) {
        inputRef.classList.add('valid')
        inputRef.classList.remove('invalid')
    } else {
        inputRef.classList.add('invalid')
        inputRef.classList.remove('valid')
    }
});