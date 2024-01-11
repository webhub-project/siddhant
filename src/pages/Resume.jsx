import React from "react";
import Resume_sidd from "../assets/Resume.svg";
import Resume_sidd_pdf from "../assets/siddhant_resumes.pdf";
import { FaDownload } from "react-icons/fa6";

const Resume = () => {

    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = Resume_sidd_pdf;  
        link.download = "siddhant_resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return (
        <>
        <section className="relative py-3 flex justify-end">
        <button className="bg-white mr-8 p-2 md:p-3 rounded-lg md:rounded-xl md:mr-[10%]" onClick={handleDownload}><FaDownload className="text-xl md:text-2xl"  /></button>
        </section>
            <section className="relative flex items-center justify-center px-8 md:px-0">
                <div className=" bg-gray-300 mb-20">
                    <img src={Resume_sidd} alt="Resume Image" className="" />
                </div>
            </section>
        </>
    );
};

export default Resume;
