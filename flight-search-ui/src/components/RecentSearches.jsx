import React from "react";

const recentSearchData = [
  { id: 1, route: "Mumbai → Delhi" },
  { id: 2, route: "Pune → Bangalore" },
  { id: 3, route: "Goa → Hyderabad" },
];

const SearchItem = ({ route }) => {
  return (
    <button
      type="button"
      className="w-full text-left px-4 py-3 border-b last:border-b-0
                 hover:bg-gray-50 transition-colors duration-200"
    >
      {route}
    </button>
  );
};

const RecentSearches = () => {
  return (
    <section className="bg-white p-5 rounded-2xl shadow-sm">
      <header className="mb-4">
        <h2 className="text-xl font-semibold text-gray-800">
          Recent Searches
        </h2>
      </header>

      <div className="overflow-hidden rounded-lg border">
        {recentSearchData.map((search) => (
          <SearchItem key={search.id} route={search.route} />
        ))}
      </div>
    </section>
  );
};

export default RecentSearches;