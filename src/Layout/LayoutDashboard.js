import React from 'react';
import FooterComponent from '../Components/FooterComponent';

import SidebarComponent from '../Components/SidebarComponent';
import NavbarComponent from '../Components/NavbarComponent';

const Layout = (props) => {
  return (
    <>
      <div className="flex">
        <SidebarComponent />
        <div className="flex flex-col w-full md:space-y-4">
          <div className="h-screen px-4 pb-24 overflow-auto md:px-6">
            <div className="flex md:hidden">
              <NavbarComponent />
            </div>
            <div className="grid grid-cols-1 gap-4 my-4">
              {/* content */}
              {props.children}
              {/* content end */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
