document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent actual form submission

    // Clear previous errors
    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("messageError").textContent = "";
    document.getElementById("successMsg").textContent = "";

    // Get form values
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    let valid = true;

    // Validate Name
    if (name === "") {
        document.getElementById("nameError").textContent = "Name is required.";
        valid = false;
    }

    // Validate Email
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i;
    if (email === "") {
        document.getElementById("emailError").textContent = "Email is required.";
        valid = false;
    } else if (!emailPattern.test(email)) {
        document.getElementById("emailError").textContent = "Invalid email format.";
        valid = false;
    }

    // Validate Message
    if (message === "") {
        document.getElementById("messageError").textContent = "Message is required.";
        valid = false;
    }

    // Show success if all inputs are valid
    if (valid) {
        document.getElementById("successMsg").textContent = "Form submitted successfully!";
        document.getElementById("contactForm").reset(); // Reset form
    }
});
