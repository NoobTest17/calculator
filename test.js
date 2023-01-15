const buttons = document.getElementById('Buttons');
const screenResult = document.getElementById('screen');
const screenHistory = document.getElementById('screenHistory');
const btnBackspace = document.getElementById('backspace');
const btnResult = document.getElementById('result');
const btnClear = document.getElementById('clear');

let numberHistory = 0;
let isActive = false;
let Action = '';

const sings = ['-', '+', '*', '/'];

buttons.addEventListener('click', (e) => {
  if (e.target.localName === "div") { return }
  if (screenResult.innerHTML === "0" && !isActive && e.target.innerText !== ',') {
    screenResult.innerHTML = '';
  }
  if (!isActive && sings.includes(e.target.innerText)) {
    numberHistory = + screenResult.innerHTML;
    Action = e.target.innerText;
    isActive = true;
    setHistory(numberHistory + Action);
    return;
    //  условие под первый знаки в активном состояние сопровождаються функцией
  }
  if (isActive && sings.includes(e.target.innerText)) {
    if  (screenResult.innerHTML ===  '') {
      Action = e.target.innerText;
      screenHistory.innerHTML = screenHistory.innerHTML.slice(0, -1) + Action
      return;
    }
    // applyingAnAction();
    const result = getResult();
    numberHistory = result;
    Action = e.target.innerText
    setHistory(result + Action);
    return;
  }

  screenResult.innerHTML += e.target.innerText;
})

function setHistory(str) {
  screenHistory.innerHTML = str;
  screenResult.innerHTML = '';
}

function getResult() {
  const singsActions = {
    ['+']: (a, b) =>  a + b,
    ['-']: (a, b) =>  a - b,
    ['/']: (a, b) =>  a / b,
    ['*']: (a, b) =>  a * b,
  }
  return singsActions[Action](+numberHistory, +screenResult.innerHTML)
}

btnResult.addEventListener('click', (e) => {
  e.stopPropagation();
  getGlobalResult();
  isActive = false;
})

function getGlobalResult() {
  screenHistory.innerHTML += screenResult.innerHTML + '='
  screenResult.innerHTML = getResult()
}

btnClear.addEventListener('click', (e) => {
  e.stopPropagation();
})