import Cookies from 'js-cookie';
import React from 'react';
import { Navigate } from 'react-router-dom';

const UserRoute = (props) => {
  if (Cookies.get(`token`) !== undefined) {
    return props.children;
  } else if (Cookies.get(`token`) === undefined) {
    return <Navigate to="/login" />;
  }
};

export default UserRoute;
