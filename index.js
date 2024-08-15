const counterVal = document.querySelector('#counter');

// console.log(counterVal.innerHTML);

const increment = () => {
    var value = parseInt(counterVal.innerText);
    value = value + 1;
    counterVal.innerText = value;
};

const decrement = () => {
    var value = parseInt(counterVal.innerText);
    value = value - 1;
    counterVal.innerText = value;
};