import React, { useState } from "react";
import GetLatestBlock from "./components/latestBlock";
import AddBlock from "./components/addBlock";
import Chain from "./components/chain";
import Intro from "./components/intro";
import Header from "./components/header";
import Footer from "./components/footer";
const App = () => {
  const [activeComponent, setActiveComponent] = useState(null);

  const handleAddBlock = () => {
    setActiveComponent("AddBlock");
  };

  const toggleLatestBlock = () => {
    setActiveComponent((prev) => (prev === "GetLatestBlock" ? null : "GetLatestBlock"));
  };

  const toggleChain = () => {
    setActiveComponent((prev) => (prev === "Chain" ? null : "Chain"));
  };

  return (
    <div className="App bg-gray-100 min-h-[210vh] flex flex-col items-center justify-start p-6 scroll-smooth">
      {/* <h1 className="text-3xl font-extrabold text-gray-800 mb-6 text-center"> <b>MyBlockchain</b> </h1> */}
      <Header />

      {/* Intro Component */}
      <div className="min-h-screen flex justify-center items-center">
      <section
      id="home"
      className="relative w-screen h-screen bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: "url('/bg.jpg')" }}
      >
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 bg-blue/50 p-4">
      <h1 className="text-5xl font-extrabold font-mono text-gray-200 drop-shadow-lg ">Welcome to <span className="text-slate-400 ">MyBlockchain</span></h1>
      <p className="mt-4 text-lg text-gray-200 max-w-xl drop-shadow-md">
      Learn, build, and interact with blockchain tech right from your browser. This is just a demo and your first steps inWeb3 .
      </p>
      <div className="p-7"><Intro /></div>
        
      </div>
      </section>
      </div>

      {/* Buttons for interacting with blockchain */}
      {/* Blockchain Button Section */}
    <section id="about" className="min-w-full min-h-full mx-auto mt-10">
      <div className="relative w-30 h-[100vh]">
        <spline-viewer url="https://prod.spline.design/75fTLlPIu8VIqV9G/scene.splinecode"></spline-viewer>
      </div>
      <div className="absolute top-[125vh] left-0 w-full flex flex-col items-center px-4">
      <h2 className="text-5xl font-bold text-indigo-800 mb-10 tracking-tight shadow-sm">
      Blockchain Controls
      </h2>

  <div className="flex flex-col md:flex-row gap-6 mb-10 w-full max-w-3xl justify-center items-center">
    {/* Add Block Button */}
    <button
      className="bg-cyan-500 text-white font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl hover:bg-cyan-600 transition-all duration-200 text-lg"
      onClick={handleAddBlock}
    >
      ➕ Add Block
    </button>

    {/* Get Latest Block Button */}
    <button
      className="bg-indigo-500 text-white font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl hover:bg-indigo-600 transition-all duration-200 text-lg"
      onClick={toggleLatestBlock}
    >
      {activeComponent === "GetLatestBlock" ? "🔽 Hide Latest Block" : "🔍 Get Latest Block"}
    </button>

    {/* View Chain Button */}
    <button
      className="bg-pink-500 text-white font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl hover:bg-pink-600 transition-all duration-200 text-lg"
      onClick={toggleChain}
    >
      {activeComponent === "Chain" ? "🔒 Hide Chain" : "📜 View Chain"}
    </button>
  </div>

  {/* Conditionally Render Components */}
  <div >
    {activeComponent === "GetLatestBlock" && <GetLatestBlock />}
    {activeComponent === "AddBlock" && <AddBlock />}
    {activeComponent === "Chain" && <Chain />}
    </div>
    </div>
  </section>
      <section id="contact">
      <Footer />
      </section>
    </div>
  );
};

export default App;
