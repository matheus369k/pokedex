import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import img from "../../img/poke-titulo.png";
import Container from "../Container";
import "../css/Navbar.css";


import { FiMenu } from "react-icons/fi";
import { TfiClose } from "react-icons/tfi";
import { wait } from "@testing-library/user-event/dist/utils";


function Navbar(props) {

    //const [menu, setMenu]=useState(true)


    const handleMenu = () => {

        const nav = document.getElementById("nav_bar")

        nav.childNodes.forEach(aba => {

            aba.addEventListener('click', () => {

                document.querySelector('.selected').classList.remove('selected')

                aba.classList.add('selected')

            })

        })


        return
    }

    return (
        <Container customClass="Navbar_Container">
            <img className="logo" src={img} alt="logo" />
            <nav onMouseEnter={() => handleMenu()} id="nav_bar" className="Navbar_Moba Navbar">
                <li className="selected">
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/onegeneration">Kanto</Link>
                </li>
                <li>
                    <Link to="/twogeneration">Johto</Link>
                </li>
                <li>
                    <Link to="/threegeneration">Hoenn</Link>
                </li>
                <li>
                    <Link to="/fourgeneration">Sinnoh</Link>
                </li>
                <li>
                    <Link to="/fivegeneration">Unova</Link>
                </li>
                <li>
                    <Link to="/sixgeneration">Kalos</Link>
                </li>
                <li>
                    <Link to="/sevengeneration">Alola</Link>
                </li>
                <li>
                    <Link to="/eightgeneration">Galar</Link>
                </li>
                <li>
                    <Link to="/ninegeneration">Paldea</Link>
                </li>
            </nav>
            <div id="menu">
                {/*menu ? <FiMenu  onClick={()=>handleMenu()} /> : <TfiClose  onClick={()=>handleMenu()} />*/}
            </div>
        </Container>
    )
}

export default Navbar