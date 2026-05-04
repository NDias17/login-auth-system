const formulario = document.getElementById('formulario');
const tabela = document.getElementById('data-table');

formulario.addEventListener('submit', function(event) {
    event.preventDefault();
    console.log("Formulário enviado!");
});