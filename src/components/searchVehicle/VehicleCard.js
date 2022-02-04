import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { AdvancedImage } from '@cloudinary/react';
import { Cloudinary } from '@cloudinary/url-gen';
import { CLOUD_NAME } from '../../api/consts';

export function VehicleCard({ model, carFrontPhoto, price, type }) {
  const cld = new Cloudinary({
    cloud: {
      cloudName: CLOUD_NAME,
    },
  });

  const carPhoto = cld.image(carFrontPhoto);
  return (
    <Col>
      <Card className="main__vehicle-card ">
        {/* <span className="vehicle-card__like pointer">
          <i className="fas fa-thumbs-up" />
        </span> */}
        <AdvancedImage className="card-img-top  pointer my-0" cldImg={carPhoto} />
        <div className="vehicle-card__body pointer">
          <Card.Title className="vehicle-card__title">{model}</Card.Title>
        </div>

        <div className="vehicle-card__footer pointer">
          <div className="vehicle-card__text d-flex align-items-center">
            <p>
              Type:{' '}
              {type
                .split(' ')
                .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
                .join(' ')}
            </p>
          </div>
          <div className="vehicle-card__price">
            <span>{`$ ${price}/day`}</span>
          </div>
        </div>
      </Card>
    </Col>
  );
}
