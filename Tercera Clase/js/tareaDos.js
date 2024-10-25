/* Mostrar todos los números divisores de un numero introducidos por pantalla. */

// Vamos a definir el modo estricto
'use strict';

// Variables
var input;
var numero;

// Eventos
input = prompt("Introduce un número para encontrar sus divisores:");

// Cuerpo del Sistema
if (esNumeroValido(input)) {
    numero = parseInt(input, 10); // Convierte la entrada a un número entero
    console.log("Los divisores de " + numero + " son:");

    // Encuentra y muestra los divisores del número
    for (i = 1; i <= numero; i++) {
        if (numero % i === 0) {
            console.log(i);
        }
    }
} else {
    // Mensaje de error si la entrada no es válida
    console.log("Por favor, introduce un número válido.");
}

// Funciones
function esNumeroValido(input) {
    return !isNaN(input) && input.trim() !== "";
}
