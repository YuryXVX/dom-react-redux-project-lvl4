import { BrowserRouter } from "react-router-dom";
import React, { Suspense } from 'react';

const Spin = () => (<div>Loaded...</div>);

export const withRouter = (component) => () => (
  <BrowserRouter>
    <Suspense>
      {component()}
    </Suspense>
  </BrowserRouter>
);