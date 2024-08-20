import React, { useState } from "react";
import BannerGlobe from "../components/BannerGlobe"
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
        // url: "http://localhost:3000/social-login",
        data: {
          access_token: response.access_token
        }
      })
      let { access_token, user } = data
      console.log(data);

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

      <BannerGlobe />

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
