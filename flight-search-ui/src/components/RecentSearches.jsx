
import React from "react";

const searches = [
  { id: 1, route: "Mumbai → Delhi" },
  { id: 2, route: "Pune → Bangalore" },
  { id: 3, route: "Goa → Hyderabad" },
];

function SearchItem({ item }) {
  return (
    <button
      type="button"
      className="block w-full border-b px-4 py-3 text-left
                 transition-colors duration-200
                 last:border-b-0 hover:bg-gray-50"
      onClick={() => console.log("Selected route:", item.route)}
    >
      {item.route}
    </button>
  );
}

export default function RecentSearches() {
  return (
    <section className="rounded-2xl bg-white p-5 shadow-sm">
      <h2 className="mb-4 text-xl font-semibold text-gray-800">
        Recent Searches
      </h2>

      <div className="overflow-hidden rounded-lg border border-gray-200">
        {searches.map((item) => (
          <SearchItem key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
