import React from "react";
import defaultImage from "../assets/users/user.png"; 

interface config {
    key?: number;
    imgSrc: string;
    nick: string;
    role: string;
    link?: string;
    blank?: boolean;
}

const Card: React.FC<config> = ({ key = 0, imgSrc, nick, role, link = "#", blank = false }) => {
    return (
        <a key={key} href={link} target={ blank ? "_blank" : "_self" } rel="noopener noreferrer" className="flex md:flex-col justify-around items-center mx-7 shadow-[5px_5px_5px_hsla(0,0%,0%,0.5)] p-[20px] m-[10px] w-full h-auto md:w-[15rem] md:h-[18rem] text-center max-w-64 rounded-[10px] border-1 border-[#291850] m-w-[250px] hover:scale-110 duration-500">
            <div className="max-w-[70%]">
                <img src={ imgSrc === "" ? defaultImage : require(`../assets/users/${imgSrc}`) } className="max-w-[60%] rounded-[50%] mb-[10px] inline-block scale-125 md:scale-150" alt="" />
            </div>
            <div>
                <h2 className="text-xl md:text-2xl font-bold">{ nick }</h2>
                <p className="text-xs text-gray-100">{ role }</p>
            </div>
        </a>
    );
}

export default Card;