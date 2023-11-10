# 💻Projeto Pokedex
<div align="center">
  
![pok](https://github.com/matheus369k/pokedex/assets/47065962/bf72054f-b58c-493c-a070-7eb35bf28d51)</div>
__📄Nota__: O projeto foi meu primeiro projeto densenvolvido como desenvolvedor web, tendo sua crição em uma live disponibilizada pelo canal __[Dev Em Dobro](https://www.youtube.com/c/DevemDobro)__, em um de seus eventos, que tem como objetivo encentivar pessoas a darem uma chance ao munda da progamação. O projeto inicialmente era mais simples contudo, decidi aprimora-lo tanto no design quanto na quantidade de informação que ele passava. Abaixo tem uma pequena imagem que retrata a aparencia anterior da pagina, para mais informações da versão anterior acesse o codigo antigo Aqui - [Pokedex Anterio](https://github.com/matheus369k/pokedex/tree/pokedex-v0.1).
<div align="center">
  
![2023-08-15-172208_1024x600_scrot](https://github.com/matheus369k/pokedex/assets/47065962/f695fdba-2fe9-4474-89ea-8e6490055fa3)</div>
## 🧰Linguagens
- React.js
- CSS
- HTML
- JavaScript
## ⚙️Desenvolvimento
  Na criação do projeto foi utilizado algumas blibiotecas no react para a criação do projeto, sendo eles: (react-router-dom, react-icons e axios), tendo o react-router-dom criar ligações entre as paginas a react-icons uso estico, e o axios para possibilitar a coleta de dados da 📄[API](https://github.com/matheus369k/matheus369k.github.io/blob/main/Data/pokedex.json) que esta e um 💾[Respositorio](https://github.com/matheus369k/matheus369k.github.io) no github onde as informações do site foram armazenadas.
<div align="center">

![peekpo](https://github.com/matheus369k/pokedex/assets/47065962/e38a2546-b975-47d8-a4a6-9fc8118c31bb)</div>
  Na criação da função do filter foi utilizado o numero da podedex e o nome de cada pokemon para fazer a busca por ele, contudo foi aderida uma forma de busca de 4 digitos sendo que ao procurar pelo pokemons 134 devese escrever 0134, tendo em vista que o filter ler cada simbolo individualmente e encontra os nove primerios que combinam com esse numeros, a parte do nome foi utilizado uma converção para não interrepor a busca por diferenças de caixa fonte. Acesse Aqui o arquivo responsavel por filtrar - [BarSeach](./src/components/BarSeach.js) 
  Na criação de cada cartão foi utilizado a tag __map()__ para ler cada informarção e criar os cartões. Acesse Aqui o arquivo onde reside o codigo responsavel pela criação dos cartões - [MountCards](./src/components/MountCards.js) 
## 📃Linceça
Não foi aderida uma licença ao projeto.
