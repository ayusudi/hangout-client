import background from "../assets/background.png"

export default function Page() {
  return (
    <div style={{ backgroundImage: `url(${background})`, backgroundSize: "100%" }} className="p-12 min-h-[100vh] flex flex-col items-center">
      {/* Header */}
      <div className="flex justify-between w-full px-8 py-4 text-white">
        <h1 className="text-4xl font-bold font-conthrax">HANGOUT AI</h1>
        <div className="space-x-8 font-myriad">
          <a href="#about" className="text-lg">ABOUT US</a>
          <a href="#tech" className="text-lg">TECH STACK</a>
          <a href="#stats" className="text-lg">WEB STATS</a>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow grid grid-cols-12 gap-4 w-full px-8">
        {/* Left Column */}
        <div className="col-span-3 flex flex-col space-y-4">
          <div className="rounded">
            <p className="text-white text-justify font-myriadl">Make your travel plans to Jakarta, Singapore, and Bangkok  with our AI Travel Assistant. Tailored to your preferences, let us be your guide and discover the world in a way that feels just right for you.</p>
          </div>
          <div className="border-gradient h-32">
            <div className="bg-dark w-full h-full">
              <p className="text-white">INPUT LOCATION</p>
            </div>
          </div>
          <div className="border-gradient h-32 flex-grow">
            <div className="bg-dark w-full h-full">
              <p className="text-white">INPUT DATE, DURATION</p>
            </div>
          </div>
        </div>

        {/* Center Column */}
        <div className="col-span-7 flex flex-col space-y-4 h-full">
          <div className="flex-grow space-y-4 flex flex-col">
            <div className="h-16 rounded-lg w-4/6 self-end userchat p-2">
              <p className="text-white font-myriadl">First Prompt User Generated</p>
            </div>
            <div className="h-64 rounded-lg relative aianswer">
              <div className="circleai absolute top-0 left-0 w-8 h-8 rounded-full ml-2 mt-2"></div>
              <p className="text-white font-myriadl pl-12 py-5">RESPONSE AI</p>

            </div>
          </div>

          <textarea value=" INPUT USER (TEXT AREA)" className="py-2 px-2.5 text-white font-myriadl bg-[#1A1C22] border border-[3px] border-[#6C7B96] h-20 rounded-lg justify-self-end">

          </textarea>
        </div>

        {/* Right Column */}
        <div className="col-span-2 flex h-full">
          <div className="border-gradient w-full w-full flex-grow">
            <div className="bg-dark w-full h-full">
              <p className="text-white">ISI APA YA?</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}