// script.js

document.getElementById('applicationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent traditional form submission

    // Collect form data
    const name = document.getElementById('name').value.trim();
    const age = document.getElementById('age').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const email = document.getElementById('email').value.trim();

    // Basic validation
    if (!name || !age || !phone) {
        alert("Please fill in all required fields.");
        return;
    }

    // Prepare data to send
    const data = {
        name: name,
        age: age,
        phone: phone,
        email: email
    };

    // Google Apps Script Web App URL
    const scriptURL = 'https://script.google.com/macros/s/AKfycbyXQ9iZmclnkULSv6sOu9DO5qqQoyPhNzzhm9t2dmkkAmg4AATJhe0cnw_Z7h-EhW4Owg/exec';
    // Send data using Fetch API
    fetch(scriptURL, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(response => {
        if (response.result === 'success') {
            // Show success message
            document.getElementById('applicationForm').classList.add('hidden');
            document.getElementById('successMessage').classList.remove('hidden');
        } else {
            // Handle errors
            alert("There was an error submitting the form. Please try again.");
            console.error("Error:", response.error);
        }
    })
    .catch(error => {
        alert("There was an error submitting the form. Please try again.");
        console.error("Error:", error);
    });
});
