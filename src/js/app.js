// TODO: write code here
import defineSystem from './define';
import validLuhn from './luhn';
import removeError from './removeError';

const validate_btn = document.querySelector(".validate_btn");

validate_btn.addEventListener('click', validLuhn);
validate_btn.addEventListener('click', defineSystem);

document.querySelector(".number").addEventListener('focus', () => {
    removeError();
});
