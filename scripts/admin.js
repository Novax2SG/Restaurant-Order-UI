document.getElementById('admin-login-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const user = document.getElementById('Admin1').value.trim();
  const pass = document.getElementById('Admin1Pass').value.trim();

  if (user === 'admin' && pass === 'pizzapass') {
    // Store login state
    localStorage.setItem('isAdmin', 'true');
    window.location.href = 'admin-dashboard.html';
  } else {
    document.getElementById('login-error').textContent = 'Invalid credentials.';
  }
});
