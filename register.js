function validateForm() {
    const username = document.getElementById('new-username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('new-password').value;
    const emoji = document.getElementById('emoji');

    if (username && email && password) {
        showEmoji('😊');
        return true;
    } else {
        showEmoji('😠');
        return false;
    }
}

function showEmoji(emojiText) {
    const emoji = document.getElementById('emoji');
    emoji.innerHTML = emojiText;
    emoji.classList.add('show');
    setTimeout(() => {
        emoji.classList.remove('show');
    }, 1000);
}

function applyStyle(style) {
    const container = document.querySelector('.register-container');
    const inputs = document.querySelectorAll('.register-form input');
    const button = document.querySelector('.register-btn');

    container.className = 'register-container ' + style;
    inputs.forEach(input => input.className = style);
    button.className = 'register-btn ' + style;
}

applyStyle('dark-mode'); 





document.querySelector('.register-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const username = document.getElementById('new-username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('new-password').value;
    const phone = document.getElementById('phone').value;
  
    let users = JSON.parse(localStorage.getItem('users')) || [];
  
    
    if (users.some(user => user.username === username)) {
      alert('Имя пользователя уже существует');
      return;
    }
  
    
    const newUser = {
      username: username,
      email: email,
      password: password,
      phone: phone,
      role: 'user' 
    };
  
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
  
    alert('Регистрация успешна');
    window.location.href = 'login.html';
  });
  