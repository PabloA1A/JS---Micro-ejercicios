// Dado que el usuario se encuentra en la pagina para escribir una frase y sepa cuantas veces aparecen las vocales dentro de dicha frase
//Cuando rellena el campo de la frase 
// Valida esas palabras para listarnos todas las vocales haciendo click en el boton "Muestra las vocales"
// Entonces se renderiza en pantalla el listado de las vocales

// Criterio 1
// escribir la frase 
// al darle al boton "Muestra las vocales" nos renderiza en pantalla `Vocales encontradas: ${vocalesEncontradas.join(', ')}`
// si no son palabras o espacios lo que el usuario escribio, nos renderiza en pantalla "Los caracteres escritos no son validos, escriba palabras"

// Criterio 2
// escuchar cuando se presiona el boton
// evitar que la pagina se recargue
// tomar los palabras que escribimos 
// verificar si las palabras y espacios son validas
// si no son validas decirle al usuario "Los caracteres escritos no son validos, escriba palabras"
// Usar expresiones regulares para encontrar todas las ocurrencias de cada vocal en la frase, ignorando si son mayúsculas o minúsculas
// mostrar todas las vocales que aparecen en la frase
// si son validas nos renderiza en pantalla `Vocales encontradas: ${vocalesEncontradas.join(', ')}`
// y si no hay vocales en la frase no renderiza en pantalla "No se encontraron vocales en la frase."

document.getElementById('countVowelsForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    let frase = document.getElementById('frase').value;
    let resultadoElement = document.getElementById('resultado');

    if (!/^[a-zA-Z\s]+$/.test(frase)) {
        resultadoElement.textContent = "Los caracteres escritos no son validos, escriba palabras";
    } else {
        let vocalesEncontradas = [];

        for (let i = 0; i < frase.length; i++) {
            let char = frase[i].toLowerCase();
            if ('aeiou'.includes(char)) {
                vocalesEncontradas.push(char);
            }
        }

        if (vocalesEncontradas.length > 0) {
            resultadoElement.textContent = `Vocales encontradas: ${vocalesEncontradas.join(', ')}`;
        } else {
            resultadoElement.textContent = "No se encontraron vocales en la frase.";
        }
    }
});