import React from "react";
import { Element } from "react-scroll";
import line from "../assets/line.png";
import boss from "../assets/boss.png";
import { FaBookOpen } from "react-icons/fa";

const Hero: React.FC = () => {
    return <Element id="hero" name="hero" className="w-full h-screen flex justify-center items-center" style={{ scrollSnapAlign: "center" }}>
        <div className="h-screen flex justify-between items-center w-[1400px] px-6">
            <div className="flex flex-col justify-center items-left gap-5 flex-2">
                <h1 className="md:text-6xl text-3xl font-bold">Learn with BOSS</h1>
                <div className="flex items-center gap-[10px]">
                    <img src={line} alt="" className="md:h-[5px] h-[2px]" />
                    <h2 className="md:text-2xl text-xl font-bold text-[#da4ea2]">What we do</h2>
                </div>
                <p className="md:text-xl text-md">
                    We are passionate about competitive programming and would like to help other people understand algorithms that may seem complex 
                </p>
                <a href="/learn" target="_blank">
                    <button className="bg-[#964eda] md:text-xl py-2 w-[150px] md:w-[200px] rounded-md font-bold flex items-center gap-2 justify-center">
                        <FaBookOpen /> Learn now
                    </button>
                </a>
            </div>
            <div className="flex justify-center items-center flex-3 relative">
                <img src={boss} alt="" className="h-[350px] md:h-[500px] absolute top-0 bottom-0 left-0 right-0 m-auto" />
            </div>
        </div>
    </Element>
};

export default Hero;