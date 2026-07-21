// import { getWeatherTips } from "../../../utils/weatherTips";
import { getWeatherMood } from "../../../utils/weatherTips";

import "./WeatherCard.css";

function WeatherCard({ weather }) {
  const iconUrl = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;
  
  // const tips = getWeatherTips(weather.weather[0].main);
  const mood = getWeatherMood(weather.weather[0].main);

  return (
    <section className="weather-card">

      <img
        className="weather-card__icon"
        src={iconUrl}
        alt={weather.weather[0].description}
      />

      <h2 className="weather-card__city">
        Today in {weather.name}
      </h2>

      <p className="weather-card__temperature">
        {Math.round(weather.main.temp)}°
      </p>

      <p className="weather-card__description">
        {weather.weather[0].description}
      </p>

      <p className="weather-card__message">
        {mood.message}
      </p>

      <hr className="weather-card__divider" />

      <div className="weather-card__tips">

        <h3 className="weather-card__tips-title">
          ✨ Today's Mood
        </h3>

        <ul className="weather-card__list">
          {/* //Este patrón (map) Convierte un arreglo de datos en una lista de elementos JSX. */}
          {mood.tips.map((tip) => (
            <li key={tip}>{tip}</li>
          ))}
        </ul>

      </div>

    </section>
  );
}

export default WeatherCard;