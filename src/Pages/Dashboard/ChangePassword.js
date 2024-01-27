import React, { useContext } from 'react';
import { GlobalContext } from '../../Context/GlobalContext';

const ChangePassword = () => {
  const { state, eventHandling } = useContext(GlobalContext);
  const { inputChangePass } = state;
  const { handleInputPassword, handleChangePassword } = eventHandling;
  return (
    <>
      <div>
        <section className="bg-gray-50">
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className="w-full p-6 bg-base-100 rounded-lg shadow md:mt-0 sm:max-w-md">
              <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">Change Password</h2>
              <form onSubmit={handleChangePassword} className="mt-4 space-y-4 lg:mt-5 md:space-y-5">
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
                    Current Password
                  </label>
                  <input
                    onChange={handleInputPassword}
                    type="password"
                    name="current_password"
                    value={inputChangePass.current_password}
                    className="bg-gray-50 border border-gray-300 text-neutral sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                    placeholder="Current Password"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">
                    New Password
                  </label>
                  <input
                    onChange={handleInputPassword}
                    type="password"
                    name="new_password"
                    value={inputChangePass.new_password}
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-neutral sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900">
                    Confirm password
                  </label>
                  <input
                    onChange={handleInputPassword}
                    type="password"
                    name="new_confirm_password"
                    value={inputChangePass.new_confirm_password}
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-neutral sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                    required
                  />
                </div>
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input id="newsletter" aria-describedby="newsletter" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-info" required />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="newsletter" className="font-light text-gray-500">
                      I accept the <a className="font-medium text-neutral hover:underline">Terms and Conditions</a>
                    </label>
                  </div>
                </div>
                <button type="submit" className="btn-lg-secondary rounded-md">
                  Change Password
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ChangePassword;
