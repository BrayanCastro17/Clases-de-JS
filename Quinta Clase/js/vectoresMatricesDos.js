// Vamos a definir el modo estricto
'use strict';

// Trabajamos con vectores

// Variables

var strVector = ['hola','mundo','web','ina'];
var strArray = ['uno','dos','tres','cuatro'];
var strConvert = '';
var strCadena = '';

// Eventos

// Cuerpo del Sistema
console.log('Convertir vector en una cadena de caracteres');
console.log('El vector: ' + strVector);

strConvert = strVector.join;
console.log('La cadena:' + strConvert);

// Vector de números

for (let strDato in strArray) {
    document.write(strArray[strDato]);
}

document.write('<br><br>');

// Convertir una cadena de caracteres a vector

console.log('--- Convertir una cadena de caracteres a vector ---');
strCadena = 'texto1','texto2','texto3';
strConvert = strCadena.split(',');
console.log(strConvert);

// Funciones
function invertir(strInvertir) {
    
    // Invertir vector
    let strInvertir = strInvertir.reverse();

    for (let strDato in strDato){
        document.write(strInvertir[strDato]);
    }
}

document.write('<br>');