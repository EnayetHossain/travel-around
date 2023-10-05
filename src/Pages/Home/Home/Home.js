import React from 'react';
import About from '../About/About';
import Gallery from '../Gallery/Gallery';
import HeroSection from "../HeroSection/HeroSection";
import WhyUs from '../WhyUs/WhyUs';
import "./Home.css";

const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <About></About>
            <Gallery></Gallery>
            <WhyUs></WhyUs>
        </div>
    );
};

export default Home;