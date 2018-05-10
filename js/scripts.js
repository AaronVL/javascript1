// let myString = new String("hello world")
// console.log(Object.getPrototypeOf(myString));

// const user = [
//   "Ryan", //key/value pair
//   "1234" //property and value
// ];
//
// Array.prototype.sayPurple = 'purple';
//
// console.log(user.sayPurple);

//Constructor Functions
// function User(firstName, lastName, password, signUpDate) { //They should always build an object, that object should always have the name of the function
//   this.fullName = firstName + lastName;
//   this.password = password;
//   this.sighUpDate = new Date(signUpDate);
// }
//
// let firstUser = new User ('Ryeker', 'Herndon', '1234', '5/7/18')
//
// console.log(firstUser)

//console.log(Object.getPrototypeOf(user));



function Todo(tasks, dueDate, priority) {
  this.task = tasks;
  this.dueDate = dueDate;
  this.priority = priority;
}

let createTask = new Todo()

let tasks = prompt('new task')

let dueDate = prompt('date due')

let priority = prompt('priority')

console.log(createTask)
