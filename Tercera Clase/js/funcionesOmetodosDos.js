// Vamos a definir el modo estricto
'use strict';

// Trabajamos con funciones anónimas
// Las funciones anónimas siempre van a estar ligadas a una variable

// Variables

var strNombrePelicula = '';
var strPelicula = '';
var intValorUno = 0;
var intValorDos = 0;

// Eventos

// Cuerpo del Sistema

strNombrePelicula = function (strNombre) {
    return ('La película es: ' + strNombre);
}

strPelicula = prompt('Dígite el nombre de la película', 'nombre');

// Hacemos al llamado a la función anónima

console.log(strNombrePelicula(strPelicula));

// Cuerpo de la función CALLBACK

do {
    intValorUno = parseInt(prompt('Dígite el primer número', 0));
    intValorDos = parseInt(prompt('Dígite el segundo número', 0));
} while (isNaN(intValorUno) || isNaN(intValorDos));

// Llamamos a la función SUMAR

var funcioUno = function (intSuma) {
    console.log('La suma es: ' + intSuma);
}

var funcioDos = function (intSuma) {
    console.log('La suma por dos: ' + (intSuma * 2));
}

sumar(intValorUno, intValorDos, funcioUno, funcioDos);

// Funciones flecha

var funFleUno = intSuma => {
    console.log('La suma es: ' + intSuma);
}

var funFleDos = intSuma => {
    console.log('La suma por dos: ' + (intSuma * 2));
}

sumar(intValorUno, intValorDos, funFleUno, funFleDos);

// Funciones

// Vamos a trabajar con funciones CALLBACK

function sumar(intNum1, intNum2, FCsumaYresta, FCsumaPorDos) {
    var intSuma = intNum1 + intNum2;
    FCsumaYresta(intSuma);
    FCsumaPorDos(intSuma);

    return intSuma;
}

function sumarse(intNum1, intNum2, FFsumaYresta, FFsumaPorDos) {
    var intSuma = intNum1 + intNum2;
    FFsumaYresta(intSuma);
    FFsumaPorDos(intSuma);

    return intSuma;
}

