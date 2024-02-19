import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col py-8 h-full">
        <Hero />
      </div>
    </>
  );
}

export default App;
