const buttons = document.getElementById('Buttons');
const screenResult = document.getElementById('screen');
const screenHistory = document.getElementById('screenHistory');
const btnBackspace = document.getElementById('backspace');
const btnResult = document.getElementById('result');
const btnClear = document.getElementById('clear');

let numberHistory = 0;
let Action = '';

buttons.addEventListener('click', (e) => {
  if ( !eventVerification(e) ) { return }
  screenResult.innerHTML += e.target.innerText;
})


function eventVerification(e) {
  if (e.target.localName === "div") { return false }
  if ( arithmeticEvents.includes(e.target.innerText) ) {
    Action = e.target.innerText;
    clickingOnTheSign(Action);
    return false
  }
  return true
}

function screenClear() {
  screenHistory.innerHTML = '';
  screenResult.innerHTML = '';
}