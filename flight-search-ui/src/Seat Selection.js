import React, { useState, useMemo } from "react";

const SeatSelection = () => {
  // Initial Seat Data
  const [seatLayout, setSeatLayout] = useState([
    [
      { id: "A1", booked: false },
      { id: "A2", booked: true },
      { id: "A3", booked: false },
      { id: "A4", booked: false },
    ],
    [
      { id: "B1", booked: false },
      { id: "B2", booked: false },
      { id: "B3", booked: true },
      { id: "B4", booked: false },
    ],
    [
      { id: "C1", booked: false },
      { id: "C2", booked: false },
      { id: "C3", booked: false },
      { id: "C4", booked: true },
    ],
    [
      { id: "D1", booked: false },
      { id: "D2", booked: false },
      { id: "D3", booked: false },
      { id: "D4", booked: false },
    ],
  ]);

  const [selectedSeats, setSelectedSeats] = useState([]);

  // Select or Remove Seat
  const handleSeatSelection = (seat) => {
    if (seat.booked) {
      alert("This seat is already booked.");
      return;
    }

    const alreadySelected = selectedSeats.includes(seat.id);

    if (alreadySelected) {
      setSelectedSeats(
        selectedSeats.filter((selectedSeat) => selectedSeat !== seat.id)
      );
    } else {
      setSelectedSeats([...selectedSeats, seat.id]);
    }
  };

  // Total Price
  const totalPrice = useMemo(() => {
    return selectedSeats.length * 250;
  }, [selectedSeats]);

  // Booking Function
  const confirmBooking = () => {
    if (selectedSeats.length === 0) {
      alert("Please select at least one seat.");
      return;
    }

    alert(
      `Booking Successful!\n\nSeats: ${selectedSeats.join(
        ", "
      )}\nTotal Amount: ₹${totalPrice}`
    );

    setSelectedSeats([]);
  };

  return (
    <div
      style={{
        maxWidth: "700px",
        margin: "40px auto",
        padding: "20px",
        border: "1px solid lightgray",
        borderRadius: "10px",
      }}
    >
      <h1>Movie Seat Booking</h1>

      <p>Select your preferred seats.</p>

      {/* Seat Layout */}
      <div>
        {seatLayout.map((row, rowIndex) => (
          <div
            key={rowIndex}
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "15px",
            }}
          >
            {row.map((seat) => {
              const isSelected = selectedSeats.includes(seat.id);

              return (
                <button
                  key={seat.id}
                  onClick={() => handleSeatSelection(seat)}
                  disabled={seat.booked}
                  style={{
                    width: "60px",
                    height: "45px",
                    margin: "5px",
                    cursor: seat.booked ? "not-allowed" : "pointer",
                    borderRadius: "6px",
                    border: "none",
                    fontWeight: "bold",
                    backgroundColor: seat.booked
                      ? "#999"
                      : isSelected
                      ? "#28a745"
                      : "#0d6efd",
                    color: "white",
                  }}
                >
                  {seat.id}
                </button>
              );
            })}
          </div>
        ))}
      </div>

      {/* Legend */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "25px",
        }}
      >
        <p>🟦 Available</p>
        <p>🟩 Selected</p>
        <p>⬜ Booked</p>
      </div>

      <hr />

      {/* Booking Summary */}
      <div>
        <h2>Booking Summary</h2>

        <p>
          <strong>Total Selected:</strong> {selectedSeats.length}
        </p>

        <p>
          <strong>Selected Seats:</strong>{" "}
          {selectedSeats.length > 0
            ? selectedSeats.join(", ")
            : "No Seat Selected"}
        </p>

        <p>
          <strong>Price Per Seat:</strong> ₹250
        </p>

        <h3>Total Amount: ₹{totalPrice}</h3>

        <button
          onClick={confirmBooking}
          style={{
            padding: "12px 25px",
            backgroundColor: "#198754",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Confirm Booking
        </button>
      </div>
    </div>
  );
};

export default SeatSelection;