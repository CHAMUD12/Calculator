let numbers = document.getElementsByClassName('numbers')
for(let i = 0; i < numbers.length; i++){
    numbers[i].addEventListener('click', () => {
        //console.log(numbers[i].value);
        result.value += numbers[i].value
    })
}

let oparator = document.getElementsByClassName('oparator')
for(let i = 0; i < oparator.length; i++){
    oparator[i].addEventListener('click', () => {
        //console.log(oparator[i].value);
        result.value += oparator[i].value
    })
}

let result = document.getElementById('result')

//  Function + - / *

let equals = document.getElementById('equls');

equals.addEventListener('click',() => {
    let expression = result.value;
    let total = eval(expression);
    result.value = total;
})

//  Clear input/output feild

function clearTextField() {
    let clearButton = document.getElementById('clear');

    clearButton.addEventListener('click', () => {
        document.getElementById('result').value = '';
    });
}

clearTextField();

//  Back space

document.getElementById('backSpace').addEventListener('click', () => {
    let currentValue = result.value;
    result.value = currentValue.slice(0, -1); // Remove the last character
});

// percentage

let percentageButton = document.getElementById('percentage');

percentageButton.addEventListener('click', () => {
    let currentValue = parseFloat(result.value);
    let percentageValue = currentValue / 100; 
    result.value = percentageValue; 
});