var textarea = document.querySelector('textarea');
var nameField = document.querySelector('.name-field-');
var emailField = document.querySelector('.email-field-');
var submitButton = document.querySelector('.submit-button');
var Message = {
    name: "",
    email: "",
    message: ""
}

var message, name, email;

submitButton.addEventListener("click", () => {
    console.log("submit");
    submit();
});


function submit() {
    if (allFilledOut()) {
        console.log(textarea.value);
        console.log(nameField.value);
        console.log(emailField.value);
        message = textarea.value;
        name = nameField.value;
        email = emailField.value;
        Message.name = name;
        Message.email = email;
        Message.message = message;
        console.log(Message);
    } else {
        alert(`be sure that you have filled all fields before hitting submit.\nany non-full fields will result in your message not being sent.`);
    }
}

function allFilledOut() {
    if (!textarea.validity.valid) {
        return false;
    }
    if (!nameField.validity.valid) {
        return false;
    }
    if (!emailField.validity.valid) {
        return false;
    } else {
        return true;
    }
}