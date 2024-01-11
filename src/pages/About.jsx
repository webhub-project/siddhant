import React, { useEffect, useRef, useState } from "react";
import passport from "../assets/userr.png";
import Plan from "../assets/icons/plan.png";
import design from "../assets/icons/design.png";
import develop from "../assets/icons/development.png";
import notion from "../assets/icons/logos_notion.svg";
import vs from "../assets/icons/logos_vs.svg";
import figma from "../assets/icons/logos_figma.svg";

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

const About = () => {
    return (
        <>
            <div className="main-container relative ">
                <div className="mx-0 flex justify-center relative">
                    <div className="container1 w-[80%]">
                        <h1 className="max-w-4xl mt-10 text-[1.5em] md:text-3xl text-gray-100 ">Frontend Developer & UI/UX Designer</h1>
                        <p className=" tracking-wider text-sm my-5 md:text-xl text-gray-300 leading-6 ">I am student at Maharashtra institute of technology, chatrapati sambhajinagar. </p>
                        <p className="tracking-wider text-sm mt-14 mb-0 md:text-xl text-gray-500 leading-6 md:leading-relaxed">I am passionate about designing and building beautiful, responsive, and user-friendly websites that not only look great but also function flawlessly. I have experience in developing high-quality, intuitive web applications for both desktop and mobile devices.</p>
                    </div>
                </div>

                <div className="mx-0 flex justify-center relative mb-20">
                    <div className="container1 w-[80%]">
                        <h1 className="max-w-4xl mt-10 text-[1.3em] md:text-2xl text-gray-200">Hobbies</h1>
                        <div className="middle relative py-3">
                            <span className="flex flex-wrap gap-3 text-[.6rem] md:text-[1rem] text-gray-400 tracking-wider mt-2 mb-1">
                                <div className=" border-gray-600 rounded-[.2rem] border py-2 px-4 tracking-widest">Gaming</div>
                                <div className=" border-gray-600 rounded-[.2rem] border py-2 px-4 tracking-widest">Coding</div>
                                <div className=" border-gray-600 rounded-[.2rem] border py-2 px-4 tracking-widest">Badminton</div>
                                <div className=" border-gray-600 rounded-[.2rem] border py-2 px-4 tracking-widest">listening to music</div>
                            </span>
                        </div>
                    </div>
                </div>

                <RevealOnScroll>
                    <div className="flex justify-center relative">
                    <span className="container1 w-[80%] flex justify-center overflow-hidden bg-violet-500 rounded-xl">
                        <img src={passport} alt="" className="max-w-xs md:max-w-4xl px-10 md:px-0" />
                    </span>
                    </div>
                </RevealOnScroll>

                <RevealOnScroll>
                    <section className="mx-0 md:mx-24 my-32 relative mb-32">
                        <h1 className="mx-12 md:mx-0 lg:mx-16 mt-10 text-[1.5em] md:text-3xl mb-10 text-gray-100">
                            Tools I frequently use
                        </h1>
                        <div className="grid gap-5 mt-10 mx-10 md:mx-0 lg:mx-14 md:grid-cols-1 lg:grid-cols-3">
                            <div className="flex p-5 flex-col border-[0.1px] border-gray-500 rounded-lg bg-gray-500 bg-opacity-30 backdrop-filter backdrop-blur-lg">
                                <span className="mb-8">
                                    <img src={notion} alt="" className="h-14" />
                                </span>
                                <p className="text-lg md:text-lg text-gray-300 tracking-wide">Notion</p>
                                <p className=" tracking-wider text-sm leading-6 md:text-base md:text-gray-500 text-gray-400 ">Notion centralizes project management and content creation. It streamlines tasks to enhance productivity and efficiency.</p>
                            </div>

                            <div className="flex p-5 flex-col border-[0.1px] border-gray-500 rounded-lg bg-gray-500 bg-opacity-30 backdrop-filter backdrop-blur-lg">
                                <span className="mb-8">
                                    <img src={figma} alt="" className="h-14" />
                                </span>
                                <p className="text-lg md:text-lg text-gray-300 tracking-wide">Figma</p>
                                <p className=" tracking-wider text-sm leading-6 md:text-base md:text-gray-500 text-gray-400 ">Figma is a web-based interface design application to collaborate in managing design projects.</p>
                            </div>

                            <div className="flex p-5 flex-col border-[0.1px] border-gray-500 rounded-lg bg-gray-500 bg-opacity-30 backdrop-filter backdrop-blur-lg">
                                <span className="mb-8">
                                    <img src={vs} alt="" className="h-14" />
                                </span>
                                <p className="text-lg md:text-lg text-gray-300 tracking-wide">VS Code</p>
                                <p className=" tracking-wider text-sm leading-6 md:text-base md:text-gray-500 text-gray-400 ">Visual Studio Code is Lightweight, extensible code editor with rich features; popular among developers for efficiency.</p>
                            </div>

                        </div>
                    </section>
                </RevealOnScroll>


                <section className="py-10 md:bg-black">
                    <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
                    <RevealOnScroll>
                        <dl className="grid max-w-screen-sm md:max-w-screen-sm lg:max-w-screen-lg gap-20 md:gap-0 lg:gap-20 mx-auto sm:grid-cols-3 text-white tracking-wider">
                            <div className="flex flex-col items-center justify-center">
                                <dt className="mb-2 text-3xl md:text-3xl lg:text-4xl font-bold md:font-normal">2.5yr+</dt>
                                <dd className=" text-gray-500 dark:text-gray-400">Experiance</dd>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <dt className="mb-2 text-3xl md:text-4xl font-bold md:font-normal">6+</dt>
                                <dd className=" text-gray-500 dark:text-gray-400">Projects</dd>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <dt className="mb-2 text-3xl md:text-4xl font-bold md:font-normal">24/7</dt>
                                <dd className=" text-gray-500 dark:text-gray-400">Support</dd>
                            </div>
                        </dl>
                        </RevealOnScroll>
                    </div>
                </section>

                <section className="pt-20 py-36 h-full md:h-screen">
                    <h1 className="text-2xl md:text-3xl  tracking-wider m-auto md:w-full md:text-gray-400 text-gray-400 text-center mb-20">Working Process</h1>
                    <RevealOnScroll>
                    <div className="flex py-0 md:py-8 mx-auto text-center md:px-10 lg:px-6">
                        <dl className="grid max-w-screen-md gap-8 mx-auto text-gray-900 grid-cols-1 md:grid-cols-3 dark:text-white tracking-wider">
                            <div className="flex flex-col bg-white h-60 w-60 md:h-48 md:w-48 lg:h-60 lg:w-60 p-5 rounded-3xl items-center justify-center">
                                <dt className="mb-2 w-28 text-3xl md:text-4xl ">
                                    <img src={Plan} alt="" />
                                </dt>
                                <dd className=" text-base text-gray-500 dark:text-gray-400">Project Planning</dd>
                            </div>
                            <div className="flex flex-col bg-white h-60 w-60 md:h-48 md:w-48 lg:h-60 lg:w-60 p-5 rounded-3xl items-center justify-center">
                                <dt className="mb-2 w-28 text-3xl md:text-4xl ">
                                    <img src={design} alt="" />
                                </dt>
                                <dd className=" text-base text-gray-500 dark:text-gray-400">Design Strategy</dd>
                            </div>
                            <div className="flex flex-col bg-white h-60 w-60 md:h-48 md:w-48 lg:h-60 lg:w-60 p-5 rounded-3xl items-center justify-center">
                                <dt className="mb-2 w-28 text-3xl md:text-4xl ">
                                    <img src={develop} alt="" />
                                </dt>
                                <dd className=" text-base text-gray-500 dark:text-gray-400">Development</dd>
                            </div>
                        </dl>
                    </div>
                    </RevealOnScroll>
                </section>
            </div>

        </>
    )
};

export default About;
