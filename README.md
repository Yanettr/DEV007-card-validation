# Proyecto Card-Validation 

# Índice
* 1. Descripción
* 2. Interfaz de usuario (UI)
* 3. Desarrollo del proyecto
***
## 1. Descripción

Creación de un proyecto que tiene como objetivo validar la información de una tarjeta de crédito o débito, a través de del algoritmo de Luhn, que verifica si el número de la tarjeta es válido y si cumple con ciertos requisitos de seguridad(test).

Es una futura página de un market online llevará el nombre “Market Arkuna” 100% en español donde los clientes tendrán que registrarse por única vez la tarjeta que va a utilizar para comprar online en las tiendas y convertirse en nuestros clientes CVP. De esta manera podrán disfrutar de todos los beneficios y promociones de las tiendas para ello deberá realizar esta validación.

## 2. Interfaz de usuario (UI)

La interfaz permitir al usuario:

* Insertar el número que queremos validar.
* Ver el resultado si es válido o no la tarjeta usando Algoritmo Luhn.
* De ser la tarjeta válida esta se mostrará enmascarada y dejándo los 4 últimos números visibles.

La validación de la tarjeta del usuario permitirá un pago exitoso y con ello, el acceso a los servicios y promociones de Market Arkuna.

## 3. Desarrollo del proyecto
  ### Prototipo de baja fidelidad 
Se realiza un esquema general en una hoja de papel, para este proyecto se diseñó un formulario de registro.

<div align="center">
<img src="/src/img-Readme/prototipo.png" width="400" >
</div>

La pantalla muestra los siguientes aspectos:

1. Validez de la tarjeta: si la tarjeta es válida sale un pequeño recuadro de color verde debajo del modelo de tarjeta aparece un recuadro:"¡Gracias por elegirnos! Tarjeta válida". Por otro lado, si se introduce un número inválido o no se ha puesto nada aparece en el recuadro un texto: “Escriba un número de tarjeta válido”

2. Se establece parámetros de llenado de todas las casillas de forma obligatoria (Tipo de tarjeta - Banco de procedencia -  Colocar su nombre - fecha de vencimiento y el CVV:Datos que se solicita al usuario y necesitan ser seleccionados y escritos).

3. Usuario escribe en los inputs y se debe imprimir en la tarjeta modelo.

4. Se crea dos botones de validar la tarjeta y el otro boton resetea o limpia la página.

5. Validar la correcta ejecución los test unitario.

 Archivos 

##### (HTML y CSS)
En el archivo de HTML y CSS se encuentra maquetado de forma exacta el prototipo final realizado en  la herramienta, se utilizó un diseño de baja fidelidad.

##### `src/index.html`

En este archivo va el contenido que se mostrará al usuario (esqueleto HTML).
* `<header>`: encabezado de tu proyecto.
* `<section>`: contenido principal de tu proyecto.
* `<form>`: formulario para agregar la información de la tarjeta de crédito.

##### `src/style.css`

Este archivo contiene las reglas de estilo sin ninguna libreria como menciona el Readme del proyecto.

#### JavaScript 

* La lógica del proyecto esta implementada completamente en Vanilla JavaScript.
* Se encuentran  2 archivos JavaScript separando responsabilidades:

##### `src/validator.js`

En este archivo esta las funciones necesarias para que el usuario pueda verificar la
tarjeta de crédito y ocultar los dígitos de su número de tarjeta.Objeto (`validator`) contiene
dos métodos (`isValid` y `maskify`):

##### `src/index.js`

En este archivo se encuentra todo el código que tenga que ver con la interacción del DOM y eventos.

### Prototipo final del proyecto

  #### Pantalla de página:
  
  <div align="center">
    <img width="539" alt="tab_1" src="/src/img-Readme/diseño-pag1.png">
  </div>


5. Visualización de la página web.
En este <a href="https://yanettr.github.io/DEV007-card-validation/src/">link</a>  podrás interactuar con la página web.


