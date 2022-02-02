import React from 'react';

export default function UploadCar() {
  return (
    <div>
      <form>
        <p>modelo</p>
        <input type="text" />
        <p>precio</p>
        <input type="number" />
        <p>foto</p>
        <input alt="carimage" type="file" />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
