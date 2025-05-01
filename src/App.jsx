import React from "react";
import "./styles/index.css";
import NavBar from "./components/common/NavBar";
import HeroSection from "./components/sections/HeroSection";
import { CornerSpotlight } from "./components/ui/CornerSpotlight";

function App() {
  return (
    <div className="relative h-screen overflow-hidden">
      <CornerSpotlight className="top-[-300px] left-[-500px]" />
      <NavBar />
      <HeroSection />
    </div>
  );
}

export default App;
