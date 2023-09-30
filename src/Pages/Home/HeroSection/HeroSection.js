import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useTextReveal from '../../../Hooks/TextReveal';
import "./HeroSection.css";


gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
    // text reveal animation
    useTextReveal(".first h1, .text-group h1, .end h1");

    useEffect(() => {
        
        // console.log(document.querySelector(".text-group h1:first-child"))
        const tl = gsap.timeline({ defaults: { duration: 0.5 } });
        const tl2 = gsap.timeline({defaults: {duration: 0.4}});

        tl.to(".text-group h1:first-child", {
            x: -30,
        }, "once").to(".text-group h1:last-child", {
            x: -70,
        }, "once").to(".end h1", {
            x: -230,
        }, "once")

        tl2.to(".about", {
            opacity: 1,
            delay: 1,
        }).to(".services",{
            opacity: 1
        }).to(".process", {
            opacity: 1
        });

        // on scroll animation
        ScrollTrigger.create({
            animation: tl,
            trigger: ".hero-content",
            toggleActions: "restart pause reverse none",
            start: "top 20%",
            markers: false,
            scrub: 1.5,
        });

    }, [])


    return (
        <div className='hero-section desktop-max'>
            <div className='about link'>
                <Link to="/about">Know More<br/>About Us</Link>
            </div>

            <div className='services link'>
                <Link to="/services">Our<br/>services</Link>
            </div>

            <div className='process link'>
                <Link to="/process">Our<br/>process</Link>
            </div>

            <div className='hero-content'>
                <div className='first'>
                    <h1>Explore the</h1>
                </div>

                <div className='text-group'>
                    <h1>World,</h1>
                    <h1>One Journey</h1>
                </div>

                <div className='end'>
                    <h1>at a Time</h1>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;