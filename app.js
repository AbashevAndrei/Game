// document.addEventListener("DOMContentLoaded", () => { // Позволяет подключать файл JavaScript до построения DOM дерева
const num1 = document.querySelector('#num1')
const num2 = document.querySelector('#num2')
const addBtn = document.querySelector('#add')
const subBtn = document.querySelector('#sub')
const multiplyBtn = document.querySelector('#multiply')
const output = document.querySelector('#output')

function getInputValues() {
  const value1 = parseInt(num1.value)
  const value2 = +num2.value

  return [value1, value2]
}

function addHandler() {
  const values = getInputValues()

  const result = values[0] + values[1]

  displayResult(result)
}

function subHandler() {
  const values = getInputValues()

  const result = values[0] - values[1]

  displayResult(result)
}

function multiplyHandler() {
  const values = getInputValues()

  const result = values[0] * values[1]

  displayResult(result)
}

function displayResult(result) {
  output.closest('.card').style.display = 'block'
  output.innerHTML = `Результат = ${result}`
}

addBtn.addEventListener('click', addHandler)
subBtn.addEventListener('click', subHandler)
multiplyBtn.addEventListener('click', multiplyHandler)

// setTimeout(() => {
//   fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json())
//     .then(json => console.log(json))
// }, 5000)
