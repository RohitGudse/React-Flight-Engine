import React, { useState } from "react";

const PassengerForm = () => {
  const initialFormData = {
    fullName: "",
    age: "",
    gender: "",
    email: "",
    phone: "",
  };

  const [passengerData, setPassengerData] = useState(initialFormData);
  const [savedPassenger, setSavedPassenger] = useState(null);

  // Handle Input Change
  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setPassengerData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  // Handle Form Submit
  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (
      passengerData.fullName.trim() === "" ||
      passengerData.age.trim() === "" ||
      passengerData.gender.trim() === ""
    ) {
      alert("Please fill all required fields.");
      return;
    }

    setSavedPassenger(passengerData);

    alert("Passenger Details Saved Successfully!");

    setPassengerData(initialFormData);
  };

  // Reset Form
  const handleReset = () => {
    setPassengerData(initialFormData);
    setSavedPassenger(null);
  };

  return (
    <div
      style={{
        width: "500px",
        margin: "30px auto",
        padding: "25px",
        border: "1px solid #dcdcdc",
        borderRadius: "10px",
        boxShadow: "0px 4px 10px rgba(0,0,0,0.15)",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        Passenger Registration Form
      </h2>

      <form onSubmit={handleFormSubmit}>
        <div style={{ marginBottom: "15px" }}>
          <label>Passenger Name</label>
          <input
            type="text"
            name="fullName"
            placeholder="Enter Passenger Name"
            value={passengerData.fullName}
            onChange={handleInputChange}
            style={{ width: "100%", padding: "10px" }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>Age</label>
          <input
            type="number"
            name="age"
            placeholder="Enter Age"
            value={passengerData.age}
            onChange={handleInputChange}
            style={{ width: "100%", padding: "10px" }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>Gender</label>

          <select
            name="gender"
            value={passengerData.gender}
            onChange={handleInputChange}
            style={{ width: "100%", padding: "10px" }}
          >
            <option value="">Select Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={passengerData.email}
            onChange={handleInputChange}
            style={{ width: "100%", padding: "10px" }}
          />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter Phone Number"
            value={passengerData.phone}
            onChange={handleInputChange}
            style={{ width: "100%", padding: "10px" }}
          />
        </div>

        <button
          type="submit"
          style={{
            padding: "10px 20px",
            marginRight: "10px",
            cursor: "pointer",
          }}
        >
          Save Passenger
        </button>

        <button
          type="button"
          onClick={handleReset}
          style={{
            padding: "10px 20px",
            cursor: "pointer",
          }}
        >
          Reset
        </button>
      </form>

      {savedPassenger && (
        <div
          style={{
            marginTop: "25px",
            padding: "15px",
            border: "1px solid green",
            borderRadius: "8px",
            backgroundColor: "#f2fff2",
          }}
        >
          <h3>Saved Passenger Information</h3>

          <p>
            <strong>Name:</strong> {savedPassenger.fullName}
          </p>

          <p>
            <strong>Age:</strong> {savedPassenger.age}
          </p>

          <p>
            <strong>Gender:</strong> {savedPassenger.gender}
          </p>

          <p>
            <strong>Email:</strong> {savedPassenger.email}
          </p>

          <p>
            <strong>Phone:</strong> {savedPassenger.phone}
          </p>
        </div>
      )}
    </div>
  );
};

export default PassengerForm;