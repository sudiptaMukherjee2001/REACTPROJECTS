import React, { useEffect } from 'react'
import { selectedMovieAndShows } from "../../feature/MovieSlice"
import { removeChoosedMovieAndSHows } from "../../feature/MovieSlice"
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import "../MovieDetails/Moviedetails.scss"
function Moviedetails() {
    let dispatch = useDispatch();


    let { imdbId } = useParams(); //useParams hook in React Router is used to access parameters in the current route, which can be any values specified in the URL path, not just the ID.
    let choosedMovieOrShow = useSelector((State) => State.addmovie.initialSelectedMovieOrshow)
    console.log("it is result from useSelector", choosedMovieOrShow)

    useEffect(() => {
        dispatch(selectedMovieAndShows(imdbId));
        //useEffect cleanup function
        return () => {
            dispatch(removeChoosedMovieAndSHows())
        }
    }, [imdbId, dispatch])
    return (
        <div className="banner">
            <div className="aboutMovie">
                <div className="movieDetailsTitle">
                    <h1>
                        {choosedMovieOrShow.Title}
                    </h1>
                </div>
                <div className="movieInfo">
                    <ul>
                        <li>
                            IMDB Rating⭐:{choosedMovieOrShow.imdbRating}
                        </li>
                        <li>
                            IMDB Votes👍:{choosedMovieOrShow.imdbVotes}
                        </li>
                        <li>RunTime▶️:{choosedMovieOrShow.Runtime}</li>
                        <li>Year🗓️:{choosedMovieOrShow.Year}</li>
                    </ul>
                </div>
                <div className="description">
                    {choosedMovieOrShow.Plot}
                </div>
                <div className="otherDetails">
                    <ul>
                        <li>
                            Director
                            <span className='director'>
                                {choosedMovieOrShow.Director}
                            </span>
                        </li>
                        <li>
                            Stars
                            <span className='stars'>
                                {choosedMovieOrShow.Actors}
                            </span>
                        </li>
                        <li>
                            Generes
                            <span className='generes'>
                                {choosedMovieOrShow.Genre}
                            </span>
                        </li>
                        <li>
                            Languages
                            <span className='language'>
                                {choosedMovieOrShow.Language}
                            </span>
                        </li>
                        <li>
                            Awards
                            <span className='awards'>
                                {choosedMovieOrShow.Awards}
                            </span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="moviePoster">
                <img src={choosedMovieOrShow.Poster} alt="" srcset="" />
            </div>
        </div>

    )
}

export default Moviedetails