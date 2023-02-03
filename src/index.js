import Calculator from './../src/js/age-calculator.js';

function handleFormSubmission() {
  event.preventDefault();
  const calculate = new Calculator();
  let age = document.getElementById("inputAge").value;
  let pastBirthday = document.getElementById("inputPastBirthday").value;
  let futureBirthday = document.getElementById("inputFutureBirthday").value;
  document.getElementById("mercuryAge").innerText = calculate.MercuryAge(age);
  document.getElementById("mercuryPastBirthday").innerText = calculate.PassedYearsMercury(age, pastBirthday);
  document.getElementById("mercuryFutureBirthday").innerText = calculate.FutureYearsMercury(age, futureBirthday);
  document.getElementById("venusAge").innerText = calculate.VenusAge(age);
  document.getElementById("venusPastBirthday").innerText = calculate.PassedYearsVenus(age, pastBirthday);
  document.getElementById("venusFutureBirthday").innerText = calculate.FutureYearsVenus(age, futureBirthday);
  document.getElementById("marsAge").innerText = calculate.MarsAge(age);
  document.getElementById("marsPastBirthday").innerText = calculate.PassedYearsMars(age, pastBirthday);
  document.getElementById("marsFutureBirthday").innerText = calculate.FutureYearsMars(age, futureBirthday);
  document.getElementById("jupiterAge").innerText = calculate.JupiterAge(age);
  document.getElementById("jupiterPastBirthday").innerText = calculate.PassedYearsJupiter(age, pastBirthday);
  document.getElementById("jupiterFutureBirthday").innerText = calculate.FutureYearsJupiter(age, futureBirthday);
}

window.addEventListener("load", function () {
  document.querySelector("form#age-calculator").addEventListener("submit", handleFormSubmission);
});