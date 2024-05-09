import React from "react";
import Hero from "./components/Hero";
import Who from "./components/Who";
import Races from "./components/Races";
import Contact from "./components/Contact";
import styled from "styled-components";
import bg from "./assets/bg.jpeg";
import Navbar from "./components/Navbar";

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;

  &::-webkit-scrollbar {
      display: none;
  }
`;

const App: React.FC = () => {
  return (
    <Container style={{ background: `url(${bg})` }}>
      <Navbar />
      <Hero />
      <Who />
      <Races />
      <Contact />
    </Container>
  );
};

export default App;