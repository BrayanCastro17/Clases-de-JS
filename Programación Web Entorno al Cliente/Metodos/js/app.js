'use strict';

// Función para obtener el texto ingresado por el usuario
function getUserInput() {
    return document.getElementById('userInput').value;
}

// Función para mostrar el resultado en la página
function showResult(result) {
    document.getElementById('result').textContent = result;
}

// Función para agregar una entrada al historial
function addToHistory(input, method, result) {
    const historyList = document.getElementById('history');
    const listItem = document.createElement('li');
    listItem.textContent = `Entrada: "${input}" | Método: ${method} | Resultado: ${result}`;
    historyList.prepend(listItem); // Agrega el nuevo elemento al principio de la lista
}

// Función principal para ejecutar el método seleccionado
function executeMethod() {
    var input = getUserInput();
    var method = document.getElementById('methodSelect').value;
    var result = '';

    // Ejecuta el método seleccionado
    switch(method) {
        case 'toUpperCase':
            result = input.toUpperCase();
            break;
        case 'toLowerCase':
            result = input.toLowerCase();
            break;
        case 'length':
            result = 'Longitud: ' + input.length;
            break;
        case 'concat':
            result = input.concat(' - texto adicional');
            break;
        case 'indexOf':
            result = 'Índice de "a": ' + input.indexOf('a');
            break;
        case 'lastIndexOf':
            result = 'Último índice de "a": ' + input.lastIndexOf('a');
            break;
        case 'search':
            result = 'Búsqueda de "a": ' + input.search('a');
            break;
        case 'match':
            var matches = input.match(/a/g);
            result = 'Coincidencias de "a": ' + (matches ? matches.join(', ') : 'Ninguna');
            break;
        case 'substr':
            result = 'Substr(0, 4): ' + input.substr(0, 4);
            break;
        case 'charAt':
            result = 'Carácter en índice 0: ' + input.charAt(0);
            break;
        case 'startsWith':
            result = '¿Comienza con "hola"? ' + input.startsWith('hola');
            break;
        case 'replace':
            result = 'Reemplazar "a" por "X": ' + input.replace('a', 'X');
            break;
        case 'slice':
            result = 'Slice(0, 4): ' + input.slice(0, 4);
            break;
        case 'split':
            result = 'Split por espacios: ' + input.split(' ').join(', ');
            break;
        case 'trim':
            result = 'Trim: "' + input.trim() + '"';
            break;
        default:
            result = 'Por favor, seleccione un método';
    }

    showResult(result);
    addToHistory(input, method, result);
}

// Event listener para el botón de ejecutar método
document.getElementById('executeMethod').addEventListener('click', executeMethod);

// Función para alternar el modo oscuro
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

// Event listener para el botón de modo oscuro
document.getElementById('darkModeToggle').addEventListener('click', toggleDarkMode);