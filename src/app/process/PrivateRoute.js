import {getUser, isAuthenticated} from "../shared/helpers/utils/getUser.js";
import {Redirect, Route} from "react-router-dom";
import React from 'react';

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => isAuthenticated(getUser()) 
        ? (<Component {...props} />) 
        : (<Redirect to={{ pathname: '/auth', state: { from: props.location } }} />)
      }
    />
  );
}
