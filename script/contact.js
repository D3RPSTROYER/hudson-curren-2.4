var textarea = document.querySelector('textarea');
var nameField = document.querySelector('.name-field');
var emailField = document.querySelector('.email-field');
var submitButton = document.querySelector('.submit-button');

var message, name, email;

function submit() {
    if (nameField.value && emailField.value && nameField.value) {
        message = textarea.value;
        console.log(message);
        name = nameField.value;
        console.log(name);
        email = emailField.value;
        console.log(email);
    }
    else {
        alert('Sorry, you forgot one or more boxes, please ensure that you\'ve filled out the Name, Email and Message boxes');
    }
}