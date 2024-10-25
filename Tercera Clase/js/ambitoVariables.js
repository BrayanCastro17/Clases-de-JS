// Vamos a definir el modo estricto
'use strict';

// Trabajamos con ámbito de las variables

// Variables

var strTexto = 'Hola Mundo, soy una variable global';
var intNumero = 12;

// Eventos

// Cuerpo del Sistema

holaMundo(strTexto);
// console.log(otroHolaMundo);

// Funciones

function holaMundo(strTextoUno) {

    // Variable local

    let otroHolaMundo = 'Variable local de la función';

    console.log(strTextoUno);

    // Como intNumero es una variable global no es necesario enviarla por parámetro

    console.log(intNumero);

    // Impresión de la variable local

    console.log(otroHolaMundo);
}