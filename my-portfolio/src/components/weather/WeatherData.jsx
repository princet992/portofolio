import { useEffect, useState } from "react";
import '../weather/weather.css'
import cloud_icon from "./weatherImages/few-clouds-day.png";
import cloud_night_icon from "./weatherImages/few-clouds-night.png";
import clear_icon from "./weatherImages/clear-day.png";
import clear_night_icon from "./weatherImages/clear-night.png";
import scattered_icon from "./weatherImages/scattered-cloud-day.png";
import mist_icon from "./weatherImages/mist.png";
import snow_icon from "./weatherImages/snow.png";
import thenderstorm_icon from "./weatherImages/thenderstorm.png";
import shower_icon from "./weatherImages/shower-rain.png";
import broken_icon from "./weatherImages/broken-cloud.png";
import rain_icon from "./weatherImages/rain-day.png";
import rain_night_icon from "./weatherImages/rain-night.png";
import WeatherDetails from "./WeatherDetails";

function WeatherData() {
  const [weatheData, setWeatheData] = useState(false);
  const allIcons = {
    "01d":clear_icon,
     "01n":clear_night_icon,
     "02d":cloud_night_icon,
     "02n":cloud_icon,
     "03d":scattered_icon,
     "04d":broken_icon,
     "09d":shower_icon,
     "13d":snow_icon,
     "50d":mist_icon,
     "11d":thenderstorm_icon,
     "10d":rain_icon,
     "10n":rain_night_icon
  };

  const fetchData = async (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${"606ae9dddf5b0e514e3d967a2c168fa9"}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      // console.log(data)
      const icons = allIcons[data.weather[0].icon || clear_icon];
      setWeatheData({
        temperature: Math.floor(data.main.temp),
        location: data.name,
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        icon: icons,
      });
    } catch {
      // setWeatheData(false)
      console.log("failed to fetch data")
    }
  };

  useEffect(() => {
    fetchData("chandigarh");
  }, []);
  return (
    <>
     <div>
     <WeatherDetails
        temperature={weatheData.temperature}
        humidity={weatheData.humidity}
        windSpeed={weatheData.windSpeed}
        icon={weatheData.icon}
        location={weatheData.location}
        fetchData={fetchData}
        weatheData={weatheData}
      />
    
     </div>
 
    </>
  );
}

export default WeatherData;