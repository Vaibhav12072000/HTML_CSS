document.addEventListener("DOMContentLoaded", function () {
    const registrationForm = document.getElementById("registrationForm");

    registrationForm.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent the default form submission

        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;

        // For this example, we'll just log the submitted data
        console.log("Submitted Data:");
        console.log("Username: " + username);
        console.log("Email: " + email);
        console.log("Password: " + password);
        console.log("Confirm Password: " + confirmPassword);
    });
});
