/* objeto  Validator creado segun readme con atributo isvalid y maskify */
const validator = {
    isValid: (creditCardNumber) => { /* este es una funcion  no seria isvalid: function(creditcardnumber)*/
        let respuesta = false;
        if (creditCardNumber.length >= 11) {
            const arrayNumericoInvertido = invertirTarjeta(creditCardNumber);
            const arrayNumerico = multiplicarPosicionesPares(arrayNumericoInvertido);
            const total = sumarElementosArray(arrayNumerico);
            //residuo debe ser igual 0
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


function invertirTarjeta(numeroTarjeta) { //  from es una funcion de la clase Array
    const arrayTarjeta = Array.from(numeroTarjeta);
    const arrayInvertido = arrayTarjeta.reverse(); //reverse es una funcion que necesitan una variable/constante tipo array.
    const arrayNumerico = arrayInvertido.map((numeroString) => // map es una funcion que necesita una variable/ constant tipo array.
        Number(numeroString)
    );
    return arrayNumerico;
}


function esPar(numero) {
    return numero % 2 === 0;
}


function multiplicarPosicionesPares(arrayNumerico) {
    for (let indice = 0; indice < arrayNumerico.length; indice++) {
        const indiceReal = indice + 1;
        if (esPar(indiceReal)) {
            arrayNumerico[indice] = arrayNumerico[indice] * 2;

            if (arrayNumerico[indice] >= 10) {
                arrayNumerico[indice] = sumarDigitos(arrayNumerico[indice]);
            }
        }
    }
    return arrayNumerico;
}

function sumarDigitos(numero) {
    const numeroString = numero.toString();
    const arrayNumero = Array.from(numeroString);

    let acumulador = 0;
    arrayNumero.forEach((element) => {
        acumulador += Number(element);
    });
    return acumulador;
}

function sumarElementosArray(arrayNumerico) {
    let total = 0;
    arrayNumerico.forEach((element) => {
        total += element;
    });
    return total;
}
export default validator;