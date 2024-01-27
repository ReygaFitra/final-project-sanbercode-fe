import React, { useContext } from 'react';
import { GlobalContext } from '../../Context/GlobalContext';
import { Link } from 'react-router-dom';

const Register = () => {
  const { state, eventHandling } = useContext(GlobalContext);
  const { inputRegis } = state;
  const { handleInputRegis, handleRegis } = eventHandling;

  return (
    <>
      <div>
        <section className="bg-gray-50">
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className="w-full bg-base-100 rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">Create an account</h1>
                <form onSubmit={handleRegis} className="space-y-4 md:space-y-6">
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900">Full Name: </label>
                    <input
                      onChange={handleInputRegis}
                      type="text"
                      name="name"
                      value={inputRegis.name}
                      className="bg-gray-50 border border-gray-300 text-neutral sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                      placeholder="Nama lengkap"
                      required
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900">Photo Profile : </label>
                    <input
                      onChange={handleInputRegis}
                      type="text"
                      name="image_url"
                      value={inputRegis.image_url}
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Image Url"
                      required
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900">Email</label>
                    <input
                      onChange={handleInputRegis}
                      type="email"
                      name="email"
                      value={inputRegis.email}
                      className="bg-gray-50 border border-gray-300 text-neutral sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                      placeholder="name@company.com"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">
                      Password
                    </label>
                    <input
                      onChange={handleInputRegis}
                      type="password"
                      name="password"
                      id="password"
                      value={inputRegis.password}
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-neutral sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                      required
                    />
                  </div>

                  <button type="submit" className="btn-lg-primary rounded">
                    Create an Account
                  </button>
                  <div className="text-sm font-light text-base-0">
                    Already have an account?
                    <Link to="/login" className="font-medium text-primary-600 hover:underline">
                      Login here
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Register;
