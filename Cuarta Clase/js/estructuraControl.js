// Vamos a definir el modo estricto
'use strict';

// Estructura de control IF

var intEdad = 30;
var IntEdadDos = 12;

// Estructura IF

/* 
Operadores
Igual a ==
Estrictamente igual ===
Mayor que >
Menor que <
Mayor o igual a >=
Menor o igual a <=
Diferente !=
*/

if (intEdad > IntEdadDos) {
    console.log("La edad es la primera persona es mayor");
} else {
    console.log("La edad de la primera persona es menor");
}

let a = 5;
let b = '5';

console.log(typeof a);
console.log(typeof b);

console.log(a == b);
console.log(a === b);

// If DE If

console.log('---------------');
console.log('If dentro de if');

var intEdadTres = 34;
var strNombre = 'Brayan Castro';

if (intEdadTres >= 18) {
    console.log(strNombre + ' es mayor de edad, tiene ' + intEdadTres);

    // Agregamos el if dentro del if

    if (intEdadTres <= 33) {
        console.log('Eres millennial');
    } else {
        console.log('No eres millennial');
    }

} else {
    console.log(strNombre + 'es menor de edad, tiene ' + intEdadTres);
}

// Estructura de if anidado

console.log('----------');
console.log('If anidado');

let intNumero = 10;

if (intNumero >= 0 && (intNumero % 2 === 0)) {
    console.log('El número es positivo y par');
} else if (intNumero > 0) {
    console.log('El número es positivo y impar');
} else if (intNumero === 0) {
    console.log('El número es cero');
} else {
    console.log('El número es negativo');
}