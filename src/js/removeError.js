export default function removeError() {
    if (document.querySelector(".form-error")) {
     document.querySelector(".form-error").remove();
    }
}