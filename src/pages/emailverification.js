import React from 'react';
import { Link } from 'react-router-dom';

export default function Emailverification() {
  return (
    <div>
      <h1> Verifica tu Email</h1>
      <Link to="/search">
        <button type="button">Verificado</button>
      </Link>
    </div>
  );
}
