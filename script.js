let arr = ['Камень', 'Ножницы', 'Бумага']
let userName = prompt('Ваше имя?', '')
while (userName == '' || userName == null) {
  userName = prompt('Ваше имя?', '')
}

let playerSelection = prompt('Камень, ножницы или бумага?', '')

// Выводит сообщение, пока пользователь что-нибудь не напечатает (вопрос повторяется и при нажатии Esc)
while (playerSelection == '' || playerSelection == null) {
  playerSelection = prompt('Камень, ножницы или бумага?', '')
}

alert(`${userName} выбрал(а): ${playerSelection}!`)

// Случайный выбор компьютера
function computerPlay(arr) {
  let rand = Math.floor(Math.random() * arr.length)
  return arr[rand]
}

let computerSelection = computerPlay(arr)

alert(`Компьютер выбрал: ${computerSelection}`)

let victory = 'Вы победили!'
let lose = 'Вы проиграли!'
let draw = 'Ничья, попробуйте снова'

// Раунд 1
function round(playerSelection, computerSelection) {
  if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
    return (playerSelection = prompt(
      'Ничья, попробуйте снова. Камень, ножницы или бумага?',
      ''
    ))
  }
  if (
    playerSelection.toLowerCase() == 'камень' &&
    computerSelection.toLowerCase() == 'ножницы'
  ) {
    return alert(victory)
  }
  if (
    playerSelection.toLowerCase() == 'камень' &&
    computerSelection.toLowerCase() == 'бумага'
  ) {
    return alert(lose)
  }
  if (
    playerSelection.toLowerCase() == 'бумага' &&
    computerSelection.toLowerCase() == 'камень'
  ) {
    return alert(victory)
  }
  if (
    playerSelection.toLowerCase() == 'бумага' &&
    computerSelection.toLowerCase() == 'ножницы'
  ) {
    return alert(lose)
  }
  if (
    playerSelection.toLowerCase() == 'ножницы' &&
    computerSelection.toLowerCase() == 'бумага'
  ) {
    return alert(victory)
  }
  if (
    playerSelection.toLowerCase() == 'ножницы' &&
    computerSelection.toLowerCase() == 'камень'
  ) {
    return alert(lose)
  }
}

round(playerSelection, computerSelection)
