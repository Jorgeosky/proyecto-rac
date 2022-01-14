import React from "react";

export default function Home() {
  return (
    <div class="HomeSearch">
      <div class="Options">
        <div class="Header">
          <h2 id="homeLogo">Rent Car Logo</h2>
          <div class="TransportType">
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
          <div class="UserOptions">
            <a href="." class="BecomeHost">
              Become a host
            </a>
            <button class="UserMenu">
              <div class="dropdown">
                <button class="dropbtn"></button>
                <div class="dropdown-content">
                  <a href=".">Sign In</a>
                  <a href=".">Sign Up</a>
                </div>
              </div>
              <div class="User"></div>
            </button>
          </div>
        </div>
        <div class="Search">
          <input type="text" placeholder="Selecciona la ciudad" id="location" />
          <div class="VLine"></div>
          <input type="date" id="startDate" />
          <div class="VLine"></div>
          <input type="date" id="endDate" />
          <button class="SearchButton">Search</button>
        </div>
      </div>
    </div>
  );
}
