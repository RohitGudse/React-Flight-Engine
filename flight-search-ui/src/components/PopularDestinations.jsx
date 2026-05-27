import React from "react";

const destinations = [
  {
    city: "Dubai",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",
  },
  {
    city: "Paris",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
  },
  {
    city: "Singapore",
    image:
      "https://images.unsplash.com/photo-1525625293386-3f8f99389edd",
  },
];

const PopularDestinations = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {destinations.map((place, index) => (
        <div
          key={index}
          className="rounded-xl overflow-hidden shadow-md"
        >
          <img
            src={place.image}
            alt={place.city}
            className="h-48 w-full object-cover"
          />

          <div className="p-4 bg-white">
            <h2 className="text-lg font-bold">{place.city}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PopularDestinations;