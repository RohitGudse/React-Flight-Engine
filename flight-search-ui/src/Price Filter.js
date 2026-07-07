// src/components/PriceFilter.jsx

import React, { useState, useEffect } from "react";
import "./PriceFilter.css";

const MIN_PRICE = 1000;
const MAX_PRICE = 20000;
const DEFAULT_PRICE = 5000;

export default function PriceFilter() {
  const [selectedPrice, setSelectedPrice] = useState(DEFAULT_PRICE);
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const progress =
      ((selectedPrice - MIN_PRICE) / (MAX_PRICE - MIN_PRICE)) * 100;
    setPercentage(progress);
  }, [selectedPrice]);

  const handlePriceChange = (event) => {
    setSelectedPrice(Number(event.target.value));
  };

  const resetFilter = () => {
    setSelectedPrice(DEFAULT_PRICE);
  };

  return (
    <div className="price-filter-container">

      {/* Header */}
      <div className="filter-header">
        <h2>Price Filter</h2>
        <button onClick={resetFilter}>Reset</button>
      </div>

      {/* Description */}
      <p className="description">
        Choose your preferred maximum product price.
      </p>

      {/* Current Price */}
      <div className="price-display">
        <span>Selected Price</span>
        <h3>₹{selectedPrice.toLocaleString()}</h3>
      </div>

      {/* Range Slider */}
      <input
        type="range"
        min={MIN_PRICE}
        max={MAX_PRICE}
        step="500"
        value={selectedPrice}
        onChange={handlePriceChange}
        className="price-slider"
      />

      {/* Price Labels */}
      <div className="price-labels">
        <span>₹1,000</span>
        <span>₹20,000</span>
      </div>

      {/* Progress */}
      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>

      {/* Filter Information */}
      <div className="filter-summary">
        <h4>Filter Summary</h4>

        <table>
          <tbody>
            <tr>
              <td>Minimum Price</td>
              <td>₹{MIN_PRICE.toLocaleString()}</td>
            </tr>

            <tr>
              <td>Maximum Price</td>
              <td>₹{MAX_PRICE.toLocaleString()}</td>
            </tr>

            <tr>
              <td>Selected Price</td>
              <td>₹{selectedPrice.toLocaleString()}</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Apply Button */}
      <button
        className="apply-btn"
        onClick={() =>
          alert(`Price Filter Applied: ₹${selectedPrice.toLocaleString()}`)
        }
      >
        Apply Filter
      </button>
    </div>
  );
}