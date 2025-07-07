import React from "react";

const Intro = () => {
  return (
    <div className="h-50 w-50 mb-10 flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-10 ">
      <div className="w-800 h-50 bg-white/10 backdrop-blur-md border border-white/20 shadow-5xl rounded-2xl p-5 flex items-center justify-center text-center">
        <p className="text-gray-50 text-lg leading-relaxed font-light ">
          This is a <span className="font-semibold text-cyan-400">simple blockchain network</span> implemented using JavaScript.
          <span className="block mt-6">
            <span className="font-semibold text-cyan-300">MyBlockchain</span> adheres to the core principles of a conventional blockchain network.
          </span>
          <span className="block mt-6">
            You can interact with the live blockchain using the features listed below.
          </span>
        </p>
      </div>
    </div>
  );
};

export default Intro;
