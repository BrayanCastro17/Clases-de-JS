// Vamos a definir el modo estricto
'use strict';

// Trabajamos con funciones o métodos

// Variables

var strResultado = '';
var intValorUno = 0;
var intValorDos = 0;
var strValorUno = '';
var strValorDos = '';
var strValorTres = '';
var strValorCuatro = '';
var strValorCinco = '';
var strValorSeis = '';
var strVector = [];

// Cuerpo del programa

console.log(calculadora(), calculadora(), calculadora());

// Este es un llamado a una función

calculadoraDos();

// Guardar los valores enviados en una variable

strResultado = calculadoraTres();
console.log('Los resultado del return es: ' + strResultado);

// Función con envió de parámetros

for (var i = 0; i <= 4; i++) {

    do {
        intValorUno = parseInt(prompt('Dígite el primer número', 0));
        intValorDos = parseInt(prompt('Dígite el segundo número', 0));
    } while (isNaN(intValorUno) || isNaN(intValorDos));

    // Llama a la función

    strResultado = calculadoraCuatro(intValorUno, intValorDos);
    console.log('Calculadora cuatro: ' + strResultado);

}

// Parámetros opcionales

do {
    intValorUno = parseInt(prompt('Dígite el primer número', 0));
    intValorDos = parseInt(prompt('Dígite el segundo número', 0));
} while (isNaN(intValorUno) || isNaN(intValorDos));

calculadoraCinco(intValorUno, intValorDos);

// Esta es con 3 parámetros opcionales

calculadoraCinco(intValorUno, intValorDos, true);

// Esta es con los parámetros opcionales

calculadoraCinco(intValorUno, intValorDos, true, true);

// Parámetros REST y SPREAD

strValorUno = prompt('Dígite el nombre de la fruta', 'nombre');
strValorDos = prompt('Dígite el nombre de la fruta', 'nombre');
strValorTres = prompt('Dígite el nombre de la fruta', 'nombre');
strValorCuatro = prompt('Dígite el nombre de la fruta', 'nombre');
strValorCinco = prompt('Dígite el nombre de la fruta', 'nombre');
strValorSeis = prompt('Dígite el nombre de la fruta', 'nombre');

listaFrutas(strValorUno, strValorDos, strValorTres, strValorCuatro, strValorCinco, strValorSeis);

console.log('------ Creamos un vector ------');
strVector = [strValorUno, strValorDos];

listaFrutas(strVector, strValorTres, strValorCuatro, strValorCinco, strValorSeis);

console.log('------ Usamos la función Spread ------');

listaFrutas(...strVector, strValorTres, strValorCuatro, strValorCinco, strValorSeis);


// REST -> Envía datos individuales y la función los transforma o los almacena como un vector

// SPREAD -> Envía datos en forma de un vector y la función los transforma o almacena como un dato individual 

// Funciones

function calculadora() {
    // El return se usa para devolver un valor
    return ('Hola soy la función calculadora uno');
}

function calculadoraDos() {
    console.log('Hola soy la calculadora dos');
}

function calculadoraTres() {
    // El return se usa para devolver un valor
    return ('Hola soy la función calculadora tres');
}

function calculadoraCuatro(intNum1, intNum2,) {
    console.log('Suma: ' + (intNum1 + intNum2));
    console.log('Resta: ' + (intNum1 - intNum2));
    console.log('Multiplicación: ' + (intNum1 * intNum2));
    console.log('División: ' + (intNum1 / intNum2));

    return ('Se ejecuto la operación');
}

function calculadoraCinco(intNum1, intNum2, mostrar = false, cuatro = false) {

    if (mostrar == false) {
        porConsola(intNum1, intNum2)
    } else {
        porPantalla(intNum1, intNum2)
    }

}

function porConsola(intNum1, intNum2) {
    console.log('------ Calculadora Cinco ------ <br>');
    console.log('Suma: ' + (intNum1 + intNum2) + '<br>');
    console.log('Resta: ' + (intNum1 - intNum2) + '<br>');
    console.log('Multiplicación: ' + (intNum1 * intNum2) + '<br>');
    console.log('División: ' + (intNum1 / intNum2) + '<br>');
}

function porPantalla(intNum1, intNum2) {
    document.write('Suma: ' + (intNum1 + intNum2));
    document.write('Resta: ' + (intNum1 - intNum2));
    document.write('Multiplicación: ' + (intNum1 * intNum2));
    document.write('División: ' + (intNum1 / intNum2));
}

function listaFrutas(strFruta1, strFruta2, ...strFrutas) {
    console.log('La fruta es:' + strFruta1);
    console.log('La fruta es:' + strFruta2);
    for (i = 0; i < (strFrutas.length - 1); i++) {
        console.log('La fruta es: ' + strFrutas[i]);
    }
    console.log('La fruta es:' + strFrutas);
}