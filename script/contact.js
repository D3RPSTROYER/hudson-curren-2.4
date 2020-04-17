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
    if (allFilledOut()) {
        message = textarea.value;
        name = nameField.value;
        email = emailField.value;
        Message.name = name;
        Message.email = email;
        Message.message = message;
        console.log(Message);
    } else {
        alert(
            ```
            be sure that you have filled all fields before hitting submit.
            any non-full fields will result in your message not being sent.
            ```);
    }
}

function allFilledOut() {
    if (textarea.value == "") {
        return false;
    }
    if (nameField.value == "") {
        return false;
    }
    if (emailField.value == "") {
        return false;
    }
    return true;
}