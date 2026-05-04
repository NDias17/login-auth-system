const formulario = document.getElementById('formulario');
const tabela = document.getElementById('data-table');

formulario.addEventListener('submit', function(event) {
    event.preventDefault();
    console.log("Formulário enviado!");

    const inputEmail = document.getElementById('email');
    const inputSenha = document.getElementById('password');
    const inputUsername = document.getElementById('username');
    const inputPhoneNumber = document.getElementById('contact');

    const email = inputEmail.value;
    const senha = inputSenha.value;
    const username = inputUsername.value;
    const phoneNumber = inputPhoneNumber.value;

    console.log("Email:", email);
    console.log("Senha:", senha);
    console.log("Username:", username);
    console.log("Phone Number:", phoneNumber);
});