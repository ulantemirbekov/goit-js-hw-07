const inputRef = document.querySelector("#validation-input");

inputRef.addEventListener('blur', (event) => {
    let inputLength = event.target.value
    if (inputRef.dataset.length == inputLength.length) {
        inputRef.classList.add('valid')
        inputRef.classList.remove('invalid')
    } else {
        inputRef.classList.add('invalid')
        inputRef.classList.remove('valid')
    }
});