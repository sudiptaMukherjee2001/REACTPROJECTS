import React from 'react'
import { useNavigate } from 'react-router-dom'
import "../../VideoInfo/relatedContent/RelatedContent.scss"
function RelatedContent({ initialRelatedComments, setId }) {
    const navigate = useNavigate();
    const handelGoToVideoInfoPage = (vid, item) => {
        console.log("clicked item is", item)
        setId(vid)
        navigate(`/VideoInfo/${vid}`)

    }
    return (
        <>
            {
                initialRelatedComments?.contents?.map((item, videoId) => {
                    return (
                        <div className="RelatedContent_card" onClick={() => {
                            handelGoToVideoInfoPage(item?.video?.videoId, item
                            )
                        }}>
                            <div className="image">
                                <img src={item?.video?.thumbnails[0]?.url} alt="Picture not found" />
                            </div>
                            <div className="channelLogo_VideoDescription">
                                <div className="channelLogo">
                                    <img src={item?.video?.author?.avatar[0]?.url} alt="Logo" srcset="" />
                                </div>
                                <div className="title_channelDetails">
                                    <div className="title">
                                        <p>
                                            {item?.video?.title}
                                        </p>
                                    </div>
                                    <div className="channelName">
                                        <p>
                                            {item?.video?.author?.title}
                                        </p>

                                    </div>
                                    <div className="views_PublishedTime">
                                        <span>{item?.video?.stats?.views} Views</span>.<span>{item?.video?.publishedTimeText}</span>
                                    </div>


                                </div>

                            </div>

                        </div>
                    )
                })

            }

        </>
    )
}

export default RelatedContent