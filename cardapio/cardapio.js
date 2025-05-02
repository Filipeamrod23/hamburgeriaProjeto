// Variável: para armazenar objetos
// Objeto: estrutura que guarda valores em pares chave-valor
// Array: estrutura que guarda valores em sequência, como uma lista

let carrinho = [];
let modal = document.querySelector('#carrinho-modal');
let fecharModal = document.querySelector('.fechar');
let totalCarrinho = document.querySelector('#total-carrinho')
let listaCarrinho = document.querySelector(".lista-carrinho")

document.querySelectorAll('.adicionar-carrinho').forEach(btn => {
    btn.addEventListener('click', function () {
        modal.style.display = 'block'
        const nome = this.dataset.nome;
        const preco = parseFloat(this.dataset.preco);
        carrinho.push({ nome, preco })

        atualizarCarrinho()
    })
})

// Variáveis, constantes, arrays/vetores, objetos (estrutura de dados organizada em propriedade e função

fecharModal.addEventListener('click', function () {
    modal.style.display = 'none'
})

function atualizarCarrinho() {
    listaCarrinho.innerHTML = '';
    let total = 0;

    carrinho.forEach(item => {
        const li = document.createElement("li")
        li.style.listStyle = "none"
        li.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`
        listaCarrinho.appendChild(li)
        total = total + item.preco
    })
    totalCarrinho.textContent = total.toFixed(2)
}