import React from "react";
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="Home">
      <div className="Header">
        <div className="Search">
          <input type="text" placeholder="Selecciona la ciudad" id="location" />
          <div className="VLine"></div>
          <input type="date" id="startDate" />
          <div className="VLine"></div>
          <input type="date" id="endDate" />
          <Link style={{ textDecoration: "none", color: "black" }} to="/search" className="SearchButton">Search</Link>
        </div>
      </div>
      <div>
        <h1>Find your drive</h1>
        <h3>Explore the world's largest car sharing marketplace</h3>
      </div>
    </div>
  );
}
