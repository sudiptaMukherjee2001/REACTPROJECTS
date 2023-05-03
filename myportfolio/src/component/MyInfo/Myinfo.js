import React, { useEffect } from 'react'
import "../MyInfo/Myinfo.scss"
import { AiFillHome } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { BiMessageRounded } from "react-icons/bi";
import { Link } from "react-router-dom"

function Myinfo() {

    return (
        <>
            <div className="aboutCon" >
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
                {/* <span ><h2>Sudipta</h2></span> */}
                <h1>RESUME</h1>
                <div className="content">
                    <div className="personalInfo">
                        <div className="leftpart">

                            <div className="details">

                                <ul>
                                    <h3>
                                        PERSONAL <span>INFO</span>
                                    </h3>
                                    <li>
                                        First Name: Sudipta
                                    </li>
                                    <li>
                                        Last Name: Mukherjee
                                    </li>
                                    <li>
                                        Age:22
                                    </li>
                                    <li>
                                        Nationality:Indian
                                    </li>
                                </ul>
                                <ul>

                                    <li>Freelance: <span> N/A  </span> </li>
                                    <li>Phone Number:7407422414</li>
                                    <li>email:abc@gamil.com</li>

                                </ul>
                                <button>Download cv</button>
                            </div>
                        </div>

                    </div>
                    <h2 className='Skill' >S.K.I.L.L.S</h2>
                    <div className="skills">

                        <div className="left">
                            <div className="html">
                                <span>HTML</span>
                                <div className="outerBorder">
                                    <div className="innerBorder">70%</div>
                                </div>
                            </div>
                            <div className="html">
                                <span>CSS</span>
                                <div className="outerBorder">
                                    <div className="innerBorderOfCss">56%</div>
                                </div>
                            </div>
                            <div className="html">
                                <span>SCSS</span>
                                <div className="outerBorder">
                                    <div className="innerBorderOfScss">40%</div>
                                </div>
                            </div>

                        </div>
                        <div className="right" >
                            <div className="html">
                                <span>JAVASCRIPT</span>
                                <div className="outerBorder">
                                    <div className="innerBorderOfJs">50%</div>
                                </div>
                            </div>
                            <div className="html">
                                <span>REACT</span>
                                <div className="outerBorder">
                                    <div className="innerBorderOfreact">50%</div>
                                </div>
                            </div>
                            <div className="html">
                                <span>C++</span>
                                <div className="outerBorder">
                                    <div className="innerBorderofcPlus">30%</div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="study" >
                        <h2>S.T.U.D.Y</h2>
                        <div className="studyDetails">

                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}

export default Myinfo