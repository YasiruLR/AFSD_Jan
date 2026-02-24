// Basic client-side validation and demo auth
const form = document.getElementById('loginForm');
const email = document.getElementById('email');
const password = document.getElementById('password');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const msg = document.getElementById('msg');
const togglePwd = document.getElementById('togglePwd');

togglePwd.addEventListener('click', () => {
  const type = password.type === 'password' ? 'text' : 'password';
  password.type = type;
  togglePwd.textContent = type === 'password' ? 'Show' : 'Hide';
});

function validate() {
  let ok = true;
  emailError.textContent = '';
  passwordError.textContent = '';
  msg.textContent = '';

  if (!email.value || !/.+@.+\..+/.test(email.value)) {
    emailError.textContent = 'Please enter a valid email.';
    ok = false;
  }

  if (!password.value || password.value.length < 6) {
    passwordError.textContent = 'Password must be at least 6 characters.';
    ok = false;
  }
  return ok;
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!validate()) return;

  // Demo authentication (replace with real server call)
  const demoEmail = 'user@example.com';
  const demoPwd = 'password123';

  if (email.value === demoEmail && password.value === demoPwd) {
    msg.style.color = 'green';
    msg.textContent = 'Login successful — redirecting...';
    setTimeout(() => { window.location.href = '#'; }, 900);
  } else {
    msg.style.color = '#ef4444';
    msg.textContent = 'Invalid credentials. Try demo: user@example.com / password123';
  }
});
