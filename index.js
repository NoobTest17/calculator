const buttons = document.getElementById('Buttons');
const screenResult = document.getElementById('screen');
const screenHistory = document.getElementById('screenHistory');
const btnBackspace = document.getElementById('backspace');
const btnResult = document.getElementById('result');
const btnClear = document.getElementById('clear');

const arithmeticOperations = ['/', '*', '-', '+'];

let historyNum = 0;
let realNum = 0;
let funct = -1; // Сделать сохранения индекса из массива

// Любое нажатие в РО
buttons.addEventListener('click', (e) => {
  if (!checkTarget(e)) {
    return
  }

  screenResult.innerHTML += e.target.textContent;
})

// Нажатие на знак равенства
btnResult.addEventListener('click', (e) => {
  e.stopPropagation();
  resultСalculation();
});

// Нажатие на знак очистку
btnClear.addEventListener('click', (e) => {
  e.stopPropagation();
  clearScreen();
});

// Нажатие на отмену действия
btnBackspace.addEventListener('click', (e) => {
  e.stopPropagation();
  screenResult.innerHTML = screenResult.innerHTML.slice(0, -1);
})

function checkTarget(e) {
  if (e.target.localName !== "button") {
    return false
  }

  if ( arithmeticOperations.includes(e.target.textContent) ) {
    realNum = screenResult.innerHTML;
    funct = e.target.textContent;
    updateMain(e);
    return false
  }

  return true
}

function updateMain(e) {
  let history = '';

  historyNum = realNum;
  realNum = 0;

  history += historyNum + funct;
  updateScreen(history);
}

function updateScreen(history) {
  screenHistory.innerHTML = history;
  screenResult.innerHTML = '';
}

function clearScreen() {
  screenResult.innerHTML = "0";
  screenHistory.innerHTML = "";
}

function resultСalculation() {
  // screenHistory.innerHTML += screenHistory.innerHTML + realNum + '=';
  // screenResult.innerHTML = +historyNum + +realNum;
}





