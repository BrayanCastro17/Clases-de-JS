// Vamos a definir el modo estricto
'use strict';

//#region UpperCase

// El método .toUpperCase() transforma todas las letras de un string a mayúsculas.

// Variables

var strTexto = "hola mundo";
var btnConvertir = document.getElementById("btnConvertirMayusculas"); // Botón en HTML

// Eventos

btnConvertir.onclick = function() {
    var strTextoMayusculas = strTexto.toUpperCase();
    alert(strTextoMayusculas); // Muestra "HOLA MUNDO" en una alerta
};

//#endregion

//#region LowerCase

// El método .toLowerCase() transforma todas las letras de un string a minúsculas.


// Variables

var strTexto = "HOLA MUNDO";
var btnConvertir = document.getElementById("btnConvertirMinusculas"); // Botón en HTML

// Eventos

btnConvertir.onclick = function() {
    var strTextoMinusculas = strTexto.toLowerCase();
    alert(strTextoMinusculas); // Muestra "hola mundo" en una alerta
};

//#endregion

//#region Length

// El método .length obtiene la longitud de un string o un array.

// Variables

var strTexto = "hola mundo";
var arrNumeros = [1, 2, 3, 4, 5];
var btnObtenerLongitud = document.getElementById("btnObtenerLongitud"); // Botón en HTML

// Eventos

btnObtenerLongitud.onclick = function() {
    var longitudTexto = strTexto.length;
    var longitudArray = arrNumeros.length;
    alert("Longitud del texto: " + longitudTexto + "\nLongitud del array: " + longitudArray);
};

//#endregion

//#region Concat

// El método .concat() combina dos o más strings o arrays.

// Variables

var strTexto1 = "hola";
var strTexto2 = " mundo";
var arrNumeros1 = [1, 2];
var arrNumeros2 = [3, 4, 5];
var btnConcatenar = document.getElementById("btnConcatenar"); // Botón en HTML

// Eventos

btnConcatenar.onclick = function() {
    var strTextoConcatenado = strTexto1.concat(strTexto2);
    var arrConcatenado = arrNumeros1.concat(arrNumeros2);
    alert("Texto concatenado: " + strTextoConcatenado + "\nArray concatenado: " + arrConcatenado);
};

//#endregion

//#region IndexOf

// El método .indexOf() devuelve el primer índice en el que se encuentra un valor especificado en un string o array.

// Variables

var strTexto = "hola mundo";
var arrNumeros = [1, 2, 3, 4, 5];
var btnBuscarIndice = document.getElementById("btnBuscarIndice"); // Botón en HTML

// Eventos
btnBuscarIndice.onclick = function() {
    var indiceTexto = strTexto.indexOf("mundo");
    var indiceArray = arrNumeros.indexOf(3);
    alert("Índice en el texto: " + indiceTexto + "\nÍndice en el array: " + indiceArray);
};

//#endregion

//#region LastIndexOf

// El método .lastIndexOf() devuelve el último índice en el que se encuentra un valor especificado en un string o array.

// Variables

var strTexto = "hola mundo hola";
var arrNumeros = [1, 2, 3, 4, 5, 3];
var btnBuscarUltimoIndice = document.getElementById("btnBuscarUltimoIndice"); // Botón en HTML

// Eventos

btnBuscarUltimoIndice.onclick = function() {
    var ultimoIndiceTexto = strTexto.lastIndexOf("hola");
    var ultimoIndiceArray = arrNumeros.lastIndexOf(3);
    alert("Último índice en el texto: " + ultimoIndiceTexto + "\nÚltimo índice en el array: " + ultimoIndiceArray);
};

//#endregion

//#region Search

// El método .search() busca una expresión regular en un string y devuelve el índice de la coincidencia.

// Variables

var strTexto = "hola mundo";
var btnBuscar = document.getElementById("btnBuscar"); // Botón en HTML

// Eventos

btnBuscar.onclick = function() {
    var indiceBusqueda = strTexto.search("mundo");
    alert("Índice de búsqueda en el texto: " + indiceBusqueda);
};

