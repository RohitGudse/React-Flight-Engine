import React from "react";

const searches = [
  "Mumbai → Delhi",
  "Pune → Bangalore",
  "Goa → Hyderabad",
];

const RecentSearches = () => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md">
      <h2 className="text-xl font-bold mb-4">Recent Searches</h2>

      {searches.map((item, index) => (
        <div
          key={index}
          className="p-3 border-b hover:bg-gray-100 cursor-pointer"
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default RecentSearches;