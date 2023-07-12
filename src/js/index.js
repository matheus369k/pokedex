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

const trocarImagem =  document.querySelectorAll('.imagens');

trocarImagem.forEach(personaGif => {
    personaGif.addEventListener('mouseenter', () => {

        personaGif.classList.add('select')

        const gifselection = document.querySelector('.select');
        const idGif = personaGif.attributes.id.value;

        gifselection.src = `./src/imagens/poke-gif/${idGif}.gif`;
    
    })

    personaGif.addEventListener('mouseleave', () => {

        const gifselection = document.querySelector('.select');
        const idGif = personaGif.attributes.id.value;

        gifselection.src = `./src/imagens/poke-png/${idGif}.png`;

        personaGif.classList.remove('select')
    })

    
})

const card = document.querySelectorAll('.cartao-pokemon');

card.forEach(activeDescripition => {
    activeDescripition.addEventListener('mouseenter', () => {


        activeDescripition.classList.add('active')
        const description =  document.querySelector('.descriçao');
        
        description.classList.replace('description','open')

        console.log(description);
        

    })

    activeDescripition.addEventListener('mouseleave', () => {
        activeDescripition.classList.remove('active')

        const descripitionnot = document.querySelector('.descriçao');
        descripitionnot.classList.replace('open','description')

    })
})