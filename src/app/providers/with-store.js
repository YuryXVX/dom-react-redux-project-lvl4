import React from "react";
import { Provider } from "react-redux";
import store from './store.js';

export const withStore = (component) => () => (
  <Provider store={store}>
    {component()}
  </Provider>
);