// Stores user data in local storage
const localStorageKey = "CCIS-FTRMS-Users";

const getUsers = () => {
  const usersJson = localStorage.getItem(localStorageKey);
  return usersJson ? JSON.parse(usersJson) : [];
};

const saveUsers = (users) => {
  localStorage.setItem(localStorageKey, JSON.stringify(users));
};

const addUser = (user) => {
  const users = getUsers();
  users.push(user);
  saveUsers(users);
};

const clearUsers = () => {
  localStorage.removeItem(localStorageKey);
};

// Handles form submission
const registerForm = document.getElementById("register-form");

registerForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("yourName").value;
  const email = document.getElementById("yourEmail").value;
  const username = document.getElementById("yourUsername").value;
  const password = document.getElementById("yourPassword").value;

  // Validate form fields
  if (!name || !email || !username || !password) {
    alert("Please fill in all required fields.");
    return;
  }

  // Check for existing username
  const existingUsers = getUsers();
  const existingUser = existingUsers.find((user) => user.username === username);
  if (existingUser) {
    alert("Username already exists. Please choose a different one.");
    return;
  }

  // Create user object and save to storage
  const user = {
    name,
    email,
    username,
    password,
  };
  addUser(user);

  // Clear form and show success message
  registerForm.reset();
  alert("Account created successfully. Please log in to proceed.");

  // Redirect to login page
  window.location.href = "pages-login.html";
});
const registerButton = document.getElementById("register-button");

registerButton.addEventListener("click", event => {
  registerForm.submit();
});


// Additional functionality (optional)
// - Implement login logic to check username and password against stored data
// - Add features like user profile editing and account deletion
// - Use a secure way to store passwords (e.g., hashing)
