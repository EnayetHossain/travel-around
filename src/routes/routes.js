import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layouts/Main';
import AboutUs from '../Pages/AboutUs/AboutUs';
import Contact from '../Pages/Contact/Contact';
import Home from '../Pages/Home/Home/Home';
import NotFound from '../Pages/NotFound/NotFound';
import ServicesPage from '../Pages/ServicesPage/ServicesPage';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <NotFound></NotFound>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },

            {
                path: "/about",
                element: <AboutUs></AboutUs>
            },

            {
                path: "/services",
                element: <ServicesPage></ServicesPage>
            },

            {
                path: "/contact-us",
                element: <Contact></Contact>
            }
        ]
    }
]);