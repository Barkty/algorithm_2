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
        input = Math.trunc(input / 10);
    }

    let reversedDigits = digits.reverse().join('   ');
    console.log(reversedDigits);
    
    store += `<li>Number split is ${reversedDigits}</li>`;
    window.localStorage.setItem('number', store);

    var ul = document.getElementById('ul');
    ul.innerHTML = store;
}