// texto
// renderiza un h1 en navegador 

// dado que me encuentro en la pagina html
// cuando se renderiza
// entonces veo el titulo Hello Javascript

const hello = 'Hello Javascript'
const divApp = document.querySelector('#app')

function renderTitle(title) {
    divApp.innerHTML = /* html */
        `<h1>${title}</h1>`
}

renderTitle(hello)