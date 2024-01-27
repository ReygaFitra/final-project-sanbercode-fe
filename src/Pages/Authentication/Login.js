import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../../Context/GlobalContext';
import LogoLogin from './LogoLogin';

const Login = () => {
  const { state, eventHandling } = useContext(GlobalContext);
  const { inputLogin } = state;
  const { handleInputLogin, handleLogin } = eventHandling;

  return (
    <>
      <div>
        <section>
          <div className="flex items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 gap-3 bg-neutral">
            <div className="hidden md:block">
              <LogoLogin />
            </div>
            <div className="justify-center w-full bg-base-100 rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">Sign in to your account</h1>

                <form onSubmit={handleLogin} className="space-y-4 md:space-y-6">
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
                      Your email
                    </label>
                    <input
                      onChange={handleInputLogin}
                      type="text"
                      name="email"
                      value={inputLogin.email}
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
                      onChange={handleInputLogin}
                      type="password"
                      name="password"
                      value={inputLogin.password}
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-neutral sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                      required
                    />
                  </div>

                  <button type="submit" className="btn-lg-primary rounded-md">
                    Login
                  </button>
                  <p className="text-sm font-light text-gray-500">
                    Don’t have an account yet?
                    <Link to="/register">
                      <span className="font-medium text-primary hover:underline ">Sign up</span>
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Login;
