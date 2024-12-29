// JavaScript Code for Handling Form Submission
document.getElementById("upiForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent default form submission
    
    const upiId = document.getElementById("upiId").value.trim(); // Get UPI ID

    if (upiId) {
        // Display confirmation message
        const confirmationMessage = document.getElementById("confirmationMessage");
        confirmationMessage.textContent = `Thank you! Your UPI ID "${upiId}" has been submitted.`;

        // Redirect to the specified link
        const link = `https://koshex.page.link/jsFC`;
        setTimeout(() => {
            window.location.href = link;
        }, 2000); // Redirect after 2 seconds
    } else {
        alert("Please enter a valid UPI ID.");
    }
});