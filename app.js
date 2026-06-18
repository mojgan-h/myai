const STORAGE_KEY = 'user-age-calculator-users';

const form = document.getElementById('user-form');
const userList = document.getElementById('user-list');
const emptyState = document.getElementById('empty-state');
const clearBtn = document.getElementById('clear-btn');

function calculateAge(dateOfBirth) {
  const birthDate = new Date(dateOfBirth);
  const today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDifference = today.getMonth() - birthDate.getMonth();

  if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
    age -= 1;
  }

  return age;
}

function readUsers() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  } catch {
    return [];
  }
}

function saveUsers(users) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
}

function renderUsers() {
  const users = readUsers();

  if (!users.length) {
    emptyState.hidden = false;
    userList.innerHTML = '';
    return;
  }

  emptyState.hidden = true;
  userList.innerHTML = users
    .map((user) => {
      const age = calculateAge(user.dob);
      return `
        <li class="user-item">
          <strong>${user.name}</strong>
          <div class="user-meta">${user.email}</div>
          <div class="user-meta">Born: ${new Date(user.dob).toLocaleDateString()}</div>
          <span class="age-pill">Age: ${age} years</span>
        </li>
      `;
    })
    .join('');
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const users = readUsers();
  const newUser = {
    name: document.getElementById('name').value.trim(),
    dob: document.getElementById('dob').value,
    email: document.getElementById('email').value.trim(),
  };

  if (!newUser.name || !newUser.dob || !newUser.email) return;

  users.unshift(newUser);
  saveUsers(users);
  form.reset();
  renderUsers();
});

clearBtn.addEventListener('click', () => {
  saveUsers([]);
  renderUsers();
});

renderUsers();
