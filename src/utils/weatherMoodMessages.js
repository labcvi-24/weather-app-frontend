const weatherMoodMessages = {
  Clear: "Perfect day for outdoor activities.",
  Clouds: "A great day to explore the city.",
  Rain: "A cozy indoor plan sounds perfect today.",
  Snow: "Enjoy the winter atmosphere!",
  Thunderstorm: "Better stay somewhere safe and comfortable.",
  Drizzle: "A light jacket and a nice café are a great choice.",
  Mist: "A calm day for discovering hidden places.",
};
export function getWeatherMoodMessage(weather) {
  return (
    weatherMoodMessages[weather] ||
    "Enjoy today's mood wherever you go!"
  );
}

