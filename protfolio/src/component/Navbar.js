import React from 'react'
import "../style/nav.css"
import { Link } from "react-router-dom"
import { GiSkills } from "react-icons/gi";
import { AiFillHome } from "react-icons/ai";
import { FaLaptopCode } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";

function Navbar() {
    return (
        <nav>
            <ul>
                <div className="box">
                    <div className="iconBox">
                        <li><AiFillHome /></li>
                    </div>
                    <div className="textBox">
                        <Link to="/">Home</Link>

                    </div>
                </div>
                <div className="box">
                    <div className="iconBox">
                        <li><GiSkills /></li>
                    </div>
                    <div className="textBox">
                        <Link to="/skill">Skill</Link>
                    </div>
                </div>
                <div className="box">
                    <div className="iconBox">
                        <li><FaLaptopCode /></li>
                    </div>
                    <div className="textBox">
                        <Link to="/project">Project</Link>
                    </div>
                </div>
                <div className="box">
                    <div className="iconBox">
                        <li><BsFillPersonFill /></li>
                    </div>
                    <div className="textBox">
                        <Link to="Contact">Contact us</Link>
                    </div>
                </div>


            </ul>
        </nav>
    )
}

export default Navbar