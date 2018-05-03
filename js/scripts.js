console.log(document.forms.login.username.value);


document.forms.login.submit.addEventListener('click', e => {
  e.preventDefault();
  console.log(e.target.value);
});
