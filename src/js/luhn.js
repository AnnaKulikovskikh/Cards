export default function validLuhn () {
    const number = document.querySelector(".number");
    const value = number.value.replace(/\D/g, '');
    if (value.length < 12) return alert("Номер невалиден");
    // return false
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
    //return (nCheck % 10) == 0;
    if ((nCheck % 10) != 0) return alert("Номер невалиден");
    return alert("Принято")
    //return true
    // выставить псевдо-класс :invalid на поле Input
}