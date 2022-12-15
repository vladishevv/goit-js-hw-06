const loginFormEl = document.querySelector('.login-form');

const emailEl = document.querySelector('[name="email"]');

const passwordEl = document.querySelector('[name="password"]');

loginFormEl.addEventListener('submit', event => {
  event.preventDefault();

  if (!emailEl.value || !passwordEl.value) {
    return alert('Усі поля мають бути заповненими!');
  }

  const {
    elements: { email, password },
  } = event.currentTarget;

  console.log({
    [email.name]: email.value,
    [password.name]: password.value,
  });

  event.currentTarget.reset();
});