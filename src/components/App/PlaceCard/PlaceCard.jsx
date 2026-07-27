import "./PlaceCard.css";
import { getPlaceImage } from "../../../utils/placeImages";
import { getPlaceCategoryLabel } from "../../../utils/placeCategoriesLabel";

function PlaceCard({ place }) {
  const mapsUrl = `https://www.google.com/maps?q=${place.lat},${place.lon}`;

  return (
    <article className="place-card">

      <div className="place-card__image">
        <img
        src={getPlaceImage(place.category)}
        alt={place.name}
        />
      </div>

      <h3 className="place-card__title">
        {place.name}
      </h3>

      <p className="place-card__category">
        {getPlaceCategoryLabel(place.category)}
      </p>

      <a
        href={mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="place-card__button"
      >
        Open in Google Maps →
      </a>

    </article>
  );
}

export default PlaceCard;