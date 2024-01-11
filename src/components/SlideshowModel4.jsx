import React, { useState } from "react";
import image11 from "../assets/galary/restaurant/1.png";
import image22 from "../assets/galary/restaurant/2.png";
import image33 from "../assets/galary/restaurant/3.png";
import image44 from "../assets/galary/restaurant/4.png";
import image55 from "../assets/galary/restaurant/5.png";
import image66 from "../assets/galary/restaurant/6.png";
import { FaExpand ,FaWindowClose } from 'react-icons/fa';

const SlideshowModal4 = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    image11,image22,image33,image44,image55,image66
  ];

  const closeModal = () => {
    setShowModal(false);
    setCurrentSlide(0);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="absolute top-2 right-2 text-3xl p-1 text-white rounded-md cursor-pointer">
      
      <FaExpand onClick={() => setShowModal(true)} className="top-2 right-2 text-3xl bg-black backdrop-blur-lg p-1 text-white rounded-md "/>

      {showModal && (
        <div className="fixed z-10 top-0 left-0 right-0 bottom-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
          <div className="bg-white w-72 md:w-96 my-20 p-5 mx-auto rounded-lg">
          <button
              onClick={closeModal}
              className=" absolute top-5 right-5 py-1 px-3  text-white  rounded"
            >
            <FaWindowClose/>
            </button>
            <div className="relative">
              <img
                src={slides[currentSlide]}
                alt="Slideshow"
                className="w-full h-98 object-cover rounded-lg"
              />
              <button
                className="absolute text-white z-20 bg-gray-400 rounded-[.1em] p-1 top-1/2 text-4xl left-0 transform -translate-y-1/2"
                onClick={prevSlide}
              >
                {"<"}
              </button>
              <button
                className="absolute text-white z-20 bg-gray-400 rounded-[.1em] p-1 text-4xl top-1/2 right-0 transform -translate-y-1/2"
                onClick={nextSlide}
              >
                {">"}
              </button>
            </div>
            
          </div>
        </div>
      )}
    </div>
  );
};

export default SlideshowModal4;
