// funcao sem parametros
function imprimirNome() {
    console.log('Fulano')
}

// funcao com parametros
function imprimirNome2(pessoa) {
    console.log(pessoa.nome)
}


var pessoa = {
    nome: 'fulano'
}

imprimirNome2(pessoa)



