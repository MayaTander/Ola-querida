// Selecione todos os elementos com a classe 'senha'
const passwordInputs = document.querySelectorAll('.senha');

// Itere sobre cada campo de senha
passwordInputs.forEach(function(passwordInput) {
    // Adicione um evento de teclado a cada campo de senha
    passwordInput.addEventListener('keypress', function(event) {
        // Verifique se a tecla pressionada é Enter (código 13)
        if (event.keyCode === 13) {
            // Redirecione para a nova página HTML local
            window.location.href = 'site.html';
        }
    });
});
