
if (!localStorage.getItem('users')) {
  localStorage.setItem('users', JSON.stringify([])); // Empty users list initially
}


function handleLogin(event) {
  event.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  
  let users = JSON.parse(localStorage.getItem('users'));
  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    localStorage.setItem('loggedInUser', JSON.stringify(user));
    window.location.href = 'index.html'; // Redirect to homepage after login
  } else {
    alert('Invalid username or password');
  }
}


function handleSignup(event) {
  event.preventDefault();
  const username = document.getElementById('newUsername').value;
  const password = document.getElementById('newPassword').value;

  let users = JSON.parse(localStorage.getItem('users'));
  users.push({ username, password, balance: 100 });
  localStorage.setItem('users', JSON.stringify(users));
  alert('Signup successful!');
  window.location.href = 'login.html';
}


function updateWalletBalance() {
  const user = JSON.parse(localStorage.getItem('loggedInUser'));
  document.getElementById('wallet-balance').textContent = user.balance;
}


function addFunds() {
  const user = JSON.parse(localStorage.getItem('loggedInUser'));
  user.balance += 50; // Add $50
  localStorage.setItem('loggedInUser', JSON.stringify(user));
  updateWalletBalance();
}


function withdrawFunds() {
  const user = JSON.parse(localStorage.getItem('loggedInUser'));
  if (user.balance >= 50) {
    user.balance -= 50; // Withdraw $50
    localStorage.setItem('loggedInUser', JSON.stringify(user));
    updateWalletBalance();
  } else {
    alert('Not enough balance to withdraw.');
  }
}


function startGame(game) {
  const user = JSON.parse(localStorage.getItem('loggedInUser'));
  if (!user) {
    alert('Please log in first!');
    window.location.href = 'login.html';
    return;
  }

  alert(`Starting ${game} game!`);
}
