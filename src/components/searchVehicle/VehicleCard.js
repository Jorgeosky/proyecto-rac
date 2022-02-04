import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { MERCADOPAGO_KEY, URL_URI } from '../../api/consts';
import { useMercadoPago } from "../../hooks/mercadopago";

export function VehicleCard({ model, url, price, type }) {
  const mercadopago = useMercadoPago(MERCADOPAGO_KEY);

  async function pay() {
    console.log(MERCADOPAGO_KEY);
    const response = await fetch(`${URL_URI}/payments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ cars: { name: model, price } }),
    });
    const data = await response.json();

    const checkout = mercadopago.checkout({
      preference: {
        id: data.preferenceId,
      },
    })
    checkout.open()
  }

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
            <span>{`$ ${price}/day`}<button onClick={pay} type='button'>comprar</button></span>
          </div>
        </div>
      </Card>
    </Col>
  );
}
