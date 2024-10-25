let suma = 0;
let contador = 0;
let numero;

do {
    let input = prompt("Introduce un número (introduce un número negativo para terminar):");

    if (!isNaN(input) && input.trim() !== "") {
        numero = Number(input);

        if (numero >= 0) {
            suma += numero;
            contador++;
        }
    } else {
        console.log("Por favor, introduce un número válido.");
    }
} while (numero >= 0);

if (contador > 0) {
    let media = suma / contador;
    console.log("La suma de los números es: " + suma);
    console.log("La media de los números es: " + media);
} else {
    console.log("No se introdujeron números válidos.");
}