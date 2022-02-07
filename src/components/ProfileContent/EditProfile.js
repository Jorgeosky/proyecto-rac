import React, { useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

export default function EditProfile({ setState, update }) {
  const [phone, setPhone] = useState();
  const [photo, setPhoto] = useState();
  const [inputs, setInputs] = useState({
    firstName: '',
    lastName: '',
    country: '',
    state: '',
    about: '',
  });
  const { firstName, lastName, country, state, about } = inputs;

  const fileHandler = ({ target }) => {
    const file = target.files[0];
    setPhoto(file);
  };

  const handleInputChange = ({ target }) => {
    setInputs({ ...inputs, [target.name]: target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    if (photo) formData.append('file', photo);
    if (firstName) formData.append('firstName', firstName);
    if (lastName) formData.append('lastName', lastName);
    if (country) formData.append('country', country);
    if (state) formData.append('state', state);
    if (about) formData.append('about', about);
    if (phone) formData.append('cellphone', phone);
    await update(formData);
    setState('profile');
  };

  return (
    <div>
      <div className="editProfile mx-auto">
        <h1>Edit profile</h1>
        <Form onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="validationCustom01" md="6">
              <Form.Label className="m-0">First Name</Form.Label>
              <Form.Control
                className="field"
                name="firstName"
                onChange={handleInputChange}
                placeholder="First Name"
                type="text"
              />
            </Form.Group>
            <Form.Group as={Col} controlId="validationCustom02" md="6">
              <Form.Label className="m-0">Last Name</Form.Label>
              <Form.Control
                className="field"
                name="lastName"
                onChange={handleInputChange}
                placeholder="Last Name"
                type="text"
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="validationCustom03" md="6">
              <Form.Label className="m-0">Country</Form.Label>
              <Form.Control
                className="field"
                name="country"
                onChange={handleInputChange}
                placeholder="Country"
                type="text"
              />
            </Form.Group>
            <Form.Group as={Col} controlId="validationCustom04" md="6">
              <Form.Label className="m-0">State</Form.Label>
              <Form.Control
                className="field"
                name="state"
                onChange={handleInputChange}
                placeholder="State"
                type="text"
              />
            </Form.Group>
          </Row>
          <Form.Group as={Col} className="mb-3" controlId="validationCustom05">
            <Form.Label className="m-0">Cell Phone</Form.Label>
            <PhoneInput onChange={setPhone} placeholder="Enter phone number" value={phone} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="photo">
            <Form.Label>Upload your photo profile</Form.Label>
            <Form.Control accept=".jpg,.jpeg,.png" onChange={fileHandler} type="file" />
          </Form.Group>
          <Form.Group as={Col} className="mb-2" controlId="validationCustom06">
            <Form.Label className="m-0">About</Form.Label>
            <Form.Control
              as="textarea"
              name="about"
              onChange={handleInputChange}
              placeholder="Write about you"
              style={{ height: '80px' }}
            />
          </Form.Group>
          <button
            className="btn btn-primary btn-large ms-4 me-5"
            style={{ width: '40%' }}
            type="submit">
            Submit
          </button>
          <button
            className="btn btn-primary btn-large px-5"
            onClick={() => setState('profile')}
            style={{ width: '40%' }}
            type="button">
            Return to Profile
          </button>
        </Form>
      </div>
    </div>
  );
}
