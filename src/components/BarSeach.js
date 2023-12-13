import { useEffect, useState } from "react";

import style from "./css/BarSeach.module.css";

import img from "../img/pokeball.png";

import { BiSearch } from "react-icons/bi";
import API from "./API";

function BarSeach(props) {
    const [nextPrev, setNextPrev] = useState([0, 9]);
    const [listAllCards, setListAllCards] = useState([]);

    const handlefilter = (e = "") => {

        const listFilter = []

        for (let index = 0; index < listAllCards.length; index++) {

            if (isNaN(e)) {
                var clientSeach = listAllCards[index]["name"]
                var sliceStart = 0
            } else {
                var clientSeach = listAllCards[index]["number"]
                var sliceStart = 1
            };

            if (e === "") {

                props.setCardSelected(listAllCards.slice(parseInt(nextPrev[0]), parseInt(nextPrev[1])))

                return
            };
            let pokeNumber = clientSeach

            let cardNumber = (pokeNumber.slice(sliceStart, e.length + sliceStart))

            if (e.toLowerCase() == cardNumber.toLowerCase()) {

                listFilter.push(listAllCards[index])
            };
        }

        props.setCardSelected(listFilter.slice(parseInt(nextPrev[0]), parseInt(nextPrev[1])))

        return
    };


    useEffect(() => {

        handlefilter()
        
    }, [nextPrev, listAllCards])


    document.querySelectorAll('.btn_nextprev').forEach((btn, index) => {

        btn.addEventListener('click', () => { NextPrevent(index)})

    })

    const NextPrevent = (i) => {

        if (i === 1 && parseInt(nextPrev[1]) < listAllCards.length) {

            setNextPrev([nextPrev[0] = parseInt(nextPrev[0]) + 9, nextPrev[1] = parseInt(nextPrev[1]) + 9])

        } else if (i === 0 && parseInt(nextPrev[0]) > 0) {

            setNextPrev([nextPrev[0] = parseInt(nextPrev[0]) - 9, nextPrev[1] = parseInt(nextPrev[1]) - 9])

        }

        console.log('enter', i, Number(i));

        return

    }

    return (
        <section>
            <form className={style.seach_Container}>
                <label><BiSearch /></label>

                <img className={style.pokeboll} src={img} />

                <input autoComplete="off" id="input" type="text" onChange={(e) => handlefilter(e.target.value)} placeholder="Search..." />

            </form>

            <API generation={props.generation} setListAllCards={setListAllCards} />

        </section>
    )
};

export default BarSeach;