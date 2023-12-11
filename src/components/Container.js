import { useEffect } from "react";
import style from "./css/Container.module.css";

function Container(props) {

    // objetivo de re-adicionar o estilo a atualizar ou resetar a pagina ou carregar pela primeira vez
    useEffect(()=>{
        const url = window.location.hash
        const selected = document.querySelector(".Navbar_selected__P9wgn")
        const section = document.getElementById("pokedex_open")
        const div = document.getElementById("div_backede")
        
        if (selected) 
        {
            selected.classList.remove("Navbar_selected__P9wgn")
        }
        switch (url) {
            case "#/onegeneration":
                localStorage.setItem("home", 1)
                break
            case "#/twogeneration":
                localStorage.setItem("home", 2)
                break
            case "#/threegeneration":
                localStorage.setItem("home", 3)
                break
            case "#/fourgeneration":
                localStorage.setItem("home", 4)
                break
            case "#/fivegeneration":
                localStorage.setItem("home", 5)
                break
            case "#/sixgeneration":
                localStorage.setItem("home", 6)
                break
            case "#/sevengeneration":
                localStorage.setItem("home", 7)
                break
            case "#/eightgeneration":
                localStorage.setItem("home", 8)
                break
            case "#/ninegeneration":
                localStorage.setItem("home", 9)
                break
            default:
                localStorage.setItem("home", 0)
        }
        
        if (div && section){
            section.parentNode.removeChild(section)
            div.parentNode.removeChild(div)
        }
        
        document.getElementById("nav_bar").childNodes[localStorage.getItem("home")].classList.add("Navbar_selected__P9wgn")
    }, [props.children])

    return (
        <div id="container" className={`${style.Container} ${style[props.customClass]} ${style.dark}`}>
            {props.children}
        </div>
    )
}

export default Container