let resultDisplay = document.querySelector('.result')
let userInput = ''
let x;
let y;
let operator = '';

let actualClick = document.querySelector('.operations').addEventListener('click', function(event) {

    if (event.target.classList.contains('number')) {
      userInput += event.target.innerText;
      resultDisplay.innerText = userInput;
    }
    if (event.target.classList.contains('operator') && operator === '') {
        x = parseInt(userInput);
        operator = event.target.innerText;
        userInput = '';
        console.log(x, operator)
    } else if (event.target.classList.contains('back')) {
      backSpace();
    } else if (event.target.classList.contains('equal')) {
        operate(x, y, operator);
        userInput = ''
    } else if (event.target.classList.contains('clear')) {
      clear();
    }

    function sum(x, y) {
      return (x+y);
    }

    function substraction(x, y) {
    return (x-y);
    }

    function multiplication(x, y) {
    return (x*y);
    }

    function divition(x, y) {
    return (x/y);
    }

    function clear() {
      userInput = '';
      x = '';
      y = '';
      operator = '';
      resultDisplay.innerText = '0';
    }

    function backSpace() {
      if (userInput.length >= 2) {
      userInput = userInput.slice(0, -1)
      resultDisplay.innerText = userInput;
      } else {
        userInput = ''
        resultDisplay.innerText = '0';
      }
      
    }

    function operate(x, y, operator){
    y = parseInt(userInput);
    
    if (operator === '+') {
      resultDisplay.innerText = sum(x, y);
    } else if (operator === '-') {
      resultDisplay.innerText = substraction(x, y)
    } else if (operator === '*') {
      resultDisplay.innerText = multiplication(x, y)
    } else {
      resultDisplay.innerText = divition(x, y)
    }
    }

  });

