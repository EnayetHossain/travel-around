import gsap from 'gsap';
import CSSRulePlugin from 'gsap/CSSRulePlugin';
import React from 'react';
import { VscLinkExternal } from 'react-icons/vsc';
import { Link } from 'react-router-dom';
import "./Services.css";


gsap.registerPlugin(CSSRulePlugin);

const Services = () => {

    const handleMouseOver = (src) => {
        const image = document.querySelector(".services-images>.image");

        image.setAttribute("src", src)
        image.style.transform = "scale(1)";
        image.style.opacity = 1

        gsap.fromTo(image, { opacity: 0.7, scale: 1.1 }, { opacity: 1, scale: 1, duration: 0.5 });
    }

    return (
        <section className='services-section desktop-max' data-scroll-section>
            <div className='services-container'>
                <p>our services</p>

                <div className='services-content'>
                    <div className='services-titles'>
                        <div className='link-wrapper'>
                            <Link className="service-link" to={"/"} onMouseOver={() => handleMouseOver("https://plus.unsplash.com/premium_photo-1677343210638-5d3ce6ddbf85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1376&q=80")}>

                                <span className="link-content">
                                    <span>Flights & Accommodations</span>
                                    <VscLinkExternal className="icon"></VscLinkExternal>
                                </span>

                                <img className="image" src="https://plus.unsplash.com/premium_photo-1677343210638-5d3ce6ddbf85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1376&q=80" draggable="false" alt="travel" />

                            </Link>

                        </div>

                        <div className='link-wrapper'>
                            <Link className="service-link" to={"/"} onMouseOver={() => handleMouseOver("https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80")}>

                                <span className="link-content">
                                    <span>Guided Tours & Activities</span>
                                    <VscLinkExternal className="icon"></VscLinkExternal>
                                </span>

                                <img className="image" src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" draggable="false" alt="travel" />

                            </Link>

                        </div>

                        <div className='link-wrapper'>
                            <Link className="service-link" to={"/"} onMouseOver={() => handleMouseOver("https://images.unsplash.com/photo-1499403030326-90733b91b392?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80")}>

                                <span className="link-content">
                                    <span>Customized Itineraries</span>
                                    <VscLinkExternal className="icon"></VscLinkExternal>
                                </span>

                                <img className="image" src="https://plus.unsplash.com/premium_photo-1677343210638-5d3ce6ddbf85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1376&q=80" draggable="false" alt="travel" />

                            </Link>


                        </div>
                    </div>

                    <div className='services-images'>
                        <img className="image" src="https://plus.unsplash.com/premium_photo-1677343210638-5d3ce6ddbf85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1376&q=80" draggable="false" alt="travel" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;