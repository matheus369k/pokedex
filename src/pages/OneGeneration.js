import Container from "../components/Container"

import style from "../components/css/Cards.module.css"
import MountCards from "../components/MountCards";


function OneGeneration() {

    return (
        <Container customClass="bg_main">
            <section id="container" className={style.card}>
                <MountCards generation="land_orange" />
            </section> 
        </Container>
    )
}

export default OneGeneration