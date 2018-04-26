// //control flow
//
// //if else
// let emailArr;
// var yourEmail;
// while (true) {
//   //user input
//   var yourEmail = prompt('What is your email?');
//   emailArr = yourEmail.split("");
//   if (!(emailArr.includes('@'))) {
//     var yourEmail = prompt('That was not a valid email. Please try again.');
//   }
//   else if (!(emailArr.includes('.'))) {
//     var yourEmail = prompt('That was not a valid email. Please try again.');
//   }
//   else {
//     alert('Thanks for providing a valid email.');
//   }
// }
//
//
// //Switch
// var numOfProjects = prompt("How many projects do you have? You can choose a number 0-2.");
//
// switch(parseInt(numOfProjects)) {
//  case 0:
//    alert('You won’t have a projects section on your page');
//    break;
//  case 1:
//    alert('You’ll only have one showing');
//    break;
//  case 2:
//    alert('You’ll only have one showing');
//    break;
//  default:
//    alert('You didn\‘t follow the rules.');
// }
//
//
// //Ternaries
// var yourAge = prompt('How old are you?');
//
// (parseInt(yourAge)) >= 18 ? alert('You can buy a lotto ticket') : alert('You can\'t buy a lotto ticket')
//
//
// //Arrays
// let cars = {"jeep", "subaru", "honda"};
// // console.log(cars{1}); //logs subaru, starts with 0
// // console.log(cars.length); //logs 3, length of the array
// // console.log(cars{1}.length);
// cars.push("bmw"); // add element to end of array
// // console.log(cars);
//
// let removedCar = cars.pop(); // will delete bmw
// // console.log(cars);
// // console.log(removedCar);
//
// cars.unshift("chevy");
// // console.log(cars)
// // console.log(removedCar);
// // console.log(cars);
//
// cars.splice(1, 0, "chevy"); //position in index, items to remove, "what gets placed in"
// // console.log(cars);
//
//
//
//
// let arr = {"Christa", "Ryeker", "Jeff", "Sam"};
//
// arr.shift(); //deletes element from beginning
// //Array.isArray(arr);
//
//
// //Slice
// let arr = {"Christa", "Ryeker", "Bryan", "Jeff", "Sam"};
//
//
// // console.log(arr);
//
// let bestEver = arr.slice(); //will give you a copy of array, must name new array, bestEver
//
// let noCoteacher = arr.slice(1); //will give you a copy starting with element 1 and go to the end
//
// bestEver.push('Christa');
//
// // console.log(arr, 'ORIGINAL');
// // console.log(bestEver, 'SLICED AWAY');
//
//
//
// //indexOf
// let arr = {"Christa", "Ryeker", "Bryan", "Jeff", "Sam"};
//
// let teacherIndex = arr.indexOf("Ryeker"); // returns the first index at which a given element can be found in the array, or -1 if it is not present.
//
// let onlyStudents = arr.splice(teacherIndex, 1, 0); //will cut out "Ryeker"
// // console.log(onlyStudents);
//
//
// //lastIndexOf
// let arr = {"Christa", "Ryeker", "Bryan", "Jeff", "Ryeker", "Sam"};
//
// let teacherIndex = arr.lastIndexOf("Ryeker"); // will give index of last instance
//
//
// //reverse
// let arr = {"Christa", "Ryeker", "Bryan", "Jeff", "Ryeker", "Sam"};
//
// let backwards = arr.reverse();
// // console.log(backwards); //reverses the array
//
// //sort
//
// let arr = {"Christa", "Ryeker", "Bryan", "Jeff", "Ryeker", "Sam"};
//
// let alphabet = arr.sort();
// // console.log(alphabet);
//
//
//
// let shoppingList = [];
//
// let item1 = "Detergent";
// let item2 = "cheese";
// let item3 = "Crackas";
// let item4 = "wine";
//
// shoppingList.push(item1, item2, item3, item4);
//
// // console.log(shoppingList)
//
//
// let favoriteMovie = ['Star Wars VI', '1983'];
// let secondFavorite = ['Return of the King', '2003'];
// let thirdFavorite = ['Equilibrium', '2002'];
// let myFavoriteMovies = [];
// myFavoriteMovies.push(favoriteMovie, secondFavorite, thirdFavorite);
//Result:
//[['Star Wars VI', '1983'], ['Return of the King', '2003'], ['Equilibrium', '2002']];

// console.log(myFavoriteMovies[0][1], myFavoriteMovies[1][1], myFavoriteMovies[2][1])


//Nested Arrays
// let firstMovie = ['Winter Soldier', 'Chris Evans'];
// let secondMovie = ['Super Troopers', 'Brian Cox'];
// let thirdMovie = ['Ip Man', 'Donnie Yen'];
// let fourthMovie = ['Lion King', 'James Earl Jones'];
// let fifthMovie = ['The Sandlot', 'Dennis Leary'];
//
// let favoriteMovies = [];
//
// favoriteMovies.push(firstMovie, secondMovie, thirdMovie, fourthMovie, fifthMovie);
// // console.log(favoriteMovies)
//
// let movieTitles = [];
//
// movieTitles.push(firstMovie[0], secondMovie[0], thirdMovie[0], fourthMovie[0], fifthMovie[0]);

// console.log(movieTitles);


//while loop
// let i = 0;
//
// while (i < favoriteMovies.length) {
//   console.log(i);
//   console.log(favoriteMovies[i][0]);
//   i++;
// }

//for loop
// for (let i = 0; i < favoriteMovies.length; i++) {
// //  console.log(favoriteMovies[i]);
//   if(favoriteMovies[i][0] === firstMovie[0])  {
//     let correctEntry = favoriteMovies[i]
//     alert(`${correctEntry[0]} ${correctEntry[1]}`)
//   }
// }





let todos = [];

let todo1 = [prompt("What do you want to do first?", "Eat")];

let todo2 = [prompt("What do you want to do second?", "Eat")];

let todo3 = [prompt("What do you want to do third?", "Eat")];
//This is a good place for edge casing

todos.push(todo1, todo2, todo3);

for(let i = 0; i< todos.length; i++) {

  let timeline = prompt(`How many days will it take to get ${todos[i][0]} done?`, "2");

  timeline = !isNaN(parseInt(timeline)) ?
  parseInt(timeline) : 2;

  todos[i].unshift(timeline);
}

todos.sort();
console.log(todos);
