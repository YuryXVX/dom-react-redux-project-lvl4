// @ts-nocheck

import 'core-js/stable/index.js';
import 'regenerator-runtime/runtime.js';

import '../assets/application.scss';

import React from 'react';
import { render } from 'react-dom';

import { createContext } from 'react';

import {socketApi} from './app/shared/lib/index.js';


export const SocketContext = createContext({});

if (process.env.NODE_ENV !== 'production') {
  localStorage.debug = 'chat:*';
}

import App from './app/index.jsx';


const app = document.createElement('div');
document.body.appendChild(app);

render(
  <SocketContext.Provider value={socketApi}>
    <App />
  </SocketContext.Provider>,
  app
);