const botaoAlterarTema = document.getElementById("botao-alterar-tema");

const body = document.querySelector("body")

const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao");



botaoAlterarTema.addEventListener("click", () => {
    const modoEscuroEstaAtivado = body.classList.contains("modo-escuro");

    body.classList.toggle("modo-escuro")

    if(modoEscuroEstaAtivado){
        imagemBotaoTrocaDeTema.setAttribute("src","./src/imagens/sol2.gif");

    }else{

        imagemBotaoTrocaDeTema.setAttribute("src","./src/imagens/Moon_rotating_full_220px.gif");
        body.classList.contains("modo-escuro");
        }   
})
