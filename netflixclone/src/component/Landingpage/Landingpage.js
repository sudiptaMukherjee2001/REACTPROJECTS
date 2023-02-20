import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Card from '../Card/Card'
import "./Landingpage.css"
import axios from 'axios'
import { BsFillCaretRightFill } from "react-icons/bs";
import { BsPlusLg } from "react-icons/bs";
function Landingpage() {
    let api = "f2fda9230b1356e9533bb1b89ee2a2db";
    let [respMovieData, setRespMovieData] = useState([]);
    let [respTvShowData, setRespTvData] = useState([]);
    let [respTrendingData, setRespTresndingData] = useState([]);
    let [banner, showBanner] = useState([])
    let imageUrl = "https://image.tmdb.org/t/p/w500";
    useEffect(() => {
        // FETCH MOVIE DATA
        let fetchMovieData = async () => {
            let res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${api}&language=en-US&page=1`);
            // console.log(res.data.results);
            setRespMovieData(res.data.results)
        }
        fetchMovieData();
        //  FETCH TV SHOWS DATA
        let fetchTvshowsData = async () => {
            let res = await axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=${api}&language=en-US&page=1`);
            // console.log(res.data.results);
            setRespTvData(res.data.results);
        }
        fetchTvshowsData();

        // TRENDING Data
        let fetchTrendingData = async () => {
            let res = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${api}`);
            // console.log(res.data.results);
            setRespTresndingData(res.data.results);
            showBanner(res.data.results[1]);
        }
        fetchTrendingData();
    }, [])

    return (
        <>
            <Navbar />
            <div className="banner">
                {console.log("it is a res.data.results[0]", banner)}
                <img src={`${imageUrl}${banner.backdrop_path}`} alt="" srcset="" />
                <h1>
                    {`${banner.original_title}`}
                </h1>
                <p>
                    {`${banner.overview}`}
                </p>
                <button className='play'><BsFillCaretRightFill />Play</button>
                <button className='plus'><BsPlusLg />My List</button>
            </div>
            <Card title={"Trending series"} arr={respTrendingData} />
            <Card title={"Popular on movies"} arr={respMovieData} />

            <Card title={"Tv shows"} arr={respTvShowData} />
        </>
    )
}

export default Landingpage