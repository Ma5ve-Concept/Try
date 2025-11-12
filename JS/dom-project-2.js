function computerMove () {
const randomNumber = Math.random();
let computerMove = '';

if (randomNumber >= 0 && randomNumber < 1/3) {
  computerMove = 'Rock';
  //console.log('Rock');
  } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
    computerMove = 'Paper';
    //console.log('paper');
  } else if (randomNumber >= 2/3 && randomNumber < 1) {
    computerMove = 'Scissors';
    //console.log('scissors');
  };
//console.log(computerMove);
};

 let result = '';

 if (computerMove === 'Rock' ) {
     result = 'Tie';
 } else if (computerMove === 'Paper') {
     result = 'You lose';
 } else if (computerMove === 'Scissors') {
     result = 'You win';
 };

 alert(`You picked Rock. Computer picked ${computerMove}. ${result}`)

// function result() {
//   let result = '';

// if (computerMove === 'Rock' ) {
//       result = 'Tie';
//   } else if (computerMove === 'Paper') {
//       result = 'You lose';
//   } else if (computerMove === 'Scissors') {
//       result = 'You win';
//   };
//   console.log(result);
// };