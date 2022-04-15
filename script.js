let arr = ['Камень', 'Ножницы', 'Бумага']
var numberOfUserWins = 0
let numberOfComputerWins = 0
let numberOfUserLoses = 0
let numberOfComputerLoses = 0
let numberOfDraws = 0

// Спрашиваем имя пользователя
let userName = prompt('Ваше имя?', '')
while (userName == '' || userName == null) {
  userName = prompt('Ваше имя?', '')
}

// Спрашиваем число раундов
let numberOfRounds = prompt('Сколько раундов будем играть?', '')
while (numberOfRounds == '' || numberOfRounds == null) {
  numberOfRounds = prompt('Сколько раундов будем играть?', '')
}

// Игра с указанным пользователем числом раундов
function game(n) {
  for (i = 0; i < n; i++) {
    // Просим пользователя сделать выбор
    let playerSelection = prompt('Камень, ножницы или бумага?', '')

    // Выводим сообщение, пока пользователь что-нибудь не напечатает (вопрос повторяется и при нажатии Esc)
    while (playerSelection == '' || playerSelection == null) {
      playerSelection = prompt('Камень, ножницы или бумага?', '')
    }

    alert(`${userName} выбрал(а): ${playerSelection}!`)

    // Случайный выбор компьютера из возможных вариантов, указанных в массиве arr
    function computerPlay(arr) {
      let rand = Math.floor(Math.random() * arr.length)
      return arr[rand]
    }

    let computerSelection = computerPlay(arr)

    alert(`Компьютер выбрал: ${computerSelection}`)
    // Вызываем функцию через замыкание
    round(playerSelection, computerSelection)
  }
  alert(
    `${userName} выиграл ${numberOfUserWins}, а проиграл ${numberOfUserLoses}. Компьютер выиграл ${numberOfComputerWins}, а проиграл ${numberOfComputerLoses}. Число ничьих ${numberOfDraws}.`
  )
}

// Один раунд
function round(playerSelection, computerSelection) {
  let victory = 'Вы победили!'
  let lose = 'Вы проиграли!'
  let draw = 'Ничья, попробуйте снова'

  if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
    numberOfDraws = numberOfDraws + 1
    return alert(draw)
  }
  if (
    playerSelection.toLowerCase() == 'камень' &&
    computerSelection.toLowerCase() == 'ножницы'
  ) {
    numberOfUserWins = numberOfUserWins + 1
    numberOfComputerLoses = numberOfComputerLoses + 1
    return alert(victory)
  }
  if (
    playerSelection.toLowerCase() == 'камень' &&
    computerSelection.toLowerCase() == 'бумага'
  ) {
    numberOfUserLoses = numberOfUserLoses + 1
    numberOfComputerWins = numberOfComputerWins + 1
    return alert(lose)
  }
  if (
    playerSelection.toLowerCase() == 'бумага' &&
    computerSelection.toLowerCase() == 'камень'
  ) {
    numberOfUserWins = numberOfUserWins + 1
    numberOfComputerLoses = numberOfComputerLoses + 1
    return alert(victory)
  }
  if (
    playerSelection.toLowerCase() == 'бумага' &&
    computerSelection.toLowerCase() == 'ножницы'
  ) {
    numberOfUserLoses = numberOfUserLoses + 1
    numberOfComputerWins = numberOfComputerWins + 1
    return alert(lose)
  }
  if (
    playerSelection.toLowerCase() == 'ножницы' &&
    computerSelection.toLowerCase() == 'бумага'
  ) {
    numberOfUserWins = numberOfUserWins + 1
    numberOfComputerLoses = numberOfComputerLoses + 1
    return alert(victory)
  }
  if (
    playerSelection.toLowerCase() == 'ножницы' &&
    computerSelection.toLowerCase() == 'камень'
  ) {
    numberOfUserLoses = numberOfUserLoses + 1
    numberOfComputerWins = numberOfComputerWins + 1
    return alert(lose)
  }
}

game(numberOfRounds)
