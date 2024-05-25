var conteudo = document.getElementById('conteudo')

var nomes = []

var nome1 = prompt('Digite o primeiro nome')
var nome2 = prompt('Digite o segundo nome')
var nome3 = prompt('Digite o terceiro nome')

nomes.push(nome1, nome2, nome3)

conteudo.innerText = `Todos os nomes digitados ${nomes[0]} - ${nomes[1]} - ${nomes[2]}`
