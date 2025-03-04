import Romano from "./Romano";

const first = document.querySelector("#Numero");
const form = document.querySelector("#form-romano");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);

  div.innerHTML = "<p>" + Romano(firstNumber) + "</p>";
});
