import React from "react";
import styled from "styled-components";
import bg from "./assets/bg.jpeg";
import Navbar from "./components/Navbar";
import { users } from "./dummy";
import Card from "./components/Card";

const Container = styled.div`
    height: calc(100vh - 75px);
    overflow-y: auto;
    scrollbar-width: none;

    &::-webkit-scrollbar {
        display: none;
    }
`

const About: React.FC = () => {
    return (
        <div className="max-h-[100vh]" style={{ background: `url(${ bg })` }}>
            <Navbar positionType="none" />
            <div className="w-full flex justify-center items-center">
                <Container className="flex items-center flex-wrap justify-center p-5 gap-6">
                    { users.map((user, index) => ( 
                        <Card key={index} imgSrc={ user.img } nick={ user.nick !== "" ? user.nick : user.nome } role={ user.role } link={ user.link } blank={ user.link !== "#" ? true : false } />
                    )) }
                </Container>
            </div>
        </div>
    );
}

export default About;