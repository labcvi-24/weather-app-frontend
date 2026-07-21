const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

export function getWeather(city) {
  return fetch(
    `${BASE_URL}?q=${city}&units=metric&appid=${API_KEY}`
  ).then((res) => {
    if (!res.ok) {
      throw new Error("City not found");
    }

    return res.json();
  });
}