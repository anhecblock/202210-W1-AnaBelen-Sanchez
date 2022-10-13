let btns = document.querySelectorAll('.num-button');
let allBtns = document.querySelectorAll('.button');
let resultBox = document.querySelector('#result-box');
let clearBtn = document.querySelector('#clear');

let total = document.querySelector('#total');

let btnSpread = [...btns];
let allBtnSpread = [...allBtns];

// Para la entrada de números
btnSpread.forEach((button, i) => {
    button.addEventListener('click', () => {
        // Valores internos para calculadora

        if (resultBox.innerHTML == '0') {
            resultBox.innerHTML = '';
        }

        let value = btns[i].innerHTML;
        resultBox.innerHTML += value;
    });
});

// Función para evaluar Strings
function evaluate(fn) {
    return new Function('return ' + fn)();
}

// Para calcular todas las entradas
total.addEventListener('click', () => {
    let allInputs = resultBox.innerHTML;

    resultBox.innerHTML = evaluate(allInputs);

    console.log(evaluate(allInputs));
});

// Borra todas las entradas
clearBtn.addEventListener('click', () => {
    resultBox.innerHTML = '0';
});
