import React from 'react';
import passport from "../assets/logo.png";
import { NavLink } from "react-router-dom";
import { FaDiscord, FaDribbble, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className=" bg-violet-500 bg-opacity-30 backdrop-filter backdrop-blur-lg pb-20 md:pb-0">
            <div className="w-[full] md:w-[80%] py-5 mx-auto px-10 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <NavLink to="/" className='flex items-center mb-4 sm:mb-0 w-20'>
                        <img src={passport} className="h-8 mr-3" alt="" />
                    </NavLink>

                    <ul className="flex gap-5 flex-wrap justify-between md:justify-end items-center mb-6 text-sm text-gray-200 sm:mb-0 ">
                        <NavLink to="/About" className="hover:underline">
                            Home
                        </NavLink>

                        <NavLink to="/Privacy_Policy" className="hover:underline">
                            Contact
                        </NavLink>

                        <NavLink to="/Licensing" className="hover:underline">
                            About
                        </NavLink>
                    </ul>
                </div>

                <hr className=" border-gray-200 sm:mx-auto my-5" />
                <div className=" flex justify-between items-center">
                    <ul className=' text-xs md:text-base text-gray-400'>
                        &copy; 2024 Siddhant Bilange
                    </ul>
                    <ul className="flex flex-wrap my-2 items-center justify-center gap-3 md:gap-8 text-gray-100">
                        <a href="#" className="hover:text-gray-300">
                            <FaLinkedin className=' text-xl' />
                        </a>

                        <a href="#" className="hover:text-gray-300">
                            <FaDiscord className=' text-xl' />
                        </a>

                        <a href="#" className="hover:text-gray-300">
                            <FaDribbble className=' text-xl' />
                        </a>

                        <a href="#" className="hover:text-gray-300">
                            <FaGithub className=' text-xl' />
                        </a>
                    </ul>
                </div>
            </div>
        </footer>


    )
};
``
export default Footer;