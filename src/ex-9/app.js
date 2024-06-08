// Dado que el usuario se encuentra en la pagina para escribir una frase y sepa cuantas veces aparecen las vocales dentro de dicha frase
//Cuando rellena el campo de la frase 
// Valida esas palabras para saber cuantas veces aparecen las vocales haciendo click en el boton "Contar vocales"
// Entonces se renderiza en pantalla cuantas veces aparecen las vocales

// Criterio 1
// escribir la frase 
// al darle al boton "Contar vocales" nos renderiza en pantalla `Las vocales aparecen ${totalVocales} veces en la frase.`
// si no son palabras o espacios lo que el usuario escribio, nos renderiza en pantalla "Los caracteres escritos no son validos, escriba palabras"

// Criterio 2
// escuchar cuando se presiona el boton
// evitar que la pagina se recargue
// tomar los palabras que escribimos 
// verificar si las palabras y espacios son validas
// si no son validas decirle al usuario "Los caracteres escritos no son validos, escriba palabras"
// Usar expresiones regulares para encontrar todas las ocurrencias de cada vocal en la frase, ignorando si son mayúsculas o minúsculas
// sumar las vocales que aparecen en la frase
// si son validas nos renderiza en pantalla `Las vocales aparecen ${totalVocales} veces en la frase.`

document.getElementById('countVowelsForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    let frase = document.getElementById('frase').value;
    let resultadoElement = document.getElementById('resultado');

    if (!/^[a-zA-Z\s]+$/.test(frase)) {
        resultadoElement.textContent = "Los caracteres escritos no son validos, escriba palabras";
    } else {
        let countA = (frase.match(/a/gi) || []).length;
        let countE = (frase.match(/e/gi) || []).length;
        let countI = (frase.match(/i/gi) || []).length;
        let countO = (frase.match(/o/gi) || []).length;
        let countU = (frase.match(/u/gi) || []).length;

        let totalVocales = countA + countE + countI + countO + countU;

        resultadoElement.textContent = `Las vocales aparecen ${totalVocales} veces en la frase.`;
    }
});