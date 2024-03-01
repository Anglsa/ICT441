// Function to validate the form inputs
function Validate() {
    // Get the values of the input fields and trim whitespace
    const name = document.getElementById("name").value.trim(); // Retrieve the value of the name input field
    const Number = document.getElementById("phone").value.trim(); // Retrieve the value of the phone input field
    const EMail = document.getElementById("Email").value.trim(); // Retrieve the value of the email input field
    const Subject = document.getElementById("Subject").value.trim(); // Retrieve the value of the subject input field

    // Check if any of the required fields are empty
    if (!name || !EMail || !Number | !Subject) { // If any of the fields are empty
        alert("Please fill in all fields."); // Alert the user to fill in all fields
        return; // Exit the function
    }

    // Check if the phone number is numeric
    if (isNaN(Number)) { // If the phone number is not numeric
        alert("Phone number must be numeric!"); // Alert the user that the phone number must be numeric
        return; // Exit the function
    }

    // Check if the school ID is numeric (assuming EMail variable represents school ID)
    if (isNaN(EMail)) { // If the school ID is not numeric
        alert("School ID must be numeric!"); // Alert the user that the school ID must be numeric
        return; // Exit the function
    }

    // Check if the name contains only letters
    if (!/^[a-zA-Z]+$/.test(name)) { // If the name contains non-alphabetic characters
        alert("Name must contain only letters!"); // Alert the user that the name must contain only letters
        return; // Exit the function
    }

    // Check if the message length exceeds 100 words
    if (Subject.split(" ").length > 100) { // If the number of words in the message exceeds 100
        alert("Message must be a maximum of 100 words!"); // Alert the user that the message must be within 100 words
        return; // Exit the function
    }

    // If all validations pass, display success message
    alert("Validation succeeded!"); // Alert the user that validation succeeded
}