//#endregion

//#region Match

// El método .match() busca una coincidencia en un string y devuelve las coincidencias como un array.

// Variables

var strTexto = "hola mundo";
var btnBuscarCoincidencias = document.getElementById("btnBuscarCoincidencias"); // Botón en HTML

// Eventos

btnBuscarCoincidencias.onclick = function() {
    var coincidencias = strTexto.match(/o/g); // ["o", "o"]
    alert("Coincidencias encontradas: " + coincidencias);
};

//#endregion

//#region Substr

// El método .substr() extrae una sección de un string, comenzando en el índice especificado y extendiéndose por un número dado de caracteres.

// Variables

var strTexto = "hola mundo";
var btnExtraerSeccion = document.getElementById("btnExtraerSeccion"); // Botón en HTML

// Eventos

btnExtraerSeccion.onclick = function() {
    var seccionTexto = strTexto.substr(0, 4); // "hola"
    alert("Sección extraída: " + seccionTexto);
};

//#endregion

//#region CharAt

// El método .charAt() devuelve el carácter en el índice especificado de un string.

// Variables

var strTexto = "hola mundo";
var btnObtenerCaracter = document.getElementById("btnObtenerCaracter"); // Botón en HTML

// Eventos

btnObtenerCaracter.onclick = function() {
    var caracter = strTexto.charAt(4); // " " (espacio)
    alert("Carácter en el índice 4: " + caracter);
};

//#endregion

//#region StartsWith

// El método .startsWith() verifica si un string comienza con los caracteres de un string especificado.

// Variables

var strTexto = "hola mundo";
var btnVerificarInicio = document.getElementById("btnVerificarInicio"); // Botón en HTML

// Eventos

btnVerificarInicio.onclick = function() {
    var comienzaConHola = strTexto.startsWith("hola"); // true
    alert("¿El texto comienza con 'hola'? " + comienzaConHola);
};

//#endregion

//#region Replace

// El método .replace() reemplaza un texto dentro de un string con otro texto.

// Variables

var strTexto = "hola mundo";
var btnReemplazarTexto = document.getElementById("btnReemplazarTexto"); // Botón en HTML

// Eventos

btnReemplazarTexto.onclick = function() {
    var textoReemplazado = strTexto.replace("mundo", "a todos"); // "hola a todos"

    alert("Texto reemplazado: " + textoReemplazado);
};

//#endregion

//#region Slice

// El método .slice() extrae una sección de un string o array y devuelve una nueva string o array.

// Variables

var strTexto = "hola mundo";
var arrNumeros = [1, 2, 3, 4, 5];
var btnExtraerSeccion = document.getElementById("btnExtraerSeccion"); // Botón en HTML

// Eventos

btnExtraerSeccion.onclick = function() {
    var seccionTexto = strTexto.slice(0, 4); // "hola"
    var seccionArray = arrNumeros.slice(1, 3); // [2, 3]
    alert("Sección de texto: " + seccionTexto + "\nSección del array: " + seccionArray);
};

//#endregion

//#region Split

// El método .split() divide un string en un array de strings mediante la separación del string en sub-strings.

// Variables

var strTexto = "hola mundo";
var btnDividirTexto = document.getElementById("btnDividirTexto"); // Botón en HTML

// Eventos

btnDividirTexto.onclick = function() {
    var arrTexto = strTexto.split(" "); // ["hola", "mundo"]
    alert("Array de texto dividido: " + arrTexto);
};

//#endregion

//#region Trim

// El método .trim() elimina los espacios en blanco de ambos extremos de un string.

// Variables

var strTexto = "   hola mundo   ";
var btnEliminarEspacios = document.getElementById("btnEliminarEspacios"); // Botón en HTML

// Eventos

btnEliminarEspacios.onclick = function() {
    var strTextoSinEspacios = strTexto.trim(); // "hola mundo"
    alert("Texto sin espacios: " + strTextoSinEspacios);
};

//#endregion
