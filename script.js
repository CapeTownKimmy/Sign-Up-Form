// ------------- VARIABLES TO BE COLLECTED ------------- //
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const phoneNum = document.getElementById('phone-num');
const newPass = document.getElementById('password');
const confirmPass = document.getElementById('confirm-pass');

const submitBtn = document.getElementById('submit-btn');

// ------------- ON SUBMIT FUNCTION ------------- //
submitBtn.addEventListener('click', validatePassword);

function validatePassword() {
    const errorMsg = document.getElementById('error-msg');
    if (newPass.value !== confirmPass.value) {
        errorMsg.style.visibility = 'visible';
        newPass.classList.add('error');
        confirmPass.classList.add('error');
    } else {
        displayMsg();
    }
}

function displayMsg() {
    console.log(`Thank you ${firstName.value} ${lastName.value} for registering, your confirmation email will be sent to ${email.value}. Remember to keep your password secret and keep it safe!`);
}

