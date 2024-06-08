// Dado que el usuario se encuentra en la pagina para escribir dos numero y nos diga los divisores comunes de esos numeros dados
//Cuando rellena el campo de los dos numeros
// Valida esos numeros haciendo click en el boton "Comprobar numeros"
// Entonces se renderiza en pantalla los divisores comunes de esos numeros dados

// Criterio 1
// escribir los dos numeros
// al darle al boton "Comprobar numeros" nos renderiza en pantalla los divisores comunes de esos numeros dados
// si no ses un numero lo que el usuario escribio, nos renderiza en pantalla "Los caracteres escritos no son validos, escriba dos numeros"

// Criterio 2
// escuchar cuando se presiona el boton
// evitar que la pagina se recargue
// tomar los numeros que escribimos 
// verificar si los numeros son validos
// que escriba solo numeros
// si no son validos decirle al usuario "Los caracteres escritos no son validos, escriba dos numeros"
// Convertir la entrada a números enteros
// comprobar los divisores comunes de esos numeros dados
// si es valido nos renderiza en pantalla los divisores comunes de esos numeros dados
// si no es valido nos renderiza en pantalla no tiene divisores comunes los numeros dados

document.getElementById('checkNumbersForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    let numero1 = document.getElementById('numero1').value;
    let numero2 = document.getElementById('numero2').value;
    let resultadoElement = document.getElementById('resultado');

    if (!/^-?\d+$/.test(numero1) || !/^-?\d+$/.test(numero2)) {
        resultadoElement.textContent = "Los caracteres escritos no son válidos, escriba dos números";
    } else {
        numero1 = parseInt(numero1, 10);
        numero2 = parseInt(numero2, 10);

        let divisores1 = [];
        let divisores2 = [];

        for (let i = 1; i <= Math.abs(numero1); i++) {
            if (numero1 % i === 0) {
                divisores1.push(i);
            }
        }

        for (let i = 1; i <= Math.abs(numero2); i++) {
            if (numero2 % i === 0) {
                divisores2.push(i);
            }
        }

        let divisoresComunes = divisores1.filter(valor => divisores2.includes(valor));

        if (divisoresComunes.length > 0) {
            resultadoElement.textContent = `Los divisores comunes de ${numero1} y ${numero2} son: ${divisoresComunes.join(', ')}.`;
        } else {
            resultadoElement.textContent = `Los números ${numero1} y ${numero2} no tienen divisores comunes.`;
        }
    }
});