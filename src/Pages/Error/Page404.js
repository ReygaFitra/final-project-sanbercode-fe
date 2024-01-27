import React from 'react';
import { Link } from 'react-router-dom';

const Page404 = () => {
  return (
    <>
      <section className="bg-base-100">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center">
            <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-neutral">404</h1>
            <p className="mb-4 text-3xl tracking-tight font-bold text-neutral md:text-4xl">Woops that page doesn't exist.</p>
            <p className="mb-4 text-lg font-light text-gray-500">Sorry, we can't find that page. You'll find lots to explore on the home page. </p>

            <Link to="/">
              <span className="inline-flex text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center my-4">Back to Homepage</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page404;
