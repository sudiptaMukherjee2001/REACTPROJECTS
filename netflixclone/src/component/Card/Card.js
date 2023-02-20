import React from 'react'
import "./Card.css"
function Card({ title, arr = [] }) {
    let imageUrl = "https://image.tmdb.org/t/p/w500";
    return (
        <>
            <div className='heading'>{title}</div>
            <div className="box">
                {
                    arr.map((item) => {
                        return (
                            <div className='cardImage'>
                                <img src={`${imageUrl}${item.poster_path}`} alt="" srcset="" />

                            </div>

                        )
                    })
                }
            </div>


        </>
    )
}

export default Card