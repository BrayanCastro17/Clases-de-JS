/* Mostrar todos los números divisores de un numero introducidos por pantalla. */

// Vamos a definir el modo estricto
'use strict';

// Trabajamos con plantillas de texto

// Variables

var strNombre = prompt('Dígite el nombre', 'nombre');
var strApellido1 = prompt('Dígite el apellido 1', 'primer apellido');
var strApellido2 = prompt('Dígite el apellido 2', 'segundo apellido');

var strNomCompleto = 'Mi nombre es: ' + strNombre + '<br>' + 'mis apellidos' + strApellido1.concat(strApellido2);

document.write(strNomCompleto);

// Uso de plantillas

var strNombre2 = prompt('Dígite el nombre', 'nombre');
var strApellido3 = prompt('Dígite el apellido 1', 'primer apellido');
var strApellido4 = prompt('Dígite el apellido 2', 'segundo apellido');

var strPlantilla = `
                    <h1>Hola que tal</h1>
                    <h3>Mi nombre es: ${strNombre2}</h3>
                    <h3>Mis apellidos son: ${strApellido3}  ${strApellido4}</h3>
                    `;

document.write(strPlantilla);
// Eventos

// Cuerpo del Sistema

// Encuentra y muestra los divisores del número

// Funciones

