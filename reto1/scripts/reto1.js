// Busca en el DOM el elemento con el Id 'name-btn'
// Agregamos un listener al botón, que escucha el evento 'click' para ejecutar la función 'pedirNombres'
document.getElementById('name-btn').addEventListener('click', pedirNombres);

// función para pedir los nombres
function pedirNombres() {
    let nombres = []; //arreglo vacío para almacenar los nombres
    for (let i = 0; i < 3; i++) { // Ciclo for que se ejecuta tres veces
        let nombre = prompt(`Ingrese el nombre ${i + 1}:`); // Ingreso de nombres, indica el número del nombre a ingresar

        // if, comprueba si el nombre ya está en el arrreglo, si no está lo agrega y si el nombre ya está en el arreglo muestra una alerta y pide otro nombre. 
        if (!nombres.includes(nombre)) {
            nombres.push(nombre);
        } else {
            alert("El nombre ya ha sido ingresado, por favor ingrese un nombre diferente.");
            i--;
        }
    }

    //Buscamos en el DOm el elemento 'result', donde vamos a mostrar el arreglo separado por comas
     
    document.getElementById('result').innerText = "Nombres ingresados: " + nombres.join(", ");
}
