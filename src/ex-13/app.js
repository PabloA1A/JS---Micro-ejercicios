// Dado que el usuario se encuentra en la pagina para escribir un numero y nos diga los divisores de ese numero dado
//Cuando rellena el campo del numero
// Valida ese numero haciendo click en el boton "Comprobar numero"
// Entonces se renderiza en pantalla los divisores del numero dado

// Criterio 1
// escribir el numero
// al darle al boton "Comprobar numero" nos renderiza en pantalla los divisores del numero dado
// si no ses un numero lo que el usuario escribio, nos renderiza en pantalla "Los caracteres escritos no son validos, escriba un numero"

// Criterio 2
// escuchar cuando se presiona el boton
// evitar que la pagina se recargue
// tomar el numero que escribimos 
// verificar si el numero es valido
// si no es valido decirle al usuario "Los caracteres escritos no son validos, escriba un numero"
// Convertir la entrada a un número entero
// comprobar los divisores del numero dado
// si es valido nos renderiza en pantalla los divisores del numero dado
// si no es valido nos renderiza en pantalla no tiene divisores el numero dado

document.getElementById('checkNumberForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let numero = document.getElementById('numero').value;
    let resultadoElement = document.getElementById('resultado');

    if (!/^-?\d+$/.test(numero)) {
        resultadoElement.textContent = "Los caracteres escritos no son validos, escriba un número";
    } else {
        numero = parseInt(numero, 10);

        let divisores = [];

        for (let i = 1; i <= Math.abs(numero); i++) {
            if (numero % i === 0) {
                divisores.push(i);
            }
        }

        if (divisores.length > 0) {
            resultadoElement.textContent = `Los divisores del número ${numero} son: ${divisores.join(', ')}.`;
        } else {
            resultadoElement.textContent = `El número ${numero} no tiene divisores.`;
        }
    }
});