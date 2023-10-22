import { Link } from "react-router-dom";

import style from "./Navbar.module.css"
import Container from "../Container";

function Navbar() {
    return (
        <Container customClass="Navbar_Container">
            <nav className={style.Navbar}>
                <li>
                    <Link to="/">1 Generetion</Link>
                </li>
                <li>
                    <Link to="/twogeneration">2 Generetion</Link>
                </li>
            </nav>
        </Container>
    )
}

export default Navbar