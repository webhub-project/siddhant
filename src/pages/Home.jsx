import React, { useEffect, useRef, useState } from "react";
import passport from "../assets/userr.png";
import Edu from "../assets/Education.png";
import Exp from "../assets/experiance.png";
import { NavLink } from "react-router-dom";
import Typed from 'react-typed';
import blob from "../assets/Gradient_blob.svg";
import Ellipse_1 from "../assets/shapes/Ellipse 1.svg";
import Ellipse_2 from "../assets/shapes/Ellipse 2.svg";
import Ellipse_3 from "../assets/shapes/Ellipse 3.svg";

const RevealOnScroll = ({ children }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const onWindScroll = () => {
            const element = ref.current;
            if (element) {
                const { top } = element.getBoundingClientRect();
                const isVisible = top < window.innerHeight;
                setIsVisible(isVisible);
            }
        };

        window.addEventListener("scroll", onWindScroll);
        return () => {
            window.removeEventListener("scroll", onWindScroll);
        };
    }, []);

    const classes = `transition-opacity duration-1000
        ${isVisible ? "opacity-100" : "opacity-0"
        }`;

    return (
        <div ref={ref} className={classes}>
            {children}
        </div>
    );
};

const Home = () => {
    return (
        <>
            <section className="mx-0 md:mx-20 relative overflow-hidden mb-10 font-[normal] h-[90vh]">
                <div className="flex justify-between mx-auto py-20 px-10 md:px-20 h-[70vh] md:h-[80vh]">
                    <div className="place-self-center md:h-screen flex flex-col justify-center md:justify-center">
                        <h1 className="text-[1.5em] md:text-3xl mb-4 text-gray-100">HEY! I AM</h1>
                        <h1 className="my-2 text-[1.7rem] md:text-4xl lg:text-5xl  tracking-wider leading-10 text-black">
                            <span className="bg-violet-500 py-2 font-bold">
                                SIDDHANT BILANGE
                            </span>
                        </h1>
                        <Typed
                            className="md:max-w-lg tracking-wider md:mt-4 md:my-2 text-2xl md:text-3xl text-gray-400 w-[90vw]"
                            strings={['Frontend Developer', 'UI/UX Designer']}
                            typeSpeed={80}
                            backSpeed={60}
                            loop
                        />
                        <p className=" w-[90%] md:w-[80%] lg:w-[60%] text-sm tracking-wide mt-1 mb-8 md:mt-3 md:mb-6  md:text-lg text-gray-400">
                            Welcome to my corner of the web, where pixels come to life and user journeys are my playground.
                        </p>
                        <div className="flex flex-wrap">

                            <NavLink to="/Resume" className=" mr-3 inline-flex items-center justify-center py-2 px-5 w-30 md:px-5 md:w-44 md:py-3 text-sm md:text-lg text-center tracking-wider bg-gray-200 text-gray-800 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-2 focus:ring-gray-100 ">
                                Resume
                            </NavLink>
                            <NavLink to="/Contact" className="inline-flex items-center justify-center py-2 px-5 w-30 md:px-5 md:w-44 md:py-3 text-sm md:text-lg text-center tracking-wider  text-gray-300 border border-gray-300 rounded-lg hover:ring-gray-100 hover:text-gray-100 hover:ring-1 focus:ring-1 focus:ring-gray-100">
                                Hire Me
                                <svg className="w-5 h-5 ml-2 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            </NavLink>
                        </div>

                    </div>

                    <div className="hidden lg:flex lg:items-center justify-center overflow-hidden mr-10">
                        <img src={passport} alt="mockup" className=" bg-violet-500 rounded-[3em] z-10 bg-gradient-to-r " />
                    </div>
                </div>
            </section>

            <section className="mx-0 md:mx-20 relative overflow-hidden mb-10 ">
                <div className="text text-center">
                    <h2 className="text-gray-500 leading-10 tracking-wider">Why choose me</h2>
                    <h1 className="text-xl tracking-wider m-auto w-60 md:w-full md:text-2xl text-violet-400 text-center mb-10">My Expertise Area</h1>
                </div>
                <RevealOnScroll>
                    <div className="grid gap-0 md:gap-2 md:grid-cols-1 lg:grid-cols-3 md:mx-10 grid-cols-1 mx-auto px-10 md:px-4">
                        <div className="flex flex-col py-4 px-0 md:px-0 lg:px-5 md:py-5 rounded-xl overflow-hidden">
                            <h2 className="mb-3 text-gray-300 tracking-wider">C</h2>
                            <div className="w-full bg-gray-200 rounded-full h-2.5">
                                <div className="bg-gradient-to-l from-violet-500 via-violet-400 to-violet-800 h-2.5 rounded-full w-[70%]"></div>
                            </div>
                        </div>
                        <div className="flex flex-col py-4 px-0 md:px-0 lg:px-5 md:py-5 rounded-xl overflow-hidden">
                            <h2 className="mb-3 text-gray-300 tracking-wider">Html</h2>
                            <div className="w-full bg-gray-200 rounded-full h-2.5">
                                <div className="bg-gradient-to-l from-violet-500 via-violet-400 to-violet-800 h-2.5 rounded-full w-[80%]"></div>
                            </div>
                        </div>
                        <div className="flex flex-col py-4 px-0 md:px-0 lg:px-5 md:py-5 rounded-xl overflow-hidden">
                            <h2 className="mb-3 text-gray-300 tracking-wider">CSS</h2>
                            <div className="w-full bg-gray-200 rounded-full h-2.5">
                                <div className="bg-gradient-to-l from-violet-500 via-violet-400 to-violet-800 h-2.5 rounded-full w-[80%]"></div>
                            </div>
                        </div>
                        <div className="flex flex-col py-4 px-0 md:px-0 lg:px-5 md:py-5 rounded-xl overflow-hidden">
                            <h2 className="mb-3 text-gray-300 tracking-wider">SCSS (SASS)</h2>
                            <div className="w-full bg-gray-200 rounded-full h-2.5">
                                <div className="bg-gradient-to-l from-violet-500 via-violet-400 to-violet-800 h-2.5 rounded-full w-[75%]"></div>
                            </div>
                        </div>
                        <div className="flex flex-col py-4 px-0 md:px-0 lg:px-5 md:py-5 rounded-xl overflow-hidden">
                            <h2 className="mb-3 text-gray-300 tracking-wider">JavaScript</h2>
                            <div className="w-full bg-gray-200 rounded-full h-2.5">
                                <div className="bg-gradient-to-l from-violet-500 via-violet-400 to-violet-800 h-2.5 rounded-full w-[60%]"></div>
                            </div>
                        </div>
                        <div className="flex flex-col py-4 px-0 md:px-0 lg:px-5 md:py-5 rounded-xl overflow-hidden">
                            <h2 className="mb-3 text-gray-300 tracking-wider">REACT</h2>
                            <div className="w-full bg-gray-200 rounded-full h-2.5">
                                <div className="bg-gradient-to-l from-violet-500 via-violet-400 to-violet-800 h-2.5 rounded-full w-[50%]"></div>
                            </div>
                        </div>
                        <div className="flex flex-col py-4 px-0 md:px-0 lg:px-5 md:py-5 rounded-xl overflow-hidden">
                            <h2 className="mb-3 text-gray-300 tracking-wider">Tailwind Css</h2>
                            <div className="w-full bg-gray-200 rounded-full h-2.5">
                                <div className="bg-gradient-to-l from-violet-500 via-violet-400 to-violet-800 h-2.5 rounded-full w-[55%]"></div>
                            </div>
                        </div>
                        <div className="flex flex-col py-4 px-0 md:px-0 lg:px-5 md:py-5 rounded-xl overflow-hidden">
                            <h2 className="mb-3 text-gray-300 tracking-wider">PHP</h2>
                            <div className="w-full bg-gray-200 rounded-full h-2.5">
                                <div className="bg-gradient-to-l from-violet-500 via-violet-400 to-violet-800 h-2.5 rounded-full w-[60%]"></div>
                            </div>
                        </div>
                        <div className="flex flex-col py-4 px-0 md:px-0 lg:px-5 md:py-5 rounded-xl overflow-hidden">
                            <h2 className="mb-3 text-gray-300 tracking-wider">MySql</h2>
                            <div className="w-full bg-gray-200 rounded-full h-2.5">
                                <div className="bg-gradient-to-l from-violet-500 via-violet-400 to-violet-800 h-2.5 rounded-full w-[65%]"></div>
                            </div>
                        </div>
                        <div className="flex flex-col py-4 px-0 md:px-0 lg:px-5 md:py-5 rounded-xl overflow-hidden">
                            <h2 className="mb-3 text-gray-300 tracking-wider">UI</h2>
                            <div className="w-full bg-gray-200 rounded-full h-2.5">
                                <div className="bg-gradient-to-l from-violet-500 via-violet-400 to-violet-800 h-2.5 rounded-full w-[68%]"></div>
                            </div>
                        </div>

                        <div className="flex flex-col py-4 px-0 md:px-0 lg:px-5 md:py-5 rounded-xl overflow-hidden">
                            <h2 className="mb-3 text-gray-300 tracking-wider">Figma</h2>
                            <div className="w-full bg-gray-200 rounded-full h-2.5">
                                <div className="bg-gradient-to-l from-violet-500 via-violet-400 to-violet-800 h-2.5 rounded-full w-[68%]"></div>
                            </div>
                        </div>

                        <div className="flex flex-col py-4 px-0 md:px-0 lg:px-5 md:py-5 rounded-xl overflow-hidden">
                            <h2 className="mb-3 text-gray-300 tracking-wider">Github</h2>
                            <div className="w-full bg-gray-200 rounded-full h-2.5">
                                <div className="bg-gradient-to-l from-violet-500 via-violet-400 to-violet-800 h-2.5 rounded-full w-[50%]"></div>
                            </div>
                        </div>

                    </div>
                </RevealOnScroll>
            </section>

            <section className="py-28 md:20 mx-0 md:mx-20 relative overflow-hidden">
                <h1 className="text-gray-500 leading-10 text-center tracking-wider">My Qualification</h1>
                <h1 className="text-xl tracking-wider m-auto w-60 md:w-full md:text-2xl text-violet-400 text-center mb-10">Awsome Journey</h1>

                <div className="grid w-[70%] md:w-[90%] lg:w-[110%] lg:ml-36 mt-0 grid-cols-1 justify-stretch mx-16 md:grid-cols-1 lg:grid-cols-2 mb-20">
                    <div className="flex flex-col">
                        <div className=" flex items-center overflow-hidden -ml-3 md:-ml-5 lg:-ml-6 mb-3">
                            <i className="w-9 md:w-14 mr-5"><img src={Edu} alt="" /></i>
                            <h2 className="text-xl mt-[-.3em] tracking-wider  text-white">Education</h2>
                        </div>

                        <div className="bottom flex flex-col">
                            <RevealOnScroll>
                                <div className="box flex mb-10">
                                    <div className="bg-violet-500 w-[5px] mr-5"></div>
                                    <div className="right gap-1 flex flex-col -mt-4">
                                        <h5 className="mb-1 mt-3 text-[1em] md:text-xl text-white tracking-wide">Maharashtra Institute of technology</h5>
                                        <h3 className="text-gray-400">CH. Sambhaji Nagar</h3>
                                        <span className="my-3 text-sm tracking-wider text-violet-400">Btech - Computer Science And Engineering</span>
                                        <h2 className=" text-xs text-gray-500 tracking-wider">2021 - Pursing</h2>
                                    </div>
                                </div>
                            </RevealOnScroll>

                            <RevealOnScroll>
                                <div className="box flex mb-10">
                                    <div className="bg-violet-500 w-[5px] mr-5"></div>
                                    <div className="right right gap-1 flex flex-col -mt-4">
                                        <h5 className="mb-1 mt-3 text-[1em] md:text-xl text-white tracking-wide">Marathwada Institute of technology</h5>
                                        <h3 className="text-gray-400">CH. Sambhaji Nagar</h3>
                                        <span className="my-3 text-sm tracking-wider text-violet-400">Diploma - Computer Engineering</span>
                                        <h2 className=" text-xs text-gray-500 tracking-wider">2017 - 21</h2>
                                    </div>
                                </div>
                            </RevealOnScroll>

                            <RevealOnScroll>
                                <div className="box flex">
                                    <div className="bg-violet-500 w-[3px] md:w-[5px] mr-5"></div>
                                    <div className="right right gap-1 flex flex-col -mt-4">
                                        <h5 className="mb-1 mt-3 text-[1em] md:text-xl text-white tracking-wide">UPS</h5>
                                        <h3 className="text-gray-400">CH. Sambhaji Nagar</h3>
                                        <span className="my-3 text-sm tracking-wider text-violet-400">SSC</span>
                                        <h2 className=" text-xs text-gray-500 tracking-wider">2017</h2>
                                    </div>
                                </div>
                            </RevealOnScroll>
                        </div>
                    </div>
                    <div className="flex flex-col mt-20 md:mt-20 lg:mt-0">
                        <div className=" flex items-center overflow-hidden -ml-3 md:-ml-5 lg:-ml-4 mb-3">
                            <i className="w-8 mb-4 md:w-10 mr-5"><img src={Exp} alt="" /></i>
                            <h2 className="text-xl mt-[-.4em] md:mt-[-.7em] tracking-wider  text-white">Experiance</h2>
                        </div>

                        <div className="bottom flex flex-col">
                            <RevealOnScroll>
                                <div className="box flex mb-10">
                                    <div className="bg-violet-500 w-[3px] md:w-[5px] mr-5"></div>
                                    <div className="right right gap-1 flex flex-col -mt-4">
                                        <h5 className="mb-1 mt-3 text-[1em] md:text-xl text-white tracking-wide">Oasis Infobyte Education</h5>
                                        <h3 className="text-gray-400">Online (Training Intern)</h3>
                                        <span className="my-3 text-sm tracking-wider text-violet-400">Web Development and Designing</span>
                                        <h2 className=" text-xs text-gray-500 tracking-wider">2022</h2>
                                    </div>
                                </div>
                            </RevealOnScroll>

                            <RevealOnScroll>
                                <div className="box flex mb-10">
                                    <div className="bg-violet-500 w-[3px] md:w-[5px] mr-5"></div>
                                    <div className="right right gap-1 flex flex-col -mt-4">
                                        <h5 className="mb-1 mt-3 text-[1em] md:text-xl text-white tracking-wide">Remark Skill Education</h5>
                                        <h3 className="text-gray-400">Online (Training Intern)</h3>
                                        <span className="my-3 text-sm tracking-wider text-violet-400">Web Development</span>
                                        <h2 className=" text-xs text-gray-500 tracking-wider">2021</h2>
                                    </div>
                                </div>
                            </RevealOnScroll>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
};

export default Home;


