
import React from "react";

const UserProfile = ({ name, membership }) => {
  return (
    <section className="card">
      <h2>{name}</h2>
      <p>{membership}</p>
    </section>
  );
};

export default function App() {
  return (
    <UserProfile
      name="Rohit Gudse"
      membership="Premium Member"
    />
  );
}
