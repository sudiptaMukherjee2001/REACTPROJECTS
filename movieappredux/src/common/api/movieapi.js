import axios from "axios";


let movieData = axios.create({
    baseURL: "http://www.omdbapi.com"
})

export default movieData;