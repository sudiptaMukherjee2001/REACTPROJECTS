import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FeedDetails from './component/Feed/FeedDetails'
import Header from './component/Header/Header';
import SearchResult from './component/SearchResult/SearchResult';
import VideoInfo from './component/VideoInfo/VideoInfo';
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<FeedDetails />} />
        <Route path="/searchresult/:searchQuery" element={<SearchResult />} />
        <Route path="/VideoInfo/:choosevideo" element={<VideoInfo />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App