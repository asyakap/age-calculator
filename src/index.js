import Calculator from './../src/js/weekday-calculator.js'; 

function handleFormSubmission() {

}

window.addEventListener("load", function () {
  document.querySelector("form#new-date").addEventListener("submit", handleFormSubmission);
});