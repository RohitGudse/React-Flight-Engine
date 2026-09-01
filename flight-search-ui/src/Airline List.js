import React from "react";

const AirlineList = () => {
  const airlineData = [
    {
      id: 1,
      name: "IndiGo",
      code: "6E",
      country: "India",
      status: "Active",
    },
    {
      id: 2,
      name: "Air India",
      code: "AI",
      country: "India",
      status: "Active",
    },
    {
      id: 3,
      name: "Akasa Air",
      code: "QP",
      country: "India",
      status: "Active",
    },
  ];

  const handleAirlineClick = (airline) => {
    console.log(`Selected Airline: ${airline.name}`);
  };

  return (
    <section className="airline-section">
      <div className="airline-container">
        <div className="airline-header">
          <h2>Available Airlines</h2>
          <p>
            Choose from our list of available airlines for your flight
            booking.
          </p>
        </div>

        <div className="airline-list-wrapper">
          {airlineData.length > 0 ? (
            <ul className="airline-list">
              {airlineData.map((airline) => (
                <li
                  key={airline.id}
                  className="airline-item"
                  onClick={() => handleAirlineClick(airline)}
                >
                  <div className="airline-info">
                    <h3>{airline.name}</h3>

                    <div className="airline-details">
                      <span>
                        <strong>Code:</strong> {airline.code}
                      </span>

                      <span>
                        <strong>Country:</strong> {airline.country}
                      </span>

                      <span>
                        <strong>Status:</strong> {airline.status}
                      </span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleAirlineClick(airline)}
                  >
                    Select
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <div className="empty-airline-message">
              <p>No airlines are currently available.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AirlineList;