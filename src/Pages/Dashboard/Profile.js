import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../../Context/GlobalContext';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Profile = () => {
  const { state, eventHandling } = useContext(GlobalContext);
  const { inputRegis, setInputRegis, inputLogin, setInputLogin, fetchStatus, setFetchStatus } = state;

  return (
    <>
      <div className="h-screen px-4 pb-24 overflow-auto md:px-6">
        <section className="bg-neutral rounded text-base-100">
          <>
            <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
              <h2 className="mb-2 text-xl font-semibold leading-none md:text-2xl">Name : {inputRegis.name}</h2>
              <p className="mb-4 text-xl font-extrabold leading-none md:text-2xl">Email : {inputRegis.email}</p>
              <dl>
                <dt className="mb-2 font-semibold leading-none">About Me:</dt>
                <dd className="mb-4 font-light text-gray-500 sm:mb-5">This Section is About Section</dd>
              </dl>
              <dl className="flex items-center space-x-6">
                <div>
                  <dt className="mb-2 font-semibold leading-none">Gender</dt>
                  <dd className="mb-4 font-light text-gray-500 sm:mb-5">Male/Female</dd>
                </div>
                <div>
                  <dt className="mb-2 font-semibold leading-none">Position</dt>
                  <dd className="mb-4 font-light text-gray-500 sm:mb-5">-</dd>
                </div>
              </dl>
              <div className="flex items-center space-x-4">
                <Link to="/profile/change-password" type="button" className="btn-lg-secondary rounded-sm">
                  <svg aria-hidden="true" className="mr-1 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                    <path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd" />
                  </svg>
                  Change Password
                </Link>
              </div>
            </div>
          </>
        </section>
      </div>
    </>
  );
};

export default Profile;
