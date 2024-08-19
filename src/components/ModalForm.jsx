import { Button, Label, Modal, Datepicker, Select } from "flowbite-react";
import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

function calculateDuration(startTime, endTime) {
  const [startHour, startMinute] = startTime.split(':').map(Number);
  const [endHour, endMinute] = endTime.split(':').map(Number);
  let startTotalMinutes = startHour * 60 + startMinute;
  let endTotalMinutes = endHour * 60 + endMinute;
  // If the end time is less than the start time, it means the end time is on the next day.
  if (endTotalMinutes < startTotalMinutes) {
    endTotalMinutes += 24 * 60;
  }
  const durationMinutes = endTotalMinutes - startTotalMinutes;
  const durationHours = Math.floor(durationMinutes / 60);
  const remainingMinutes = durationMinutes % 60;
  if (remainingMinutes === 0) {
    return `${durationHours} hours`;
  } else {
    return `${durationHours} hours and ${remainingMinutes} minutes`;
  }
}

const icon = L.icon({
  iconSize: [25, 41],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});
const LocationMarker = ({
  setLocation,
}) => {
  useMapEvents({
    click(e) {
      setLocation(e.latlng);
    },
  });

  return null;
};

export default function Component({ setOpenModal, openModal, data, setData }) {
  const [start, setStart] = useState("15:00")
  const [end, setEnd] = useState("22:00")
  const dateTemp = new Date();
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = dateTemp.toLocaleDateString('en-US', options);
  const [locationStr, setLocationStr] = useState("Jakarta")
  const [date, setDate] = useState(formattedDate)
  function onCloseModal() {
    setOpenModal(false);
  }
  const [location, setLocation] = useState(null);
  const [center, setCenter] = useState(
    new L.LatLng(-6.2945589, 106.7849192)
  );

  const submitForm = (e) => {
    e.preventDefault()
    let dataTemp = {
      location: locationStr,
      date,
      startTime: start,
      endTime: end,
      latlng: location
    }
    setData(dataTemp)
    setOpenModal(false)
  }

  useEffect(() => {
    if (Object.keys(data).length === 6) {
      setLocationStr(data.location)
      setDate(data.date)
      setStart(data.startTime)
      setEnd(data.endTime)
      setLocation(data.latlng)
    }
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCenter(new L.LatLng(latitude, longitude));
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }, []);
  return (
    <Modal className="font-myriad" theme={object} show={openModal} size="md" onClose={onCloseModal} popup>
      <Modal.Header />
      <Modal.Body>
        <div className="space-y-4">
          <h3 className="font-myriadb text-xl font-medium text-gray-900 dark:text-white">FORM PREFERENCE</h3>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="location" value="Select Location" />
            </div>
            <Select onChange={(e) => setLocationStr(e.target.value)} value={locationStr} id="location" required>
              <option value="Jakarta">Jakarta</option>
              <option value="Singapore">Singapore</option>
              <option value="Kuala Lumpur">Kuala Lumpur</option>
            </Select>
          </div>
          <div className="z-50">
            <div className="mb-2 block ">
              <Label htmlFor="date" value="Select Date" />
            </div>
            <Datepicker className="" selected={date} onSelect={(e) => setDate(e.target.value)} minDate={new Date()} />
          </div>
          <div className="flex gap-4">
            <div>
              <label htmlFor="start-time" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Start Time:</label>
              <div className="relative">
                <div className="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z" clipRule="evenodd" />
                  </svg>
                </div>
                <input value={start} onChange={(e) => setStart(e.target.value)} type="time" id="start-time" className="bg-gray-50 border leading-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" min="07:00" max="20:00" required />
              </div>
            </div>
            <div>
              <label htmlFor="end-time" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">End Time:</label>
              <div className="relative">
                <div className="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z" clipRule="evenodd" />
                  </svg>
                </div>
                <input value={end} onChange={(e) => setEnd(e.target.value)} type="time" id="end-time" className="bg-gray-50 border leading-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" min={start} required />
              </div>
            </div>
            <div className="flex flex-col justify-center items-center mt-6">
              <p>{calculateDuration(start, end)}</p>
            </div>
          </div>
          <MapContainer
            center={center}
            zoom={20}
            style={{ height: "200px", width: "100%", zIndex: "20" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {location && <Marker position={location} icon={icon} />}
            <LocationMarker
              setLocation={(latlng) => {
                setLocation(latlng);
                onLocationSelect(latlng);
              }}
            />
            <Button gradientMonochrome="cyan" size="xs" className="absolute bg-teal text-white" style={{
              right: "5px",
              float: "right",
              zIndex: 1200,
              top: "5px",
              borderRadius: "8px",
              fontSize: 10
            }}>SET DEFAULT</Button>
          </MapContainer>
          <div className="w-full">
            <Button onClick={submitForm} gradientMonochrome="cyan" className="font-myriadb text-xl">Save It!</Button>
          </div>

        </div>
      </Modal.Body>
    </Modal >
  )
}


const object = {
  "root": {
    "base": "fixed inset-x-0 top-0 z-50 h-screen overflow-y-auto overflow-x-hidden md:inset-0 md:h-full",
    "show": {
      "on": "flex bg-gray-900 bg-opacity-80",
      "off": "hidden"
    },
    "sizes": {
      "sm": "max-w-sm",
      "md": "max-w-md",
      "lg": "max-w-lg",
      "xl": "max-w-xl",
      "2xl": "max-w-2xl",
      "3xl": "max-w-3xl",
      "4xl": "max-w-4xl",
      "5xl": "max-w-5xl",
      "6xl": "max-w-6xl",
      "7xl": "max-w-7xl"
    },
    "positions": {
      "top-left": "items-start justify-start",
      "top-center": "items-start justify-center",
      "top-right": "items-start justify-end",
      "center-left": "items-center justify-start",
      "center": "items-center justify-center",
      "center-right": "items-center justify-end",
      "bottom-right": "items-end justify-end",
      "bottom-center": "items-end justify-center",
      "bottom-left": "items-end justify-start"
    }
  },
  "content": {
    "base": "relative h-full w-full p-4 md:h-auto",
    "inner": "relative flex h-[82vh] flex-col rounded-lg bg-white shadow "
  },
  "body": {
    "base": "flex-1 overflow-auto p-6",
    "popup": "pt-0"
  },
  "header": {
    "base": "flex items-start justify-between rounded-t border-b p-5 border-gray-600",
    "popup": "border-b-0 p-2",
    "title": "text-xl font-medium text-gray-900 text-white",
    "close": {
      "base": "ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white",
      "icon": "h-5 w-5"
    }
  },
  "footer": {
    "base": "flex items-center space-x-2 rounded-b border-gray-200 p-6 dark:border-gray-600",
    "popup": "border-t"
  }
}