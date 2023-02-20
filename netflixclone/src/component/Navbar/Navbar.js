import React from 'react'
import img from "../../image/Netflix_Logo_PMS.png"
import { AiOutlineSearch } from "react-icons/ai";
import "./Navbar.css"

function Navbar() {
    return (
        <>
            <div className="nav">
                <img src={img} alt="" srcset="" />
                <div className="nav-list">
                    <ul>
                        <li>tv shows</li>
                        <li>movies</li>
                        <li>recently added</li>
                        <li>my list</li>
                    </ul>
                </div>
                <AiOutlineSearch className='searchIcon' />

            </div>
        </>
    )
}

export default Navbar