import { Link } from "react-router-dom";

import style from "./Navbar.module.css"
import Container from "../Container";
import img from "../../img/poke-titulo.png"
import { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi"
import { TfiClose } from "react-icons/tfi"


function Navbar() {
    const [menu, setMenu]=useState(true)

    // ( handleMenu ) tem como obtjetivo lidar com com as mudanças do menu dependendo do tamanho da tela
    const handleMenu=()=>{
        const menubtn = document.getElementById("menu")
        const nav = document.getElementById("nav_bar")
        setMenu(!menu)
        
        if (menubtn.classList.contains("Navbar_menu__U5aLo")){
            menubtn.classList.remove("Navbar_menu__U5aLo")
            nav.classList.add(style.Navbar_Moba)
        }else {
            menubtn.classList.add(style.menu)
            nav.classList.remove("Navbar_Navbar_Moba__4PYSz")
        }
        return
    }

    // function ( selectBar ) responsavel por adicionar a marcar a posição atual na barra de navegação
    const selectBar=()=>{
        document.getElementById("nav_bar").childNodes.forEach((selectBar, index) => {
            selectBar.addEventListener('click', ()=>{

                const selected = document.querySelector(".Navbar_selected__P9wgn")
                if (selected) 
                {
                    selected.classList.remove(style.selected)
                }
                if (document.querySelector(".Navbar_menu__U5aLo")){
                    handleMenu()
                }
                selectBar.classList.add(style.selected)
                localStorage.setItem("home", index)         
            })
        })
    }

    // objetivo de re-adicionar o estilo a atualizar ou resetar a pagina ou carregar pela primeira vez
    useEffect(()=>{
        const url = window.location.href.split("#")[1]
        const navbar = document.getElementById("nav_bar")
        if (url == "/" || url == "" )
        {
            navbar.childNodes[0].classList.add(style.selected)
        }
        else 
        {
            navbar.childNodes[localStorage.getItem("home")].classList.add(style.selected)
        }
    }, [menu])

    return (
        <Container customClass="Navbar_Container">
            <img src={img}  alt="logo"/>
            <nav onMouseEnter={()=>selectBar()} id="nav_bar" className={`${style.Navbar_Moba} ${style.Navbar}`}>
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