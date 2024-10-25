/* Hacer un programa que diga si un numero es par o impar, se deben de validar las entradas. */

// Vamos a definir el modo estricto
'use strict';

// Variables
var input;
var numero;

// Eventos
input = prompt("Introduce un número:");

// Cuerpo del Sistema
if (esNumeroValido(input)) {
    numero = parseInt(input, 10); // Convierte la entrada a un número entero

    // Verifica si el número es par o impar
    if (numero % 2 === 0) {
        console.log(numero + " es un número par.");
    } else {
        console.log(numero + " es un número impar.");
    }
} else {
    // Mensaje de error si la entrada no es válida
    console.log("Por favor, introduce un número válido.");
}

// Funciones
function esNumeroValido(input) {
    return !isNaN(input) && input.trim() !== "";
}
