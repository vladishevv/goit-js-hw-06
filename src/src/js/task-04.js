let counterValue = 0;

const buttonDec = document.querySelector('button[data-action="decrement"]');

const buttonInc = document.querySelector('button[data-action="increment"]');

const counterEl = document.querySelector('#value');

console.log(buttonDec);
console.log(buttonInc);
console.log(counterEl);

buttonDec.addEventListener('click', () => {
    counterValue -= 1;
    counterEl.textContent = counterValue;
});

buttonInc.addEventListener('click', () => {
    counterValue += 1;
    counterEl.textContent = counterValue;
})