import React from 'react';
import { Card } from 'react-bootstrap';
import { AdvancedImage } from '@cloudinary/react';
import { Cloudinary } from '@cloudinary/url-gen';
import { format } from 'date-fns';
import { CLOUD_NAME } from '../../api/consts';

export function VehicleRented({ model, carFrontPhoto, price, startTrip, endTrip }) {
  const cld = new Cloudinary({
    cloud: {
      cloudName: CLOUD_NAME,
    },
  });

  const carPhoto = cld.image(carFrontPhoto);
  return (
    <div style={{ margin: '0 auto', maxWidth: '550px' }}>
      <Card className="main__vehicle-card mb-5">
        {/* <span className="vehicle-card__like pointer">
          <i className="fas fa-thumbs-up" />
        </span> */}
        <AdvancedImage className="card-img-top  pointer my-0" cldImg={carPhoto} />
        <div className="vehicle-card__body pointer">
          <Card.Title className="vehicle-card__title">{model}</Card.Title>
        </div>

        <div className="vehicle-card__footer pointer">
          <div className="vehicle-card__text d-flex align-items-center gap-4">
            <p>Start Trip: {format(new Date(startTrip), 'dd-MM-yyyy')}</p>
            <p>End Trip: {format(new Date(endTrip), 'dd-MM-yyyy')}</p>
          </div>
          <div className="vehicle-card__price">
            <span>
              {`$ ${price}/day`}
              {/*  <button onClick={pay} type="button">
                comprar
              </button> */}
            </span>
          </div>
        </div>
      </Card>
    </div>
  );
}
