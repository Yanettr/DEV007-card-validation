import validator from './validator.js';

//Enmascarado, validación y mensajes respecto al número de tarjeta
const cardNumberInput = document.getElementById("cardNumber");
const maskedCardNumberP = document.getElementById("maskedCardNumber");


//Poner máscara al string, obtenido, con maskify method

cardNumberInput.addEventListener('keyup', () => {
  const cardDiv = document.getElementById("card");
  cardDiv.classList.remove('active');

  console.log(cardNumberInput.value);
  console.log(validator.maskify(cardNumberInput.value));
  maskedCardNumberP.innerHTML = validator.maskify(cardNumberInput.value);
});
const usernameInput = document.getElementById("username");
const nameP = document.getElementById("nombre");

usernameInput.addEventListener('keyup', () => {
  console.log(usernameInput.value);
  nameP.innerHTML = usernameInput.value;
});

const cvvInput = document.getElementById("cvv");
const cvvP = document.getElementById("codigoV");

cvvInput.addEventListener('keyup', () => {
  console.log(cvvInput.value);
  cvvP.innerHTML = cvvInput.value;

  const cardDiv = document.getElementById("card");
  cardDiv.classList.add('active');
});

const monthSelect = document.getElementById("month");
const monthSpan = document.getElementById("monthCard");

monthSelect.addEventListener('change', () => {
  monthSpan.innerHTML = monthSelect.value;
});

const yearSelect = document.getElementById("year");
const yearSpan = document.getElementById("yearCard");
yearSelect.addEventListener('change', () => {
  yearSpan.innerHTML = yearSelect.value;
});

const formCard = document.getElementById("formCardValidation");
const messageSpan = document.getElementById("message");

formCard.addEventListener('submit', (event) => {
  event.preventDefault();
  const validCardNumberResult = validator.isValid(cardNumberInput.value);
  console.log(validCardNumberResult);
  if (validCardNumberResult === true) {
    messageSpan.innerHTML = "¡Gracias por elegirnos! Tarjeta válida";
    messageSpan.className = "success";
  }
  else {
    messageSpan.innerHTML = "Ingrese un número de tarjeta válido por favor";
    messageSpan.className = "error";
  }
});

const btnRestart = document.getElementById("buttonRestart");
btnRestart.addEventListener("click", (event) => {
  event.preventDefault();
  formCard.reset();

  const cardDiv = document.getElementById("card");
  cardDiv.classList.remove('active');

  maskedCardNumberP.innerHTML = "#### #### #### ####";
  nameP.innerHTML = "XXXXX XXXXXXX";
  cvvP.innerHTML = "XXX";
  monthSpan.innerHTML = "MM";
  yearSpan.innerHTML = "AA";
  messageSpan.innerHTML = "";
  messageSpan.className = "";
})




