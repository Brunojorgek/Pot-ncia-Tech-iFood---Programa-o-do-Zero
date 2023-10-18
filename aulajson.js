//JSON - JavaScript Object Notation
// chave e valor com o objetivo de JSONtransferir dados.
let pedido = {
    nome: "Bruno",
    idade: 36,
    produtos: {
        0: ["Mouse", 29.90],
        1: ["Teclado", 129.90],
        2: ["Monitor", 899.90]
    }
}

gerarPedido(pedido);

function gerarPedido(pedido) {
    console.log(`O comprador é ${pedido.nome}`);
    console.log(`A idade é ${pedido.idade}`);
    console.log("-------------------------------");

    for (let i in pedido.produtos) { 
        let[nomeProduto, precoProduto] = pedido.produtos[i];
        console.log(`- ${nomeProduto} - ${precoProduto}`)
    }
}