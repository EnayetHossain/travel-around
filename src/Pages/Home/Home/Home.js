import React from 'react';
import About from '../About/About';
import HeroSection from "../HeroSection/HeroSection";
import "./Home.css";

const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <About></About>
        </div>
    );
};

export default Home;