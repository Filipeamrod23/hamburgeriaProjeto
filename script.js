document.addEventListener('DOMContentLoaded', () => {
    const modal = document.querySelector('.modal');
    const buttonDiscount = document.querySelector('.button-discount');
    const closeButton = document.querySelector('.close-button');

    buttonDiscount.addEventListener('click', () => {
        modal.classList.add('show'); // Adiciona a classe para exibir o modal
    });

    closeButton.addEventListener('click', () => {
        modal.classList.remove('show'); // Remove a classe para ocultar o modal
    });
});