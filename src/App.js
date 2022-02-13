import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import MapContainer from "./MapContainer";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

function App() {
  const [inputHandler, setinputHandler] = useState("");
  const [ip, setIP] = useState("");
  const [location, setLocation] = useState("");
  const [country, setCountry] = useState("");
  const [iptime, setIPTime] = useState("");
  const [isp, setISP] = useState("");
  const [lat, setLat] = useState(28.44923);
  const [long, setLong] = useState(77.04448);

  function submitHandler(e) {
    e.preventDefault();
    console.log("submitted");

    axios
      .get(
        "https://geo.ipify.org/api/v2/country,city?apiKey=at_pf2X06Dd1gdstnTVRALoBwGBFaru6&ipAddress=" +
          inputHandler
      )
      .then((res) => {
        console.log(res.data);
        setIP(res.data.ip);
        setLocation(res.data.location.city);
        setIPTime(res.data.location.timezone);
        setCountry(res.data.location.country);
        setISP(res.data.isp);
        setLat(res.data.location.lat);
        setLong(res.data.location.lng);
      });
  }
  const defaultCenter = {
    lat: lat,
    lng: long,
  };

  return (
    <div>
      <div className="bg-green-900 text-white flex justify-center items-start flex-col shadow-lg font-pop bg-no-repeat bg-right bg-[url('../public/earth.png')]">
        <h1 className="text-2xl p-4 sm:p-5 font-bold">IP Address Tracker</h1>
        <div className="text-black relative">
          <input
            type="text"
            value={inputHandler}
            placeholder="Search for an IP address"
            className=" w-72 sm:w-96 h-8 mb-4 sm:mb-5 rounded-lg p-2 ml-4 sm:ml-5 "
            onChange={(e) => setinputHandler(e.target.value)}
          />
          <button onClick={submitHandler} className="bg-gray-200">
            <img
              src="https://img.icons8.com/external-dreamstale-lineal-dreamstale/32/000000/external-search-ui-dreamstale-lineal-dreamstale.png"
              className="h-5 absolute top-[6px] right-1 hover:scale-105"
            />
          </button>
        </div>
        <div className="z-10 ml-4 sm:ml-5 mb-4">
          <div className=" grid grid-cols-2 sm:grid-cols-4  w-[70vw] text-md text-black gap-2">
            <div className="p-2 bg-red-500 rounded-lg transform transition duration-100 hover:scale-105">
              <div className="font-bold text-md flex justify-center ">
                IP address
              </div>
              <p className="text-sm flex justify-center">{ip}</p>
            </div>
            <div className="p-2 bg-yellow-500 rounded-lg transform transition duration-100 hover:scale-105">
              <div className="font-bold text-md flex justify-center">
                Location
              </div>
              <p className="text-sm flex justify-center">{location}</p>
            </div>
            <div className="p-2 bg-green-500 rounded-lg transform transition duration-100 hover:scale-105">
              <div className="font-bold text-md flex justify-center ">
                Time Zone
              </div>
              <p className="text-sm flex justify-center">{iptime}</p>
            </div>
            <div className="p-2 bg-sky-500 rounded-lg transform transition duration-100 hover:scale-105">
              <div className="font-bold text-md flex justify-center">ISP</div>
              <p className="text-sm flex justify-center">{isp}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="map">
        <LoadScript googleMapsApiKey="AIzaSyC9qhUuTNpLi6Tcj30FBp09ZWI9QGr6UdU">
          <GoogleMap
            mapContainerStyle={{
              height: "80vh",
              width: "100vw",
              container: "map",
            }}
            zoom={8}
            center={defaultCenter}
          >
            <Marker position={defaultCenter}></Marker>
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  );
}

export default App;
