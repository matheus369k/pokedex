import { Link } from "react-router-dom";

import style from "./Navbar.module.css"
import Container from "../Container";
import img from "../../img/poke-titulo.png"
import { useState } from "react";
import { FiMenu } from "react-icons/fi"
import { TfiClose } from "react-icons/tfi"


function Navbar(props) {
    const [menu, setMenu]=useState(true)

    // ( handleMenu ) tem como obtjetivo lidar com com as mudanças do menu dependendo do tamanho da tela
    const handleMenu=()=>{
        const menubtn = document.getElementById("menu")
        const nav = document.getElementById("nav_bar")
        setMenu(!menu)
        
        if (menubtn.classList.contains("Navbar_menu__U5aLo")){
            menubtn.classList.remove("Navbar_menu__U5aLo")
            nav.classList.add("Navbar_Navbar_Moba__4PYSz")
        }else {
            menubtn.classList.add("Navbar_menu__U5aLo")
            nav.classList.remove("Navbar_Navbar_Moba__4PYSz")
        }
        return
    }

    return (
        <Container customClass="Navbar_Container">
            <img src={img}  alt="logo"/>
            <nav id="nav_bar" className={`${style.Navbar_Moba} ${style.Navbar}`}>
                <li>
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
                {menu ? <FiMenu  onClick={()=>handleMenu()} /> : <TfiClose  onClick={()=>handleMenu()} />}
            </div>
        </Container>
    )
}

export default Navbar