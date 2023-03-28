import React from 'react'
import { useSelector } from "react-redux"
import Moviecard from '../MovieCard/Moviecard';
import "../MovieListing/Movielist.scss"
function Movielist() {

    let allmovies = useSelector((State) => State.addmovie.MoviesIntialArray.Search);
    let allShows = useSelector((State) => State.addmovie.showinitialArray.Search)
    console.log("allmovies hein yah", allmovies);

    return (
        <div className='cardContainer'>
            {
                allmovies && allmovies.map((value, index) => {
                    return (


                        <Moviecard Data={value} />

                    )
                })
            }

            <h2 className='shows'>Shows</h2>

            {
                allShows && allShows.map((value, index) => {
                    return (

                        <Moviecard Data={value} />

                    )
                })
            }
        </div>

    )
}

export default Movielist
