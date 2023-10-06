import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React from 'react';
import useSmoothCarousel from '../../../Hooks/smoothCarousel';
import image1 from "../../../assets/images/1.jpg";
import image2 from "../../../assets/images/2.jpg";
import image3 from "../../../assets/images/3.jpg";
import image4 from "../../../assets/images/4.jpg";
import image5 from "../../../assets/images/5.jpg";
import image6 from "../../../assets/images/6.jpg";
import image7 from "../../../assets/images/7.jpg";
import image8 from "../../../assets/images/8.jpg";
import "./Gallery.css";

gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {
    useSmoothCarousel("#image-track", ".gallery-container", ".image", 1200);
    
    return (
        <section className='gallery-section desktop-max' data-scroll-section>
            <p className="indication">click and drag</p>
            <div className='gallery-container'>
                <p>Our gallery</p>

                <div id="image-track">
                    <img className="image" src={image1} draggable="false" alt="travel" />

                    <img className="image" src={image2} draggable="false" alt="travel" />

                    <img className="image" src={image3} draggable="false" alt="travel" />

                    <img className="image" src={image4} draggable="false" alt="travel" />

                    <img className="image" src={image5} draggable="false" alt="travel" />

                    <img className="image" src={image6} draggable="false" alt="travel" />

                    <img className="image" src={image7} draggable="false" alt="travel" />

                    <img className="image" src={image8} draggable="false" alt="travel" />
                </div>
            </div>
        </section>
    );
};

export default Gallery;