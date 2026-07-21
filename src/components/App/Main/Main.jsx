import { useNavigate } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import "./Main.css";

function Main() {
  const navigate = useNavigate();

  function handleSearch(city) {
    navigate(`/weather/${city}`);
  }

  return (
    <main className="main">
      <section className="hero">
        <h1 className="hero__title">
          Welcome to Weather Mood
        </h1>

        <p className="hero__subtitle">
          Discover the best plan according to today's weather.
        </p>

        <SearchBar onSearch={handleSearch} />
      </section>
    </main>
  );
}

export default Main;