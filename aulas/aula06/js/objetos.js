// Objetos lierais em JS

// Explicar chave e valor


var pessoa = {
    nome: 'Fulano',
    idade: 18,
    endereco: 'Rua XPTO'
}

pessoa['sobrenome'] = 'Ciclano' // adiciona uma propriedade ao objeto pessoa


console.log(pessoa) // IMPRIME o objeto pessoa
console.log(pessoa.nome) // imprime apenas o nome do objeto pessoa

delete pessoa.sobrenome // apaga uma propriedade do objeto pessoa

console.log(pessoa)
