import search_icon from "./weatherImages/search.png";
import humidity_icon from "./weatherImages/humidity.png";
import wind_icon from "./weatherImages/wind.png";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

function WeatherDetails({
  temperature,
  windSpeed,
  location,
  humidity,
  icon,
  fetchData,
  weatherData
}) {
  const inputRef = useRef();
  const navigate = useNavigate()
  return (
    <>
   
      <div className="weather mx-auto  max-h-full text-white py-10">
     <h2 className="text-slate-900 bg-clip-text text-center text-xl md:text-3xl lg:text-3xl xl:text-3xl font-bold me-8">WEATHER FORECAST</h2>

       <main className="text-center">
       <div className="input-box flex justify-center items-center gap-5 py-5 px-2">
          <input type="text" ref={inputRef}
          className="px-5 py-2 rounded-lg w-80 max-w-screen focus:outline-none bg-slate-100 text-black"
          placeholder="Enter city name..."
           />
          <img
            src={search_icon}
            alt=""
            className="w-[40px]  bg-white p-3 rounded-full hover:bg-slate-200"
            onClick={() => fetchData(inputRef.current.value)}
          />
        </div>
        <div className="temp flex justify-around items-center w-2/3 mx-auto  align-middle">
          <div>
            <img src={icon} alt="" className="w-[200px]" />
            <p className="text-2xl font-bold pt-1 text-yellow-500">{temperature}</p>
            <p className="text-3xl font-bold pt-1">{location}</p>
          </div>
          <div className="pt-11">
          <div className="flex justify-between gap-5 pt-6">
          <img src={humidity_icon} alt="" className="w-[50px] h-[50px]" />
           <div>
           <p className="text-lg font-bold">Humidity</p>
           <span className="text-xl font-bold py-2 inline-block">{humidity}</span>
           </div>
          </div>
           <div className="flex justify-between gap-5 pt-8">
           <img src={wind_icon} alt="" className="w-[50px] h-[50px]" />
            <div>
            <p className="text-lg font-bold">Wind Speed</p>
            <span className="text-xl font-bold py-2 inline-block">{windSpeed} km/h</span>
            </div>
           </div>
          </div>
        </div>
       </main>
       <button onClick={()=>navigate(-1)} className="bg-yellow-300 text-black font-bold rounded-lg block mx-auto px-4 py-2 mt-20">Go Back</button>
      </div>
    </>
  );
}

export default WeatherDetails;
