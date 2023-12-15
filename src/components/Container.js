import { useEffect } from "react";
import style from "./css/Container.module.css";

function Container(props) {

    const listUrl = [
        'onegeneration',
        'twogeneration',
        'threegeneration',
        'fourgeneration',
        'fivegeneration',
        'sixgeneration',
        'sevengeneration',
        'eightgeneration',
        'ninegeneration'
    ]


    useEffect(() => {

        const urlpage = window.location.hash.split('/')[1]

        for (let i = 0; i < listUrl.length; i++) {

            if (urlpage === listUrl[i]) {

                handlenavbarselectnow(i + 1)

                return
            }

        }

    }, [])

    const handlenavbarselectnow = (i) => {

        const nav = document.getElementById("nav_bar")

        if (Number(i)) {

            document.querySelector('.selected').classList.remove('selected')

            nav.childNodes[i].classList.add('selected')

        }
    }

    return (
        <div id="container" className={`${style.Container} ${style[props.customClass]} ${style.dark}`}>
            {props.children}
        </div>
    )
}

export default Container