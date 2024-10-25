/* Hacer un programa que diga si un numero es par o impar, se deben de validar las entradas. */

// Vamos a definir el modo estricto
'use strict';

// Variables
var suma = 0;
var contador = 0;
var numero;

// Eventos
do {
    var input = prompt("Introduce un número (introduce un número negativo para terminar):");
    numero = parseInt(input, 10);

    // Cuerpo del Sistema
    if (esNumeroValido(input)) {
        if (numero >= 0) {
            suma += numero;
            contador++;
        }
    } else {
        console.log("Por favor, introduce un número válido.");
    }
} while (numero >= 0);

if (contador > 0) {
    var media = suma / contador;
    console.log("La suma de los números es: " + suma);
    console.log("La media de los números es: " + media);
} else {
    console.log("No se introdujeron números válidos.");
}

// Funciones
function esNumeroValido(input) {
    return !isNaN(input) && input.trim() !== "";
}
