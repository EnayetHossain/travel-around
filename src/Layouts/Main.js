import React from 'react';
import { Outlet } from 'react-router-dom';
import useSmoothScroll from '../Hooks/smoothScroll';
import Footer from '../Pages/Shared/Footer/Footer';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import "./Main.css";

const Main = () => {
    useSmoothScroll(true, "#main-content")

    const HideBrowserScrollbar = () => {
        let scrollHide = document.createElement("style");
        scrollHide.innerHTML = `body::-webkit-scrollbar {display: none;}`;
        document.head.appendChild(scrollHide);
    }

    HideBrowserScrollbar()

    return (
        <div id='main-content' data-scroll-container>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;