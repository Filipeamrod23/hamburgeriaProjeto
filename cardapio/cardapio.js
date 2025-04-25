// Variável: para armazenar objetos
// Objeto: estrutura que guarda valores em pares chave-valor
// Array: estrutura que guarda valores em sequência, como uma lista

let carrinho = [];
let modal = document.querySelector('#carrinho-modal');
let fecharModal = document.querySelector('.fechar');
let totalCarrinho = document.querySelector('#total-carrinho')
let listaCarrinho = document.querySelector("#lista-carrinho")

document.querySelectorAll('.adicionar-carrinho').forEach(btn =>{
    btn.addEventListener('click', function(){
        modal.style.display = 'block'
    })
})