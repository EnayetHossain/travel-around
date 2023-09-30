import React from 'react';
import { Outlet } from 'react-router-dom';
import useSmoothScroll from '../Hooks/smoothScroll';
import Footer from '../Pages/Shared/Footer/Footer';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const Main = () => {
    // smooth scroll for whole page
    useSmoothScroll("#root", 0.1);
    
    return (
        <div id='main-content'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;