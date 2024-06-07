
function imprimirNome(nome, cb) {
    console.log(nome)
    cb()
}

function imprimirSobrenome(sobrenome) {
    console.log(sobrenome)
}

// utilizando callback
imprimirNome('teste', imprimirSobrenome)


// utilizando callback com funcao anonima
imprimirNome('fulano', function (sobrenome) {
    console.log(sobrenome)   
})

// utilizando callback com arrow function e funcao anonima
imprimirNome('fulano', (sobrenome) => {
    console.log(sobrenome)
})

