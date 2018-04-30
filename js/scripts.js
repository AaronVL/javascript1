// Functions

// console
//   .log( //This is where the function is called
//     "hello world" // This is the argument/parameter
//   ); //Method which is a type of function
//   //In your browser's console, the RETURN is what gets printed

// function sayHello(name, greeting) { //Function Definition
//   return `Hello ${name}, ${greeting}!`;
// }
//
// let myGreeting = sayHello("Connie", "You're the greatest!"); //Call Site
//
// alert(myGreeting);






// var fav = "Cheese";
//
// function sayMyFav() {
//   alert(fav);
// }
//
// sayMyFav()
//
//
//
// (thingToLog, thingToSay) => {//Fat arrow function skeleton
//   console.log(thingToLog);
//   alert(thingToSay);
// }
//
//
//
// function humanYears(age) {
//   parseInt(age)
//   return age * 7
// }
//
// let dogYears = humanYears(prompt(`Calculate dog years to human years.`))
//
// alert(dogYears)



function calcLifetimeSupply(ageNow, amountPerDay) {
  const yearsLeft = 80 - ageNow;
  return (yearsLeft * 365) * amountPerDay;
}

let ageOfUser = parseInt(prompt(`How old are you right now? Please use years`, '32'));
let dailyUsage = parseInt(prompt(`How much do you use per day?`));

if(!isNaN(ageOfUser) && !isNaN(dailyUsage)) {
  calcLifetimeSupply(ageOfUser, dailyUsage);
}


//Ryeker's Notes

console
  .log( //This is where the function is called
      "hello world" //This is the argument/parameter
    );

//In your browser's console, the RETURN of the log function is the string that gets printed;
function greet(type, name, greeting) { //FUNCTION DEFINTION
  return `${type} ${name}, ${greeting}!`;
}

let myGreeting = greet("Goodbye", "Connie", "You're the greatest!"); //CALL SITE, WHERE THE FUNCTION IS CALLED/INVOKED

alert(myGreeting); //This is how you see the result



function sayMyFav() {
  let fav = "Cheese";
  alert(`The answer to the meaning of life is ${best}`); //The variable best is NOT accessible becuase it was defined inside a function that inherits from this scope.
  function eat() {
    const best = 42;
    alert(fav); //the variable fav IS accessible because it was defined in an outer scope.
  }
  eat();
}

() => { //FAT ARROW FUNCITON SKELETON

}

(thingToLog, thingToSay) => { //FAT ARROW FUNCTION that takes two arguments and logs one and alerts the other
  console.log(thingToLog);
  alert(thingToSay);
}

thingToLog => { //OPTIONAL FAT ARROW FORMATTING WHEN FUNCTION ONLY TAKES 1 PARAM (NO PARENS AROUND SINGLE ARGUMENT)
  return thingToLog;
}

(thingToLog) => (thingToLog); //Implicit RETURNED ARROW FUNCTION AKA THE PARENS AROUND A SINGLE VALUE INSIDE A FUNCTION BODY INDICATE THAT THE FUNCTION'S ONLY JOB IS TO RETURN THAT VALUE



//TRY IT OUT #1
function dogsAgeCalulator(age) {
  return age * 7;
}

function askUser() {
  let dogsAge = parseInt(prompt("How old is your dog?", '3'));
  if(!isNaN(dogsAge)) { //if the age they gave us IS a number...
    alert(dogsAgeCalulator(dogsAge))
  } else {
    askUser();
  }
}

askUser();



//TRY IT OUT #2
function calcLifetimeSupply(ageNow, amountPerDay) {
  const yearsLeft = 80 - ageNow;
  return yearsLeft * 365 * amountPerDay;
}

function requestData() {
  let ageOfUser = parseInt(prompt("How old are you right now? Please use years", '32'));
  let dailyUsage = parseInt(prompt("how much do you use per day?"));
  if(!isNaN(ageOfUser) && !isNaN(dailyUsage)) {
    calcLifetimeSupply(ageOfUser, dailyUsage);
  } else {
    requestData();
  }
}

//METHODS VS. FUNCTIONS
var myString = "hello world";

myString.toUpperCase(); // METHOD BECAUSE IT IS "CALLED ON" THE OBJECT myString (WHICH IS CONVERTED INTO A STRING OBJECT AUTOMATICALLY BY JS) AND IT IMPLICITLY CONSUMES/TAKES AS AN ARGUMENT myString. AKA WE DID NOT PASS myString INTO THE toUpperCase() FUNCTION AS PARAMETERS, BUT IT STILL PERFORMS AN OPERATION ON IT ANYWAY.
