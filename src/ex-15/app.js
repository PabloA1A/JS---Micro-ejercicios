// Dado que el usuario se encuentra en la pagina para escribir un numero dado es primo (no es divisible por ninguno otro numero que no sea el mismo o la unidad)
//Cuando rellena el campo de los del numero
// Valida ese numero haciendo click en el boton "Comprobar numero"
// Entonces se renderiza en pantalla el numero dado si es primo (no es divisible por ninguno otro numero que no sea el mismo o la unidad)

// Criterio 1
// escribir el numero
// al darle al boton "Comprobar numero" nos renderiza en pantalla si el numero dado es primo (no es divisible por ninguno otro numero que no sea el mismo o la unidad)
// si no es un numero lo que el usuario escribio, nos renderiza en pantalla "Los caracteres escritos no son validos, escriba un numero"

// Criterio 2
// escuchar cuando se presiona el boton
// evitar que la pagina se recargue
// tomar el numero que escribimos 
// verificar si el numero es valido
// que escriba solo numeros
// si no es valido decirle al usuario "Los caracteres escritos no son validos, escriba un numero"
// Convertir la entrada a número entero
// si es valido nos renderiza en pantalla si el un numero dado es primo
// si no es valido nos renderiza en pantalla el numero dado no es primo 

document.getElementById('checkNumberForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    let numero = document.getElementById('numero').value;
    let resultadoElement = document.getElementById('resultado');

    if (!/^-?\d+$/.test(numero)) {
        resultadoElement.textContent = "Los caracteres escritos no son válidos, escriba un número";
    } else {
        numero = parseInt(numero, 10);

        if (esPrimo(numero)) {
            resultadoElement.textContent = `El número ${numero} es primo.`;
        } else {
            resultadoElement.textContent = `El número ${numero} no es primo.`;
        }
    }
});

function esPrimo(num) {
    if (num < 2) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}