import { Link } from "react-router-dom";

import style from "./Navbar.module.css"
import Container from "../Container";
import img from "../../img/poke-titulo.png"
import { useEffect } from "react";


function Navbar() {

    const selectBar=()=>{
        document.getElementById("nav_bar").childNodes.forEach(selectBar => {
            selectBar.addEventListener('click', ()=>{
                //console.log(selectBar);

                //console.log(style.selected);
                const selected = document.querySelector(".Navbar_selected__P9wgn")
                if (selected) 
                {
                    selected.classList.remove(style.selected)
                }
                selectBar.classList.add(style.selected)
                localStorage.setItem("selectOld", selectBar)
                
            })
        })
    }

    useEffect(()=>{
        const url = window.location.href.split("#")[1]

        if (url === "/" || url === "" )
        {
            document.getElementById("nav_bar").childNodes[1].classList.add(style.selected)
        } else 
        {
            localStorage.getItem("selectOld").classList.add(style.selected)
        }

    })


    return (
        <Container customClass="Navbar_Container">
            <nav onMouseEnter={()=>selectBar()} id="nav_bar" className={style.Navbar}>
                <img src={img} />
                <li>
                    <Link to="/"><span>1</span>Generetion</Link>
                </li>
                <li>
                    <Link to="/twogeneration"><span>2</span>Generetion</Link>
                </li>
            </nav>
        </Container>
    )
}

export default Navbar