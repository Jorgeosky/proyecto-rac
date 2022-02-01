import React from 'react';
import { Card, Col } from 'react-bootstrap';

export function VehicleCard({
  model, rating, url, price, trips,
}) {
  return (
    <Col>
      <Card className="main__vehicle-card ">
        <span className="vehicle-card__like pointer">
          <i className="fas fa-thumbs-up" />
        </span>

        <Card.Img className="pointer" src={url} variant="top" />
        <div className="vehicle-card__body pointer">
          <Card.Title className="vehicle-card__title">
            {model}
          </Card.Title>
          <div className="vehicle-card__text d-flex align-items-center">
            <div className="d-flex align-items-start">
              <span>{rating}</span>
              <span className="vehicle-card__rating-icon">
                <i className="fas fa-star" />
              </span>
            </div>
            <span>{` (${trips} trips)`}</span>
          </div>
        </div>

        <div className="vehicle-card__footer pointer">
          <div className="vehicle-card__price">
            <span>{`${price}/day`}</span>
          </div>
          <span className="vehicle-card__total">{`${price} est.total`}</span>
        </div>
      </Card>
    </Col>
  );
}
