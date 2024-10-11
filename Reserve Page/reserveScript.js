window.addEventListener('scroll',scrollNav);

function scrollNav(){
    var scrollValue = window.scrollY;
    if(scrollValue < 41) document.getElementById('nav-bar').classList.remove('scrolled-nav');
    else document.getElementById('nav-bar').classList.add('scrolled-nav');
}

const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const checkin = document.getElementById('checkin');
const checkout = document.getElementById('checkout');
const room = document.getElementById('room');

var boolUsername = false;
var boolEmail = false;
var boolCheckin = false;
var boolCheckout = false;
var boolRoom = false;

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
    
    if(boolUsername && boolEmail && boolCheckin && boolCheckout && boolRoom){
        displayAlert();
    }
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

function displayAlert(){
    alert("Thank You for Choosing Us, Please check your Email Inbox for Confirmation and Payment");
}

function isValidEmail(email) {
    const [localPart, domainPart] = email.split('@');
  
    if (email.indexOf('@') === -1 || localPart === '' || domainPart === '') {
      return false;
    }
  
    if (domainPart.indexOf('.') === -1) {
      return false;
    }
  
    const lastDotIndex = domainPart.lastIndexOf('.');
    if (lastDotIndex < domainPart.length - 2) {
      return true;
    }
  
    return false;
}

function isValidDate(checkdate) {
    const [day, month, year] = checkdate.split('/');
  
    if (checkdate.indexOf('/') === -1 || day === '' || month === '' || year === '') {
      return false;
    }
  
    if (day.length !== 2 || day < 1 || day > 30) {
      return false;
    }

    if (month.length !== 2 || month < 1 || month > 12) {
        return false;
    }

    if (year.length !== 4 || year < 2023) {
        return false;
    }
  
    return true;
}

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const checkinValue = checkin.value.trim();
    const checkoutValue = checkout.value.trim();
    const roomValue = room.value.trim();

    if(usernameValue === '') {
        setError(username, 'Username is required');
        boolUsername = false;
    } else {
        setSuccess(username);
        boolUsername = true;
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
        boolEmail = false;
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
        boolEmail = false;
    } else {
        setSuccess(email);
        boolEmail = true;
    }

    if(checkinValue === '') {
        setError(checkin, 'Check-In date is required');
        boolCheckin = false;
    } else if (!isValidDate(checkinValue)) {
        setError(checkin, 'Must be a valid date.');
        boolCheckin = false;
    } else {
        setSuccess(checkin);
        boolCheckin = true;
    }

    if(checkoutValue === '') {
        setError(checkout, 'Check-Out date is required');
        boolCheckout = false;
    } else if (!isValidDate(checkoutValue)) {
        setError(checkout, 'Must be a valid date.');
        boolCheckout = false;
    } else {
        setSuccess(checkout);
        boolCheckout = true;
    }

    if(roomValue === '') {
        setError(room, 'Please confirm your room');
        boolRoom = false;
    } else if (roomValue !== "Danse Pacifique" && roomValue !== "Les Folies" && roomValue !== "Grand Tralala") {
        setError(room, "Room must be either Danse Pacifique, Les Folies, or Grand Tralala");
        boolRoom = false;
    } else {
        setSuccess(room);
        boolRoom = true;
    }

    

};