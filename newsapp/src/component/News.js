import React, { useEffect, useState } from 'react'
// import Data from "./data"
import axios from "axios"
import "../style.css/News.css"
function News() {
    // let [show, setShow] = useState(false);
    let [resp, setresp] = useState([])
    console.log("it is aa", resp)
    useEffect(() => {
        //api fetch using axios
        async function getdata() {
            let apikey = "2a461da929b849eea1d0080bf78eb824";
            let res = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=${apikey}`);
            setresp(res.data.articles);
            console.log("res.data.articles", res.data.articles)
        }
        getdata();
    }, [])

    return (
        <>
            <h1>News App</h1>
            <div className="news">
                {
                    resp.map((item, index) => {
                        return (
                            <div className="card">
                                <div className="image">
                                    <img src={item.urlToImage} alt="logo" srcset="" />
                                </div>
                                <div className="content">
                                    <p>
                                        {item.description}

                                    </p>
                                </div>
                            </div>
                        )
                    })
                }

            </div>

        </>
    )
}

export default News