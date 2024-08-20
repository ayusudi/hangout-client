import React, { useState } from "react";
import hangout from "../assets/hangout.png";
import pink from "../assets/bulletpink.png"
import blue from "../assets/bulletblue.png"
import floor from "../assets/floor.png"
import { Link, useNavigate } from "react-router-dom";
import { useGoogleLogin } from '@react-oauth/google';
import axios from "axios";
const HangoutAI = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)

  const login = useGoogleLogin({
    onSuccess: async response => {
      setLoading(true)
      let { data } = await axios({
        method: "POST",
        url: "https://hangout-ai-c81439a5ea16.herokuapp.com/social-login",
        data: {
          access_token: response.access_token
        }
      })
      let { access_token, user } = data
      localStorage.setItem("access_token", access_token)
      localStorage.setItem("name", user.name)
      localStorage.setItem("email", user.email)
      localStorage.setItem("image", user.image)
      localStorage.setItem("createdAt", user.createdAt)
      setLoading(false)
      navigate("/chat");
    },
    onError: error => {
      // console.log('Login Failed:', error);
    },
  });

  return (
    <div className="font-myriad min-h-screen bg-black text-white flex flex-col items-center md:pt-12 pt-8">
      {/* Header */}
      <header className="w-full py-4 flex justify-between items-center">
        <nav className="flex justify-center items-center gap-4 m-auto">
          <a href="#aboutus" className="hover:text-[#52EDF2] text-lg">ABOUT US</a>
          <a href="#demo" className="hover:text-[#52EDF2] text-lg">DEMO</a>
          {
            localStorage.getItem("email") && localStorage.getItem("access_token") ? <Link className="hover:text-[#52EDF2]" to="/chat">CHAT</Link> :
              <p onClick={login} className={loading ? "text-[#52EDF2] text-lg" : "hover:text-[#52EDF2] text-lg"}>{loading ? 'PLEASE WAIT' : 'LOGIN/REGISTER'}</p>
          }
        </nav>
      </header>

      {/* Title and Tagline */}
      <div className="text-center mt-10 cursor-pointer">
        <h1 className="text-5xl font-bold font-conthrax">HANGOUT AI</h1>
        <p className="text-xl mt-8 sm:max-w-[80%] md:max-w-full m-auto">
          Plan your next adventure effortlessly with Hangout AI.<br />Tailor your trips to perfection using our intelligent travel assistant.
        </p>
      </div>
      <div className="hidden md:flex ">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="circle bg-blue-500" style={{ top: "20%", left: "10%" }}>
            <img src={blue} alt="blue1" />
          </div>
          <div className="circle bg-pink-500" style={{ top: "30%", right: "10%" }}>
            <img src={pink} alt="pink1" />
          </div>
          <div className="circle bg-blue-500" style={{ bottom: "20%", left: "15%" }}>
            <img src={blue} alt="blue2" />
          </div>
          <div className="circle bg-pink-500" style={{ bottom: "10%", right: "15%" }}>
            <img src={pink} alt="pink2" />
          </div>
        </div>

      </div>

      {/* Globe Image */}
      <div>
        <div className="z-10 mt-12 relative flex justify-center items-center md:size-[500px] sm:size-[250px]">
          <div className="absolute w-80 h-80 border-4 border-purple-400 rounded-full animate-pulse">
          </div>
          <div className="bg-gradient-to-r from-[#B85CA7] to-[#52EDF2] absolute md:size-[500px] sm:size-[250px] border-4 border-blue-500 rounded-full animate-spin-slow">
          </div>
          <img
            src={hangout}
            alt="Globe"
            className="max-w-[90%] relative sm:size-[150px] md:size-[400px] rounded-full"
          />

        </div>
        <img
          src={floor}
          alt="Globe"
          className="left-0 bottom-[-100px] absolute"
        />
      </div>

      {/* Additional Sections */}
      <div className="flex flex-col gap-6 my-20 md:my-36 sm:w-[90%] md:w-[640px]">
        <div id="aboutus" className="border-gradient h-40">
          <p className="text-gray-300">DETAIL FEATURE</p>
        </div>
        <div id="demo" className="border-gradient h-40">
          <p className="text-gray-300">VIDEO EMBEDDED</p>
        </div>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="border-gradient h-40 flex-1">
            <p className="text-gray-300">DEV 1</p>
          </div>
          <div className="border-gradient h-40 flex-1">
            <p className="text-gray-300">DEV 1</p>
          </div>
        </div>
      </div >

      {/* Footer Gradient */}
      < footer className="w-full py-8 bg-gradient-to-r from-[#B85CA7] to-[#52EDF2]" ></footer >
    </div >
  );
};

export default HangoutAI;
