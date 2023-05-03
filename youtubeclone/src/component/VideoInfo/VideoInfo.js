import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player/youtube'
import { useParams } from 'react-router-dom';
import "../VideoInfo/VideoInfo.scss"
import { useDispatch, useSelector } from "react-redux";
import { getData, allcomments, relatedContent } from "../../feature/apicallSlice"
import RelatedContent from './relatedContent/RelatedContent';
function VideoInfo() {
    const { choosevideo } = useParams();
    const [id, setId] = useState(choosevideo)

    const Dispatch = useDispatch();

    const { initialData, initialcomments, initialRelatedComments } = useSelector((state) => state.data);
    // console.log("initia data is", initialData);
    // console.log("initial comments", initialcomments)

    const { title, author, stats } = initialData
    // console.log("initial data", title, author?.avatar, author?.stats?.subscribers, author.stats.subscribersText,);
    // console.log("stats", stats?.likes, stats?.views, stats?.comments)

    useEffect(() => {
        setId(choosevideo)
        Dispatch(getData(`video/details/?id=${id}`))//api call for video details

        Dispatch(relatedContent(`video/related-contents/?id=${id}`))   //api call for related contents

    }, [Dispatch, id])
    console.log("id is", id)
    const displayComments = (id) => {
        //show comments
        Dispatch(allcomments(`video/comments/?id=${id}`))//api call for comments

    }




    return (
        <div className='videoinfo'>
            <div className="videoInfoLeft">

                <div className="videoBox">

                    <div className="player">
                        <ReactPlayer
                            url={`https://www.youtube.com/watch?v=${id}`}
                            controls
                            width="100%"
                        />
                    </div>
                    <div className="videoSpecification">
                        <div className="title">
                            {title}
                        </div>
                        <div className="aboutChannel">
                            <div className="left">
                                <div className="channelLogo">
                                    <img src={author?.avatar[0]?.url} alt="" srcset="" />

                                </div>
                                <div className="channelName_Subscriber">
                                    <div className="channelname">
                                        {author?.title}

                                    </div>
                                    <div className="subscriber">
                                        {author?.stats?.subscribers} Subscriber
                                    </div>

                                </div>
                                <div className="subBtn">
                                    <button>Subcriber</button>
                                </div>
                            </div>
                            <div className="right">

                                <div className="likes_views_comments">
                                    <button>
                                        {stats?.likes} Likes
                                    </button>
                                    <button>
                                        {stats?.views} Views
                                    </button>
                                    <button onClick={() => { displayComments(id) }}>
                                        {stats?.comments} comments
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <hr />
                <div className="comments">
                    {
                        initialcomments?.comments?.map((comment, commentId) => {
                            return (
                                <div className="box" key={commentId}>
                                    <div className="logo">
                                        <img src={comment?.author?.avatar[0]?.url} alt="" srcset="" />
                                    </div>
                                    <div className="title_publishedTimeText_comment">
                                        <div className="title_publishedTimeText">
                                            <div className="title">
                                                {comment?.author?.title}
                                            </div>
                                            <div className="publishedTimeText">
                                                {comment?.publishedTimeText}
                                            </div>

                                        </div>
                                        <div className="comment">
                                            {comment.content}
                                        </div>
                                    </div>
                                    {/* {console.log("comment is", comment)} */}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="videoInfoRight">

                <div className="suggestionSetion">
                    <RelatedContent initialRelatedComments={initialRelatedComments} setId={setId} />

                </div>
            </div>

        </div>
    )
}

export default VideoInfo