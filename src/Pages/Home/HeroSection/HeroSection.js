import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useEffect } from 'react';
import useTextReveal from '../../../Hooks/TextReveal';
import "./HeroSection.css";


gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
    // text reveal animation
    useTextReveal(".first h1, .text-group h1, .end h1");

    useEffect(() => {
        
        // console.log(document.querySelector(".text-group h1:first-child"))
        const tl = gsap.timeline({ defaults: { duration: 0.5 } });

        tl.to(".text-group h1:first-child", {
            x: -30,
        }, "once").to(".text-group h1:last-child", {
            x: -70,
        }, "once").to(".end h1", {
            x: -230,
        }, "once")

        // on scroll animation
        ScrollTrigger.create({
            animation: tl,
            trigger: ".hero-content",
            toggleActions: "restart pause reverse none",
            start: "top 20%",
            markers: false,
            scrub: 1,
        });

    }, [])


    return (
        <div className='hero-section desktop-max'>
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