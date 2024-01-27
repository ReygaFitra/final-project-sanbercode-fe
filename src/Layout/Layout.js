import React from 'react';
import FooterComponent from '../Components/FooterComponent';
import NavbarComponent from '../Components/NavbarComponent';

const Layout = (props) => {
  return (
    <>
      <NavbarComponent />
      {props.children}
      <FooterComponent />
    </>
  );
};

export default Layout;
