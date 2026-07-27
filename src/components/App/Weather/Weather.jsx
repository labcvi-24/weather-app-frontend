import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getWeather } from "../../../utils/weatherApi";
import SearchBar from "../SearchBar/SearchBar";
import WeatherCard from "../WeatherCard/WeatherCard";
import "./Weather.css";
import { getPlaces } from "../../../utils/placesApi";
import { getPlaceCategories } from "../../../utils/placeCategories";
import PlacesSection from "../PlacesSection/PlacesSection";
import Preloader from "../Preloader/Preloader";
import EmptyState from "../EmptyState/EmptyState";

function Weather() {
  const [weather, setWeather] = useState(null);
  const [places, setPlaces] = useState([]);
  const [visiblePlaces, setVisiblePlaces] = useState(3);

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const { city } = useParams();

function handleSearch(city) {
  navigate(`/weather/${city}`);
}


  useEffect(() => {
    if (!city) return;

    setLoading(true);
    
    getWeather(city)
    .then((data) => {
      
      setWeather(data);

      const categories = getPlaceCategories(
        data.weather[0].main
      );

      return getPlaces(data.name, categories);
    })
    .then((placesData) => {
      console.log("PLACES");
      placesData.forEach((place) => {
        console.log(place.category);
      });

      setPlaces(placesData);
      setVisiblePlaces(3);
      setLoading(false);
    })
    .catch((err) => {
      console.log(err);
      setLoading(false);
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

      {loading && <Preloader />}
      
      {!loading && weather && (
        <WeatherCard weather={weather}/>
      )}

      {!loading && places.length > 0 && (
        <PlacesSection 
          places={places.slice(0, visiblePlaces)}
        />
      )}

      {!loading && weather && places.length === 0 && (

        <EmptyState />

      )}

      {!loading &&
      visiblePlaces < places.length && (

        <button
          className="show-more-btn"
          onClick={() => setVisiblePlaces(visiblePlaces + 3)}
        >
          Show More Places
        </button>
      )}
    </main>
  );
}

export default Weather;