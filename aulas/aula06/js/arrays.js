// arrays são variaveis que aceitam muitos valores
// arrays em js aceitam tudo

var nome = 'nome'

var nomes = ['Fulano', 'Ciclano', 'Beltrano'] // Cria um array já com valores
var idades = [] // Cria um array vazio
var numeros = new Array() // Cria um array vazio (igual ao de cima)
var arrays = [true, 0, 'teste', 0.0, NaN, undefined]


// Adicionar itens no arrays
nomes.push('Ciclano') // adiciona um nome a lista de nomes
numeros.push(1) // adiciona apenas um numero
numeros.push(1, 2, 3) // adiciona muitos numeros

// Acessar posição do array
var nome = nomes[0] // acesso a posição 0 do array e armazeno em uma variavel

nomes.pop() // por padrão remove ultimo elemento do array
nomes.shift() // por padrão remove primeiro elemento do array
nomes.sort() // ordena lista
nomes.reverse() // Inverte a ordem dos itens da lista
nomes.length // tamanho da lista




