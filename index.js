var store = window.localStorage.getItem('number');

const load = () => {
    if (store != null) {
        var ul = document.getElementById('ul');
        ul.innerHTML = store;
    }
}

const charToInt = () => {
    var input = document.getElementById('char').value;
    console.log(input);
    
    var digits = [];

    while (input > 0) {
        digits.push(input % 10);
        digits.join("   ");
        input = Math.trunc(input / 10);
    }

    digits.reverse();
    console.log(digits);
    
    store += `<li>Number split is ${digits}</li>`;
    window.localStorage.setItem('number', store);

    var ul = document.getElementById('ul');
    ul.innerHTML = store;
}