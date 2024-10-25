/* Realizar una calculadora que pida dos números y la operación que desea realizar. Se debe de validar los valores que se introducen */

// Vamos a definir el modo estricto
'use strict';

// Ejercicio de calculadora

// Variables
var intNum1 = 0;
var intNum2 = 0;
var intOperacion = 0;
var floResultado = 0;

// Cuerpo del Software

do {
    intNum1 = parseFloat('Dígite el número uno', 'número uno');
    intNum1 = parseFloat('Dígite el número dos', 'número dos');
} while ((isNaN(intNum1) == true) || (isNaN(intNum2) == true));

do {
    intOperacion = parseInt(prompt('Dígite: \n 1) Suma \n 2) Resta \n 3) Multiplicación \n 4) División', 'Dígite un número'));
} while ((isNaN(intOperacion) == true) || (intOperacion <= 0) || (intOperacion >= 5));

// alert (intOperacion <= 0 && intOperacion >= 5);

document.write('<h1> La Calculadora </h1><br><br>');

switch (intOperacion) {
    case 1:
        floResultado = intNum1 + intNum2;
        document.write('La suma de: ' + intNum1 + '+' + intNum2 + ' ,es: ' + floResultado)
        break;
    case 2:
        floResultado = intNum1 - intNum2;
        document.write('La resta de: ' + intNum1 + '-' + intNum2 + ' ,es: ' + floResultado)
        break;
    case 3:
        floResultado = intNum1 * intNum2;
        document.write('La multiplicación de: ' + intNum1 + '*' + intNum2 + ' ,es: ' + floResultado)
        break;
    case 4:
        if (intNum2 == 0) {
            document.write('La división por 0 no existe');
        } else {
            floResultado = intNum1 / intNum2;
            document.write('La división de: ' + intNum1 + '/' + intNum2 + ' ,es: ' + floResultado)
        }
        break;
    default:
        document.write('Dígito una operación no valida');
        break;
}