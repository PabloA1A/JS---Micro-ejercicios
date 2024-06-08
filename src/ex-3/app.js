// Dado que el ususario se encuentra en la pagina con el formulario
//Cuando rellena el campo de formulario con su nombre y valida haciendo click en el boton validar
// Entonces se renderiza en pantalla el texto "Hola <nombre usuario>"
// y
// Dado que el inport esta vacio
// Recuperar 
// Entonces se renderiza en pantalla el texto "Debe introducir su nombre"

// Criterio 1
// click de boton = evento 
// recuperar el nombre de usuario
// renderizar en un contenedor html el texto "Hola Pablo"

// Criterio 2
// comprobar si el input esta vacio
// si el input esta vacio renderizar en un contenedor html el texto "Debe introducir su nombre"


const inputUsername = document.getElementById('username');
const btnValidate = document.getElementById('btn-validate');
const messageContainer = document.getElementById('message-container');

btnValidate.addEventListener('click', () => {
    const username = inputUsername.value;
    render(username);
});

function render(username) {
    if (isEmpty(username)) {
        messageContainer.innerHTML =  `
            <span>Debe introducir su nombre</span>`;
        return;
    }
    messageContainer.innerHTML =  `
        <span>Hola ${username}</span>`;
}

function isEmpty(input) {
    return input.trim().length === 0;
}