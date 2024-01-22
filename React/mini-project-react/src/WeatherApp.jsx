import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
  let [weatherInfo, setweatherInfo] = useState({
    city: "Dehradun",
    temp: 25.05,
    tempMin: 19,
    tempMax: 28,
    humidity: 47,
    feelsLike: 24.84,
    weather: "haze",
  });

  let updateInfo = (result) => {
    setweatherInfo(result);
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Weather App By &copy; Prajwal Gandhi</h2>
      <SearchBox updateInfo={updateInfo}/>
      <InfoBox info={weatherInfo} />
    </div>
  );
}
