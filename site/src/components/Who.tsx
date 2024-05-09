import React from "react";
import { users } from "../dummy";
import Card from "./Card";

const Who: React.FC = () => { 
    const usersMod = users.slice(0, 4);
    
    return <div id="who" className="flex items-center justify-center w-full h-screen" style={{ scrollSnapAlign: "center" }}>
        <div className="w-full h-full flex flex-col justify-center items-center">
            <div className="w-full flex flex-wrap items-center justify-center">
                { usersMod.map((user, index) => ( 
                    <Card key={index} imgSrc={ user.img } nick={user.nick !== "" ? user.nick : user.nome } role={ user.role } link={ user.link } blank={ user.link !== "#" ? true : false } />
                )) }
            </div>
            <a href="/about" className="p-5 my-5 w-[200px] rounded-[10px] flex items-center justify-center hover:bg-[#3a2366] duration-500">
                <button>See more...</button>
            </a>
        </div>
    </div>
};

export default Who;