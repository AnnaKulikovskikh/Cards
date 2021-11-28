export default function validLong() {
    event.preventDefault();
    const number = document.querySelector(".number");
    const value = number.value.replace(/\D/g, '');
    if (value.length > 16) return alert ("Слишком длинный номер");
    if (value.length < 16) return alert ("Слишком короткий номер"); //return false
    //return true
}  