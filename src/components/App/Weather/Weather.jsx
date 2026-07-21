import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getWeather } from "../../../utils/weatherApi";
import SearchBar from "../SearchBar/SearchBar";
import WeatherCard from "../WeatherCard/WeatherCard";
import "./Weather.css";

function Weather() {
  const [weather, setWeather] = useState(null);

  // const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const { city } = useParams();

function handleSearch(city) {
  navigate(`/weather/${city}`);
}


  useEffect(() => {
    if (!city) return;
    
    getWeather(city)
    .then((data) => {
      console.log(data);

      setWeather(data);
    })
    .catch((err) => {
      console.log(err);
    });
  }, [city]);
  

  return (
    <main className="weather">
      <section className="weather__hero">
        <h2 className="weather__title">
          Discover the best plan according to today's weather.
        </h2>

        <SearchBar onSearch={handleSearch} />
      </section>

      {weather && <WeatherCard weather={weather} />}
    </main>
  );
}

export default Weather;