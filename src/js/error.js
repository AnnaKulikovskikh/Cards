export default function error(txt) {
    const number = document.querySelector(".number");
    const error = document.createElement('div');
    error.className = 'form-error';
    error.style.top = `${number.offsetTop + number.offsetHeight}px`;
    number.offsetParent.appendChild(error);
    error.textContent = txt;
    error.style.left = `${(number.offsetLeft + number.offsetWidth - error.offsetWidth) / 2}px`;
}