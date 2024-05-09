import React from "react";

interface Config {
    search?: boolean;
    bg?: string;
    positionType?: any;
};

const Navbar: React.FC<Config> = ({ search = false, bg = "transparent", positionType = "fixed" }) => {
    return (
        <div className="w-full flex justify-center">
            <div className="w-full h-[75px]" style={{ background: bg, position: positionType }}>
                <div className="flex w-full justify-between items-center py-3 px-[100px]">
                    <div className="flex items-center gap-5">
                        <h1 className="text-5xl drop-shadow-logo">B.O.S.S.</h1>
                        { !search && (
                            <ul className="hidden lg:flex gap-1">
                                <li>
                                <a href="/#hero">Home</a>
                                </li>
                                <li>
                                <a href="/#who">Who</a>
                                </li>
                                <li>
                                <a href="/#races">Races</a>
                                </li>
                                <li>
                                <a href="/#contact">Contact</a>
                                </li>
                            </ul>
                        ) }
                    </div>
                    <div className="flex items-center gap-5">
                        {search ? <input type="text" placeholder="search" className="border-b-2 bg-transparent inline px-4 w-[16rem] text-xl rounded-sm" /> : null}
                        <a href="/">
                            <button className="w-[120px] py-2 border-none rounded-md bg-[#964eda] text-lg font-bold">Register now</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
