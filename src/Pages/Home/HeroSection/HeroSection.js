import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useTextReveal from '../../../Hooks/TextReveal';
import isTouchDevice from '../../../utils/touchDevice';
import "./HeroSection.css";


gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
    // text reveal animation
    useTextReveal(".first h1, .text-group h1, .end h1");
    // console.log(window.scrollY)
    useEffect(() => {

        // animation timelines
        const tl = gsap.timeline({ defaults: { duration: 0.5 } });
        const tl2 = gsap.timeline({ defaults: { duration: 0.4 } });
        const isTouch = isTouchDevice();

        if (!isTouch) {
            
            // text animation
            tl.fromTo(".text-group h1:first-child", {
                x: "0%"
            }, {
                x: "-8%",
            }, "once").fromTo(".text-group h1:last-child", {
                x: "0%"
            }, {
                x: "-12%",
            }, "once").fromTo(".end h1", {
                x: "0%"
            }, {
                x: "-22%",
            }, "once")

            // animate text on scroll
            ScrollTrigger.create({
                animation: tl,
                trigger: ".hero-content",
                toggleActions: "play pause reverse none", //onEnter, onLeave, onEnterBAck, onLeaveBack
                start: "top 20%",
                markers: false,
                scrub: 1.2,
            });
        }


        // floating links animation
        tl2.to(".about", {
            opacity: 1,
            delay: 1,
        }).to(".services", {
            opacity: 1
        }).to(".process", {
            opacity: 1
        });

    }, [])


    return (
        <section className='hero-section desktop-max' data-scroll-section>
            <div className='about link'>
                <Link to="/about">Know More<br />About Us</Link>
            </div>

            <div className='services link'>
                <Link to="/services">Our<br />services</Link>
            </div>

            <div className='process link'>
                <Link to="/process">Our<br />process</Link>
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
        </section>
    );
};

export default HeroSection;