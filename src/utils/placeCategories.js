export function getPlaceCategories(weather) {
  const main = weather.toLowerCase();

  if (main.includes("rain")) {
    return [
      "entertainment.museum",
      "catering.cafe",
      "entertainment.cinema",
    ];
  }

  if (main.includes("clear")) {
    return [
      "tourism.attraction",
      "tourism.sights",
      "leisure.park",
    ];
  }

  if (main.includes("snow")) {
    return [
      "catering.restaurant",
      "catering.cafe",
      "entertainment",
    ];
  }

  return [
    "tourism.attraction",
    "leisure.park",
    "entertainment",
  ];
}
