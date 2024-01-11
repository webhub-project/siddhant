import React from "react";
// import ImageGallery from '../components/ImageGallery';
import image11 from "../assets/galary/11.png";
import image22 from "../assets/galary/22.png";
import image33 from "../assets/galary/33.png";
import image44 from "../assets/galary/44.png";
import image55 from "../assets/galary/55.png";
import SlideshowModel1 from "../components/SlideshowModel1";
import SlideshowModel2 from "../components/SlideshowModel2";
import SlideshowModel3 from "../components/SlideshowModel3";
import SlideshowModel4 from "../components/SlideshowModel4";
import SlideshowModel5 from "../components/SlideshowModel5";
import { FaExpand } from 'react-icons/fa';


const Works = () => {
    return (
        <>
            <section className="mx-0 my-32 md:mx-20 relative -mt-10">
                <h1 className="text-center text-[1.5em] md:text-3xl my-10 text-white">Works</h1>
                <div className="grid gap-5 mt-10 grid-cols-1 mx-16 md:grid-cols-4 md:mx-36">
                    <div className="flex flex-col p-4 rounded-xl overflow-hidden bg-gray-200">
                        <div className="overflow-hidden bg-gray-600 rounded-lg relative">
                            <img className="w-screen shadow-lg bg-contain hover:scale-150 transition ease-in-out" src={image11} alt="Bonnie image" />
                            <SlideshowModel1/>
                        </div>
                        <div className="middle relative">
                            <h5 className="mt-3 text-sm  text-black tracking-wider">Hospital</h5>
                            <span className="text-xs text-gray-500 tracking-wider">Mulawekar Hospital</span>
                            <h2 className=" my-4 text-xs tracking-wider w-full text-gray-500">consectetur adipisicing elit. Alias ad iusto perferendis maiores optio beatae</h2>
                        </div>
                        <div className="bottom">
                        </div>
                    </div>
                    <div className="flex flex-col p-4 rounded-xl overflow-hidden bg-gray-200">
                        <div className="overflow-hidden bg-gray-600 rounded-lg relative">
                            <img className="w-screen shadow-lg bg-contain hover:scale-150 transition ease-in-out" src={image22} alt="Bonnie image" />
                            <SlideshowModel2 />
                        </div>
                        <div className="middle relative">
                            <h5 className="mt-3 text-sm  text-black tracking-wider">E-Commerce</h5>
                            <span className="text-xs text-gray-500 tracking-wider">Ripd Shop</span>
                            <h2 className=" my-4 text-xs tracking-wider w-full text-gray-500">consectetur adipisicing elit. Alias ad iusto perferendis maiores optio beatae</h2>
                        </div>
                    </div>

                    <div className="flex flex-col p-4 rounded-xl overflow-hidden bg-gray-200">
                        <div className="overflow-hidden bg-gray-600 rounded-lg relative">
                            <img className="w-screen shadow-lg bg-contain hover:scale-150 transition ease-in-out" src={image33} alt="Bonnie image" />
                            <SlideshowModel3 />
                        </div>
                        <div className="middle relative">
                            <h5 className="mt-3 text-sm  text-black tracking-wider">video Streaming</h5>
                            <span className="text-xs text-gray-500 tracking-wider">Hotstar Clone</span>
                            <h2 className=" my-4 text-xs tracking-wider w-full text-gray-500">consectetur adipisicing elit. Alias ad iusto perferendis maiores optio beatae</h2>
                        </div>
                    </div>

                    <div className="flex flex-col p-4 rounded-xl overflow-hidden bg-gray-200">
                        <div className="overflow-hidden bg-gray-600 rounded-lg relative">
                            <img className="w-screen shadow-lg bg-contain hover:scale-150 transition ease-in-out" src={image44} alt="Bonnie image" />
                            <SlideshowModel4 />
                        </div>
                        <div className="middle relative">
                            <h5 className="mt-3 text-sm  text-black tracking-wider">Restaurant</h5>
                            <span className="text-xs text-gray-500 tracking-wider">Food Restaurant</span>
                            <h2 className=" my-4 text-xs tracking-wider w-full text-gray-500">consectetur adipisicing elit. Alias ad iusto perferendis maiores optio beatae</h2>
                        </div>
                    </div>

                    <div className="flex flex-col p-4 rounded-xl overflow-hidden bg-gray-200">
                        <div className="overflow-hidden bg-gray-600 rounded-lg relative">
                            <img className="w-screen shadow-lg bg-contain hover:scale-150 transition ease-in-out" src={image55} alt="Bonnie image" />
                            <SlideshowModel5 />
                        </div>
                        <div className="middle relative">
                            <h5 className="mt-3 text-sm  text-black tracking-wider">Financial Service <span className=" text-gray-500">#Sponsored</span></h5>
                            <span className="text-xs text-gray-500 tracking-wider">gb financial services</span>
                            <h2 className=" my-4 text-xs tracking-wider w-full text-gray-500">consectetur adipisicing elit. Alias ad iusto perferendis maiores optio beatae</h2>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};

export default Works;
