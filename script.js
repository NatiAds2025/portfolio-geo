const botaoTema = document.getElementById("tema");

botaoTema.addEventListener("click", () => {

    document.body.classList.toggle("tema-escuro");

    if(document.body.classList.contains("tema-escuro")){
        botaoTema.textContent = "Claro";
    } else {
        botaoTema.textContent = "Escuro";
    }

});


const formulario = document.getElementById("formContato");

formulario.addEventListener("submit", function(event){

    // Impede o envio padrão do formulário
    event.preventDefault();

    // Captura os valores dos campos
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    // Verifica se todos os campos foram preenchidos
    if(nome === "" || email === "" || mensagem === ""){
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // Validação do e-mail
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailValido.test(email)){
        alert("Por favor, informe um e-mail válido.");
        return;
    }

    // Mensagem de sucesso
    alert("Mensagem enviada com sucesso!");

    // Limpa os campos
    formulario.reset();

});