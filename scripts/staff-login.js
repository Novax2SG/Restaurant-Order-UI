document.getElementById('staff-login-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const user = document.getElementById('username').value.trim();
  const pass = document.getElementById('password').value.trim();

  if (user === 'Admin1' && pass === 'Admin1Pass') {
    localStorage.setItem('role', 'admin');
    window.location.href = 'admin-dashboard.html';
  } 
  else if (user === 'Employee1' && pass === 'Employee1Pass') {
    localStorage.setItem('role', 'employee');
    window.location.href = 'employee-dashboard.html';
  } 
  else {
    document.getElementById('login-error').textContent = 'Invalid credentials.';
  }
});
