// main.js

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get the input values
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Check if the username and password match your criteria
    // For simplicity, I'll just check if the username is "admin" and password is "password"
    if (username === "admin" && password === "password") {
        alert("Login successful!");
        // Redirect to another page or do whatever you want after successful login
        // For GitHub Pages, you might want to redirect to another HTML page hosted on GitHub Pages
    } else {
        alert("Invalid username or password. Please try again.");
    }
});
