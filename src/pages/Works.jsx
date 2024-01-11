import React, { useEffect, useRef, useState } from "react";
// import { NavLink } from "react-router-dom";
import { FaArrowRightLong,FaHandshake } from "react-icons/fa6";
import image11 from "../assets/galary/11.png";
import image22 from "../assets/galary/22.png";
import image33 from "../assets/galary/33.png";
import image44 from "../assets/galary/44.png";
import image55 from "../assets/galary/55.png";
import Tooltip from '../components/tooltip';
// import SlideshowModel1 from "../components/SlideshowModel1";
// import SlideshowModel2 from "../components/SlideshowModel2";
// import SlideshowModel3 from "../components/SlideshowModel3";
// import SlideshowModel4 from "../components/SlideshowModel4";
// import SlideshowModel5 from "../components/SlideshowModel5";

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

const Works = () => {
    
    return (
        <>
           
            <section className="mx-0 md:mx-20 relative mb-32">
                <h1 className=" text-center mx-12 md:mx-0 lg:mx-16 mt-10 text-[1.5em] md:text-3xl mb-10 text-gray-100">Works</h1>
                <div className=" md:hidden grid gap-5 mt-10 mx-12 md:mx-0 lg:mx-16 md:grid-cols-1 lg:grid-cols-3">
                    <div className="flex flex-col border-[0.1px] border-gray-500 rounded-lg bg-gray-500 bg-opacity-30 backdrop-filter backdrop-blur-lg">
                        <div className="overflow-hidden bg-gray-600 rounded-t-lg relative">
                            <img className="w-screen shadow-lg bg-contain hover:scale-150 transition ease-in-out" src={image11} alt="Bonnie image" />
                            {/* <SlideshowModel1 /> */}
                        </div>
                        <div className="middle relative px-4 py-4 ">
                            <span className="flex text-[.6rem] md:text-[.8rem] text-gray-400 tracking-wider mt-2 mb-1">
                                <div className=" border-gray-600 rounded-[.2rem] border py-1 px-1 md:px-2 md:py-1 mr-2 tracking-widest">Hospital</div>
                                <div className=" border-gray-600 rounded-[.2rem] border py-1 px-1 md:px-2 md:py-1 mr-2 tracking-widest">Design</div>
                                <div className=" border-gray-600 rounded-[.2rem] border py-1 px-1 md:px-2 md:py-1 tracking-widest">Dev</div>
                            </span>
                            {/* <NavLink to="/Resume" className=" text-sm w-full  flex items-center gap-2 hover:w-60 hover:gap-4 duration-500 text-white ">
                                <span className=" -tracking-tighter text-sm mr-2 md:mr-0 md:text-lg">Case Study</span> <FaArrowRightLong />
                            </NavLink> */}
                        </div>
                    </div>

                    <div className="flex flex-col border-[0.1px] border-gray-500 rounded-lg bg-gray-500 bg-opacity-30 backdrop-filter backdrop-blur-lg">
                        <div className="overflow-hidden bg-gray-600 rounded-t-lg relative">
                            <img className="w-screen shadow-lg bg-contain hover:scale-150 transition ease-in-out" src={image22} alt="Bonnie image" />
                            {/* <SlideshowModel2 /> */}
                        </div>
                        <div className="middle relative px-4 py-4 ">
                            <span className="flex text-[.6rem] md:text-[.8rem] text-gray-400 tracking-wider mt-2 mb-1">
                                <div className=" border-gray-600 rounded-[.2rem] border py-1 px-2 mr-2 tracking-widest">E-Commerce</div>
                                <div className=" border-gray-600 rounded-[.2rem] border py-1 px-2 mr-2 tracking-widest">Design</div>
                                <div className=" border-gray-600 rounded-[.2rem] border py-1 px-2 mr-2 tracking-widest">Dev</div>             
                            </span>
                            {/* <NavLink to="/Resume" className=" text-sm w-full  flex items-center gap-2 hover:w-60 hover:gap-4 duration-500 text-white ">
                                <span className=" -tracking-tighter text-sm mr-2 md:mr-0 md:text-lg">Case Study</span> <FaArrowRightLong />
                            </NavLink> */}
                        </div>
                    </div>

                    <RevealOnScroll>
                    <div className="flex flex-col border-[0.1px] border-gray-500 rounded-lg bg-gray-500 bg-opacity-30 backdrop-filter backdrop-blur-lg">
                        <div className="overflow-hidden bg-gray-600 rounded-lg relative">
                        <img className="w-screen shadow-lg bg-contain hover:scale-150 transition ease-in-out" src={image33} alt="Bonnie image" />
                            {/* <SlideshowModel3 /> */}
                        </div>
                        <div className="middle relative px-4 py-4 ">
                            <span className="flex text-[.6rem] md:text-[.8rem] text-gray-400 tracking-wider mt-2 mb-1">
                                <div className=" border-gray-600 rounded-[.2rem] border py-1 px-2 mr-2 tracking-widest">Streaming</div>
                                <div className=" border-gray-600 rounded-[.2rem] border py-1 px-2 mr-2 tracking-widest">Design</div>
                                <div className=" border-gray-600 rounded-[.2rem] border py-1 px-2 mr-2 tracking-widest">Dev</div>
                            </span>
                            {/* <NavLink to="/Resume" className=" text-sm w-full  flex items-center gap-2 hover:w-60 hover:gap-4 duration-500 text-white ">
                                <span className=" -tracking-tighter text-sm mr-2 md:mr-0 md:text-lg">Case Study</span> <FaArrowRightLong />
                            </NavLink> */}
                        </div>
                    </div>
                    </RevealOnScroll>

                    <RevealOnScroll>
                    <div className="flex flex-col border-[0.1px] border-gray-500 rounded-lg bg-gray-500 bg-opacity-30 backdrop-filter backdrop-blur-lg">
                        <div className="overflow-hidden bg-gray-600 rounded-lg relative">
                        <img className="w-screen shadow-lg bg-contain hover:scale-150 transition ease-in-out" src={image44} alt="Bonnie image" />
                            {/* <SlideshowModel4 /> */}
                        </div>
                        <div className="middle relative px-4 py-4 ">
                            <span className="flex text-[.6rem] md:text-[.8rem] text-gray-400 tracking-wider mt-2 mb-1">
                                <div className=" border-gray-600 rounded-[.2rem] border py-1 px-2 mr-2 tracking-widest">Restaurant</div>
                                <div className=" border-gray-600 rounded-[.2rem] border py-1 px-2 mr-2 tracking-widest">Design</div>
                                <div className=" border-gray-600 rounded-[.2rem] border py-1 px-2 mr-2 tracking-widest">Dev</div>
                            </span>
                            {/* <NavLink to="/Resume" className=" text-sm w-full  flex items-center gap-2 hover:w-60 hover:gap-4 duration-500 text-white ">
                                <span className=" -tracking-tighter text-sm mr-2 md:mr-0 md:text-lg">Case Study</span> <FaArrowRightLong />
                            </NavLink> */}
                        </div>
                    </div>
                    </RevealOnScroll>

                    <RevealOnScroll>
                    <div className="flex flex-col border-[0.1px] border-gray-500 rounded-lg bg-gray-500 bg-opacity-30 backdrop-filter backdrop-blur-lg">
                        <div className="overflow-hidden bg-gray-600 rounded-lg relative">
                            <span className="absolute flex items-center justify-center z-10 rounded-full m-2 p-2 bg-black">
                            <Tooltip text="Sponsored">
                            <FaHandshake className=" text-3xl text-yellow-500"/>
                            </Tooltip>
                            </span>
                        <img className="w-screen shadow-lg bg-contain hover:scale-150 transition ease-in-out" src={image55} alt="Bonnie image" />
                            {/* <SlideshowModel5 /> */}
                        </div>
                        <div className="middle relative px-4 py-4 ">
                            <span className="flex flex-wrap text-[.6rem] md:text-[.8rem] text-gray-400 tracking-wider mt-2 mb-1">
                                <div className=" border-gray-600 rounded-[.2rem] border py-1 px-2 mr-2 tracking-widest">Financial</div>
                                <div className=" border-gray-600 rounded-[.2rem] border py-1 px-2 mr-2 tracking-widest">Cms</div>
                                <div className=" border-gray-600 rounded-[.2rem] border py-1 px-2 mr-2 tracking-widest">Dev</div>
                            </span>
                            {/* <NavLink to="/Resume" className=" text-sm w-full  flex items-center gap-2 hover:w-60 hover:gap-4 duration-500 text-white ">
                                <span className=" -tracking-tighter text-sm mr-2 md:mr-0 md:text-lg">Case Study</span> <FaArrowRightLong />
                            </NavLink> */}
                        </div>
                    </div>
                    </RevealOnScroll>

                </div>

                <div className=" hidden md:grid gap-5 mt-10 mx-12 md:mx-0 lg:mx-16 md:grid-cols-1 lg:grid-cols-3">
                    <div className="flex flex-col border-[0.1px] border-gray-500 rounded-lg bg-gray-500 bg-opacity-30 backdrop-filter backdrop-blur-lg">
                        <div className="overflow-hidden bg-gray-600 rounded-t-lg relative">
                            <img className="w-screen shadow-lg bg-contain hover:scale-150 transition ease-in-out" src={image11} alt="Bonnie image" />
                            {/* <SlideshowModel1 /> */}
                        </div>
                        <div className="middle relative px-4 py-4 ">
                            <span className="flex text-[.6rem] md:text-[.8rem] text-gray-400 tracking-wider mt-2 mb-1">
                                <div className=" border-gray-600 rounded-[.2rem] border py-1 px-1 md:px-2 md:py-1 mr-2 tracking-widest">Hospital</div>
                                <div className=" border-gray-600 rounded-[.2rem] border py-1 px-1 md:px-2 md:py-1 mr-2 tracking-widest">Design</div>
                                <div className=" border-gray-600 rounded-[.2rem] border py-1 px-1 md:px-2 md:py-1 tracking-widest">Dev</div>
                            </span>
                            {/* <NavLink to="/Resume" className=" text-sm w-full  flex items-center gap-2 hover:w-60 hover:gap-4 duration-500 text-white ">
                                <span className=" -tracking-tighter text-sm mr-2 md:mr-0 md:text-lg">Case Study</span> <FaArrowRightLong />
                            </NavLink> */}
                        </div>
                    </div>

                    <div className="flex flex-col border-[0.1px] border-gray-500 rounded-lg bg-gray-500 bg-opacity-30 backdrop-filter backdrop-blur-lg">
                        <div className="overflow-hidden bg-gray-600 rounded-t-lg relative">
                            <img className="w-screen shadow-lg bg-contain hover:scale-150 transition ease-in-out" src={image22} alt="Bonnie image" />
                            {/* <SlideshowModel2 /> */}
                        </div>
                        <div className="middle relative px-4 py-4 ">
                            <span className="flex text-[.6rem] md:text-[.8rem] text-gray-400 tracking-wider mt-2 mb-1">
                                <div className=" border-gray-600 rounded-[.2rem] border py-1 px-2 mr-2 tracking-widest">E-Commerce</div>
                                <div className=" border-gray-600 rounded-[.2rem] border py-1 px-2 mr-2 tracking-widest">Design</div>
                                <div className=" border-gray-600 rounded-[.2rem] border py-1 px-2 mr-2 tracking-widest">Dev</div>             
                            </span>
                            {/* <NavLink to="/Resume" className=" text-sm w-full  flex items-center gap-2 hover:w-60 hover:gap-4 duration-500 text-white ">
                                <span className=" -tracking-tighter text-sm mr-2 md:mr-0 md:text-lg">Case Study</span> <FaArrowRightLong />
                            </NavLink> */}
                        </div>
                    </div>

                    <div className="flex flex-col border-[0.1px] border-gray-500 rounded-lg bg-gray-500 bg-opacity-30 backdrop-filter backdrop-blur-lg">
                        <div className="overflow-hidden bg-gray-600 rounded-lg relative">
                        <img className="w-screen shadow-lg bg-contain hover:scale-150 transition ease-in-out" src={image33} alt="Bonnie image" />
                            {/* <SlideshowModel3 /> */}
                        </div>
                        <div className="middle relative px-4 py-4 ">
                            <span className="flex text-[.6rem] md:text-[.8rem] text-gray-400 tracking-wider mt-2 mb-1">
                                <div className=" border-gray-600 rounded-[.2rem] border py-1 px-2 mr-2 tracking-widest">Streaming</div>
                                <div className=" border-gray-600 rounded-[.2rem] border py-1 px-2 mr-2 tracking-widest">Design</div>
                                <div className=" border-gray-600 rounded-[.2rem] border py-1 px-2 mr-2 tracking-widest">Dev</div>
                            </span>
                            {/* <NavLink to="/Resume" className=" text-sm w-full  flex items-center gap-2 hover:w-60 hover:gap-4 duration-500 text-white ">
                                <span className=" -tracking-tighter text-sm mr-2 md:mr-0 md:text-lg">Case Study</span> <FaArrowRightLong />
                            </NavLink> */}
                        </div>
                    </div>

                    <div className="flex flex-col border-[0.1px] border-gray-500 rounded-lg bg-gray-500 bg-opacity-30 backdrop-filter backdrop-blur-lg">
                        <div className="overflow-hidden bg-gray-600 rounded-lg relative">
                        <img className="w-screen shadow-lg bg-contain hover:scale-150 transition ease-in-out" src={image44} alt="Bonnie image" />
                            {/* <SlideshowModel4 /> */}
                        </div>
                        <div className="middle relative px-4 py-4 ">
                            <span className="flex text-[.6rem] md:text-[.8rem] text-gray-400 tracking-wider mt-2 mb-1">
                                <div className=" border-gray-600 rounded-[.2rem] border py-1 px-2 mr-2 tracking-widest">Restaurant</div>
                                <div className=" border-gray-600 rounded-[.2rem] border py-1 px-2 mr-2 tracking-widest">Design</div>
                                <div className=" border-gray-600 rounded-[.2rem] border py-1 px-2 mr-2 tracking-widest">Dev</div>
                            </span>
                            {/* <NavLink to="/Resume" className=" text-sm w-full  flex items-center gap-2 hover:w-60 hover:gap-4 duration-500 text-white ">
                                <span className=" -tracking-tighter text-sm mr-2 md:mr-0 md:text-lg">Case Study</span> <FaArrowRightLong />
                            </NavLink> */}
                        </div>
                    </div>

                    <div className="flex flex-col border-[0.1px] border-gray-500 rounded-lg bg-gray-500 bg-opacity-30 backdrop-filter backdrop-blur-lg">
                        <div className="overflow-hidden bg-gray-600 rounded-lg relative">
                            <span className="absolute flex items-center justify-center z-10 rounded-full m-2 p-2 bg-black">
                            <Tooltip text="Sponsored">
                            <FaHandshake className=" text-3xl text-yellow-500"/>
                            </Tooltip>
                            </span>
                        <img className="w-screen shadow-lg bg-contain hover:scale-150 transition ease-in-out" src={image55} alt="Bonnie image" />
                            {/* <SlideshowModel5 /> */}
                        </div>
                        <div className="middle relative px-4 py-4 ">
                            <span className="flex flex-wrap text-[.6rem] md:text-[.8rem] text-gray-400 tracking-wider mt-2 mb-1">
                                <div className=" border-gray-600 rounded-[.2rem] border py-1 px-2 mr-2 tracking-widest">Financial</div>
                                <div className=" border-gray-600 rounded-[.2rem] border py-1 px-2 mr-2 tracking-widest">Cms</div>
                                <div className=" border-gray-600 rounded-[.2rem] border py-1 px-2 mr-2 tracking-widest">Dev</div>
                            </span>
                            {/* <NavLink to="/Resume" className=" text-sm w-full  flex items-center gap-2 hover:w-60 hover:gap-4 duration-500 text-white ">
                                <span className=" -tracking-tighter text-sm mr-2 md:mr-0 md:text-lg">Case Study</span> <FaArrowRightLong />
                            </NavLink> */}
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
};

export default Works;
