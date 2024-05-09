import React, { useState, useEffect } from "react";
import { Transition } from "@headlessui/react";
import { FaChevronDown } from "react-icons/fa";
import styled from "styled-components";
import bg from "./assets/bg.jpeg";
import Navbar from "./components/Navbar";

const Container = styled.div`
    height: 100vh;
    overflow-y: auto;
    scrollbar-width: none;

    &::-webkit-scrollbar {
        display: none;
    }
`;

interface configMenuCard {
    title: string;
    children?: React.ReactNode;
};

interface FolderContent {
    folderName: string;
    files: string[];
}

declare const require: {
    context(directory: string, useSubdirectories?: boolean, regExp?: RegExp): {
        keys(): string[];
    };
};

const MenuCard: React.FC<configMenuCard> = ({ title, children }) => {
    const [ isOpen, setIsOpen ] = useState<boolean>(false);

    return <div className="w-full p-4 border-gray-700 border-b-2" onClick={() => setIsOpen(!isOpen)}>
        <div className="flex items-center gap-4">
            <FaChevronDown className={`transform ${isOpen ? 'rotate-180' : 'rotate-0'} text-3xl transition-transform duration-200`} />
            <h1 className="text-4xl font-medium capitalize">{ title }</h1>
        </div>
        <Transition
            show={isOpen}
            enter="transition ease-out duration-200"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-200"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
        >
            <div className="w-full mt-5 pl-12">
                { children }
            </div>
        </Transition>
    </div>
}

const Learn: React.FC = () => {
    const [foldersContent, setFoldersContent] = useState<FolderContent[]>([]);

    useEffect(() => {
        const readDir = async () => {
            const folderContext = require.context("./learn", true, /^\.\//);
            const allKeys: string[] = folderContext.keys();

            const folderData: { [key: string]: string[] } = {};
            allKeys.forEach((key: string) => {
                const folderName = key.split("/")[1];
                const fileName = key.split("/")[2];
                if (!folderData[folderName]) {
                    folderData[folderName] = [];
                }
                if (fileName && !fileName.endsWith(".tsx")) {
                    folderData[folderName].push(fileName);
                }
            });

            const foldersContentData: FolderContent[] = Object.entries(folderData).map(([folderName, files]) => ({ folderName, files }));

            setFoldersContent(foldersContentData);
        };

        readDir();

        return (() => {});
    }, []);

    return (
        <Container style={{ background: `url(${bg})` }}>
            <Navbar search={true} />
            <div className="w-full h-screen mt-28 px-4">
                {foldersContent.map((file, index) => (
                    <MenuCard key={index} title={`${file.folderName}`}> 
                        {file.files.map((f, it) => (
                            <a key={it} href={`/learn/${file.folderName}/${f}`} className="p-4 text-2xl font-medium hover:bg-[#3a2366] duration-500 rounded-2xl">
                                <button className="text-left min-w-32 break-all">
                                    { (f.replace(/(?<!^)([A-Z])/g, ' $1')).charAt(0).toUpperCase() + f.replace(/(?<!^)([A-Z])/g, ' $1').slice(1).toLocaleLowerCase() }
                                </button>
                            </a>
                        ))}
                    </MenuCard>
                ))}
            </div>
        </Container>
    );
};

export default Learn;