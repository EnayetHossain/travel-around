import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layouts/Main';
import AboutUs from '../Pages/AboutUs/AboutUs';
import Home from '../Pages/Home/Home/Home';
import NotFound from '../Pages/NotFound/NotFound';

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
            }
        ]
    }
]);