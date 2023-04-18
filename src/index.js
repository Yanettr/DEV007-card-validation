import validator from './validator.js';
console.log(validator);

const cardNumberInput = document.getElementById("cardNumber");
const hashCardNumberSpan = document.getElementById("hashCardNumber");
cardNumberInput.addEventListener('keyup', maskCardNumber);

function maskCardNumber() {
    const cardMask = validator.maskify(cardNumberInput.value);
    hashCardNumberSpan.innerHTML = cardMask;
}

const formCardValidation = document.getElementById("formCardValidation");
formCardValidation.addEventListener('submit', validateCardNumber);

document.getElementById("buttonRestart").addEventListener("click", function(e) {
    e.preventDefault();
    document.getElementById("formCardValidation").reset();
});

function validateCardNumber(event) {
    event.preventDefault();

    const isValidCardNumber = validator.isValid(cardNumberInput.value)

    if (isValidCardNumber) {
        alert("Tarjeta validada correctamente");
    } else {
        alert("Tarjeta invalida, verfique informacion ingresada");
    }
}