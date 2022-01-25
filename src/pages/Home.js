import React from "react";
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="HomeSearch">
      <div className="Options">
        <div className="Header">
          <h2 id="homeLogo">Rent Car Logo</h2>
          <div className="TransportType">
            <a href="." id="carType">
              Automoviles
            </a>
            <a href="." id="truckType">
              Camionetas
            </a>
            <a href="." id="bikeType">
              Motos
            </a>
          </div>
          <Link to="/profile" className="UserOptions">
            <a href="." className="BecomeHost">
              Become a host
            </a>
            <div className="UserMenu">
              <div className="dropdown">
                <div className="dropbtn"></div>
                <div className="dropdown-content">
                  <Link to="/signin">Sign In</Link>
                  <Link to="/signup">Sign Up</Link>
                </div>
              </div>
              <div className="User"></div>
            </div>
          </Link>
        </div>
        <div className="Search">
          <input type="text" placeholder="Selecciona la ciudad" id="location" />
          <div className="VLine"></div>
          <input type="date" id="startDate" />
          <div className="VLine"></div>
          <input type="date" id="endDate" />
          <Link style={{ textDecoration: "none", color: "black" }} to="/search" className="SearchButton">Search</Link>
        </div>
      </div>
    </div>
  );
}
