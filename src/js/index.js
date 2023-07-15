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


const cards = document.querySelectorAll('.cartao-pokemon');


cards.forEach(card => {
    card.addEventListener('click', () => {
        const cardActive = card.classList.contains("active");


        
        const ativo = document.querySelector('.active');
        if (ativo != null){
            ativo.classList.remove('active')

            const description = ativo.querySelector('p');
            description.classList.replace('open','descriçao')

            const personaGif = ativo.querySelector('img');
            const gifselection = ativo.querySelector('.select');
            const idGif = personaGif.attributes.id.value;
            gifselection.src = `./src/imagens/poke-png/${idGif}.png`;
            personaGif.classList.remove('select')}


        console.log(ativo);
    
        if (cardActive == false){    
            card.classList.add('active')

            const description =  card.querySelector('p');
            description.classList.replace('descriçao','open')

            const personaGif = card.querySelector('img');
            personaGif.classList.add('select')
            const gifselection = card.querySelector('.select');
            const idGif = personaGif.attributes.id.value;
            gifselection.src = `./src/imagens/poke-gif/${idGif}.gif`;
        }
    })
})

