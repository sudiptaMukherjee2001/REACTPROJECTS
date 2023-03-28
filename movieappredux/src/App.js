import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from './component/Header/Header'
import Home from './component/Home/Home';
import Moviedetails from "./component/MovieDetails/Moviedetails";
import PageNotfound from './component/PageNotFound/Pagenotfound';
import Footer from "./component/footer/Footer"
import "./App.scss"
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route path="/movie/:imdbId" Component={Moviedetails} />
        <Route Component={PageNotfound} />
      </Routes>
      {/* <Pagenotfound /> */}
      <Footer />
    </BrowserRouter>
  )
}

export default App