// Vamos a definir el modo estricto
'use strict';

// Operadores y tipos de datos

console.log('Trabajando con operadores y datos');

// Operadores matemáticos

var numeroUno = 7;
var numeroDos = 12;

var resultado = numeroUno + numeroDos;

console.log('Resultado de la suma: ' + resultado);

resultado = numeroUno - numeroDos;

console.log('Resultado de la resta: ' + resultado);

resultado = numeroUno * numeroDos;

console.log('Resultado de la multiplicación: ' + resultado);

resultado = numeroUno / numeroDos;

console.log('Resultado de la división: ' + resultado);

// Operador mas complejo es el MOD

resultado = numeroUno % numeroDos;

console.log('Resultado del mod: ' + resultado);

// Division entera DIV

resultado = Math.floor(10 / 3);

console.log('Resultado de la división entera: ' + resultado);

// --------------
// Tipos de datos

console.log('Trabajando con diferentes tipos de datos');

// Tipos de Datos

/*
Enteros
Cadena de caracteres
Como flotante
Booleano
Arreglos
Objetos
*/

var intNumero = 4;
var strCadena = 'Hola soy Brayan " es un estudiante ", estudiante web ';
var floDecimal = 20.3;
var booBooleana = true;

console.log('Datos de tipo: int' + intNumero);
console.log('Datos de tipo: str' + strCadena);
console.log('Datos de tipo: flo' + floDecimal);
console.log('Datos de tipo: boo' + booBooleana);

// Funciones para usar con datos

console.log('Funciones y tipos de datos');

var strNumero = '7';
var intNumero = 12;

var intCambio = parseInt(strNumero);

console.log(strNumero);
console.log(intCambio);

console.log('La suma de los dos números es: ' + intCambio + intNumero);

// Aquí solucionamos la suma
console.log('La suma de los dos números es: ' + (intCambio + intNumero));

// Aquí vamos a usar un método

console.log('La suma de dos números es: ' + ( Number ( strNumero )+ intNumero));

// Aquí vamos a usar la asignación a una variable

resultado = Number(strNumero) + intNumero;

console.log('La suma de los dos números es: '  + resultado);

resultado = parseInt(strNumero) + intNumero;

console.log('La suma de los dos números es: '  + resultado);

// Number parseInt parseFloat -> Pasa de texto a número

// Si queremos saber que tipo de dato tiene un variables usamos TYPEOF

console.log('Tipo de dato de la variable resultado: ' + (typeof resultado));

console.log('Tipo de dato de la variable resultado: ' + (typeof strNumero));

console.log('Tipo de dato de la variable resultado: ' + (typeof booBooleana));

console.log('Tipo de dato de la variable resultado: ' + (typeof floDecimal));