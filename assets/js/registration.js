document.addEventListener('DOMContentLoaded', function () {
  // Select the form element
  var registerForm = document.querySelector('form');

  // Add a submit event listener to the form
  registerForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get form data
    var formData = {
      name: document.getElementById('yourName').value,
      email: document.getElementById('yourEmail').value,
      username: document.getElementById('yourUsername').value,
      password: document.getElementById('yourPassword').value,
    };

    // Store data in local storage
    localStorage.setItem('userData', JSON.stringify(formData));

    // You can perform additional actions here, such as sending the data to a server

    // Optionally, redirect to another page
    // window.location.href = 'success.html';
  });
});
