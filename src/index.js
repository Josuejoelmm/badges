// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi Badges!';

// const container = document.getElementById('app');

// container.appendChild(element);

import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './global.css';
import App from './components/App';

// const element = <h1>Hello, Josue</h1>;

// const element = React.createElement(
//     'a', 
//     { href: 'https://google.com' }, 
//     'Ir a google'
// );

const container = document.getElementById('app');

// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(
    <App />,
    container
);
