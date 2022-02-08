import React, { useContext, useState } from 'react';
import { Carousel, Col, Container, Form, Row } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { AdvancedImage } from '@cloudinary/react';
import { Cloudinary } from '@cloudinary/url-gen';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { DatePicker } from '@mui/lab';
import { format } from 'date-fns';
import { CLOUD_NAME, MERCADOPAGO_KEY } from '../api/consts';
import { useCarById } from '../hooks/useCarById';
import UserContext from '../components/Context';
import { createRentedCar } from '../api/rentedcar';
import { useMercadoPago } from '../hooks/useMercadoPago';
import { payment } from '../api/payment';

export default function CarPage() {
  const { carID } = useParams();
  const navigate = useNavigate();
  const mercadopago = useMercadoPago(MERCADOPAGO_KEY);
  const {
    car: { data },
  } = useCarById(carID);

  const cld = new Cloudinary({
    cloud: {
      cloudName: CLOUD_NAME,
    },
  });

  const {
    carFrontPhoto = '',
    photo1 = '',
    photo2 = '',
    photo3 = '',
    price = '',
    model = '',
    seats = '',
    doors = '',
    description = '',
    owner,
  } = !!data && data;
  const { state } = useContext(UserContext);
  const { photo = '', firstName = '', lastName = '', createdAt = '2022-02-16' } = !!owner && owner;

  const frontcar = cld.image(carFrontPhoto);
  const car1 = cld.image(photo1);
  const car2 = cld.image(photo2);
  const car3 = cld.image(photo3);
  const profilePhoto = cld.image(photo);

  const [startTrip, setStartTrip] = useState(null);
  const [endTrip, setEndTrip] = useState(null);

  const COP = parseInt(price, 10) * 3952;

  const pay = async () => {
    const data = await payment({ cars: { name: model, price: COP } });
    const checkout = mercadopago.checkout({
      preference: {
        id: data.preferenceId,
      },
    });
    checkout.open();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (state.isLoggedIn) {
      if (startTrip && endTrip) {
        await pay();
        await createRentedCar({ startTrip, endTrip, cars: carID });
        // navigate('/profile');
      }
    } else {
      navigate('/signin');
    }
  };

  return (
    <div className="cardPage">
      <div className="carouselContainer">
        <Carousel fade>
          <Carousel.Item interval={null}>
            <div className="carouselSlide">
              <div className="vehicleImage">
                <AdvancedImage className="imgCar" cldImg={frontcar} />
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item interval={null}>
            <div className="carouselSlide">
              <div className="vehicleImage">
                <AdvancedImage className="imgCar" cldImg={car1} />
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item interval={null}>
            <div className="carouselSlide">
              <div className="vehicleImage">
                <AdvancedImage className="imgCar" cldImg={car2} />
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item interval={null}>
            <div className="carouselSlide">
              <div className="vehicleImage">
                <AdvancedImage className="imgCar" cldImg={car3} />
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
      <Container className="infoContainer">
        <Row md={2} xs={1}>
          <Col md={8}>
            <div className="vehicleDetails">
              <div className="vehicleDetails-name">
                <h1 className="vehicleModel">{model}</h1>
                <div className="d-flex me-2 mt-3">
                  <div className="d-flex align-items-center">
                    <div className="d-flex align-items-center me-2">
                      <p className="rating">5.0</p>
                      <span>
                        <svg
                          aria-label="Rating: 5 out of 5 stars"
                          className="css-1moeh8l"
                          fill="none"
                          height="24px"
                          role="img"
                          version="1.1"
                          viewBox="0 0 24 24"
                          width="24px"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            clipRule="evenodd"
                            // eslint-disable-next-line max-len
                            d="m15.153 8.498 5.906.41c.904.064 1.274 1.197.582 1.783l-4.52 3.835 1.377 5.72c.212.88-.746 1.576-1.514 1.1L12 18.25l-4.983 3.095c-.77.477-1.727-.22-1.515-1.098l1.379-5.72-4.516-3.829c-.696-.582-.334-1.716.568-1.787l5.907-.413 2.226-5.373c.345-.833 1.522-.833 1.866 0l2.22 5.373Z"
                            fill="#593CFB"
                            fillRule="evenodd"
                          />
                        </svg>
                      </span>
                    </div>
                    <p className="m-0 p-0">(72 trips)</p>
                  </div>
                </div>
              </div>
              <Row>
                <Col md={6}>
                  <div className="d-flex align-items-center mb-2">
                    <span className="vehicleFeatureIcon door" />
                    <p className="vehicleFeatureText">{doors} doors</p>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="d-flex align-items-center mb-2">
                    <span className="vehicleFeatureIcon seats" />
                    <p className="vehicleFeatureText">{seats} seats</p>
                  </div>
                </Col>
              </Row>
              <section className="mt-5">
                <Row>
                  <Col md={12}>
                    <h2 className="subtitles">Hosted By</h2>
                  </Col>
                  <Col md={12}>
                    <div className="d-flex align-items-center">
                      <div className="ownerPhotoContainer">
                        <div className="ownerPhoto d-flex align-items-center justify-content-center">
                          <AdvancedImage className="imgCar" cldImg={profilePhoto} />
                          <div className="ratingPhotoContainer">
                            <div className="ratingBoxProfile">
                              <div className="d-flex align-item-center">
                                <p className="ratingPhoto">5.0</p>
                                <span className="d-flex">
                                  <svg
                                    aria-label="Rating: 5 out of 5 stars"
                                    className="css-1moeh8l"
                                    fill="none"
                                    height="16px"
                                    role="img"
                                    version="1.1"
                                    viewBox="0 0 16 16"
                                    width="16px"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                      clipRule="evenodd"
                                      // eslint-disable-next-line max-len
                                      d="m10.102 5.665 3.937.274c.603.042.85.797.388 1.188l-3.013 2.557.918 3.814a.674.674 0 0 1-1.01.732L8 12.167 4.678 14.23a.674.674 0 0 1-1.01-.732l.92-3.814-3.012-2.552a.675.675 0 0 1 .38-1.191l3.937-.276 1.484-3.582a.673.673 0 0 1 1.244 0l1.48 3.582Z"
                                      fill="#593CFB"
                                      fillRule="evenodd"
                                    />
                                  </svg>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="profileDescription">
                        <p className="profileName">{`${firstName} ${lastName[0]}.`}</p>
                        <p className="joinedTime">
                          Joined {format(new Date(createdAt), 'MMM yyyy')}
                        </p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </section>
              <section className="mt-5">
                <Row>
                  <Col md={12}>
                    <h2 className="subtitles">Description</h2>
                  </Col>
                  <Col md={12}>
                    <p className="carDescription">{description}</p>
                  </Col>
                </Row>
              </section>
            </div>
          </Col>
          <Col md={4}>
            <div className="reservationBox">
              <div className="m-0 p-0  d-flex gap-4 justify-content-start ms-2">
                <span className="priceTitle">Price:</span>
                <span>
                  <span className="priceValue">${price}</span>
                  <span className="priceDay"> /day</span>
                </span>
                <div className="lineSeparator" />
              </div>
            </div>
            <Form className="formRental" onSubmit={handleSubmit}>
              <Form.Group className="mt-5" controlId="validationCustom01">
                <Form.Label
                  className="mb-2"
                  style={{
                    margin: '0px',
                    color: 'rgb(89, 60, 251)',
                    fontFamily: 'Basis Grotesque Pro',
                    fontSize: '17px',
                    fontWeight: 400,
                    letterSpacing: '0px',
                    lineHeight: '22px',
                    textTransform: 'none',
                  }}>
                  Trip Start
                </Form.Label>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    inputFormat="dd/MM/yyyy"
                    label="Trip Start"
                    onChange={(newValue) => {
                      setStartTrip(newValue);
                    }}
                    renderInput={(props) => (
                      <TextField {...props} className="w-100" type="datetime-local" />
                    )}
                    value={startTrip}
                  />
                </LocalizationProvider>
              </Form.Group>
              <Form.Group className="mb-3 mt-4" controlId="validationCustom02">
                <Form.Label
                  className="mb-2"
                  style={{
                    margin: '0px',
                    color: 'rgb(89, 60, 251)',
                    fontFamily: 'Basis Grotesque Pro',
                    fontSize: '17px',
                    fontWeight: 400,
                    letterSpacing: '0px',
                    lineHeight: '22px',
                    textTransform: 'none',
                  }}>
                  Trip End
                </Form.Label>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    inputFormat="dd/MM/yyyy"
                    label="Trip End"
                    onChange={(newValue) => {
                      setEndTrip(newValue);
                    }}
                    renderInput={(props) => (
                      <TextField {...props} className="w-100" type="datetime-local" />
                    )}
                    value={endTrip}
                  />
                </LocalizationProvider>
              </Form.Group>

              <button
                className="btn btn-primary btn-block py-2 fs-5 mt-4" disabled={!(state.type === 'renter')}
                id="payCard"
                type="submit">
                Rent the Car
              </button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
