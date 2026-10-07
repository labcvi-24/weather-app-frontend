const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

export async function getWeather(city) {
  const res = await fetch(
    `${BASE_URL}?q=${city}&units=metric&appid=${API_KEY}`);

  if (!res.ok) {
      throw new Error("City not found");
  }

  const data = await res.json();

  return data;
  
}