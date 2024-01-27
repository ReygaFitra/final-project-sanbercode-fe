import React from 'react';
import Logo from './Logo';

const FooterComponent = () => {
  const footerLinks = ['About', 'Privacy Policy', 'Contact'];

  return (
    <>
      <footer className="p-4 bg-neutral text-base-100 rounded-none shadow md:px-6 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Logo />
          <ul className="flex flex-wrap items-center mb-6 text-sm gap-3">
            {footerLinks.map((footerlink, i) => {
              return (
                <li key={i} className="py-2">
                  <span>{footerlink}</span>
                </li>
              );
            })}
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <span className="block text-sm sm:text-center">
          © 2022
          <a className="hover:underline"> Reyga™</a>.
        </span>
      </footer>
    </>
  );
};

export default FooterComponent;
