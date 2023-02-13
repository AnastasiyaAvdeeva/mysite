let loginButton = document.querySelector('.entrance-button');
let loginPopUp = document.querySelector('.entrance-popup');

console.log(loginButton);
console.log(loginPopUp);

loginButton.addEventListener('click', showPopUp);

function showPopUp(evt) {
    console.log(evt);
    evt.preventDefault();

    loginPopUp.classList.toggle('show-popup');
};
