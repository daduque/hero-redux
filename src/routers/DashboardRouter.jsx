import React from 'react'
import { Routes, Route } from "react-router-dom";
import DcScreen from '../components/dc/DcScreen';
import HeroScreen from '../components/heroes/HeroScreen';
import MarvelScreen from '../components/marvel/MarvelScreen';
import SearchScreen from '../components/search/SearchScreen';
import Navbar from '../components/ui/Navbar'

const DashboardRouter = () => {
    return (
        <>
            <Navbar />
            <div className="container mt-5">

            <Routes>
                <Route path="dc" element={<DcScreen />} />
                <Route path="marvel" element={<MarvelScreen />} />
                <Route path="search" element={<SearchScreen />} />
                <Route path="hero/:heroId" element={<HeroScreen />} />
                
                <Route path="/" element={<MarvelScreen />} />
            </Routes>
            </div>
        </>
    )
}

export default DashboardRouter
