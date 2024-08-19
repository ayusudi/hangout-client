import { useState } from "react"
import background from "../assets/background.png"
import jakarta from "../assets/jakarta.png"
import kualalumpur from "../assets/kualalumpur.png"
import singapore from "../assets/singapore.png"
import ModalForm from "../components/ModalForm"
import { Link } from "react-router-dom"

function formatTime(timeString) {
  // Split the time string into hours and minutes
  const [hours, minutes] = timeString.split(':').map(Number);

  // Determine AM or PM
  const period = hours >= 12 ? 'PM' : 'AM';

  // Convert hours to 12-hour format
  const formattedHours = hours % 12 || 12;

  // Construct the formatted time string
  return `${formattedHours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')} ${period}`;
}

function formatDate(dateString) {
  const date = new Date(dateString);

  // Get day of the week
  const optionsDay = { weekday: 'long' };
  const day = date.toLocaleDateString('en-US', optionsDay);

  // Get day of the month
  const dayOfMonth = date.getDate();

  // Get month (in abbreviated format)
  const optionsMonth = { month: 'short' };
  const month = date.toLocaleDateString('en-US', optionsMonth).toUpperCase();

  // Get full year
  const year = date.getFullYear();

  // Construct the formatted date string
  return `${day}, ${dayOfMonth} ${month} ${year}`;
}

