// Vamos a definir el modo estricto
'use strict';

// Trabajamos con los operadores lógicos

console.log('Estamos usando operadores lógicos');

/* 
    and (Y) &&
    or (O) ||
    not (NO) !
*/

// Operador de negación

var booPermiso = false;

console.log(!booPermiso);

if (!booPermiso) {
    console.log('No tiene permiso');
} else {
    console.log('Tiene permiso');
}

let strNombre = '';

if (!strNombre) {
    console.log('El nombre esta vació');
} else {
    console.log('El nombre es: ' + strNombre);
}