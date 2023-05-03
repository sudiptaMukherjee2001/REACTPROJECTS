import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import "../Header/Header.scss"
import { MdNotificationsActive } from "react-icons/md";
import { getData } from '../../feature/apicallSlice';
import { useDispatch } from 'react-redux';
// MdNotificationsActive
function Header() {
    const [searchValue, setSearchvalue] = useState();
    const navigate = useNavigate();
    const Dispatch = useDispatch();
    const handelQuery = (e) => {
        const value = e.target.value;
        console.log("value is ", value);

        setSearchvalue(value);
    }
    console.log("searchvalue", searchValue)
    const onSubmitHandel = (e) => {
        // e.preventDefault();
        console.log("Event", e)

        if ((e?.key === "Enter" || e.target === "button") && searchValue?.length > 0) {
            navigate(`/searchresult/${searchValue}`);

            Dispatch(getData(`search/?q=${searchValue}`)) // api call for input box
            console.log("you pressed enter")
        }
    }
    return (

        <>
            <div className="header">
                <div className="icons_title">
                    <div className="icons">
                        <svg>
                            <path d="M27.9727 3.12324C27.6435 1.89323 26.6768 0.926623 25.4468 0.597366C23.2197 2.24288e-07 14.285 0 14.285 0C14.285 0 5.35042 2.24288e-07 3.12323 0.597366C1.89323 0.926623 0.926623 1.89323 0.597366 3.12324C2.24288e-07 5.35042 0 10 0 10C0 10 2.24288e-07 14.6496 0.597366 16.8768C0.926623 18.1068 1.89323 19.0734 3.12323 19.4026C5.35042 20 14.285 20 14.285 20C14.285 20 23.2197 20 25.4468 19.4026C26.6768 19.0734 27.6435 18.1068 27.9727 16.8768C28.5701 14.6496 28.5701 10 28.5701 10C28.5701 10 28.5677 5.35042 27.9727 3.12324Z" fill="#FF0000" className="style-scope yt-icon"></path>
                            <path d="M11.4253 14.2854L18.8477 10.0004L11.4253 5.71533V14.2854Z" fill="white" class="style-scope yt-icon"></path>

                        </svg>
                    </div>
                    <div className="title">

                        <h2>
                            <Link to="/">
                                YOUTUBE
                            </Link>

                        </h2>
                    </div>

                </div>
                <div className="inputBox">
                    <input type="text"
                        onKeyUp={onSubmitHandel}
                        onChange={handelQuery}
                        value={searchValue} />

                    <button onKeyUp={onSubmitHandel}>search</button>

                </div>
                <div className="notification_Avatar">
                    <MdNotificationsActive className='notification' />
                    <img src="https://xsgames.co/randomusers/assets/avatars/male/68.jpg" alt="picture not fonund" />

                </div>

            </div>

        </>

    )
}

export default Header