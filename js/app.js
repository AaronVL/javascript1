function squareNumber(number) {
  return number * number;
}

function askUser() {
  let numberGiven = parseInt(prompt(`Enter any number.`));
  if(!isNaN(numberGiven)) {
    return alert(squareNumber(numberGiven))
  } else {
    alert(`Not a number.`);
    askUser();
  }
}

askUser();

/*



*/



function alertString(str) {
  if(str.charAt(str.length - 1) !== '.') {
    str += '.';
  }
  str = str.charAt(0).toUpperCase() + str.slice(1);
  alert(str);
}








//BONUS

function definePal(string) {
  let reversed =
  string.split('').reverse().join('');
}



//
//
