import Container from "../components/Container"

import style from "../components/css/Cards.module.css"
import BarSeach from "../components/BarSeach";


function OneGeneration() {
    /* Link da API */
    const API = "https://matheus369k.github.io/Data/pokedex.json"

    return (
        <Container customClass="bg_main">
            <section id="container" className={style.card}>
                <BarSeach api={API} generation="land_orange" />
            </section> 
        </Container>
    )
}

export default OneGeneration