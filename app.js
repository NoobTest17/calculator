const buttons = document.getElementById('Buttons');
const screenResult = document.getElementById('screen');
const screenHistory = document.getElementById('screenHistory');
const btnBackspace = document.getElementById('backspace');
const btnResult = document.getElementById('result');
const btnClearGlobal = document.getElementById('globalClear');
const btnClear = document.getElementById('clear');

const sings = ['+', '-', '*', '/'];

let isActive = false;
let isActiveArithmetic = false;
let numberInMemory = 0;
let action = '';

buttons.addEventListener('click', (e) => {
  if (e.target.localName === "div") {
    return;
  }
  if (sings.includes(e.target.innerHTML)) {
    clickArithmeticBtn(e);
    return;
  }
  clickNumberBtn(e);
})

btnResult.addEventListener('click', (e) => {
  e.stopPropagation();
  screenHistory.innerHTML += screenResult.innerHTML + '='
  screenResult.innerHTML = arithmeticAction(numberInMemory, +screenResult.innerHTML)

  isActive = false;
  isActiveArithmetic = false;
  numberInMemory = 0;
})

btnClearGlobal.addEventListener('click', (e) => {
  e.stopPropagation();

  screenHistory.innerHTML = '';
  screenResult.innerHTML = '0';

  isActive = false;
  isActiveArithmetic = false;
  numberInMemory = 0;
})

btnClear.addEventListener('click', (e) => {
  e.stopPropagation();
  screenResult.innerHTML = '0';
})

btnBackspace.addEventListener('click', (e) => {
  e.stopPropagation();
  if (screenResult.innerHTML.length > 1) {
    screenResult.innerHTML = screenResult.innerHTML.slice(0, -1);
    return
  }

  screenResult.innerHTML = '0';
})

function clickNumberBtn(e) {
  const btn = e.target

  if (isActive) {
    screenResult.innerHTML += btn.innerHTML;
    return
  }
  if (!isActive) {
    if (btn.innerHTML !== '.') {
      screenResult.innerHTML = '';
      screenHistory.innerHTML = '';
    }
    isActive = true;
    screenResult.innerHTML += btn.innerHTML;
    return;
  }
}

function clickArithmeticBtn(e) {
  const btn = e.target;

  isActive = true;

  if (!isActiveArithmetic) {
    action = btn.innerHTML;
    numberInMemory = +screenResult.innerHTML;
    screenHistory.innerHTML = numberInMemory + action;
    screenResult.innerHTML = '';
    isActiveArithmetic = true;
    return;
  }

  if (screenResult.innerHTML === '') {
    action = btn.innerHTML;
    screenHistory.innerHTML = screenHistory.innerHTML.slice(0, -1) + action;
    return;
  }

  // numberInMemory = arithmeticFunct[action](numberInMemory, +screenResult.innerHTML);
  numberInMemory = arithmeticAction(numberInMemory, +screenResult.innerHTML);
  screenResult.innerHTML = '';
  action = btn.innerHTML;
  screenHistory.innerHTML = numberInMemory + action;
}

function arithmeticAction(a, b) {
  const arithmeticFunct = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => a / b,
  };

  return arithmeticFunct[action](a, b);
}