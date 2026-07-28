import "./EmptyState.css";

function EmptyState() {

  return (

    <section className="empty-state">

      <h3>
        No recommendations found
      </h3>

      <p>
        We couldn't find any nearby places for the current weather. Try searching for another city.
      </p>

    </section>

  );

}

export default EmptyState;