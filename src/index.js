import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.scss';
function render() {
	ReactDOM.render(<App />, document.getElementById('root'));
}

render();
