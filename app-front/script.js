const formulario = document.getElementById('formulario');
const tabela = document.getElementById('data-table');

formulario.addEventListener('submit', function(event) {
    //Event.preventDefault() é usado para evitar que o formulário seja enviado e a página seja recarregada, permitindo que você processe os dados do formulário usando JavaScript.
    event.preventDefault();
    console.log("Formulário enviado!");

    //Obtendo os valores dos campos de entrada
    const inputEmail = document.getElementById('email');
    const inputSenha = document.getElementById('password');
    const inputUsername = document.getElementById('username');
    const inputPhoneNumber = document.getElementById('contact');

    //Armazenando os valores em variáveis
    const email = inputEmail.value;
    const senha = inputSenha.value;
    const username = inputUsername.value;
    const phoneNumber = inputPhoneNumber.value;

    //Criando uma nova linha na tabela para exibir os dados do formulário
    const novaLinha = document.createElement('tr');
    const celulaEmail = document.createElement('td');
    const celulaSenha = document.createElement('td');
    const celulaUsername = document.createElement('td');
    const celulaPhoneNumber = document.createElement('td');

    
    /*console.log("Email:", email);
    console.log("Senha:", senha);
    console.log("Username:", username);
    console.log("Phone Number:", phoneNumber);*/
});