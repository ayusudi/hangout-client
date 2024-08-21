import React, { useState } from "react";
import BannerGlobe from "../components/BannerGlobe"
import { Link, useNavigate } from "react-router-dom";
import { useGoogleLogin } from '@react-oauth/google';
import axios from "axios";
import accuracy from "../assets/accuracy.png"
import interactive from "../assets/interactive.png"
import personalize from "../assets/personalize.png"
import seamless from "../assets/seamless.png"

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
      navigate("/chats");
    },
    onError: error => {
    },
  });

  return (
    <div className="font-myriad min-h-screen bg-black text-white flex flex-col items-center md:pt-12 pt-8 px-4 md:px-0">
      {/* Header */}
      <header className="w-full py-4 flex justify-between items-center">
        <nav className="flex justify-center items-center gap-4 m-auto">
          <a href="#aboutus" className="hover:text-[#52EDF2] text-lg">ABOUT US</a>
          <a href="#demo" className="hover:text-[#52EDF2] text-lg">DEMO</a>
          {
            localStorage.getItem("email") && localStorage.getItem("access_token") ? <Link className="hover:text-[#52EDF2] text-lg" to="/chats">CHAT</Link> :
              <p onClick={login} className={loading ? "text-[#52EDF2] text-lg" : "hover:text-[#52EDF2] text-lg"}>{loading ? 'PLEASE WAIT' : 'LOGIN/REGISTER'}</p>
          }
        </nav>
      </header>

      <BannerGlobe login={login} />

      {/* Additional Sections */}
      <div className="flex flex-col gap-8 my-20 md:my-36 2xl:my-44 2xl:pt-20 sm:w-[80%] md:w-[640px]">
        <div id="aboutus" className="border-gradient">
          <div className="px-3 py-4">
            <p className="text-xl text-white font-conthrax mb-4">About Hangout AI</p>
            <p className="text-white font-myriad mb-1 text-justify">
              We at Hangout AI are passionate about helping you create unforgettable experiences using advanced AI technology to deliver personalized itineraries tailored to your preferences.
              <br />  <br />
              We understand that every outing—whether for a group, a couple, or even some well-deserved "me time"—should be special. That's why we've meticulously designed our system to provide you with the most relevant and engaging recommendations.
              <br /> <br />
              Our mission is to simplify the planning process, allowing you to focus on making memories. By combining cutting-edge AI, data processing, and user-friendly interfaces, we're dedicated to helping you create moments that truly matter.
            </p>
          </div>
        </div>
        <div id="demo" className="border-gradient h-40">
          <p className="text-gray-300">VIDEO EMBEDDED</p>
        </div>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="py-5 gap-1.5 border-gradient flex-1 flex flex-col justify-center md:items-center">
            <div className="flex justify-center items-center gap-2 ">
              <img className="w-16 h-16" src={personalize} />
              <p className="text-md font-conthrax">Personalized Itineraries</p>
            </div>
            <p className="font-myriad mb-2 text-justify">Users receive customized dating itineraries tailored to their preferences, ensuring a memorable experience.</p>
          </div>
          <div className="py-4 gap-1.5 border-gradient flex-1 flex flex-col justify-center md:items-center">
            <div className="flex justify-center items-center gap-2 ">
              <img className="w-16 h-16" src={interactive} />
              <p className="text-md font-conthrax">Instant Recommendations</p>
            </div>
            <p className="font-myriad mb-2 text-justify">The system delivers the latest suggestions by harnessing large-scale data processing and advanced vector search capabilities.</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="py-4 gap-1.5 border-gradient flex-1 flex flex-col justify-center md:items-center">
            <div className="flex justify-center items-center gap-2 pl-2">
              <img className="w-16 h-16" src={seamless} />
              <p className="text-md font-conthrax">Seamless Interaction</p>
            </div>
            <p className="font-myriad mb-2 text-justify">The interface allows users to seamlessly request and receive detailed itineraries based on their preferences and inputs.</p>
          </div>
          <div className="py-4 gap-1.5 border-gradient flex-1 flex flex-col justify-center md:items-center">
            <div className="flex justify-center items-center gap-2 ">
              <img className="w-16 h-16" src={accuracy} />
              <p className="text-md font-conthrax">Enhanced Precision</p>
            </div>
            <p className="font-myriad mb-2 text-justify">Advanced LLMs and embeddings provide highly accurate and contextually relevant recommendations for locations and activities.</p>
          </div>
        </div>
      </div >
      {/* accuracy,interactive,, seamless */}

      {/* Footer Gradient */}
      < footer className="w-full py-8 bg-gradient-to-r from-[#B85CA7] to-[#52EDF2]" ></footer >
    </div >
  );
};

export default HangoutAI;
