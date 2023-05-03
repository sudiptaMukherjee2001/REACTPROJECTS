import React from 'react'
import "../Videocard/Videocard.scss"
import { Link, useNavigate } from 'react-router-dom'

function Videocard({ videoId, thumbnails, avatar, title, channelName, verified, views, publishedTime }) {
    const navigate = useNavigate();
    const handelGoToVideoInfoPage = (vid) => {
        navigate(`/VideoInfo/${vid}`)

    }
    return (
        <>

            {/* {console.log(videoId)} */}
            <div className="card" onClick={() => { handelGoToVideoInfoPage(videoId) }}>
                <div className="image">
                    <img src={thumbnails?.url} alt="Picture not found" srcset="" />
                </div>
                <div className="channelLogo_VideoDescription">
                    <div className="channelLogo">
                        <img src={avatar?.url} alt="Logo" srcset="" />
                    </div>
                    <div className="title_channelDetails">
                        <div className="title">
                            <p>
                                {title}
                            </p>
                        </div>
                        <div className="channelName">
                            <p>
                                {channelName}
                            </p>
                            <button>{verified?.text === "Verified" ? verified?.text : "Verified"}</button>
                        </div>
                        <div className="views_PublishedTime">
                            <span>{views} Views</span>.<span>{publishedTime}</span>
                        </div>


                    </div>

                </div>

            </div>






        </>

    )
}

export default Videocard