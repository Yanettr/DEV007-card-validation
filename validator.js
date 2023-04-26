/* objeto  Validator creado segun readme posee dos métodos: isvalid y maskify */ 
const validator = {

  /*método isValid, validar el número de tarjeta (typeof string)*/ 
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

  // Método maskify
  maskify: (numeroTarjeta) => {
    //enmascarar todos los dígitos a excepción de los cuatro últimos
    if (numeroTarjeta.length >= 5) {
      const cuatroDigitos = numeroTarjeta.slice(-4);
      const arrayNumeroTarjeta = Array.from(numeroTarjeta);
      const numeroParaEnmascarar = arrayNumeroTarjeta.length - 4;
      let acumuladorNumeroEnmascarar = "";
      //for es bucle que repite las instrucciones un determunado número de veces.
      for (let i = 0; i < numeroParaEnmascarar; i++) {
        acumuladorNumeroEnmascarar = acumuladorNumeroEnmascarar + "#";
      }
      return acumuladorNumeroEnmascarar + cuatroDigitos;
    } else {
      return numeroTarjeta;
    }
  },
};

//Aplicando el algoritmo de Luhn
//*Obtener un arreglo con los # de la tarjeta
function invertirTarjeta(numeroTarjeta) { //  from es una funcion de la clase Array

  const arrayTarjeta = Array.from(numeroTarjeta);
  //* Invertir el orden del array
  const arrayInvertido = arrayTarjeta.reverse(); //reverse es una funcion que necesitan una variable/constante tipo array.
  const arrayNumerico = arrayInvertido.map((numeroString) => // map es una funcion que necesita una variable/ constant tipo array.
    Number(numeroString)
  );
  return arrayNumerico;
}

//*Números de posición par se multiplican x2
function multiplicarPosicionesPares(arrayNumerico) {
  for (let indice = 0; indice < arrayNumerico.length; indice++) {
    const indiceReal = indice + 1;
    //la sentencia= nuestra posicion va a mostrar los pares
    //muestra posicion par se multiplica por 2
    if (indiceReal % 2 === 0) {
      arrayNumerico[indice] = arrayNumerico[indice] * 2;
      //*Verificar si la suma es divisible por 10
      if (arrayNumerico[indice] >= 10) {
        arrayNumerico[indice] = sumarDigitos(arrayNumerico[indice]);
      }
    }
  }
  return arrayNumerico;
}
 
//*Obtener suma de los números del array
function sumarDigitos(numero) {
  const numeroString = numero.toString();
  const arrayNumero = Array.from(numeroString);
  let acumulador = 0;
  arrayNumero.forEach((element) => {
    acumulador += Number(element);
  });
  return acumulador;
}

//*Obtener suma total impar y par
function sumarElementosArray(arrayNumerico) {
  let total = 0;
  arrayNumerico.forEach((element) => {
    total = total + element;//total += element;
  });
  return total;
}
export default validator;
