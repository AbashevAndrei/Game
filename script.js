let arr = ['Камень', 'Ножницы', 'Бумага']

// Один раунд
function round(playerSelection, computerSelection) {
  let victory = 'Вы победили!'
  let lose = 'Вы проиграли!'
  let draw = 'Ничья, попробуйте снова'
  if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
    return alert(draw)
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

// Раунд 1-5
function game(n) {
  for (i = 0; i < n; i++) {
    // Спрашиваем имя пользователя
    let userName = prompt('Ваше имя?', '')
    while (userName == '' || userName == null) {
      userName = prompt('Ваше имя?', '')
    }

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
    
    // Замыкание, рекурсия?
    round(playerSelection, computerSelection)
  }
}

game(5)

// round(playerSelection, computerSelection)
