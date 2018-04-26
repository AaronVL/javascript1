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
