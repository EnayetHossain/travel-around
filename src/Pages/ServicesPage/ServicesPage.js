import React from 'react';
import { VscLinkExternal } from 'react-icons/vsc';
import { Link } from 'react-router-dom';
import "./ServicesPage.css";

const ServicesPage = () => {
    return (
        <div className='desktop-max'>

            <p className='service-description'>
                Our team takes the time to understand your unique preferences and interests, tailoring each itinerary to create a truly bespoke experience.
            </p>

            <div className='services-titles service-full'>
                <div className='link-wrapper'>
                    <Link className="service-link big-f" to={"/"}>
                        <span className="link-content">
                            <span>Flights & Accommodations</span>
                            <VscLinkExternal className="icon"></VscLinkExternal>
                        </span>
                    </Link>

                </div>

                <div className='link-wrapper'>
                    <Link className="service-link big-f" to={"/"}>

                        <span className="link-content">
                            <span>Guided Tours & Activities</span>
                            <VscLinkExternal className="icon"></VscLinkExternal>
                        </span>
                    </Link>

                </div>

                <div className='link-wrapper'>
                    <Link className="service-link big-f" to={"/"}>
                        <span className="link-content">
                            <span>Customized Itineraries</span>
                            <VscLinkExternal className="icon"></VscLinkExternal>
                        </span>
                    </Link>


                </div>
            </div>
        </div>
    );
};

export default ServicesPage;