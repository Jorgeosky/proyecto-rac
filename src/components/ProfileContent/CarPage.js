import React from 'react';

export default function CarPage() {

  return (
    <div>
      <form>
        <p>modelo</p>
        <input type="text"></input>
        <p>precio</p>
        <input type="number"></input>
        <p>foto</p>
        <input type="file" alt="carimage"></input>
        <button type='submit'>Enviar</button>
      </form>
    </div>
  );
}
