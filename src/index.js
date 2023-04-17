import validator from './validator.js';
console.log(validator);

document.addEventListener("DOMContentLoaded", () => {
    const pantallaResultado = document.getElementById("resultado")
    pantallaResultado.style.display = "none"

    const form = document.getElementById("form");
    form.addEventListener('submit', formularioFinalizado);
});

// creo la funcionalidad del boton de reinicio y por ultimo modifico el formulario con "".reset" para
// limpiar los campos del formulario
document.getElementById("botonReinicio").addEventListener("click", function(e) {
    e.preventDefault();
    const pantallaResultado = document.getElementById("resultado")
    const primeraPantalla = document.getElementById("formulario")
    primeraPantalla.style.display = "block"
    pantallaResultado.style.display = "none"
    document.getElementById("form").reset();
});


function formularioFinalizado(event) {
    event.preventDefault();

    const numeroIngresado = document.getElementById("numeroTcIngresado").value
    const resultadoValidacion = validator.isValid(numeroIngresado)

    const primeraPantalla = document.getElementById("formulario")
    const pantallaResultado = document.getElementById("resultado")
    const numeroEnmascarado = validator.maskify(numeroIngresado)

    //con inner sobre escribo mi etiqueta <p> y traigo mi variable enmascarado
    const numeroTarjeta = document.getElementById("numeroDeTarjeta")
    numeroTarjeta.innerHTML = numeroEnmascarado

    //se trae los datos de mes y anio y se usa innerhtml para sobreescribir en <p>
    const vencimientoDeTarjeta = document.getElementById("fechaDeVencimiento")
    vencimientoDeTarjeta.innerHTML = document.getElementById("mes").value + "/" + document.getElementById("anio").value

    const selectTipoDeTarjeta = document.getElementById("tipodeTarjeta")
    const parrafoTipoDeTarjeta = document.getElementById("resTipoDeTarjeta")
    parrafoTipoDeTarjeta.innerHTML = selectTipoDeTarjeta.value;

    const tipoDeBanco = document.getElementById("bancos")
    const parrafoBanco = document.getElementById("TipoBanco")
    parrafoBanco.innerHTML = tipoDeBanco.value


    //usamos style.display para oculpar y que aparesca las secciones

    primeraPantalla.style.display = "none"
    pantallaResultado.style.display = "block"

    const pResultadoValidacion = document.getElementById("respuesta")
    if (resultadoValidacion) {
        pResultadoValidacion.innerHTML = "Tarjeta validada correctamente"
    } else {

        pResultadoValidacion.innerHTML = "Tarjeta invalida, verfique informacion ingresada"
    }
}