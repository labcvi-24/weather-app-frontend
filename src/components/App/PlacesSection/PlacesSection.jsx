import PlaceCard from "../PlaceCard/PlaceCard";
import "./PlacesSection.css";

function PlacesSection({ places }) {
console.log(places);
  return (

    <section className="places">

      <h2 className="places__title">

        Things to do today

      </h2>

      <div className="places__grid">

        {places.map((place, index) => (

          <PlaceCard
            key={index}
            place={place}
          />

        ))}

      </div>

    </section>

  );

}

export default PlacesSection;