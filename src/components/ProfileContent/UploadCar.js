import React from 'react';
import { Button } from '@material-ui/core';

export default function UploadCar() {
  return (
    <div className="carForm">
      <h1>Upload car</h1>
      <form>
        <div className="uploadCar">
          <input className="field" name="modelCar" placeholder="Model" type="text" />
          <input className="fieldPrice" name="priceCar" placeholder="Price" type="number" />
          <Button component="label" variant="contained">
            Upload image
            <input className="as" type="file" hidden />
          </Button>
          <button type="submit">Enviar</button>
        </div>
      </form>
    </div>
  );
}
