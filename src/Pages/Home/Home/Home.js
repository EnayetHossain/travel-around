import React from 'react';
import About from '../About/About';
import Gallery from '../Gallery/Gallery';
import HeroSection from "../HeroSection/HeroSection";
import Services from '../Services/Services';
import WhyUs from '../WhyUs/WhyUs';
import "./Home.css";

const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <About></About>
            <Gallery></Gallery>
            <WhyUs></WhyUs>
            <Services></Services>
        </div>
    );
};

export default Home;