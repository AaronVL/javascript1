/*let blueDivs = document.getElementsByClassName('blue'); //Returns an array of HTML Elements with the class blue
let h1 = document.getElementsByTagName('h1'); // Returns an array of HTML Elements that are of the tag name h1
let para = document.getElementById('para'); // Returns the FIRST instance of an element that has the id para
let queryBlues = document.querySelectorAll('#para');
console.log(queryBlues); */

function queryDom(element, method) {
  switch(method.toLowerCase()) {
    case 'getelementsbytagname':
      method = getElementsByTagName;
      break;
  }
  let elementToQuery = document.method(element);
  console.log(elementToQuery);
}

/*let el = prompt("Give me an element");
let method = prompt("Give me a method");
queryDom(); */







/*const button = document.querySelector('.btn-danger');

function logTarget(e) {
  console.log(e.target);
}

button.addEventListener('click', (e) => {

  } //Callback function because JS is being "called back" to this point in the code when the user clicks on the button
) */

const button = document.querySelector('.btn-danger');

button.addEventListener('click', () => {
  alert("Hey, you clicked the button!")
})

const div = document.querySelector('.blue');

div.addEventListener('mouseenter',() => {
  divHover.style.backgroundColor = 'red';
})

const h1 = document.querySelector('.h1');

h1.addEventListener('mouseup', () => {
  h1.className = 'yellow';

})
