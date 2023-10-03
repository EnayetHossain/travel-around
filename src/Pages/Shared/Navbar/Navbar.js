import gsap from 'gsap';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MenuAnimation from '../../../Animations/MenuAnimation';
import "./Navbar.css";

const Navbar = () => {
    // get current user preferred mode
    const [mode, setMode] = useState(localStorage.getItem("mode") || "dark");
    const [open, setOpen] = useState(false);

    useEffect(() => {
        // toggle dark and light mode
        localStorage.setItem("mode", mode);

        if (mode === 'dark') {
            document.body.classList.remove('light-mode');
        } else {
            document.body.classList.add('light-mode');
        }

    }, [mode]);

    useEffect(() => {
        // navigation menu animation
        gsap.fromTo(".navigation", { y: -100 }, { y: 0, duration: 1, ease: "power4.out" });
    }, [])

    MenuAnimation(open)

    return (
        <nav className='navigation desktop-max'>
            <div className={`main-menu ${open ? "main-menu-active" : ""}`}>
                <div className='menu-title'>
                    <h1>MENU</h1>
                </div>

                <div className='menu-options-container'>
                    <div className='about-us-container'>
                        <p>who we are</p>
                        
                        <ul className='about-us-options'>
                            <li className='menu-option'><Link to={"/about"}>Know about us</Link></li>
                            <li className='menu-option'><Link to={"/services"}>Services</Link></li>
                        </ul>
                    </div>

                    <div className='contact-us-container'>
                        <p>Social links</p>

                        <ul className='social-options'>
                            <li className='social-option'><Link to={"/facebook"}>Facebook</Link></li>
                            <li className='social-option'><Link to={"/linkedin"}>Linkedin</Link></li>
                            <li className='social-option'><Link to={"/youtube"}>Youtube</Link></li>
                            <li className='social-option'><Link to={"/twitter"}>Twitter</Link></li>
                            <li className='social-option'><Link to={"/instagram"}>Instagram</Link></li>
                        </ul>
                    </div>

                </div>
            </div>

            <div className='logo'>
                <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400">
                    <path d="M200,0C89.54,0,0,89.54,0,200S89.54,400,200,400s200-89.54,200-200S310.46,0,200,0Zm49.05,314.46a46.26,46.26,0,0,1-65.4,0h0L134.59,265.4V200H200l49.06,49.05A46.28,46.28,0,0,1,249.05,314.46ZM265.41,200H200L151,150.94a46.24,46.24,0,0,1,65.4-65.4l49.06,49.05Z" fill="#fff5e5" fillRule="evenodd" />
                </svg>

                <Link className='logo-text' to={"/"}>travelar.</Link>
            </div>

            <div className='ham-bar' onClick={() => setOpen(!open)}>
                <div className='top-bar'></div>
                <div className='bottom-bar'></div>
            </div>

            <div className='menu-options'>
                <ul className='menu-items'>
                    <li className='menu-item'><Link to={"/about"}>About us</Link></li>
                    <li className='menu-item'><Link to={"/services"}>Services</Link></li>
                </ul>

                <div className='theme'>
                    <div className='circle' title='Change mode' onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')}>
                        <div className='inner-circle'></div>
                    </div>
                </div>
            </div>

        </nav>
    );
};

export default Navbar;