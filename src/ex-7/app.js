// Dado que el ususario se encuentra en la pagina para escrir una frase y escriba cuantas veces aparece la letra a dentro de dicha frase
//Cuando rellena el campo de la frase 
// Valida esas palabras para saber cuantas veces aparece la letra "a" haciendo click en el boton "Contar letra "a""
// Entonces se renderiza en pantalla cuantas veces aparece la letra "a"

// Criterio 1
// escribir la frase 
// al darle al boton "Contar letra "a"" nos renderiza en pantalla `La letra "a" aparece ${count} veces en la frase.`
// si no son palabras o espacios lo que el usuario escribio, nos renderiza en pantalla "Los caracteres escritos no son validos, escriba palabras"

// Criterio 2
// escuchar cuando se presiona el boton
// evitar que la pagina se recargue
// tomar los palabras que escribimos 
// verificar si las palabras y espacios son validas
// si no son validas decirle al usuario "Los caracteres escritos no son validos, escriba palabras"
// si son validas nos renderiza en pantalla `La letra "a" aparece ${count} veces en la frase.`

document.getElementById('countForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let frase = document.getElementById('frase').value;
    let resultadoElement = document.getElementById('resultado');

    if (!/^[a-zA-Z\s]+$/.test(frase)) {
        resultadoElement.textContent = "Los caracteres escritos no son validos, escriba palabras";
    } else {
        let count = 0;
        for (let i = 0; i < frase.length; i++) {
            if (frase[i].toLowerCase() === 'a') {
                count++;
            }
        }

        resultadoElement.textContent = `La letra "a" aparece ${count} veces en la frase.`;
    }
});