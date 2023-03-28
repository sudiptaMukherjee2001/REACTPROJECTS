import React from 'react'
import useracc from "../../images/user1.png"
import "../Header/Header.scss";
import { Link } from "react-router-dom"
function Header() {
    return (
        <div className="navBar">
            <Link to="/">Movie app</Link>
            <img src={useracc} alt="" srcset="" />

        </div>
    )
}

export default Header