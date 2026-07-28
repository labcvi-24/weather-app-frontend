import beach from "../images/beach.png";
import cafe from "../images/coffee.png";
import cinema from "../images/cinema.png";
import cityWalk from "../images/city_walk.png";
import museum from "../images/museum.png";
import park from "../images/park.png";
import bikeRide from "../images/paseobici.png";
import restaurant from "../images/restaurant.png";
import shopping from "../images/shooping.png";
import touristAttraction from "../images/tourist_attraction.png";

const placeImages = {

  park,

  museum,

  cafe,

  restaurant,

  shopping,

  cinema,

  beach,

  attraction: touristAttraction,

  tourist: touristAttraction,

  tourism: touristAttraction,

  viewpoint: cityWalk,

  sculpture: touristAttraction,

  bike: bikeRide,

  walk: cityWalk,

};

export function getPlaceImage(category) {

  const key = category.toLowerCase();

  return placeImages[key] || cityWalk;

}