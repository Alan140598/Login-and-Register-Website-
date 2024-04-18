const wrapper = document.querySelector('.wrapper');
const LoginLink = document.querySelector('.login-link');
const RegisterLink = document.querySelector('.register-link');
const LoginButton = document.querySelector('.btn-login');
const CloseIcon = document.querySelector('.close-icon');

RegisterLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
})

LoginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
})

LoginButton.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
})

CloseIcon.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
})