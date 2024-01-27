import React from 'react';
import { Navbar } from 'flowbite-react';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import Logo from './Logo';
import Swal from 'sweetalert2';

const NavbarComponent = () => {
  return (
    <>
      <Navbar fluid={true} className="shadow-sm w-full">
        <Link to="/">
          <Logo />
        </Link>

        <Navbar.Toggle />
        <Navbar.Collapse className="bg-success text-neutral mt-2 rounded-lg font-semibold md:bg-base-100 md:mt-0">
          <div className="md:flex md:order-2 p-2 md:p-0 items-center gap-5">
            <div>
              <Link to="/">
                <span className="hover:text-base-100 md:hover:text-primary ">Home</span>
              </Link>
            </div>

            {!Cookies.get('token') && (
              <div className="md:flex md:order-2 items-center gap-5">
                <div>
                  <Link to="/Jobs">
                    <span className="hover:text-base-100 md:hover:text-primary">Jobs</span>
                  </Link>
                </div>
                <div className="my-4 md:my-0">
                  <Link to="/login">
                    <button className="btn-sm-info md:btn-sm-primary rounded ">Log in</button>
                  </Link>
                </div>
              </div>
            )}

            {Cookies.get('token') && (
              <div className="md:flex md:order-2 items-center gap-5">
                <div>
                  <Link to="/Jobs">
                    <span className="hover:text-base-100 md:hover:text-primary">Jobs</span>
                  </Link>
                </div>
                <div>
                  <Link to="/dashboard">
                    <span className="hover:text-base-100 md:hover:text-primary">Dashboard</span>
                  </Link>
                </div>
                <div>
                  <Link to="/dashboard/list-job-vacancy" className="block md:hidden">
                    <span className="hover:text-base-100 md:hover:text-primary">List Data</span>
                  </Link>
                </div>
                <div>
                  <Link to="/dashboard/list-job-vacancy/form" className="block md:hidden">
                    <span className="hover:text-base-100 md:hover:text-primary">Form Data</span>
                  </Link>
                </div>
                <div>
                  <Link to="/profile" className="block md:hidden">
                    <span className="hover:text-base-100 md:hover:text-primary">Profile</span>
                  </Link>
                </div>
                <div className="my-4 md:my-0">
                  <Link to="/login">
                    <button
                      onClick={() => {
                        Cookies.remove('token');
                        Swal.fire({
                          icon: 'success',
                          title: 'SUCCESS!',
                          text: 'You have been Loged out from your Account!',
                        });
                      }}
                      className="btn-sm-error rounded flex items-center"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                        <path
                          fillRule="evenodd"
                          d="M3 4.25A2.25 2.25 0 015.25 2h5.5A2.25 2.25 0 0113 4.25v2a.75.75 0 01-1.5 0v-2a.75.75 0 00-.75-.75h-5.5a.75.75 0 00-.75.75v11.5c0 .414.336.75.75.75h5.5a.75.75 0 00.75-.75v-2a.75.75 0 011.5 0v2A2.25 2.25 0 0110.75 18h-5.5A2.25 2.25 0 013 15.75V4.25z"
                          clipRule="evenodd"
                        />
                        <path fillRule="evenodd" d="M19 10a.75.75 0 00-.75-.75H8.704l1.048-.943a.75.75 0 10-1.004-1.114l-2.5 2.25a.75.75 0 000 1.114l2.5 2.25a.75.75 0 101.004-1.114l-1.048-.943h9.546A.75.75 0 0019 10z" clipRule="evenodd" />
                      </svg>
                      Logout
                    </button>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavbarComponent;
