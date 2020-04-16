var textarea = document.querySelector('textarea');
var nameField = document.querySelector('.name-field');
var emailField = document.querySelector('.email-field');
var submitButton = document.querySelector('.submit-button');
var Message = {
    name: '',
    email: '',
    message: ''
}

var message, name, email;

function submit() {
    message = textarea.value;
    name = nameField.value;
    email = emailField.value;
    Message.name = name;
    Message.email = email;
    Message.message = message;
    console.log(Message);
}