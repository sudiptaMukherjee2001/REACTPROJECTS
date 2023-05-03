import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import "../SearchResult/SearchResult.scss"

import { useSelector } from 'react-redux';


function SearchResult() {
    const Navigate = useNavigate();
    const { initialData } = useSelector((state) => state.data)

    console.log("it is inside search result page", initialData)

    const handelGoToVideoInfoPage = (vid, item) => {
        console.log("clicked item is", item)

        Navigate(`/VideoInfo/${vid}`)

    }

    return (
        <>
            <div className="searchResultBox">

                {
                    initialData?.contents?.map((item, videoId) => {
                        return (
                            <div className="searchResult_card" onClick={() => {
                                handelGoToVideoInfoPage(item?.video?.videoId, item
                                )
                            }}>
                                <div className="image">
                                    <img src={item?.video?.thumbnails[0]?.url} alt="Picture not found" />
                                </div>
                                <div className="title_VideoDescription">
                                    <div className="title">
                                        <p>
                                            {item?.video?.title}
                                        </p>
                                    </div>
                                    <div className="logo_channelDetails">
                                        <div className="logo">
                                            <img src={item?.video?.author?.avatar[0]?.url} alt="Logo" srcset="" />
                                        </div>
                                        <div className="channelname_views">

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
                                    <div className="descriptionSnippet">
                                        {
                                            item?.video?.descriptionSnippet ? <p>{item?.video?.descriptionSnippet}</p> : <p>{item?.video?.title}</p>
                                        }

                                    </div>

                                </div>

                            </div>
                        )
                    })

                }
            </div>

        </>


    )
}

export default SearchResult