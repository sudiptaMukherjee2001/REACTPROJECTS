import React, { useEffect } from 'react'
import "../Home/Home.scss"
import Movielist from "../MovieListing/Movielist"
import { useDispatch } from "react-redux";
import { getAllmovie, getAllShow } from "../../feature/MovieSlice"

function Home() {

    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllmovie());
        dispatch(getAllShow())
    }, [dispatch])


    return (
        <div className="Home">
            <div className="banner_img"></div>
            <Movielist />
        </div>
    )
}

export default Home