const myName = "Aaron";
// console.log(myName, "One");

  {
    // myName = "Lucero";
    // console.log(myName, "two");
  }
// console.log(myName, "three");









/*var myName = "Aaron";
console.log(myName, "one");

 {
    var myName = "Lucero"; //var variables get redefined globally even in blocks. let locked in block
    console.log(myName, "two");
  };
console.log(myName, "three");*/



//var myName = "Aaron"; //declared AND defined
// myName = new Number(myName); changed to object
console.log(myName.toUpperCase());



var test; //declared
test = "My test is that I am awesome"; //defined

console.log(test)

let birthday = '11/21/91';

let rightNow = new Date(birthday);
//alert(rightNow);


//Math object
alert(Math.PI);

let myString = "Hello World";
alert(myString.length);


let myArray = {};

let myObject = {
  studentCount: 0,
  teacherRating: 1000000000
};

//Confirm
const isOfAge = confirm("Are you 21 or older?");

//Prompt
const userStory = prompt('Tell me, do you take walks?')

console.log(userStory)
