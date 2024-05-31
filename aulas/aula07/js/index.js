const produtos = [
    {
        nome: "Produto 1",
        descricao: "Descrição do Produto 1",
        valor: 29.99,
        uriImagem: "https://via.placeholder.com/150"
    },
    {
        nome: "Produto 2",
        descricao: "Descrição do Produto 2",
        valor: 49.99,
        uriImagem: "https://via.placeholder.com/150"
    },
    {
        nome: "Produto 3",
        descricao: "Descrição do Produto 3",
        valor: 19.99,
        uriImagem: "https://via.placeholder.com/150"
    },
    {
        nome: "Produto 4",
        descricao: "Descrição do Produto 4",
        valor: 39.99,
        uriImagem: "https://via.placeholder.com/150"
    },
    {
        nome: "Produto 4",
        descricao: "Descrição do Produto 4",
        valor: 39.99,
        uriImagem: "https://via.placeholder.com/150"
    },
    {
        nome: "Produto 4",
        descricao: "Descrição do Produto 4",
        valor: 39.99,
        uriImagem: "https://via.placeholder.com/150"
    },
    {
        nome: "Produto 4",
        descricao: "Descrição do Produto 4",
        valor: 39.99,
        uriImagem: "https://via.placeholder.com/150"
    },
    {
        nome: "Produto 4",
        descricao: "Descrição do Produto 4",
        valor: 39.99,
        uriImagem: "https://via.placeholder.com/150"
    },
    {
        nome: "Produto 4",
        descricao: "Descrição do Produto 4",
        valor: 39.99,
        uriImagem: "https://via.placeholder.com/150"
    },
    {
        nome: "Produto 4",
        descricao: "Descrição do Produto 4",
        valor: 39.99,
        uriImagem: "https://via.placeholder.com/150"
    },
    {
        nome: "Produto 4",
        descricao: "Descrição do Produto 4",
        valor: 39.99,
        uriImagem: "https://via.placeholder.com/150"
    },
    {
        nome: "Produto 4",
        descricao: "Descrição do Produto 4",
        valor: 39.99,
        uriImagem: "https://via.placeholder.com/150"
    },
    {
        nome: "Produto 4",
        descricao: "Descrição do Produto 4",
        valor: 39.99,
        uriImagem: "https://via.placeholder.com/150"
    },
    {
        nome: "Produto 4",
        descricao: "Descrição do Produto 4",
        valor: 39.99,
        uriImagem: "https://via.placeholder.com/150"
    }
];

const container = document.getElementById('produtosContainer');

for (var produto of produtos) {
    const produtoDiv = document.createElement('div');
    produtoDiv.className = 'produto';

    const img = document.createElement('img');
    img.src = produto.uriImagem;
    produtoDiv.appendChild(img);

    const nome = document.createElement('h2');
    nome.textContent = produto.nome;
    produtoDiv.appendChild(nome);

    const descricao = document.createElement('p');
    descricao.textContent = produto.descricao;
    produtoDiv.appendChild(descricao);

    const valor = document.createElement('span');
    valor.textContent = `R$ ${produto.valor.toFixed(2)}`;
    produtoDiv.appendChild(valor);

    const containerButton = document.createElement('div')
    containerButton.className = "containerButton"
    produtoDiv.appendChild(containerButton)
    
    const btnComprar = document.createElement('button')
    btnComprar.textContent = "Comprar"
    containerButton.appendChild(btnComprar)


    const btnDetalhes = document.createElement('button')
    btnDetalhes.textContent = "Detalhes"
    containerButton.appendChild(btnDetalhes)

    container.appendChild(produtoDiv);
};