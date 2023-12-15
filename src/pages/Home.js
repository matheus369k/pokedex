import { Link } from "react-router-dom";

import Container from "../components/Container";
import Kanto from "../img/Kanto-img.png";
import Johto from "../img/Johto-img.png";
import Hoenn from "../img/Hoenn-img.png";
import Sinnoh from "../img/Sinnoh-img.png";
import Unova from "../img/Unova-img.png";
import Kalos from "../img/Kalos-img.png";
import Alola from "../img/Alola-img.png";
import Galar from "../img/Galar-img.png";
import Paldea from "../img/Paldea-img.png";
import logo from "../img/poke-titulo.png";
import { useState } from "react";
import Navbar from "../components/layout/Navbar";

function Home() {
    return (
        <Container customClass="Home">
            <h1>Selecione uma região</h1>
            <ul id="homeswitch">
                <Link to="/onegeneration">
                    <li>
                        <div><img src={logo} alt="Nome Pokemon" /></div>
                        <img src={Kanto} alt="Pokemons iniciais de Kanto" />
                        <h3>Kanto</h3>
                    </li>
                </Link>
                <Link to="/twogeneration">
                    <li>
                        <div><img src={logo} alt="Nome Pokemon" /></div>
                        <img src={Johto} alt="Pokemons iniciais de Johto" />
                        <h3>Johto</h3>
                    </li>
                </Link>
                <Link to="/threegeneration">
                    <li>
                        <div><img src={logo} alt="Nome Pokemon" /></div>
                        <img src={Hoenn} alt="Pokemons iniciais de Hoenn" />
                        <h3>Hoenn</h3>
                    </li>
                </Link>
                <Link to="/fourgeneration">
                    <li>
                        <div><img src={logo} alt="Nome Pokemon" /></div>
                        <img src={Sinnoh} alt="Pokemons iniciais de Sinnoh" />
                        <h3>Sinnoh</h3>
                    </li>
                </Link>
                <Link to="/fivegeneration">
                    <li>
                        <div><img src={logo} alt="Nome Pokemon" /></div>
                        <img src={Unova} alt="Pokemons iniciais de Unova" />
                        <h3>Unova</h3>
                    </li>
                </Link>
                <Link to="/sixgeneration">
                    <li>
                        <div><img src={logo} alt="Nome Pokemon" /></div>
                        <img src={Kalos} alt="Pokemons iniciais de Kalos" />
                        <h3>Kalos</h3>
                    </li>
                </Link>
                <Link to="/sevengeneration">
                    <li>
                        <div><img src={logo} alt="Nome Pokemon" /></div>
                        <img src={Alola} alt="Pokemons iniciais de Alola" />
                        <h3>Alola</h3>
                    </li>
                </Link>
                <Link to="/eightgeneration">
                    <li>
                        <div><img src={logo} alt="Nome Pokemon" /></div>
                        <img src={Galar} alt="Pokemons iniciais de Galar" />
                        <h3>Galar</h3>
                    </li>
                </Link>
                <Link to="/ninegeneration">
                    <li>
                        <div><img src={logo} alt="Nome Pokemon" /></div>
                        <img src={Paldea} alt="Pokemons iniciais de Paldea" />
                        <h3>Paldea</h3>
                    </li>
                </Link>
            </ul>
        </Container>
    )
}

export default Home