document.querySelector('.login-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  let users = JSON.parse(localStorage.getItem('users')) || [];

  const adminUsers = ['Dima', 'Sashko'];
  const adminPassword = 'admin123';

  const user = users.find(user => user.username === username && user.password === password);

  if (adminUsers.includes(username) && password === adminPassword) {
    window.location.href = 'admin.html'; 
  } else if (user) {
    window.location.href = 'user-dashboard.html'; 
  } else {
    alert('Неверные учетные данные');
  }
});
