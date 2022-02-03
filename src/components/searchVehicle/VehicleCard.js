import React from 'react';
import { Card, Col } from 'react-bootstrap';

export function VehicleCard({ model, url, price, type }) {
  return (
    <Col>
      <Card className="main__vehicle-card ">
        <span className="vehicle-card__like pointer">
          <i className="fas fa-thumbs-up" />
        </span>

        <Card.Img className="pointer" src={url} variant="top" />
        <div className="vehicle-card__body pointer">
          <Card.Title className="vehicle-card__title">{model}</Card.Title>
        </div>

        <div className="vehicle-card__footer pointer">
          <div className="vehicle-card__text d-flex align-items-center">
            <p>Type: {type}</p>
          </div>
          <div className="vehicle-card__price">
            <span>{`$ ${price}/day`}</span>
          </div>
        </div>
      </Card>
    </Col>
  );
}
