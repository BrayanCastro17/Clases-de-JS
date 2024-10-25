/* Mostrar todos los números divisores de un numero introducidos por pantalla. */

// Vamos a definir el modo estricto
'use strict';

// Trabajamos con vectores y matrices

// Variables

var strNombre = 'Brayan';

// Vector de STR

var strNombres = ['Juan', 'Pepe', 'Maria', 'Ana'];

// Vector de diferentes datos

var strDatos = ['Juan', 12, true, 10.5];

// Definimos un vector de objetos

var objLenguajes = new Array('PHP', 'C++', 'JS');

// Eventos

// Cuerpo del Sistema

console.log(strNombre);
console.log(strNombres);

console.log('Vector de nombres: ', strNombres);
console.log('Vector de datos: ', strDatos);
console.log('Vector de objeto: ', objLenguajes);

// Ver im ca,´p deñ vector

console.log('Esto es lo que esta en la POSICIÓN #');
console.log(strNombres[0]);

console.log('Esto es lo que esta en el ultimo indice ');

// Length nos permite tener el TAMAÑO del vector

var intUltPosicion = (strNombres.length) - 1;
console.log(strNombres[intUltPosicion]);

// Vamos a evitar que se solicite un valor mayor al tamaño del vector

var intElemento = parseInt(prompt('Dígite el número de elemento que quiere ver', 0));

if (intElemento >= strNombres.length) {
    alert('Dígite un número menor a ' + strNombres.length);
} else {
    if (intElemento < 0) {
        alert('Dígite un número mayor a 0');
    } else {
        alert('El elemento solicitado es: ' + strNombres[intElemento]);
    }
}

// Mostrar todo los elementos de un vector

console.log('--- Mostrar los elementos del vector ---');
document.write('<h1>Lenguajes de Programación </h1>');
document.write('<ul>');


for (var i = 0; i < objLenguajes.length; i++) {
    document.write('<li>' + objLenguajes[i] + '</li>');
}

document.write('</ul>');

// for in

console.log('--- Trabajamos con FOR IN ---');

for (let indice in objLenguajes) {

    // Indice

    console.log('Este es el indice: ' + indice);

    // Dato

    console.log('Este es el dato: ' + objLenguajes[indice]);
}

objLenguajes.forEach(strElemeto => {
    console.log('Este es el elemento: ' + strElemeto);
});

document.write('<h1> Método For Each </h1>');
document.write('<ul>');

objLenguajes.forEach((strElemeto, intIndice, strVector) => {
    document.write('<li>' + strElemeto + '</li>');
    document.write('<ul><li>' + 'Este es el indice ' + intIndice + '</li></ul>');

    console.log(strVector);

});

// Funciones