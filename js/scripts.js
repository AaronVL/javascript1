// for loops
/*
for (let i = 0; i < 10; i++) {
  console.log(i);
}
*/
/*
for (these conditions) {
do stuff
}
*/
/*
for (let i = 0; i < 10 || i <15; i++) {
  console.log(i);
}
*/

/*
&& is and
|| is or
! is logical not
*/

//Logical not
/*for (let i = 0; i < 10 || i <15) {
  if (!(i%2===0))
  console.log(i);
} */


//Declare a var and set it equal to any string.
//var favoriteBook = "American Gods";

//Declare a second var and call new String() on the same string (this will create an instance of a JS string object.)
//var aBook = new String(favoriteBook);

//Use the logical operators and a third var to determine if they are strictly equal.
//var isTrue = (favoriteBook === aBook);
//console.log(isTrue); // Not true because one is object and one is primitive

//Now use the logical operators and a fourth var to determine if they are loosely equal.
//var isTrue = (favoriteBook == aBook);
//console.log(isTrue) // True because value is equal
//Why did you get the result you got?




//var yourName = prompt('what\'s your name?');


let obj1 = {
  name: "Aaron"
};

let obj2 = {
  name: "Aaron"
};

console.log(obj1 === obj2); //Objects you create can never be strict or loose equal


//Check type of line
//console.log(typeof("three" * 15));
//Check if it is a NaN
//console.log(isNaN("three" * 15));



//let myNumber = prompt("Give me a number!!!");

//alert((parseInt(myNumber) / 2));


//let string = prompt('Tell me your favorite number.');

//string.toString();

//alert(`Your favorite number is ${string}`);

let anyNum = prompt(`Enter a number, any number`);

anyNum = parseInt(anyNum);

anyNum += 42;
anyNum -= 42;
anyNum *= 42;
anyNum /= 42;

alert(anyNum);


const best = 42;

if(best === "42") {
  console.log('hooray!!');
} else if(cheese === 'delicious n stuff') {
  console.log('yes it is!!!');
} else {
  console.log('boooo');
}
