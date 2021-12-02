import Error from './error';
import removeError from './removeError';

export default function validLuhn () {
    const number = document.querySelector(".number");
    const value = number.value.replace(/\D/g, '');
    if (value.length < 9) {
        removeError();
        return Error('Слишком короткий номер!');
    } 
    let nCheck = 0;
    let bEven = false;

    for (let i = value.length - 1; i >= 0; i--) {
        var nDigit = parseInt(value.charAt(i), 10);

        if (bEven && (nDigit *= 2) > 9) {
            nDigit -= 9;
        }
        nCheck += nDigit;
        bEven = !bEven;
    }

    if ((nCheck % 10) != 0) {
        removeError();
        return Error("Номер невалиден!");
    }
}