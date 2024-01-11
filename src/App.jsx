import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "../src/pages/Home";
import Works from "../src/pages/Works";
import Contact from "../src/pages/Contact";
import About from "../src/pages/About";
import Resume from "../src/pages/Resume";
// import CS1 from "../src/pages/case_study/CS1";
// import CS2 from "../src/pages/case_study/CS2";
// import CS3 from "../src/pages/case_study/CS3";
// import CS4 from "../src/pages/case_study/CS4";
// import CS5 from "../src/pages/case_study/CS5";
import Ellipse_1 from "../src/assets/shapes/Ellipse 1.svg";
import Ellipse_2 from "../src/assets/shapes/Ellipse 2.svg";
// import Ellipse_3 from "../src/assets/shapes/Ellipse 3.svg";


const App = () => {
  return (
    <BrowserRouter>
    <section className="relative overflow-hidden">
    <div className=" absolute -z-10 h-full w-[100vw] ">
                <div className="shapes">
                    <span className=" top-5 absolute">
                        <img src={Ellipse_1} alt="" className="w-52 md:w-96 blur-[10em] md:blur-[10em]" />
                    </span>

                    <span className=" top-[40%] left-[50%] absolute ">
                        <img src={Ellipse_2} alt="" className="w-[45em] md:w-[35em] blur-[10em] md:blur-[20em]" />
                    </span>

                    <span className=" top-[70%] -left-[50%] absolute">
                        <img src={Ellipse_2} alt="" className="w-[20em] md:w-[45em] blur-[10em] md:blur-[20em]" />
                    </span>

                    <span className=" top-[100%] left-[50%] absolute">
                        <img src={Ellipse_1} alt="" className="w-[35em] md:w-[35em] blur-[6em] md:blur-[30em]" />
                    </span>
                </div>
            </div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Works" element={<Works />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
        <Route path="/Resume" element={<Resume />} />
        {/* <Route path="/CS1" element={<CS1 />} />
        <Route path="/CS2" element={<CS2 />} />
        <Route path="/CS3" element={<CS3 />} />
        <Route path="/CS4" element={<CS4 />} />
        <Route path="/CS5" element={<CS5 />} /> */}
      </Routes>
      <Footer />
      </section>
    </BrowserRouter>
  )
};

export default App;

