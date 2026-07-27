const API_KEY = import.meta.env.VITE_GEOAPIFY_API_KEY;

const GEOCODING_URL = "https://api.geoapify.com/v1/geocode/search";
const PLACES_URL = "https://api.geoapify.com/v2/places";

function getCoordinates(city) {
  return fetch(
    `${GEOCODING_URL}?text=${city}&apiKey=${API_KEY}`
  )
    .then((res) => {
      if (!res.ok) {
        throw new Error("City not found");
      }

      return res.json();
    })
    .then((data) => ({
      lat: data.features[0].properties.lat,
      lon: data.features[0].properties.lon,
    }));
}

function fetchPlaces(lat, lon, categories, radius) {
  return fetch(
    `${PLACES_URL}?categories=${categories.join(",")}&filter=circle:${lon},${lat},${radius}&limit=15&apiKey=${API_KEY}`
  )
    .then((res) => {
      if (!res.ok) {
        throw new Error("Places not found");
      }

      return res.json();
    });
}

export function getPlaces(city, categories) {
  return getCoordinates(city)
    .then(({ lat, lon }) => {

      return fetchPlaces(lat, lon, categories, 5000)
        .then((data) => {

          if (data.features.length > 0) {
            return data;
          }

          console.log("No places in 5km. Trying 15km...");

          return fetchPlaces(lat, lon, categories, 15000);

        });

    })
    .then((data) => {

      console.log("GEOAPIFY RESPONSE");
      console.log(data.features);

      return data.features.map((place) => ({

        name:
          place.properties.name ||
          place.properties.address_line1 ||
          place.properties.formatted,

        category:
          place.properties.categories[1]
            ?.split(".")
            .pop()
            .replace(/\b\w/g, (letter) => letter.toUpperCase()) || "Place",

        lat: place.properties.lat,
        lon: place.properties.lon,

      }));

    });
}

