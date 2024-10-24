import React from "react";
import CustomLayout from "./components/Layout";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Projects from "./components/Projects";
import About from "./components/About";

const App: React.FC = () => {
  return (
    <CustomLayout>
      <div id="hero">
        <Hero />
      </div>
      <div id="Services">
        <Services />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="about">
        <About />
      </div>
    </CustomLayout>
  );
};

export default App;
