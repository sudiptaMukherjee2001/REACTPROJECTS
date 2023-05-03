import React from 'react'
import { AiFillHome } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { BiMessageRounded } from "react-icons/bi";
import { Link } from "react-router-dom"
import "../Home/Nav.scss"


function Nav() {
    return (
        <div className="navigateIcons">
            <div className="icon">
                <Link to="/">
                    <AiFillHome />
                    <span className="text">Home</span>
                </Link>
            </div>
            <div className="icon">
                <Link to="/aboutme">
                    <FaUserAlt />
                    <span className="text">About</span>
                </Link>
            </div>
            <div className="icon">
                <Link to="/Project">
                    <BsFillBriefcaseFill />
                    <span className="text">Project</span>
                </Link>
            </div>
            <div className="icon">
                <Link to="/Contact">
                    <BiMessageRounded />
                    <span className="text">Enquiry</span>
                </Link>
            </div>
        </div>
    );
}

export default Nav;
