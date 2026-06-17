const botaoTema = document.getElementById("tema"); //Procura no HTML um elemento que tenha o id="tema" (o seu botão) e o guarda em uma variável chamada botaoTema para podermos usá-lo depois.

botaoTema.addEventListener("click", () => {   //Quando o usuário clicar neste botão, execute todo o código que está aqui dentro".

    document.body.classList.toggle("tema-escuro"); //A função toggle funciona como um interruptor. Se o corpo do site não tiver a classe "tema-escuro", ela coloca. Se já tiver, ela retira

    if(document.body.classList.contains("tema-escuro")){   // se o corpo estiver no tem escuro - ele ativa 
        botaoTema.textContent = "Claro"; // se não estará no claro 
    } else {
        botaoTema.textContent = "Escuro"; // se não ficará escuro 
    }

});


const formulario = document.getElementById("formContato"); //Procura no HTML o formulário que tem o id="formContato" e o guarda na variável formulario.

formulario.addEventListener("submit", function(event){  //No momento em que o usuário tentar enviar os dados (clicando no botão de enviar ou apertando Enter), ele ativa essa função e gera um evento

    // Impede o envio padrão do formulário, para testar antes de enviar 
    event.preventDefault();

    // Captura os valores dos campos
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    // Verifica se todos os campos foram preenchidos e nã oestão vazios  e textto tem formato correto 
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
