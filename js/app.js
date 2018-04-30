function squareNumber(number) {
  return number * number;
}

function askUser() {
  let numberGiven = parseInt(prompt(`Enter any number.`));
  if(!isNaN(numberGiven)) {
    alert(squareNumber(numberGiven))
  } else {
    askUser();
  }
}

askUser();
