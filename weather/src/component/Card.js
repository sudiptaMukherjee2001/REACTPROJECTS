import React, { useEffect, useState } from 'react'
import axios from "axios"
import "../style/Card.css"
function Card() {
    let [city, setCity] = useState();
    let [resData, setResData] = useState({})


    useEffect(() => {
        async function getData() {
            let res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=defa3f02991764767f57fa4bd61d1d94`);
            setResData(res.data);
            console.log(res.data.main.temp)
        }
        getData();
    }, [city])
    console.log("it is", resData);
    return (
        <>
            <h1>
                Weather Buddy
            </h1>
            <div className="card">
                <div className="searchbox">

                    <input type="text" name="" id="" value={city} onChange={
                        (e) => { setCity(e.target.value) }} />
                </div>
                <div className="cityName">
                    City name:=<h2>{resData.name}</h2>
                </div>
                {/* Optional chaining operator "?." */}
                <div className="weatherInfo">

                    <div className="temp">
                        <p>Temp:{resData?.main?.temp}</p>

                    </div>

                    <div className="humidity">

                        <p>Humidity:{resData?.main?.humidity}</p>
                    </div>
                    <div className="presure">

                        <p>pressure:{resData?.main?.pressure}</p>
                    </div>
                    <div className="feelsLike">

                        <p>feels_like:{resData?.main?.feels_like}</p>
                    </div>

                </div>


            </div>

        </>
    )
}

export default Card