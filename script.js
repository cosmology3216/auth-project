// Register user
function register() {
  const username = document.getElementById('reg-username').value;
  const password = document.getElementById('reg-password').value;
  const confirm = document.getElementById('reg-confirm').value;

  if (!username || !password || password !== confirm) {
    document.getElementById('reg-error').innerText = 'Invalid input';
    return;
  }

  localStorage.setItem('user', username);
  localStorage.setItem('pass', password);
  alert('Registered successfully!');
  window.location.href = 'index.html';
}

// Login
function login() {
  const username = document.getElementById('login-username').value;
  const password = document.getElementById('login-password').value;
  const storedUser = localStorage.getItem('user');
  const storedPass = localStorage.getItem('pass');

  if (username === storedUser && password === storedPass) {
    window.location.href = 'dashboard.html';
  } else {
    document.getElementById('login-error').innerText = 'Invalid credentials';
  }
}

// Change password
function changePassword() {
  const oldPass = document.getElementById('old-pass').value;
  const newPass = document.getElementById('new-pass').value;
  const confirmPass = document.getElementById('confirm-pass').value;
  const storedPass = localStorage.getItem('pass');

  if (oldPass !== storedPass || newPass !== confirmPass) {
    document.getElementById('change-msg').innerText = 'Password mismatch';
    return;
  }

  localStorage.setItem('pass', newPass);
  document.getElementById('change-msg').innerText = 'Password changed!';
}

// Logout
function logout() {
  alert('Logged out successfully!');
  window.location.href = 'index.html';
}