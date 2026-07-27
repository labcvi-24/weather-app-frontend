const categoryLabels = {

  attraction: "Tourist Attraction",

  viewpoint: "Scenic Viewpoint",

  sculpture: "Public Sculpture",

  park: "Park",

  museum: "Museum",

  cafe: "Coffee Shop",

  restaurant: "Restaurant",

  cinema: "Cinema",

  shopping: "Shopping",

};

export function getPlaceCategoryLabel(category) {

  const key = category.toLowerCase();

  return categoryLabels[key] || "Place";

}