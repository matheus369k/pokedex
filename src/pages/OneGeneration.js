import Container from "../components/Container"

import style from "./Cards.module.css"
import BarSeach from "../components/BarSeach";


function OneGeneration() {
    const API = "https://matheus369k.github.io/Data/pokedex.json"

    return (
        <Container customClass="One_Generetion">
            <section id="container" className={style.card}>
                <BarSeach api={API} generation="land_orange" />
            </section> 
        </Container>
    )
}

export default OneGeneration