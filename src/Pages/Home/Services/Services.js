import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useEffect } from 'react';
import { VscLinkExternal } from 'react-icons/vsc';
import { Link } from 'react-router-dom';
import image10 from "../../../assets/images/10.jpg";
import image11 from "../../../assets/images/11.jpg";
import image9 from "../../../assets/images/9.jpg";
import "./Services.css";

const Services = () => {

    const handleMouseOver = (src) => {
        const image = document.querySelector(".services-images>.image");

        image.setAttribute("src", src)
        image.style.transform = "scale(1)";
        image.style.opacity = 1

        gsap.fromTo(image, { opacity: 0.7, scale: 1.1 }, { opacity: 1, scale: 1, duration: 0.5 });
    }

    useEffect(()=>{
        gsap.registerPlugin(ScrollTrigger);
        const image = document.querySelector(".services-images>.image");

        const animation = gsap.fromTo(image, {objectPosition: "50% 100%"}, {objectPosition: "50% 0%", duration: 1});

        ScrollTrigger.create({
            animation: animation,
            trigger: ".services-content",
            start: "top 60%",
            end: "bottom 60%",
            markers: false,
            scrub: 1.2
        })

    }, [])

    return (
        <section className='services-section desktop-max' data-scroll-section>
            <div className='services-container'>
                <p>our services</p>

                <div className='services-content'>
                    <div className='services-titles'>
                        <div className='link-wrapper'>
                            <Link className="service-link" to={"/"} onMouseOver={() => handleMouseOver(image9)}>

                                <span className="link-content">
                                    <span>Flights & Accommodations</span>
                                    <VscLinkExternal className="icon"></VscLinkExternal>
                                </span>

                                <img className="image" src={image9} draggable="false" alt="travel" />

                            </Link>

                        </div>

                        <div className='link-wrapper'>
                            <Link className="service-link" to={"/"} onMouseOver={() => handleMouseOver(image11)}>

                                <span className="link-content">
                                    <span>Guided Tours & Activities</span>
                                    <VscLinkExternal className="icon"></VscLinkExternal>
                                </span>

                                <img className="image" src={image11} draggable="false" alt="travel" />

                            </Link>

                        </div>

                        <div className='link-wrapper'>
                            <Link className="service-link" to={"/"} onMouseOver={() => handleMouseOver(image10)}>

                                <span className="link-content">
                                    <span>Customized Itineraries</span>
                                    <VscLinkExternal className="icon"></VscLinkExternal>
                                </span>

                                <img className="image" src={image10} draggable="false" alt="travel" />

                            </Link>


                        </div>
                    </div>

                    <div className='services-images'>
                        <img className="image" src={image9} draggable="false" alt="travel" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;