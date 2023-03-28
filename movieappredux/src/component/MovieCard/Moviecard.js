import React from 'react'
import { Link } from 'react-router-dom'
import "../MovieCard/Moviecard.scss"

function Moviecard(props) {
    let { Data } = props
    console.log("it is a props", Data)

    return (
        <Link to={`/movie/${Data.imdbID}`}>
            <div className="card">
                <div className="image">

                    <img src={Data.Poster} alt="" srcset="" />
                </div>
                <div className="text">
                    <h2>
                        {Data.Title}
                    </h2>
                    <h3>

                        {Data.Year}
                    </h3>
                </div>


            </div>
        </Link>

    )

}

export default Moviecard