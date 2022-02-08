import React from 'react';
import { Link } from 'react-router-dom';

export const RecomendationCard = ({ url, title, text }) => (
  <div className="recomendationWrapper">
    <div className="reco__imageContainer">
      <div className="imageWrapper">
        <img alt="imagen" src={url} />
      </div>
    </div>
    <div className="reco__textContainer">
      <div className="reco__textWrapper">
        <div className="textWrapper">
          <h2 className="reco__title">
            <span>Find the perfect car </span>
            <span style={{ color: '#593cfb' }}>{title}</span>
          </h2>
          <p className="reco__text">{text}</p>
          {/* <Link className="buttonContainer" to="/search">
            <button className="btn btn-large btn-primary" type="button">
              Browse cars
            </button>
          </Link> */}
          <div className="buttonContainer">
            <Link className="buttonLink" to="/search">
              Browse cars
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);
