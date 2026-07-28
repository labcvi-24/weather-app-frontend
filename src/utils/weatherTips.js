const weatherMood = {
  Clear: {
    message: "The sun is shining! It's the perfect time to enjoy the outdoors and recharge your energy.",
    tips: [
      "Go for a walk",
      "Ride a bike",
      "Enjoy a picnic",
    ],
  },

  Clouds: {
    message: "Cloudy skies create the perfect atmosphere for a relaxing day.",
    tips: [
      "Visit a botanical garden",
      "Enjoy an outdoor café",
      "Take a relaxing walk",
    ],
  },

  Rain: {
    message: "Rainy days invite us to slow down and enjoy life's little comforts.",
    tips: [
      "Visit a museum",
      "Read a good book",
      "Enjoy a hot coffee",
    ],
  },

  Drizzle: {
    message: "A little drizzle shouldn't stop your adventure.",
    tips: [
      "Take an umbrella",
      "Visit a bookstore",
      "Explore a cozy café",
    ],
  },

  Thunderstorm: {
    message: "Safety first. It's a great moment to enjoy indoor activities.",
    tips: [
      "Watch a movie",
      "Play board games",
      "Cook something delicious",
    ],
  },

  Snow: {
    message: "Winter has painted the world white. Stay warm and enjoy the season.",
    tips: [
      "Drink hot chocolate",
      "Build a snowman",
      "Read by the window",
    ],
  },

  Mist: {
    message: "Misty weather makes everything feel calm and mysterious.",
    tips: [
      "Take atmospheric photos",
      "Visit an art gallery",
      "Enjoy a peaceful walk",
    ],
  },
};

export function getWeatherMood(condition) {
  return (
    weatherMood[condition] || {
      message: "Every day is a good day to discover something new.",
      tips: [
        "Explore the city",
        "Take some pictures",
        "Enjoy your day",
      ],
    }
  );
}