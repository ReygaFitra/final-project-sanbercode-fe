import React from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import Logo from './Logo';
import Swal from 'sweetalert2';

const SidebarComponent = () => {
  return (
    <>
      <div className="relative hidden h-screen shadow-lg lg:block w-80">
        <div className="h-full bg-white">
          <div className="flex items-center justify-start pt-6 ml-8">
            <span className="text-xl font-bold">
              <Logo />
            </span>
          </div>
          <nav className="mt-6">
            <div>
              <div className="flex items-center justify-start w-full p-2 pl-6 my-2 text-gray-400 transition-colors duration-200 hover:text-primary">
                <div className="flex gap-1 items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                    <path
                      fillRule="evenodd"
                      d="M13.887 3.182c.396.037.79.08 1.183.128C16.194 3.45 17 4.414 17 5.517V16.75A2.25 2.25 0 0114.75 19h-9.5A2.25 2.25 0 013 16.75V5.517c0-1.103.806-2.068 1.93-2.207.393-.048.787-.09 1.183-.128A3.001 3.001 0 019 1h2c1.373 0 2.531.923 2.887 2.182zM7.5 4A1.5 1.5 0 019 2.5h2A1.5 1.5 0 0112.5 4v.5h-5V4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <Link to="/dashboard">
                    <span>Dashboard</span>
                  </Link>
                </div>
              </div>
              <div className="fflex items-center justify-start w-full p-2 pl-6 my-2 text-gray-400 transition-colors duration-200 hover:text-primary">
                <div className="flex gap-1 items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                    <path
                      fillRule="evenodd"
                      d="M.99 5.24A2.25 2.25 0 013.25 3h13.5A2.25 2.25 0 0119 5.25l.01 9.5A2.25 2.25 0 0116.76 17H3.26A2.267 2.267 0 011 14.74l-.01-9.5zm8.26 9.52v-.625a.75.75 0 00-.75-.75H3.25a.75.75 0 00-.75.75v.615c0 .414.336.75.75.75h5.373a.75.75 0 00.627-.74zm1.5 0a.75.75 0 00.627.74h5.373a.75.75 0 00.75-.75v-.615a.75.75 0 00-.75-.75H11.5a.75.75 0 00-.75.75v.625zm6.75-3.63v-.625a.75.75 0 00-.75-.75H11.5a.75.75 0 00-.75.75v.625c0 .414.336.75.75.75h5.25a.75.75 0 00.75-.75zm-8.25 0v-.625a.75.75 0 00-.75-.75H3.25a.75.75 0 00-.75.75v.625c0 .414.336.75.75.75H8.5a.75.75 0 00.75-.75zM17.5 7.5v-.625a.75.75 0 00-.75-.75H11.5a.75.75 0 00-.75.75V7.5c0 .414.336.75.75.75h5.25a.75.75 0 00.75-.75zm-8.25 0v-.625a.75.75 0 00-.75-.75H3.25a.75.75 0 00-.75.75V7.5c0 .414.336.75.75.75H8.5a.75.75 0 00.75-.75z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <Link to="/dashboard/list-job-vacancy">
                    <span>List Data</span>
                  </Link>
                </div>
              </div>
              <div className="fflex items-center justify-start w-full p-2 pl-6 my-2 text-gray-400 transition-colors duration-200 hover:text-primary">
                <div className="flex gap-1 items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                    <path
                      fillRule="evenodd"
                      d="M15.988 3.012A2.25 2.25 0 0118 5.25v6.5A2.25 2.25 0 0115.75 14H13.5V7A2.5 2.5 0 0011 4.5H8.128a2.252 2.252 0 011.884-1.488A2.25 2.25 0 0112.25 1h1.5a2.25 2.25 0 012.238 2.012zM11.5 3.25a.75.75 0 01.75-.75h1.5a.75.75 0 01.75.75v.25h-3v-.25z"
                      clipRule="evenodd"
                    />
                    <path
                      fillRule="evenodd"
                      d="M2 7a1 1 0 011-1h8a1 1 0 011 1v10a1 1 0 01-1 1H3a1 1 0 01-1-1V7zm2 3.25a.75.75 0 01.75-.75h4.5a.75.75 0 010 1.5h-4.5a.75.75 0 01-.75-.75zm0 3.5a.75.75 0 01.75-.75h4.5a.75.75 0 010 1.5h-4.5a.75.75 0 01-.75-.75z"
                      clipRule="evenodd"
                    />
                  </svg>

                  <Link to="/dashboard/list-job-vacancy/form">
                    <span>Data Form</span>
                  </Link>
                </div>
              </div>
              <div className="fflex items-center justify-start w-full p-2 pl-6 my-2 text-gray-400 transition-colors duration-200 hover:text-primary">
                <div className="flex gap-1 items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-5.5-2.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zM10 12a5.99 5.99 0 00-4.793 2.39A6.483 6.483 0 0010 16.5a6.483 6.483 0 004.793-2.11A5.99 5.99 0 0010 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <Link to="/profile">
                    <span>Profile</span>
                  </Link>
                </div>
              </div>
              <div className="fflex items-center justify-start w-full p-2 pl-6 my-2 text-gray-400 transition-colors duration-200 hover:text-primary">
                <div className="flex gap-1 items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                    <path
                      fillRule="evenodd"
                      d="M8 7a5 5 0 113.61 4.804l-1.903 1.903A1 1 0 019 14H8v1a1 1 0 01-1 1H6v1a1 1 0 01-1 1H3a1 1 0 01-1-1v-2a1 1 0 01.293-.707L8.196 8.39A5.002 5.002 0 018 7zm5-3a.75.75 0 000 1.5A1.5 1.5 0 0114.5 7 .75.75 0 0016 7a3 3 0 00-3-3z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <Link to="/profile/change-password">
                    <span>Change Password</span>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-start w-full p-2 pl-6 my-2 transition-colors duration-200 text-neutral hover:text-secondary">
                <Link to="/">
                  <div className="flex gap-1 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                      <path
                        fillRule="evenodd"
                        d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Home</span>
                  </div>
                </Link>
              </div>
              <div className="flex items-center justify-start w-full p-2 pl-6 my-2 text-gray-400 transition-colors duration-200 hover:text-gray-800">
                <Link to="/login">
                  <div className="flex gap-1 items-center text-red-500 hover:text-red-700">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                      <path
                        fillRule="evenodd"
                        d="M3 4.25A2.25 2.25 0 015.25 2h5.5A2.25 2.25 0 0113 4.25v2a.75.75 0 01-1.5 0v-2a.75.75 0 00-.75-.75h-5.5a.75.75 0 00-.75.75v11.5c0 .414.336.75.75.75h5.5a.75.75 0 00.75-.75v-2a.75.75 0 011.5 0v2A2.25 2.25 0 0110.75 18h-5.5A2.25 2.25 0 013 15.75V4.25z"
                        clipRule="evenodd"
                      />
                      <path fillRule="evenodd" d="M19 10a.75.75 0 00-.75-.75H8.704l1.048-.943a.75.75 0 10-1.004-1.114l-2.5 2.25a.75.75 0 000 1.114l2.5 2.25a.75.75 0 101.004-1.114l-1.048-.943h9.546A.75.75 0 0019 10z" clipRule="evenodd" />
                    </svg>
                    <span
                      onClick={() => {
                        Cookies.remove('token');
                        Swal.fire({
                          icon: 'success',
                          title: 'SUCCESS!',
                          text: 'You have been Loged out from your Account!',
                        });
                      }}
                      className="font-bold"
                    >
                      Logout
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default SidebarComponent;
