let arr = ['Камень', 'Ножницы', 'Бумага']
let userName = prompt('Ваше имя?','')
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
  if (playerSelection === computerSelection) {
    return alert('Ничья, попробуйте снова')
  }
  if (playerSelection == 'Камень' && computerSelection == 'Ножницы') {
    return alert(victory)
  }
  if (playerSelection == 'Камень' && computerSelection == 'Бумага') {
    return alert(lose)
  }
  if (playerSelection == 'Бумага' && computerSelection == 'Камень') {
    return alert(victory)
  }
  if (playerSelection == 'Бумага' && computerSelection == 'Ножницы') {
    return alert(lose)
  }
  if (playerSelection == 'Ножницы' && computerSelection == 'Бумага') {
    return alert(victory)
  }
  if (playerSelection == 'Ножницы' && computerSelection == 'Камень') {
    return alert(lose)
  }
}

round(playerSelection, computerSelection)
