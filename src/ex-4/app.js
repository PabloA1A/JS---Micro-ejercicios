// Dado que el ususario se encuentra en la pagina con una suma visible
//Cuando rellena el campo de la suma con numeros
// Valida esos numeros a sumar haciendo click en el boton "Calcular suma"
// Entonces se renderiza en pantalla “La suma de <numero-uno> con <numero-dos> es <resultado>”

// Criterio 1
// escribir los dos numeros a sumar 
// al darle al boton "Calcular suma" sumarlos y renderiza en pantalla “La suma de <numero-uno> con <numero-dos> es <resultado>”
// si no son numeros lo que el usuario escribio, nos renderiza en pantalla "Los caracteres escritos no son validos, escriba solo numeros"

// Criterio 2
// escuchar cuando se presiona el boton
// evitar que la pagina se recargue
// tomar los numeros que escribimos 
// verificar si los numeros son validos
// si no son validos decirle al usuario que escriba solo numeros 
// si son validos sumarlos
// y mostrar el resultado

document.getElementById('sumForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let numeroUno = document.getElementById('numeroUno').value;
    let numeroDos = document.getElementById('numeroDos').value;
    let resultadoElement = document.getElementById('resultado');

    if (isNaN(numeroUno) || isNaN(numeroDos) || numeroUno.trim() === '' || numeroDos.trim() === '') {
        resultadoElement.textContent = "Los caracteres escritos no son validos, escriba solo numeros";
    } else {
        let suma = parseFloat(numeroUno) + parseFloat(numeroDos);
        resultadoElement.textContent = `La suma de ${numeroUno} con ${numeroDos} es ${suma}`;
    }
});