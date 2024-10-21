// Vamos a definir el modo estricto
'use strict';

// Trabajamos con los operadores lógicos

//console.log('Estamos usando operadores lógicos');

/* 
    and (Y) &&
    or (O) ||
    not (NO) !
*/

// Operador de negación

var booPermiso = false;

//console.log(!booPermiso);

if (!booPermiso) {
    //console.log('No tiene permiso');
} else {
    //console.log('Tiene permiso');
}

let strNombre = '';

if (!strNombre) {
    //console.log('El nombre esta vació');
} else {
    //console.log('El nombre es: ' + strNombre);
}

//console.log('-----------');
//console.log('Uso del AND');

var intAno = 2024;

if (intAno >= 2000 && intAno <= 2025) {
    //console.log('Estamos en la era actual');
} else {
    //console.log('Estamos en la era post moderna');
}

if (intAno >= 2000 && intAno <= 2025 && intAno != 2023) {
    //console.log('Estamos en la era actual');
} else {
    //console.log('Estamos en la era post moderna');
}

if (intAno >= 2000 || intAno <= 2025 || intAno != 2022) {
    //console.log('Estamos en la era actual');
} else {
    //console.log('Estamos en la era post moderna');
}

// Combinación de operadores AND y OR
if ((intAno >= 2000 && intAno <= 2025) || (booPermiso && strNombre)) {
    //console.log('Condición cumplida');
} else {
    //console.log('Condición no cumplida');
}

//console.log('--------------');
//console.log('Uso del Switch');

var strImprimir = '';

do {
    var intDia = parseInt(prompt('Dígite un dia de la semana:'));
    if (!isNaN(intDia)) {
        //console.log('El número ingresado es: ' + intDia);
    } else {
        alert('Ingrese un valor numérico');
    }
} while ((!isNaN(intDia) && intDia > 0 && intDia < 8) == false);

switch (intDia) {
    case 1:
        strImprimir = 'lunes';
        //console.log('Entre al lunes');
        break;
    case 2:
        strImprimir = 'martes';
        //console.log('Entre al martes');
        break;
    case 3:
        strImprimir = 'miercoles';
        //console.log('Entre al miércoles');
        break;
    case 4:
        strImprimir = 'jueves';
        //console.log('Entre al jueves');
        break;
    case 5:
        strImprimir = 'viernes';
        //console.log('Entre al viernes');
        break;
    case 6:
        strImprimir = 'sabado';
        //console.log('Entre al sábado');
        break;
    case 7:
        strImprimir = 'domingo';
        //console.log('Entre al domingo');
        break;
    default:
        strImprimir = 'No es un dia de la semana';
        //console.log('Entre en el por defecto');
        break;
}

//console.log('Estoy en el dia de la semana: ' + strImprimir);

//console.log('---------------');
//console.log('Condicional FOR');

var intContador = parseInt(prompt('Dígite un numero'));

for (var i = 0; i <= intContador; i++) {
    //console.log('Número' + i);
    // debugger;
}

//console.log('-----------------');
//console.log('Condicional WHILE');

// Vamos a incrementar los meses

var intMeses = 1;

while (intMeses < 13) {
    //console.log('Mes: ' + intMeses);

    // Incrementamos el valor
    intMeses++;
}

while (intMeses < 13) {
    //console.log('Mes: ' + intMeses);

    // Decremento el valor
    intMeses--;
}

//console.log('-----------------');
//console.log('Condicional BREAK');

intAno = 2018;

while (intAno >= 2010) {
    //console.log('Año ' + intAno);

    if (intAno == 2015) {
        break;
    }

    intAno--;
}

// Informar el usuario tengo
// ALERT()
//console.log()
// DOCUMENT.WRITE

// Para solicitar datos tengo
// PROMPT()
// CONFIRM()

// Ejercicio #1

/* Hacer un programa que pida dos
números y nos diga cual es el
mayor y cual es el menor, o si son
iguales. Se debe de validar que se
introduzcan solo números */

let num1 = prompt("Introduce el primer número:");
let num2 = prompt("Introduce el segundo número:");

num1 = Number(num1);
num2 = Number(num2);

if (!isNaN(num1) && !isNaN(num2)) {
    if (num1 > num2) {
        console.log(num1 + " es mayor que " + num2);
    } else if (num1 < num2) {
        console.log(num1 + " es menor que " + num2);
    } else {
        console.log("Ambos números son iguales");
    }
} else {
    console.log("Por favor, introduce solo números.");
}