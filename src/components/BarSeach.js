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

                props.setCardSelected(listAllCards.slice(nextPrev[0], nextPrev[1]))

                return
            };
            let pokeNumber = clientSeach

            let cardNumber = (pokeNumber.slice(sliceStart, e.length + sliceStart))

            if (e.toLowerCase() == cardNumber.toLowerCase()) {

                listFilter.push(listAllCards[index])
            };
        }

        props.setCardSelected(listFilter.slice(nextPrev[0], nextPrev[1]))

        return
    };

    document.querySelectorAll('.btn_nextprev').forEach((btn_np, index) => {

        btn_np.addEventListener('click', () => {

            NextPrevent(index)

            return
        })

    })

    const NextPrevent = (index) => {

        if (index === 1 && nextPrev[1] < listAllCards.length) {

            setNextPrev([parseInt(nextPrev[0]) + 9, parseInt(nextPrev[1]) + 9])

        } else if (nextPrev[0] > 0 && index === 0) {

            setNextPrev(parseInt(nextPrev[0]) - 9, parseInt(nextPrev[1]) - 9)

        }

        return
    }

    useEffect(() => {

        handlefilter(document.getElementById("input").value)

        console.log('repeat');

    }, [listAllCards, nextPrev])

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