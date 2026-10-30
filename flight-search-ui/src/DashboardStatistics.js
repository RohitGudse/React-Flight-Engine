
import React from "react";

const statistics = [
  {
    id: 1,
    title: "Total Flights",
    value: 120,
    icon: "✈️",
  },
  {
    id: 2,
    title: "Total Bookings",
    value: 450,
    icon: "🎫",
  },
];

function DashboardStats() {
  return (
    <div className="dashboard-stats">
      <h2>Statistics</h2>

      <div className="stats-container">
        {statistics.map((item) => (
          <div className="card" key={item.id}>
            <span className="stats-icon">{item.icon}</span>
            <h3>{item.title}</h3>
            <p>{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DashboardStats;
