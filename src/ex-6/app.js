// Dado que el ususario se encuentra en la pagina con un comparador de numeros para saber cual es mayor
//Cuando rellena el campo del comparador con numeros
// Valida esos numeros a comparar haciendo click en el boton "Comparar numeros"
// Entonces se renderiza en pantalla si el numero uno es mayor: "`El mayor número es ${numero1}`" si el numero dos es mayor: `El mayor número es ${numero2}` si el numero tres es mayor: `El mayor número es ${numero3}` y si son iguales: `Los tres números son iguales`

// Criterio 1
// escribir los tres numeros a comparar 
// al darle al boton "Comparar numeros" los compara y renderiza en pantalla el resultado
// si no son numeros lo que el usuario escribio, nos renderiza en pantalla "Los caracteres escritos no son validos, escriba solo numeros"

// Criterio 2
// escuchar cuando se presiona el boton
// evitar que la pagina se recargue
// tomar los numeros que escribimos 
// verificar si los numeros son validos
// si no son validos decirle al usuario que escriba solo numeros 
// convertir las entradas a numeros
// si son validos compararlos
// y mostrar el resultado del numero mayor
// y si son iguales nos dira que "Los tres números son iguales"

document.getElementById('sumForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let numeroUno = document.getElementById('numeroUno').value;
    let numeroDos = document.getElementById('numeroDos').value;
    let numeroTres = document.getElementById('numeroTres').value;
    let comparacionElement = document.getElementById('comparacion');

    if (isNaN(numeroUno) || isNaN(numeroDos) || isNaN(numeroTres) || numeroUno.trim() === '' || numeroDos.trim() === '' || numeroTres.trim() === '') {
        resultadoElement.textContent = "Los caracteres escritos no son validos, escriba solo numeros";
    } else {
        let numero1 = parseFloat(numeroUno);
        let numero2 = parseFloat(numeroDos);
        let numero3 = parseFloat(numeroTres);

        let mayorNumero = Math.max(numero1, numero2, numero3);

        if (numero1 === numero2 && numero2 === numero3) {
            comparacionElement.textContent = `Los tres números son iguales`;
        } else {
            comparacionElement.textContent = `El mayor número es ${mayorNumero}`;
        }
    }
});