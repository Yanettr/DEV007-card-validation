/*cree una constante validator, dentro del objeto se define la funcion isValid, para validar un
número de tarjeta con el algoritmo luhn y la funcion maskify con la cual enmascaro los
número de la tarjeta y dejo sin enmascarar los 4 úlitmos digitos*/
const validator = {
    /*is creditCardNumber valid?
    const cardNumber = document.getElementById('cardNumber').value; llamo el valor de cardNumber
    console.log(card);*/
    isValid: (creditCardNumber) => {
        let respuesta = false;
        if (creditCardNumber.length >= 11) {
            let arrayNumerico = invertirTarjeta(creditCardNumber);
            arrayNumerico = multiplicarPares(arrayNumerico);
            const total = sumarElementosArray(arrayNumerico);
            if (total % 10 === 0) {
                respuesta = true;
            }
        }
        return respuesta;
    },



    maskify: (numeroTarjeta) => {
        if (numeroTarjeta.length >= 5) {
            const cuatroDigitos = numeroTarjeta.slice(-4);
            const arrayNumeroTarjeta = Array.from(numeroTarjeta);
            const numeroParaEnmascarado = arrayNumeroTarjeta.length - 4;
            let acumuladorNumeroEnmascarado = "";

            for (let i = 0; i < numeroParaEnmascarado; i++) {
                acumuladorNumeroEnmascarado = acumuladorNumeroEnmascarado + "#";
            }
            return acumuladorNumeroEnmascarado + cuatroDigitos;
        } else {
            return numeroTarjeta;
        }
    },
};

// la funcion convierte el dato string a un arreglo de datos string("Array.from")
// luego con ".reverse" invierto los datos de mi arreglo , con ".map"
// (transforma cada item de mi array a un nuevo array item por item para darle el que deseo)
// con "Numero()"
function invertirTarjeta(numeroTarjeta) {
    const arrayTarjeta = Array.from(numeroTarjeta).reverse();
    const arrayNumerico = arrayTarjeta.map((numeroString) => //xxxxx
        Number(numeroString)
    );
    return arrayNumerico;
}

// ubica los pares
function esPar(numero) {
    return numero % 2 === 0;
}

// la funcion multipica las ubicaciones pares del array
function multiplicarPares(arrayNumerico) {
    for (let indice = 0; indice < arrayNumerico.length; indice++) {
        const indiceReal = indice + 1;
        if (esPar(indiceReal)) {
            arrayNumerico[indice] = arrayNumerico[indice] * 2;

            if (esNumeroDosDigitos(arrayNumerico[indice])) {
                arrayNumerico[indice] = sumarDigitos(arrayNumerico[indice]);
            }
        }
    }
    return arrayNumerico;
}

// reconocemosn si el resultado es mayor a 2 digitos (mayor o = a 10)
function esNumeroDosDigitos(numero) {
    return numero >= 10;
}

// sumar resultados de los resultado de dos digitos
function sumarDigitos(numero) {
    const numeroString = numero.toString();
    const arrayNumero = Array.from(numeroString);

    let acumulador = 0;
    arrayNumero.forEach((element) => {
        acumulador += Number(element);
    });
    return acumulador;
}
// sumas los indices de mis arreglos
function sumarElementosArray(arrayNumerico) {
    let total = 0;
    arrayNumerico.forEach((element) => {
        total += element;
    });
    return total;
}
export default validator;