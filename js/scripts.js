//control flow
let emailArr;
var yourEmail;
while (true) {
  //user input
  var yourEmail = prompt('What is your email?');
  emailArr = yourEmail.split("");
  if (!(emailArr.includes('@'))) {
    var yourEmail = prompt('That was not a valid email. Please try again.');
  }
  else if (!(emailArr.includes('.'))) {
    var yourEmail = prompt('That was not a valid email. Please try again.');
  }
  else {
    alert('Thanks for providing a valid email.');
  }
}


//Switch
var numOfProjects = prompt("How many projects do you have? You can choose a number 0-2.");

switch(parseInt(numOfProjects)) {
 case 0:
   alert('You won’t have a projects section on your page');
   break;
 case 1:
   alert('You’ll only have one showing');
   break;
 case 2:
   alert('You’ll only have one showing');
   break;
 default:
   alert('You didn\‘t follow the rules.');
}
