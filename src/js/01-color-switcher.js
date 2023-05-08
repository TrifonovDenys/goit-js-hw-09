const body = document.body
const buttonStart = document.querySelector('[data-start]')
const buttonStop = document.querySelector('[data-stop]')
let timerId = null;

buttonStart.addEventListener('click', startColorChange)
buttonStop.addEventListener('click', stopColorChange)

function startColorChange() {
  body.style.backgroundColor = getRandomHexColor()
  buttonStart.disabled = true
  buttonStop.disabled = false
  timerId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor()
   }, 1000)
}

function stopColorChange() {
  clearInterval(timerId)
  buttonStart.disabled = false
  buttonStop.disabled = true
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

