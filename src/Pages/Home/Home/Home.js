import React from 'react';
import About from '../About/About';
import Gallery from '../Gallery/Gallery';
import HeroSection from "../HeroSection/HeroSection";
import "./Home.css";

const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <About></About>
            <Gallery></Gallery>
        </div>
    );
};

export default Home;