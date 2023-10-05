import React, { useEffect } from 'react';
import scrollAnimation from '../../../Animations/ScrollAnimation';
import "./About.css";

const About = () => {

    useEffect(() => {
        const titles = document.querySelectorAll(".about-title h1, .mission-title h1");
        const description = document.querySelector(".about-description");

        scrollAnimation(titles, ".about-content:before", description, ".about-section")

    }, [])

    return (
        <section className='about-section desktop-max' data-scroll-section>
            <div className='about-container'>
                <p>About us</p>

                <div className='about-content'>

                    <div className='about-title'>
                        <h1>OUR STORY &</h1>
                    </div>

                    <div className='mission-title'>
                        <h1>OUR MISSION</h1>
                    </div>
                </div>

                <div className='about-description'>
                    <p>Established in 2023, TravelAround is a passionate team of travel enthusiasts dedicated to curating exceptional journeys for adventurers of all kinds. With a deep love for exploration and a wealth of industry experience, we set out to redefine travel experiences.</p>

                    {/* <p> At TravelAround, our mission is to inspire and empower travelers to discover the world's wonders with confidence and ease. We believe in crafting personalized itineraries that capture the essence of each destination, ensuring that every journey is an unforgettable adventure.</p> */}
                </div>
            </div>
        </section>
    );
};

export default About;