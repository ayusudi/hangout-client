import React from "react";
import hangout from "../assets/hangout.png";
import { Link } from "react-router-dom";

const HangoutAI = () => {
  return (
    <div className="font-myriad min-h-screen bg-black text-white flex flex-col items-center pt-12">
      {/* Header */}
      <header className="w-full py-4 flex justify-between items-center">
        <nav className="flex justify-center items-center gap-4 m-auto">
          <a href="#aboutus" className="hover:text-[#29A1C7] text-lg">ABOUT US</a>
          <a href="#demo" className="hover:text-[#29A1C7] text-lg">DEMO</a>
          <Link to="/chat" className="hover:text-[#29A1C7] text-lg">LOGIN/REGISTER</Link>
        </nav>
      </header>

      {/* Title and Tagline */}
      <div className="text-center mt-10 cursor-pointer">
        <h1 className="text-5xl font-bold font-conthrax">HANGOUT AI</h1>
        <p className="text-xl mt-8">
          Plan your next adventure effortlessly with Hangout AI.<br />Tailor your trips to perfection using our intelligent travel assistant.
        </p>
      </div>

      {/* Globe Image */}
      <div className="mt-12 relative flex justify-center items-center size-[500px]">
        <div className="absolute w-80 h-80 border-4 border-purple-400 rounded-full animate-pulse">

        </div>
        <div className="bg-gradient-to-r from-[#B85CA7] to-[#29A1C7] absolute size-[500px] border-4 border-blue-500 rounded-full animate-spin-slow">

        </div>
        <img
          src={hangout}
          alt="Globe"
          className="relative size-[400px] rounded-full"
        />
      </div>

      {/* Video Embed Placeholder */}


      {/* Additional Sections */}
      <div className="mt-12 w-4/5 md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div id="aboutus" className="border-gradient h-40 col-span-2">
          <p className="text-gray-300">DETAIL FEATURE</p>

        </div>
        <div id="demo" className="border-gradient h-40 col-span-2">
          <p className="text-gray-300">VIDEO EMBEDDED</p>
        </div>
        <div className="border-gradient h-40">
          <p className="text-gray-300">DEV 1</p>

        </div>
        <div className="border-gradient h-40">
          <p className="text-gray-300">DEV 1</p>

        </div>
      </div>

      {/* Footer Gradient */}
      <footer className="w-full mt-16 py-8 bg-gradient-to-r from-[#B85CA7] to-[#29A1C7]"></footer>
    </div >
  );
};

export default HangoutAI;
