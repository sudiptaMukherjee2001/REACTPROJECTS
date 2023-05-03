import React from 'react'
import { useSelector } from 'react-redux'
import Videocard from '../Videocard/Videocard';
function VideoDetails() {
    const { initialData } = useSelector((state) => state.data);

    return (
        <>

            {
                initialData?.contents?.map((item, videoId) => {
                    return (

                        <Videocard
                            videoId={item?.video?.videoId}
                            channelName={item?.video?.author?.title}
                            thumbnails={item?.video?.thumbnails[0]}
                            avatar={item?.video?.author?.avatar[0]}
                            title={item?.video?.title}
                            verified={item?.video?.author?.badges[0]}
                            views={item?.video?.stats?.views}
                            publishedTime={item?.video?.publishedTimeText}
                        />
                    )
                })

            }
        </>

    )

}

export default VideoDetails