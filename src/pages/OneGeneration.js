import Container from "../components/Container"

import style from "./Cards.module.css"
import ManipulationAPI from "../components/ManipulationAPI";


function OneGeneration() {
    const API = "https://matheus369k.github.io/Data/pokedex.json"

    return (
        <Container customClass="One_Generetion">
            <section id="container" className={style.card}>
                <ManipulationAPI api={API} />
            </section> 
        </Container>
    )
}

export default OneGeneration