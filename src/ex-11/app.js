// Dado que el usuario se encuentra en la pagina para escribir un numero y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)
//Cuando rellena el campo del numero
// Valida ese numero haciendo click en el boton "Comprobar numero"
// Entonces se renderiza en pantalla si es divisible por 2, 3, 5 o 7

// Criterio 1
// escribir el numero
// al darle al boton "Comprobar numero" nos renderiza en pantalla si es divisible por 2, 3, 5 o 7
// si no ses un numero lo que el usuario escribio, nos renderiza en pantalla "Los caracteres escritos no son validos, escriba un numero"

// Criterio 2
// escuchar cuando se presiona el boton
// evitar que la pagina se recargue
// tomar el numero que escribimos 
// verificar si el numero es valido
// si no es valido decirle al usuario "Los caracteres escritos no son validos, escriba un numero"
// Convertir la entrada a un número entero
// comprobar el numero si es divisible por 2, 3, 5 o 7
// si es valido nos renderiza en pantalla si es o no divisible por uno de esos numeros

document.getElementById('checkNumberForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let numero = document.getElementById('numero').value;
    let resultadoElement = document.getElementById('resultado');

    if (!/^-?\d+$/.test(numero)) {
        resultadoElement.textContent = "Los caracteres escritos no son validos, escriba un número";
    } else {
        numero = parseInt(numero, 10);

        if (numero % 2 === 0) {
            resultadoElement.textContent = `El número ${numero} es divisible por 2.`;
        } else if (numero % 3 === 0) {
            resultadoElement.textContent = `El número ${numero} es divisible por 3.`;
        } else if (numero % 5 === 0) {
            resultadoElement.textContent = `El número ${numero} es divisible por 5.`;
        } else if (numero % 7 === 0) {
            resultadoElement.textContent = `El número ${numero} es divisible por 7.`;
        } else {
            resultadoElement.textContent = `El número ${numero} no es divisible por 2, 3, 5 o 7.`;
        }
    }
});