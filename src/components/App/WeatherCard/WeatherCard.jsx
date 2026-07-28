import { getWeatherMoodMessage } from "../../../utils/weatherMoodMessages";

import "./WeatherCard.css";

function WeatherCard({ weather}) {
  const iconUrl = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;
  
  const message = getWeatherMoodMessage(
    weather.weather[0].main
  );

  const weatherType = weather.weather[0].main.toLowerCase();

  return (
    <section className={`weather-card weather-card--${weatherType}`}>

  <div className="weather-card__left">

    <div className="weather-card__current">

      <img
        className="weather-card__icon"
        src={iconUrl}
        alt={weather.weather[0].description}
      />

      <span className="weather-card__temperature">
        {Math.round(weather.main.temp)}°
      </span>

    </div>
  </div>

  <div className="weather-card__right">

    <h3 className="weather-card__city">
      Today in {weather.name}
    </h3>

    <p className="weather-card__description">
      {weather.weather[0].description}
    </p>

    <p className="weather-card__message">
      {message}
    </p>
    
  </div>

</section>
  );
}

export default WeatherCard;