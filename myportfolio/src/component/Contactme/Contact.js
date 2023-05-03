import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import { AiFillHome } from "react-icons/ai";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { BiMessageRounded } from "react-icons/bi";
import { Link } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { CiMapPin } from "react-icons/ci";
import { BsFillTelephoneInboundFill } from "react-icons/bs";
import { MdAlternateEmail } from "react-icons/md";
import { BsSendCheckFill } from "react-icons/bs";
import "../Contactme/Contact.scss"
// import Nav from '../Home/Nav';
// 
function Contact() {
    const [success, setSuccess] = useState(false);
    const form = useRef();
    let handelEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_83tmhtm', 'template_aa95buq', form.current, 'I8qO_u4IBkDZemlvV')
            .then((result) => {
                console.log(result.text);
                setSuccess(true)
            }, (error) => {
                console.log(error.text);
                setSuccess(false)
            });

    }
    let popup = () => {
        alert(`Thank you for Contact us🙏🙏`)
    }
    return (
        <div className="maincon">
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
            <h1 className='caption'>
                Get In touch
            </h1>

            <div className="con">

                <div className="left">

                    <form ref={form} action="" onSubmit={handelEmail}>
                        <div className="name">
                            <input type="text" name="sendername" required="required" />
                            <span>Enter your name</span>
                        </div>
                        <div className="email">
                            <input type="text" name="senderemail" required="required" />
                            <span>Enter your email</span>
                        </div>
                        <div className="message">
                            <textarea name="message" id="" cols="40" rows="10" required="required"></textarea>
                            {/* <input type="text" name="uemail" required="required" /> */}
                            <span>Enter your message</span>
                        </div>
                        <div className="btn">
                            <button type='submit'><span>Submit</span>  <p> <BsSendCheckFill style={{ fontSize: "20px", backgroundColor: "#ffb400" }} />
                            </p> </button>
                        </div>
                        {
                            success && popup()
                        }
                    </form>
                </div>
                <div className="right">
                    <div className="title">
                        <h1>
                            Contact <span>Info</span>
                        </h1>
                    </div>
                    <div className="details">
                        Feel free to get in touch with me. I am always open to discussing new projects, creative ideas
                    </div>
                    <div className="list">
                        <div className="icons">
                            <ul>
                                <li><FaUserAlt /></li>
                                <li><CiMapPin /></li>
                                <li><BsFillTelephoneInboundFill /></li>
                                <li><MdAlternateEmail /></li>
                            </ul>
                        </div>
                        <div className="line"></div>
                        <div className="data">
                            <ul>
                                <li>Sudipta</li>
                                <li>Bengalore</li>
                                <li>7407422414</li>
                                <li>sudiptamukherjee2001@gmail.com</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Contact