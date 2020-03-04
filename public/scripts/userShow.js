const loginForm = document.querySelector('#new-form2');
console.log('hello');
loginForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
    console.log('beep')
    let formIsValid = false;

//   // Select Inputs
  const email2 = document.getElementById('email2');
  const password2 = document.getElementById('password2');

//   // Select Error Messages
  const emailFeedback = document.querySelector('.email-feedback');
  const passwordFeedback = document.querySelector('.password-feedback');

  // Reset Validation Classes & Errors
  email2.classList.remove('is-invalid');
  password2.classList.remove('is-invalid');
  emailFeedback && emailFeedback.remove();
  passwordFeedback && passwordFeedback.remove();

  
  if (!email2.value) {
    formIsValid = false;
    email2.classList.add('is-invalid');
    email2.parentNode.insertAdjacentHTML('beforeend', '<div class="invalid-feedback email-feedback">Email is required</div>');
  } else {
    formIsValid = true;
    email2.classList.add('is-valid');
  }
 
  if (!password2.value) {
    formIsValid = false;
    password2.classList.add('is-invalid');
    password2.parentNode.insertAdjacentHTML('beforeend', '<div class="invalid-feedback password-feedback">Password is required</div>');
  } else {
    formIsValid = true;
    password2.classList.add('is-valid');
  }

  if (formIsValid) {
    console.log('Submit this bad boy');
    const findUser = { email2: email2.value, password2: password2.value };
    console.log(findUser)

    fetch('/api/v1/users/:id', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
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