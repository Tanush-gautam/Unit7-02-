//connect "results" button to "random" function
document.getElementById('result').addEventListener('click' ,randomizer)
let randomNumber=0
let userGuess=0

function randomizer () {
  //get number typed in by users and covert to an integer
  userGuess = document.getElementById('input').value
  userGuess = parseInt(userGuess)

  //generate randome number between 1 and 6
  randomNumber = Math.random() * 6 + 1
  randomNumber = parseInt(randomNumber)

  //compare user's guess with random number
  if (userGuess == randomNumber) {
    document.getElementById('ansewer').innerHTML = 'winner!!'
  }
}