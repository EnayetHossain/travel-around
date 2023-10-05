import React, { useEffect } from 'react';
import scrollAnimation from '../../../Animations/ScrollAnimation';
import "./WhyUs.css";

const WhyUs = () => {
    useEffect(() => {
        const titles = document.querySelectorAll(".why-us-title h1, .why-us h1");
        const description = document.querySelector(".why-us-description");

        scrollAnimation(titles, ".why-us-content:before", description, ".why-us-section")

    }, [])
    return (
        <section className='why-us-section desktop-max' data-scroll-section>
            <div className='why-us-container'>
                <p>Why TravelAround</p>

                <div className='why-us-content'>

                    <div className='why-us-title'>
                        <h1>TRAVELING</h1>
                    </div>

                    <div className='why-us'>
                        <h1>HIGHER</h1>
                    </div>
                </div>

                <div className='why-us-description'>
                    <p>Our team takes the time to understand your unique preferences and interests, tailoring each itinerary to create a truly bespoke experience.</p>
                </div>
            </div>
        </section>
    );
};

export default WhyUs;