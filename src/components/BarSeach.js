import { useEffect, useState } from "react";

import "./css/BarSeach.css";

import img from "../img/pokeball.png";

import { BiSearch } from "react-icons/bi";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";

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

    const NextPrevent = (index) => {

        if (index === 1 && parseInt(nextPrev[1]) < listAllCards.length) {

            setNextPrev([nextPrev[0] = parseInt(nextPrev[0]) + 9, nextPrev[1] = parseInt(nextPrev[1]) + 9])

        } else if (index === 0 && parseInt(nextPrev[0]) > 0) {

            setNextPrev([nextPrev[0] = parseInt(nextPrev[0]) - 9, nextPrev[1] = parseInt(nextPrev[1]) - 9])

        }

        return

    }

    useEffect(() => {

        handlefilter()

    }, [listAllCards, nextPrev])

    return (
        <section className="section_seach_container">
            <form className="form_seach_Container">
                <label><BiSearch /></label>
                <img className="pokeboll" src={img} />
                <input autoComplete="off" id="input" type="text" onChange={(e) => handlefilter(e.target.value)} placeholder="Search..." />
            </form>
            <nav className="container_next_prev">
                <li onClick={(e) => NextPrevent(0)}><GrLinkPrevious /></li>
                <li onClick={(e) => NextPrevent(1)}><GrLinkNext /></li>
            </nav>

            <API generation={props.generation} setListAllCards={setListAllCards} />

        </section>
    )
};

export default BarSeach;