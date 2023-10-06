import React from 'react';
import About from '../About/About';
import ContactUs from '../ContactUs/ContactUs';
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
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;