import { withProviders } from './providers';
import React from 'react';

import { Routing } from './pages/index.js';

const App = () => {
  return (
    <div className="app">
      <Routing />
    </div>
  );
}

export default withProviders(App);