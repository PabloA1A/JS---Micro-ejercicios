// Dado que el usuario se encuentra en la pagina para escribir una frase y sepa cuantas veces aparecen cada una de las vocales dentro de dicha frase
//Cuando rellena el campo de la frase 
// Valida esas palabras para saber cuantas veces aparecen cada una de las vocales haciendo click en el boton "Contar vocales"
// Entonces se renderiza en pantalla cuantas veces aparecen cada una de las vocales

// Criterio 1
// escribir la frase 
// al darle al boton "Contar vocales" nos renderiza en pantalla cada una de las vocales las veces que aparecen 
// si no son palabras o espacios lo que el usuario escribio, nos renderiza en pantalla "Los caracteres escritos no son validos, escriba palabras"

// Criterio 2
// escuchar cuando se presiona el boton
// evitar que la pagina se recargue
// tomar los palabras que escribimos 
// verificar si las palabras y espacios son validas
// si no son validas decirle al usuario "Los caracteres escritos no son validos, escriba palabras"
// usar expresiones regulares para encontrar todas las ocurrencias de cada vocal en la frase, ignorando si son mayúsculas o minúsculas
// inicializar un objeto para contar las vocales
// contar cuántas veces aparecen las vocales
// si son validas nos renderiza en pantalla las veces que aparece cada una de las vocales

document.getElementById('countVowelsForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    let frase = document.getElementById('frase').value;
    let resultadoElement = document.getElementById('resultado');

    if (!/^[a-zA-Z\s]+$/.test(frase)) {
        resultadoElement.textContent = "Los caracteres escritos no son validos, escriba palabras";
    } else {
        let vocales = { 'a': 0, 'e': 0, 'i': 0, 'o': 0, 'u': 0 };

        for (let i = 0; i < frase.length; i++) {
            let char = frase[i].toLowerCase();
            if (vocales.hasOwnProperty(char)) {
                vocales[char]++;
            }
        }

        resultadoElement.textContent = 
            `A: ${vocales['a']} veces\n` +
            `E: ${vocales['e']} veces\n` +
            `I: ${vocales['i']} veces\n` +
            `O: ${vocales['o']} veces\n` +
            `U: ${vocales['u']} veces\n`;
    }
});