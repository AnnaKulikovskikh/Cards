import Error from './error';
import removeError from './removeError';

export default function defineSystem() {
    event.preventDefault();
    const number = document.querySelector(".number");
    const exActive = document.querySelector(".active");
    if (exActive) exActive.classList.remove("active");
  
    const first = number.value.slice(0,1);
    switch (first) {
      case "":
        removeError();
        return Error('Номер не введен!');
        break;
      case "2" :
        document.querySelector('[data-id ="mir"]').classList.add("active");
        break;
      case "3" :
        document.querySelector('[data-id ="american"]').classList.add("active");
        break;
      case "4" :
        document.querySelector('[data-id ="visa"]').classList.add("active");
        break;  
      case "5" :
        document.querySelector('[data-id ="mastercard"]').classList.add("active");
        break;  
      default:
        removeError();
        Error('Платежная система не определена!');
    }
    if (!document.querySelector(".form-error")) {
      alert('Принято!');
    }
}
  