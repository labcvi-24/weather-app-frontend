import { useState } from "react";
import "./SearchBar.css";

function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    // Elimina los espacios en blanco al principio y al final de un texto.
    const cityName = city.trim();

    if (!cityName) return;

    onSearch(cityName);
  }

  return (
    <form className="search" onSubmit={handleSubmit}>
      <input
        className="search__input"
        type="text"
        placeholder="Search city..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <button
        className="search__button"
        type="submit"
        disabled={!city.trim()}
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;
