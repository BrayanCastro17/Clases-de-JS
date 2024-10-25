//#region Enunciado

/* 1) Crea un array de números donde le indicamos
por teclado el tamaño del array, rellenaremos el
array con números aleatorios entre 0 y 9, al final
muestra por pantalla el valor de cada posición y la
suma de todos los valores. Haz un método para
rellenar el array (que tenga como parámetros los
números entre los que tenga que generar), para
mostrar el contenido y la suma del array y un
método privado para generar número aleatorio (lo
puedes usar para otros ejercicios). */

// Premisa Principal

/* Crear un array de números de tamaño definido por el usuario, rellenarlo con números aleatorios entre 0 y 9, mostrar cada posición del array en pantalla y calcular la suma total de los valores. */

// Premisa Secundarias

/* El usuario indica el tamaño del array mediante el teclado.

Implementar un método que rellene el array con números aleatorios, tomando como parámetros los límites (0 y 9).

Implementar un método para mostrar el contenido del array y calcular la suma de los valores.

Crear un método privado específico para generar números aleatorios, reutilizable en otros ejercicios. */

//#endregion

// Vamos a definir el modo estricto
'use strict';

// Variables
var arrayNumeros = [];
var tamanoArray;

// Eventos
// Solicitamos el tamaño del array al usuario y validamos la entrada
tamanoArray = parseInt(prompt('Introduce el tamaño del array:', 10));
if (isNaN(tamanoArray) || tamanoArray <= 0) {
    alert('Por favor, introduce un tamaño de array válido.');
} else {
    // Rellenamos el array con números aleatorios entre 0 y 9
    arrayNumeros = rellenarArray(tamanoArray, 0, 9);
    // Mostramos el contenido del array y la suma de sus valores
    mostrarArrayYSuma(arrayNumeros);
}

// Cuerpo del Sistema
// Función para generar un número aleatorio entre un rango dado
function generarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Función para rellenar el array con números aleatorios
function rellenarArray(tamano, min, max) {
    let array = [];
    for (let i = 0; i < tamano; i++) {
        array.push(generarNumeroAleatorio(min, max));
    }
    return array;
}

// Función para mostrar el contenido del array y la suma de sus valores
function mostrarArrayYSuma(array) {
    let suma = 0;
    console.log('Contenido del array:');
    for (let i = 0; i < array.length; i++) {
        console.log('Posición ' + i + ': ' + array[i]);
        suma += array[i];
    }
    console.log('Suma de todos los valores del array:', suma);
}
