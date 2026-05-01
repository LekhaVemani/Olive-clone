import React from "react";
import "./App.css";
import phone from "./phone.png";

function App() {
  return (
    <div className="container">

      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">🍃 Olive</div>

        <ul className="nav-links">
          <li>Solutions</li>
          <li>Features</li>
          <li>Pricing</li>
          <li>Blog</li>
          <li>Restaurants</li>
          <li>Food</li>
        </ul>

        <div className="nav-buttons">
          <button className="signin">Sign in</button>
          <button className="get">Get Olive →</button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="hero">

        <p className="trusted">Trusted by thousands of healthy families</p>

        <h1>
          The Safest Way to <br /> Shop for Groceries
        </h1>

        <p className="description">
          Use the Olive Food Scanner App to instantly eliminate harmful
          ingredients from your family's diet and get expert-backed insights.
        </p>

        <div className="buttons">
          <button className="download">⬇ Download for iOS</button>
          <button className="join">Join the Olive Community →</button>
        </div>

        {/* Phone Image */}
        <div className="phone">
        <img src={phone} alt="phone mockup" />
        </div>
      </div>

    </div>
  );
}

export default App;