//TIMER
// setTimeout( //Set timeout method
//   () => { //arg #1, a callback fn
//     alert("Wacky Dan's Super Sale!");
//   },
// 5000) //time in ms you want to wait
//
// setInterval( //Set interval method
//   () => { //arg #1, a callback fn
//     alert("Wacky Dan's Super Sale!");
//   },
// 5000) //time in ms you want to wait

//Done myself
// let timer = prompt('Create a timer')
//
// let quoteTimer =
//
//
//
// let repeatMessage = setInterval(messagePrompt,)

//LET'S TRY IT

// const quotes = ["hey you're great", "Best teacher ever? Why thank you...", "Geekwise is fun", "one more message"]
//
// let i = 0
//
// let timer;
//
// let interval;
//
// function promptUser() {
//   return parseInt(prompt('How long you wanna wait for stuff in ms?','1000'));
// }
//
// let userTimeout = promptUser();
// !isNaN(userTimeout) ?
// createTimeout(userTimeout) : promptUser();
//
// function createTimeout(time) {
//   timer = setTimeout(() => {
//     alert(quotes[i]);
//   }, time);
// }
//
//
// let userInterval = parseInt(prompt("how often do you want to hear from me? (in ms please)", "5000"));
//
// !isNaN(userInterval) ?
// createInterval(userInterval) : promptUser();
//
// function createInterval(time) {
//   interval = setInterval(() => {
//     alert(quotes[i]);
//     i < 3 ? i++ : i = 0;
//   }, time);
// }
//
//
//
// const cancelTimeout = document.querySelector('.timeoutbtn');
//
// const cancelInterval = document.querySelector('.intervalbtn');
//
// cancelTimeout.addEventListener('click', () => {
//   console.log('TIMER>>>', timer);
//   clearTimeout(timer);
// })
//
// cancelInterval.addEventListener('click', () => {
//   clearInterval(interval);
// })



let user = {
  email: "avlucero1121@gmail.com",
  firstName: "Aaron",
  cart: [],
  lastLogin: Date.now()
};

sessionStorage.setItem('currentUser', JSON.stringify(user));

user = JSON.parse(sessionStorage.getItem('currentUser'))

let firstName = user.firstName;

alert(`Hi ${firstName}, glad you're back!`);

function logout() {
  sessionStorage.removeItem('currentUser')
}
