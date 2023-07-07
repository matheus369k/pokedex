const botaoAlterarTema = document.getElementById("botao-alterar-tema");

const body = document.querySelector("body");

const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao");

const imagemTrocaDeTema = document.querySelector(".titulo");


botaoAlterarTema.addEventListener("click", () => {
    const modoEscuroEstaAtivado = body.classList.contains("modo-escuro");

    body.classList.toggle("modo-escuro")

    if(modoEscuroEstaAtivado){
        imagemBotaoTrocaDeTema.setAttribute("src","./src/imagens/551374-sol-icone-gratis-vetor-removebg-preview.png");

    }else{

        imagemBotaoTrocaDeTema.setAttribute("src","./src/imagens/desenho-de-lua-2-removebg-preview.png");
        body.classList.contains("modo-escuro");
        }   
})
