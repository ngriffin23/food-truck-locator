const form = document.querySelector('#new-form');
console.log(form);
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
    console.log('beep')
    let formIsValid = false;

//   // Select Inputs
  const firstName = document.getElementById('first');
  const lastName = document.getElementById('last');
  const email = document.getElementById('email');
  const password = document.getElementById('password');

//   // Select Error Messages
  const firstNameFeedback = document.querySelector('.firstName-feedback');
  const lastNameFeedback = document.querySelector('.lastName-feedback');
  const emailFeedback = document.querySelector('.email-feedback');
  const passwordFeedback = document.querySelector('.password-feedback');

  // Reset Validation Classes & Errors
  firstName.classList.remove('is-invalid');
  lastName.classList.remove('is-invalid');
  email.classList.remove('is-invalid');
  password.classList.remove('is-invalid');
  firstNameFeedback && firstNameFeedback.remove();
  lastNameFeedback && lastNameFeedback.remove();
  emailFeedback && emailFeedback.remove();
  passwordFeedback && passwordFeedback.remove();

  if (!firstName.value) {
    formIsValid = false;
    firstName.classList.add('is-invalid');
    firstName.parentNode.insertAdjacentHTML('beforeend', '<div class="invalid-feedback firstName-feedback">First name is required</div>');
  } else {
    formIsValid = true;
    firstName.classList.add('is-valid');
  }
  
  if (!lastName.value) {
    formIsValid = false;
    lastName.classList.add('is-invalid');
    lastName.parentNode.insertAdjacentHTML('beforeend', '<div class="invalid-feedback lastName-feedback">Last name is required</div>');
  } else {
    formIsValid = true;
    lastName.classList.add('is-valid');
  }
  
  if (!email.value) {
    formIsValid = false;
    email.classList.add('is-invalid');
    email.parentNode.insertAdjacentHTML('beforeend', '<div class="invalid-feedback email-feedback">Email is required</div>');
  } else {
    formIsValid = true;
    email.classList.add('is-valid');
  }
 
  if (!password.value) {
    formIsValid = false;
    password.classList.add('is-invalid');
    password.parentNode.insertAdjacentHTML('beforeend', '<div class="invalid-feedback password-feedback">Password is required</div>');
  } else {
    formIsValid = true;
    password.classList.add('is-valid');
  }

  if (formIsValid) {
    console.log('Submit this bad boy');
    const newUser = {firstName: firstName.value, lastName: lastName.value, email: email.value, password: password.value};
    console.log(newUser)

    fetch('/api/v1/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUser),
    })
      .then((stream) => stream.json())
      .then((res) => {
        console.log(res);
        if (res) {
          window.location = '/dashboard';
        }
      })
      .catch((err) => console.log(err));
  }
  
};