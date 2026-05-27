import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { day: "Mon", price: 4200 },
  { day: "Tue", price: 3900 },
  { day: "Wed", price: 4500 },
  { day: "Thu", price: 4100 },
  { day: "Fri", price: 5200 },
];

const FlightPriceChart = () => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md">
      <h2 className="text-xl font-bold mb-4">Flight Price Trends</h2>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="price" stroke="#2563eb" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default FlightPriceChart;