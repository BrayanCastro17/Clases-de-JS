alert("Hola mundo, desde el JS");

// El document.write lo que hace es escribir en el documento, desde el lugar donde le hacen el llamado
document.write("Hola Mundo, escribiendo desde el JS");

// vista por consola
console.log('Hola mundo, desde la consola');
console.log('Esto es concatenar: ' + 12);
console.log(10+19);

// Uso de variables en JS
// VAR y LET, VAR son globales, LET son variables locales
// Todas las variables son un espacio en memoria, son contenedores de información y guardan un solo dato

var hola = 'hola';
var pais = hola;
var paisDos = 'Mundo';

var variable1 = 2024;

console.log(hola, pais, paisDos, variable1);

// Concatenar variables
console.log(hola + ' ' + paisDos);

// Concatenar usando una variables
var concat = hola + ' ' + paisDos;

console.log(concat)

// Asignar un valor y cambiar el valor de la variables
pais = 'Adios';

concat = pais + ' ' + paisDos;
console.log(concat);