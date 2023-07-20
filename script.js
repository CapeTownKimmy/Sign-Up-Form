// ------------- VARIABLES TO BE COLLECTED ------------- //
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const phoneNum = document.getElementById('phone-num');
const newPass = document.getElementById('password');
const confirmPass = document.getElementById('confirm-pass');

const submitBtn = document.getElementById('submit-btn');

const errorMsg = document.getElementById('error-msg');
const sideBar = document.getElementById('sidebar');

// ------------- ON SUBMIT FUNCTION ------------- //
submitBtn.addEventListener('click', validatePassword);

function validatePassword() {
    if (newPass.value !== confirmPass.value) {
        errorMsg.style.visibility = 'visible';
        newPass.classList.add('error');
        confirmPass.classList.add('error');
        redoPass();
        newPass.addEventListener('click', clearError);
    } 
    else {
        displayMsg();
        clearDisplay();
    }
}
function displayMsg() {
    const displayMesg = document.createElement('div');
    displayMesg.innerText = `Hi ${firstName.value}! Thank you for registering. We will send your confirmation email to: ${email.value}. Remember to keep your password secret and keep it safe!`;
    displayMesg.classList.add('popUp');
    sideBar.appendChild(displayMesg);
    setTimeout(() => displayMesg.remove(), 10000);
}
function clearDisplay() {
    firstName.value = '';
    lastName.value = '';
    email.value = '';
    phoneNum.value = '';
    newPass.value = '';
    confirmPass.value = '';
}
function redoPass() {
    newPass.value = '';
    confirmPass.value = '';
}
function clearError() {
    errorMsg.style.visibility = 'hidden';
    newPass.classList.remove('error');
    confirmPass.classList.remove('error');
}


