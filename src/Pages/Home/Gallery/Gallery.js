import React from 'react';
import useSmoothCarousel from '../../../Hooks/smoothCarousel';
import "./Gallery.css";

const Gallery = () => {
    useSmoothCarousel("#image-track", ".gallery-container", ".image", 1200)

    return (
        <section className='gallery-section desktop-max' data-scroll-section>
            <div className='gallery-container'>
                <p>Our gallery</p>

                <div id="image-track">
                    <img className="image" src="https://images.unsplash.com/photo-1520101244246-293f77ffc39e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" draggable="false" alt="travel" />

                    <img className="image" src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" draggable="false" alt="travel" />

                    <img className="image" src="https://images.unsplash.com/photo-1491466424936-e304919aada7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80" draggable="false" alt="travel" />

                    <img className="image" src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1421&q=80" draggable="false" alt="travel" />

                    <img className="image" src="https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" draggable="false" alt="travel" />

                    <img className="image" src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1474&q=80" draggable="false" alt="travel" />
                    
                    <img className="image" src="https://images.unsplash.com/photo-1505832018823-50331d70d237?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1508&q=80" draggable="false" alt="travel" />
                    
                    <img className="image" src="https://images.unsplash.com/photo-1503457574462-bd27054394c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" draggable="false" alt="travel" />
                </div>
            </div>
        </section>
    );
};

export default Gallery;