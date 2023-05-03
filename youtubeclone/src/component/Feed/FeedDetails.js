import React, { useEffect, useState } from 'react'
import { useDispatch } from "react-redux";
import { getData } from '../../feature/apicallSlice';
import Leftside from './LEFT_SIDE_OF_FEED/Leftside';
import "../Feed/FeedDetails.scss"
import VideoDetails from './VIDEODETAILS/VideoDetails';
function FeedDetails() {
    const [selectCategory, setSelectCategory] = useState(`New`)

    const Dispatch = useDispatch();
    useEffect(() => {
        Dispatch(getData(`search/?q=${selectCategory}`))//api call
    }, [Dispatch, selectCategory])
    return (
        <>
            <div className="feed">
                <div className="sideBar">

                    <Leftside selectCategory={selectCategory} setSelectCategory={setSelectCategory} />
                </div>
                <div className="videoDetails">

                    <VideoDetails />
                </div>
            </div>
        </>
    )
}

export default FeedDetails