import React, { useState, useEffect } from "react";
import styled from "styled-components";
import bg from "../assets/bg.jpeg";
import { Prism } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface config {
    children?: React.ReactNode;
}

interface configTitle {
    title: string;
};

interface configSection {
    children?: React.ReactNode;
    sectionTitle?: string;
}

interface configLink {
    link: string;
    blank?: boolean;
    name: string;
}

interface configList {
    drops: string[];
}

interface configIDE {
    codeData: { language: string; code: string }[];
    output: string;
}

const Container = styled.div`
    width: 100%;
    height: 100vh;
    scroll-snap-type: y mandatory;
    scroll-behavior: smooth;
    overflow-y: auto;
    scrollbar-width: none;

    &::-webkit-scrollbar {
        display: none;
    }
`;

const LearnBaseSection: React.FC<config> = ({ children }) => {
    return <Container style={{ background: `url(${bg})` }}>
        <div className="w-full h-screen flex flex-col items-center">
            <div className="w-[90%] h-full">
                { children }
            </div>
        </div>
    </Container>;
};

export default LearnBaseSection;

export const Title: React.FC<configTitle> = ({ title }) => {
    return <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-wrap text-center py-4">
        { title.charAt(0).toUpperCase() + title.slice(1).toLowerCase() }
    </h1>;
};

export const Section: React.FC<configSection> = ({ children, sectionTitle = "" }) => {
    return <div className="py-5">
        <h3 className="text-gray-300 text-xl md:text-2xl lg:text-3xl font-medium py-2">{ sectionTitle !== "" ? sectionTitle.charAt(0).toUpperCase() + sectionTitle.slice(1).toLowerCase() : "" }</h3>
        <p className="">
            { children }
        </p>
    </div>
};

export const ExternalLink: React.FC<configLink> = ({ link, blank = false, name }) => {
    return <>
        { blank ? (<a href={link} target="_blank" rel="noreferrer" className="text-white underline">{ name }</a>) : (<a href={link} className="text-white underline">{ name }</a>) }
    </>
};

export const List: React.FC<configList> = ({ drops }) => {
    return <ol className="list-disc mx-5">
        { drops.map((plaintext, index) => (
            <li key={index} className="py-2 cursor-context-menu">{ plaintext }</li>
        )) }
    </ol>
};

export const IDE: React.FC<configIDE> = ({ codeData, output }) => {
    const [selectedLanguage, setSelectedLanguage] = useState<string>('cpp');
    const [selectedCode, setSelectedCode] = useState<string>('');

    useEffect(() => {
        setSelectedCode(getCodeForLanguage(selectedLanguage));
    }, [selectedLanguage]);

    const handleLanguageChange = (language: string) => {
        setSelectedLanguage(language);
        setSelectedCode(getCodeForLanguage(language));
    };

    const getCodeForLanguage = (language: string) => {
        const codeItem = codeData.find(item => item.language === language);
        return codeItem ? codeItem.code : '';
    };

    const handleCopyCode = () => {
        navigator.clipboard.writeText(selectedCode)
            .then(() => alert('Codice copiato con successo!'))
            .catch(err => console.error('Errore durante la copia del codice:', err));
    };

    const LanguageButton: React.FC<{ language: string }> = ({ language }) => {
        const isActive = language === selectedLanguage;
        return (
            <button
                onClick={() => handleLanguageChange(language)}
                className={`px-3 relative ${isActive ? 'border-b-2 border-white animate-slide pb-1' : ''} ${!isActive ? 'text-gray-400' : ''}`}
                style={{ marginBottom: '10px' }}
            >
                {language}
            </button>
        );
    };

    return <div className='bg-[#202020] rounded-2xl border-1 border-gray-700'>
        <div className='py-3 mx-7'>
            {codeData.map(({ language }, index) => (
                <LanguageButton key={index} language={language} />
            ))}
            <button onClick={handleCopyCode} className='border-1 border-[#8d8d8d] px-8 py-2 rounded-xl outline-none ml-5 hover:border-[#fff] duration-300'>Copia codice</button>
        </div>
        <div>
            <div style={{ display: selectedCode ? 'block' : 'none' }}>
                <Prism language={selectedLanguage} style={darcula} showLineNumbers wrapLongLines={true} lineProps={{ style: { flexWrap: "wrap" } }}>
                    {selectedCode}
                </Prism>
            </div>
        </div>
        <div className="px-4 py-2">
            <div>
                <h1 className="text-xl lg:text-2xl">Output</h1>
            </div>
            <div className="mt-2">
                <h3>{ output }</h3>
            </div>
        </div>
    </div>
};
