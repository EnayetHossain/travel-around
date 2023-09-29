import gsap from 'gsap';
import React, { useEffect } from 'react';
import "./HeroSection.css";

const HeroSection = () => {
    useEffect(()=>{
        const elements = document.querySelectorAll(".first h1, .text-group h1, .end h1");
        
        // content reveal animation
        gsap.to(elements, {
            y: 0,
            stagger: 0.2,
            duration: 0.5,
            ease: "circ.out"
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