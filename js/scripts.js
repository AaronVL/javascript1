/*const myImg = document.querySelector('img');
function changeImage() {

myImg.setAttribute('src','https://goo.gl/images/H7aWgK')
}

myImg.addEventListener('click', (e) => {
  changeImage();
}) */




//FIZZBUZZ
const div = document.querySelector('div');

for(let i = 1; i <= 100; i++) {
  let p = document.createElement('p');
  if(i % 3 === 0 && i % 5 === 0) {
    p.textContent = 'FizzBuzz';
  } else if(i % 3 === 0) {
    p.textContent = 'Fizz';
  } else if(i % 5 === 0) {
    p.textContent = 'Buzz';
  } else {
    p.textContent = i;
  }
  div.appendChild(p);
}
