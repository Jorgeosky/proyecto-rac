import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="Home">
      <div className="Header">
        {/* <div className="Search">
          <input type="text" placeholder="Selecciona la ciudad" id="location" />
          <div className="VLine"></div>
          <input type="date" id="startDate" />
          <div className="VLine"></div>
          <input type="date" id="endDate" />
          <Link style={{ textDecoration: "none", color: "black" }} to="/search" className="SearchButton">Search</Link>
        </div> */}
        {/* </div>
      <footer className="footer">
        about us...
      </footer> */}
      </div>
      <p className="findYourDrive">Find your drive</p>
      <p className="explore">Explore the world&apos;s largest car sharing marketplace</p>
      <div className="browseByMakeContainer">
        <p className="pBrowse">Browse by make</p>
        <div className="browseByMake">
          <div className="cardBrowse">
            <div>
              <img alt="jeep" src="jeep.jpg" />
            </div>
            <p>Jeep</p>
          </div>
          <div className="cardBrowse">
            <div>
              <img alt="bmw" src="bmw.jpg" />
            </div>
            <p>BMW</p>
          </div>
          <div className="cardBrowse">
            <div>
              <img alt="ford" src="ford.jpeg" />
            </div>
            <p>Ford</p>
          </div>
          <div className="cardBrowse">
            <div>
              <img alt="nissan" src="nissan.jpg" />
            </div>
            <p>nissan</p>
          </div>
          <div className="cardBrowse">
            <div>
              <img alt="tesla" src="tesla.jpg" />
            </div>
            <p>Tesla</p>
          </div>
        </div>
      </div>
      <Link to="/search">
        <button className="browseCars" type="button">
          Browse cars
        </button>
      </Link>
    </div>
  );
}
