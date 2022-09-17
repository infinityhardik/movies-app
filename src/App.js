import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './screens/home/Home'
import Details from './screens/details/Details';
import defaultData from './assets/moviesData'



export default function App() {
    const [moviesData, setMoviesData] = useState(defaultData);
    const [movieInfo, setMovieInfo] = useState(defaultData[2]);

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home moviesData={moviesData} setMoviesData={setMoviesData} defaultData={defaultData} setMovieInfo={setMovieInfo} movieInfo={movieInfo} />} />
                    <Route path='details' element={<Details movieInfo={movieInfo} />}/>
                </Routes>
            </BrowserRouter>

            
        </>
    )
}
