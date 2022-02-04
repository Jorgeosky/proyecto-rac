import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { UserProvider } from './components/Context';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.scss';

function render() {
  ReactDOM.render(
    <BrowserRouter>
      <UserProvider>
        <App />
      </UserProvider>
    </BrowserRouter>,
    document.getElementById('root'),
  );
}

render();
