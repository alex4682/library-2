document.addEventListener('DOMContentLoaded', function() {
    const userCardContainer = document.querySelector('.user-card-container');
    const addUserBtn = document.getElementById('add-user-btn');
    const confirmAddUserBtn = document.getElementById('confirm-add-user-btn');
    const cancelAddUserBtn = document.getElementById('cancel-add-user-btn');
    const confirmEditUserBtn = document.getElementById('confirm-edit-user-btn');
    const cancelEditUserBtn = document.getElementById('cancel-edit-user-btn');
    const modalAddUser = document.querySelector('.modal-overlay-add-user');
    const modalEditUser = document.querySelector('.modal-overlay-edit-user');
    const newUserNameInput = document.getElementById('new-user-name');
    const newUserAgeInput = document.getElementById('new-user-age');
    const newUserRatingInput = document.getElementById('new-user-rating');
    const editUserNameInput = document.getElementById('edit-user-name');
    const editUserAgeInput = document.getElementById('edit-user-age');
    const editUserRatingInput = document.getElementById('edit-user-rating');

    let users = JSON.parse(localStorage.getItem('users')) || [];
    let editIndex = null;

    function renderUsers() {
        userCardContainer.innerHTML = '';
        users.forEach((user, index) => {
            const userCard = document.createElement('div');
            userCard.classList.add('user-card');
            userCard.innerHTML = `
                <p>Имя: ${user.name}</p>
                <p>Возраст: ${user.age}</p>
                <p>Рейтинг: ${user.rating}</p>
                <button onclick="editUser(${index})">Редактировать</button>
                <button onclick="deleteUser(${index})">Удалить</button>
            `;
            userCardContainer.appendChild(userCard);
        });
    }

    window.editUser = function(index) {
        editIndex = index;
        const user = users[index];
        editUserNameInput.value = user.name;
        editUserAgeInput.value = user.age;
        editUserRatingInput.value = user.rating;
        modalEditUser.style.display = 'block';
    };

    window.deleteUser = function(index) {
        users.splice(index, 1);
        localStorage.setItem('users', JSON.stringify(users));
        renderUsers();
    };

    addUserBtn.onclick = function() {
        modalAddUser.style.display = 'block';
    };

    confirmAddUserBtn.onclick = function() {
        const newUser = {
            name: newUserNameInput.value,
            age: newUserAgeInput.value,
            rating: newUserRatingInput.value
        };
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
        renderUsers();
        modalAddUser.style.display = 'none';
    };

    cancelAddUserBtn.onclick = function() {
        modalAddUser.style.display = 'none';
    };

    confirmEditUserBtn.onclick = function() {
        const user = {
            name: editUserNameInput.value,
            age: editUserAgeInput.value,
            rating: editUserRatingInput.value
        };
        users[editIndex] = user;
        localStorage.setItem('users', JSON.stringify(users));
        renderUsers();
        modalEditUser.style.display = 'none';
    };

    cancelEditUserBtn.onclick = function() {
        modalEditUser.style.display = 'none';
    };

    window.onclick = function(event) {
        if (event.target == modalAddUser) {
            modalAddUser.style.display = 'none';
        }
        if (event.target == modalEditUser) {
            modalEditUser.style.display = 'none';
        }
    };

    renderUsers();
});
