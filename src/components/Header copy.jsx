import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png"
import {Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'

const Header = () => {
    let [open, setOpen] = useState(false);
    return (
        <>

            {/* here i was change fixed to relative */}
            <div className='shadow-md w-full relative top-0 left-0 z-10'> 
                <div className='md:flex items-center justify-between bg-gray-500 py-3 md:px-10 px-7'>
                        <NavLink to="/" className=' text-2xl cursor-pointer flex items-center gap-1'>
                            <img src={logo} className='h-12' />
                        </NavLink>
                        
                    <div onClick={() => setOpen(!open)} className='absolute right-8 top-5 cursor-pointer md:hidden w-7 h-7 text-white'>
                        {
                            open ? <XMarkIcon /> : <Bars3BottomRightIcon />
                        }
                    </div>
                    <ul className={`md:flex md:items-center md:pb-0 pb-20 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-19 duration-700' : 'top-[-490px]'}`}>
                        
                                <li className='md:ml-8 md:my-0 my-7 text-white mt-10 tracking-wider flex flex-col gap-9 sm:col-auto md:flex md:flex-row'>
                                    <NavLink to="/" className='hover:text-gray-700 duration-100'>
                                        Home
                                    </NavLink>

                                    <NavLink to="/Works" className='hover:text-gray-700 duration-100'>
                                        Works
                                    </NavLink>

                                    <NavLink to="/Contact" className='hover:text-gray-700 duration-100'>
                                        Contact
                                    </NavLink>

                                    <NavLink to="/About" className='hover:text-gray-700 duration-100'>
                                        About
                                    </NavLink>
                                    
                                </li>
                    </ul>
                </div>
            </div>
            </>
    )
}

export default Header;