export default function Page() {
  const [openModal, setOpenModal] = useState(true);
  const [inputText, setInputText] = useState('')
  const openTheModal = () => setOpenModal(true)
  const [data, setData] = useState({
    location: "Jakarta",
    startTime: "15:00",
    endTime: "22:00",
    date: new Date(),
    langlng: { "lat": -6.294531217392458, "lng": 106.78474366664888 }
  })
  let locations = {
    Jakarta: jakarta,
    Singapore: singapore,
    "Kuala Lumpur": kualalumpur
  }

  return (
    <div style={{ backgroundImage: `url(${background})`, backgroundSize: "100%" }} className="p-12 min-h-[100vh] flex flex-col items-center">
      <ModalForm data={data} setData={setData} openModal={openModal} setOpenModal={setOpenModal} />
      {/* Header */}

      <div className="flex justify-between w-full px-8 py-4 text-white">
        <h1 className="text-4xl font-bold font-conthrax">HANGOUT AI</h1>
        <div className="space-x-8 font-myriad">
          <Link to="/chat" className="text-lg">CHAT</Link>
          <Link to="/" className="text-lg">ABOUT US</Link>
          <Link to="/" className="text-lg">LOGOUT</Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow grid grid-cols-12 gap-4 w-full px-8">
        {/* Left Column */}
        <div className="col-span-3 flex flex-col space-y-2">
          <div className="rounded">
            <span className="text-white text-justify font-myriadl">Make your travel plans to <span className="font-myriadb">Jakarta</span>, <span className="font-myriadb">Singapore</span>, and <span className="font-myriadb">Kuala Lumpur</span> with our AI Travel Assistant. Tailored to your preferences, let us be your guide and discover the world in a way that feels just right for you.</span>
          </div>
          <div className="border-gradient h-36">
            <div className="bg-dark w-full h-full flex flex-col items-center justify-center gap-2">
              <img className="h-16" src={locations[data.location]} alt={data.location} />
              <p className="text-xl text-white font-bold font-conthrax">{data.location}</p>
            </div>
          </div>
          <div className="border-gradient h-32 flex-grow">
            <div className="text-white p-3 rounded-lg flex flex-col  font-myriad">
              <div onClick={() => openTheModal()} className="z-50 cursor-pointer p-2.5 rounded-lg flex flex-col justify-between items-between font-myriad cursor-pointer gap-1">
                <span className="flex gap-2 font-myriadb text-lg">EDIT YOUR PREFERENCE <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M17.2583 5.8668C17.5833 5.5418 17.5833 5.00013 17.2583 4.6918L15.3083 2.7418C15 2.4168 14.4583 2.4168 14.1333 2.7418L12.6 4.2668L15.725 7.3918M2.5 14.3751V17.5001H5.625L14.8417 8.27513L11.7167 5.15013L2.5 14.3751Z" fill="white" />
                </svg></span>
                <div className="flex flex-col gap-4 py-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-teal size-12 flex justify-center items-center rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                        <path d="M13.7668 13.3236C12.9932 13.3236 12.2514 13.0163 11.7044 12.4693C11.1574 11.9223 10.8501 11.1804 10.8501 10.4069C10.8501 9.63335 11.1574 8.89149 11.7044 8.34451C12.2514 7.79753 12.9932 7.49023 13.7668 7.49023C14.5403 7.49023 15.2822 7.79753 15.8292 8.34451C16.3761 8.89149 16.6834 9.63335 16.6834 10.4069C16.6834 10.7899 16.608 11.1692 16.4614 11.5231C16.3148 11.8769 16.1 12.1985 15.8292 12.4693C15.5583 12.7401 15.2368 12.955 14.8829 13.1016C14.5291 13.2481 14.1498 13.3236 13.7668 13.3236ZM13.7668 2.24023C11.6008 2.24023 9.52361 3.10065 7.99206 4.6322C6.46051 6.16374 5.6001 8.24097 5.6001 10.4069C5.6001 16.5319 13.7668 25.5736 13.7668 25.5736C13.7668 25.5736 21.9334 16.5319 21.9334 10.4069C21.9334 8.24097 21.073 6.16374 19.5415 4.6322C18.0099 3.10065 15.9327 2.24023 13.7668 2.24023Z" fill="white" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-lg font-myriadb">{data.location}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="bg-teal size-12 flex justify-center items-center rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                        <path d="M0 7.49902C0 5.61302 -5.96046e-08 4.67102 0.586 4.08502C1.172 3.49902 2.114 3.49902 4 3.49902H16C17.886 3.49902 18.828 3.49902 19.414 4.08502C20 4.67102 20 5.61302 20 7.49902C20 7.97002 20 8.20602 19.854 8.35302C19.707 8.49902 19.47 8.49902 19 8.49902H1C0.529 8.49902 0.293 8.49902 0.146 8.35302C-8.9407e-08 8.20602 0 7.96902 0 7.49902ZM0 16.499C0 18.385 -5.96046e-08 19.327 0.586 19.913C1.172 20.499 2.114 20.499 4 20.499H16C17.886 20.499 18.828 20.499 19.414 19.913C20 19.327 20 18.385 20 16.499V11.499C20 11.028 20 10.792 19.854 10.645C19.707 10.499 19.47 10.499 19 10.499H1C0.529 10.499 0.293 10.499 0.146 10.645C-8.9407e-08 10.792 0 11.029 0 11.499V16.499Z" fill="white" />
                        <path d="M5 1.5V4.5M15 1.5V4.5" stroke="white" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium">Date</p>
                      <p className="text-lg font-myriadb">{formatDate(data.date)}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="bg-teal size-12 flex justify-center items-center rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                        <path d="M14.0002 2.33301C20.4437 2.33301 25.6668 7.55617 25.6668 13.9997C25.6668 20.4432 20.4437 25.6663 14.0002 25.6663C7.55666 25.6663 2.3335 20.4432 2.3335 13.9997C2.3335 7.55617 7.55666 2.33301 14.0002 2.33301ZM14.0002 6.99967C13.6907 6.99967 13.394 7.12259 13.1752 7.34138C12.9564 7.56018 12.8335 7.85692 12.8335 8.16634V13.9997C12.8336 14.3091 12.9565 14.6058 13.1753 14.8245L16.6753 18.3245C16.8954 18.537 17.1901 18.6546 17.496 18.652C17.8019 18.6493 18.0945 18.5266 18.3108 18.3103C18.5271 18.094 18.6498 17.8014 18.6524 17.4955C18.6551 17.1896 18.5375 16.8949 18.325 16.6748L15.1668 13.5167V8.16634C15.1668 7.85692 15.0439 7.56018 14.8251 7.34138C14.6063 7.12259 14.3096 6.99967 14.0002 6.99967Z" fill="white" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium">Start Time</p>
                      <p className="text-lg font-myriadb">{formatTime(data.startTime)}</p>
                    </div>
                    <div className='ml-3'>
                      <p className="font-medium ">End Time</p>
                      <p className="text-lg font-myriadb">{formatTime(data.endTime)}</p>
                    </div>
                  </div>
                </div>
              </div>
              <button onClick={() => prompt(JSON.stringify(data))} className="z-50 hover:bg-black font-conthrax bg-teal w-full py-2 rounded-md hover:bg-teal-600 transition-colors  cursor-pointer">
                GENERATE
              </button>
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
          <textarea value={inputText} onChange={(e) => setInputText(e.target.value)} className="py-2 px-2.5 text-white font-myriadl bg-[#1A1C22] border border-[3px] border-[#6C7B96] h-20 rounded-lg justify-self-end">
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
    </div >
  );
}