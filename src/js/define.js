export default function defineSystem() {
    event.preventDefault();
    const number = document.querySelector(".number");
    const exActive = document.querySelector(".active");
    if (exActive) exActive.classList.remove("active");
  
    const first = number.value.slice(0,1);
    switch (first) {
      case "2" :
        document.querySelector('[data-id ="mir"]').classList.add("active");
        //document.querySelector('[data-id ="mir"]').removeAttribute('disabled');
        break;
      case "3" :
        document.querySelector('[data-id ="american"]').classList.add("active");
        //document.querySelector('[data-id ="american"]').removeAttribute('disabled');
        break;
      case "4" :
        document.querySelector('[data-id ="visa"]').classList.add("active");
        //document.querySelector('[data-id ="visa"]').removeAttribute('disabled');
        break;  
      case "5" :
        document.querySelector('[data-id ="mastercard"]').classList.add("active");
        //document.querySelector('[data-id ="mastercard"]').removeAttribute('disabled');
        //return true
        break;  
      default:  
        alert("Платежная система не определена")
        //return false
    }
}
  