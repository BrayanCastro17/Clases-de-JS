// Vamos a definir el modo estricto
'use strict';

var miVariable = 1;

function getVariable(){
    let miVariable = 5;
    alert(miVariable);
}

getVariable();

// Vamos a usar VAR y LET

var variableUno = 5;
let variableDos = 20;

console.log('Esta es una variable VAR: '+ variableUno);
console.log('Esta es una variable LET: '+ variableDos);

// Pruebas con VAR

var numero = 40;

console.log('Valor número: ' + numero);

if (true) {
    var numero = 50;
    console.log('Valor número: ' + numero);
}

console.log('Valor número: ' + numero);

// Pruebas con LET

var texto = 'Este es un texto VAR';

console.log('Valor del texto: ' + texto);

if (true) {
    let texto = 'Este es un texto LET';
    console.log('Valor del texto: ' + texto);
}

console.log('Valor del texto: ' + texto);

// Variables constantes

console.log('Usando constantes');

var numero = 3;
const PI = 3.1416;

console.log('Número: ' + numero + ' constante: ' + PI);

numero = 5;

// PI = 8.1416;

console.log('Número: ' + numero + ' constante: ' + PI);