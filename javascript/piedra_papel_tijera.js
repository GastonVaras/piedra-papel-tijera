const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')

let userChoice
let computerChoice 
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice (){
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) +1
    
    if (randomNumber === 1) {
        computerChoice = 'rock'
        cambiarImagen ()
        userChoiceImg ()
    }
    if (randomNumber === 2) {
        computerChoice = 'scissors'
        cambiarImagen ()
        userChoiceImg ()
    }
    if (randomNumber === 3) {
        computerChoice = 'paper'
        cambiarImagen ()
        userChoiceImg ()
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult () {
    if (computerChoice === userChoice) {
        document.getElementById('jugada_jugador').style = "animation: none;"
        result = 'Empate!'
    }
    if (computerChoice === "rock" && userChoice === "paper") {
        document.getElementById('jugada_jugador').style = "animation: WinCondition 2s infinite;"
        result = 'Ganaste!'
    }
    if (computerChoice === "rock" && userChoice === "scissors") {
        document.getElementById('jugada_jugador').style = "animation: LoseCondition 3s linear infinite;"
        result = 'Perdiste :('
    }
    if (computerChoice === "paper" && userChoice === "scissors") {
        document.getElementById('jugada_jugador').style = "animation: WinCondition 2s infinite;"
        result = 'Ganaste!'
    }
    if (computerChoice === "paper" && userChoice === "rock") {
        document.getElementById('jugada_jugador').style = "animation: LoseCondition 3s linear infinite;"
        result = 'Perdiste :('
    }
    if (computerChoice === "scissors" && userChoice === "rock") {
        document.getElementById('jugada_jugador').style = "animation: WinCondition 2s infinite;"
        result = 'Ganaste!'
    }
    if (computerChoice === "scissors" && userChoice === "paper") {
        document.getElementById('jugada_jugador').style = "animation: LoseCondition 3s linear infinite;"
        result = 'Perdiste :('
    }
    resultDisplay.innerHTML = result
}


function cambiarImagen () {
    if(computerChoice === "rock"){
        document.getElementById('jugada_maquina').src = '../images/Piedra.png'
    }
    else if(computerChoice === "paper"){
        document.getElementById('jugada_maquina').src = '../images/Papel.png'
    }
    else if(computerChoice === "scissors"){
        document.getElementById('jugada_maquina').src = '../images/Tijera.png'
    }
}

function userChoiceImg () {
    if (userChoice === "rock") {
        document.getElementById('jugada_jugador').src = '../images/Piedra.png'
    }
    else if (userChoice === "paper") {
        document.getElementById('jugada_jugador').src = '../images/Papel.png'
    }
    else if (userChoice === "scissors") {
        document.getElementById('jugada_jugador').src = '../images/Tijera.png'
    }
}