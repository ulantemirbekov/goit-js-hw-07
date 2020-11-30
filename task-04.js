const incrementRef = document.querySelector('[data-action="increment"]');
const decrementRef = document.querySelector('[data-action="decrement"]');
const valueRef = document.querySelector('#value');

let counterValue = 0;

function increment() {
    counterValue += 1;
    valueRef.textContent = counterValue;
};

function decrement() {
    counterValue -= 1;
    valueRef.textContent = counterValue;
};

incrementRef.addEventListener('click', increment);
decrementRef.addEventListener('click', decrement);