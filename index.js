const buttons = document.getElementById('Buttons');
const screenResult = document.getElementById('screen');
const screenHistory = document.getElementById('screenHistory');
const btnBackspace = document.getElementById('backspace');
const btnResult = document.getElementById('result');
const btnClear = document.getElementById('clear');

let numberHistory = 0;
let isActive = false;
let Action = '';

buttons.addEventListener('click', (e) => {
  console.log(e)
  if (e.target.localName === "div") { return }
  if (screenResult.innerHTML === "0" && !isActive && ![',', '+', '-'].includes(e.target.innerText)) {
    screenResult.innerHTML = '';
  }

  screenResult.innerHTML += e.target.innerText;
})






btnResult.addEventListener('click', (e) => {
})

btnClear.addEventListener('click', (e) => {
  e.stopPropagation();
})