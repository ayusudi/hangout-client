import hangout from "../assets/hangout.png";
import pink from "../assets/bulletpink.png"
import blue from "../assets/bulletblue.png"
import floor from "../assets/floor.png"

export default function Component() {
  return (
    <>
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
          className="md:h-[90px] w-full left-0 bottom-[-80px] absolute"
        />
      </div>
    </>
  )
}