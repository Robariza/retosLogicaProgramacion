// Función que verifica si un número es primo
function esPrimo(num) {
    // Los números menores o iguales a 1 no son primos
    if (num <= 1) return false;
    // Los números 2 y 3 son primos
    if (num <= 3) return true;

    // Los números divisibles por 2 o por 3 no son primos
    if (num % 2 === 0 || num % 3 === 0) return false;

    // Verifica divisibilidad por otros números de la forma 6k ± 1
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }

    // Si pasa todas las pruebas, el número es primo
    return true;
}

// Función que genera todos los números primos menores que el número dado
function generarPrimos() {
    // Obtiene el valor del input
    const numero = document.getElementById("numero").value;
    // Obtiene el div donde se mostrará el resultado
    const resultadoDiv = document.getElementById("resultado");

    // Verifica si el número es menor que 2
    if (numero < 2) {
        // Muestra un mensaje de error si el número es menor que 2
        resultadoDiv.innerHTML = "Introduce un número mayor que 1.";
        return;
    }

    // Array para almacenar los números primos
    let primos = [];
    // Itera desde 2 hasta el número dado (exclusivo)
    for (let i = 2; i < numero; i++) {
        // Si el número es primo, lo agrega al array
        if (esPrimo(i)) {
            primos.push(i);
        }
    }

    // Muestra el resultado en el div
    resultadoDiv.innerHTML = "Números primos menores que " + numero + ":<br>" + primos.join(", ");
}
