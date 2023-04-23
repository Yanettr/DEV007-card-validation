/* objeto  Validator creado segun readme con atributo isvalid y maskify */
const validator = {
  isValid: (creditCardNumber) => { /* es una forma de declarar una function que se almacena en el atributo isvalid del objeto validator*/
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
      const numeroParaEnmascarar = arrayNumeroTarjeta.length - 4;
      let acumuladorNumeroEnmascarar = "";
      for (let i = 0; i < numeroParaEnmascarar; i++) {
        acumuladorNumeroEnmascarar = acumuladorNumeroEnmascarar + "#";
      }
      return acumuladorNumeroEnmascarar + cuatroDigitos;
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
// [4,7,7,0,0,2]
//  1 2 3 4 5 6
function multiplicarPosicionesPares(arrayNumerico) {
  for (let indice = 0; indice < arrayNumerico.length; indice++) {
    const indiceReal = indice + 1;
    if (indiceReal % 2 === 0) {
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
    total = total + element;//total += element;
  });
  return total;
}
export default validator;