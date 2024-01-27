import React from 'react';
import LogoHome from './LogoHome';
import { Link } from 'react-router-dom';
import LogoHomeContent from './LogoHomeContent';
import Logo from '../../Components/Logo';

const Home = () => {
  return (
    <>
      <div>
        {/* Hero Section */}
        <section className="bg-base-100">
          <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div className="mr-auto place-self-center lg:col-span-7">
              <div className="flex">
                <span className="max-w-xl text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
                  Platform Loker terlengkap untuk
                  <span className="text-primary"> JobSeeker's.</span>
                </span>
              </div>

              <br />
              <div className="my-3">
                <span className="max-w-2xl font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">
                  Cari pekerjaan dan Talenta bisa bersama kami, Semua yang anda butuhkan tersedia di <Logo />
                </span>
              </div>

              <br />
              <Link to="/jobs">
                <span className="inline-flex my-3 items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100">Read More</span>
              </Link>
            </div>
            <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
              <LogoHome />
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section className="bg-success text-neutral">
          <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
            <dl className="grid max-w-screen-md gap-8 mx-auto sm:grid-cols-3">
              <div className="flex flex-col items-center justify-center">
                <dt className="mb-2 text-3xl md:text-4xl font-extrabold">100++</dt>
                <dd className="font-light text-gray-500">Company</dd>
              </div>
              <div className="flex flex-col items-center justify-center">
                <dt className="mb-2 text-3xl md:text-4xl font-extrabold">1.000++</dt>
                <dd className="font-light text-gray-500">contributors</dd>
              </div>
              <div className="flex flex-col items-center justify-center">
                <dt className="mb-2 text-3xl md:text-4xl font-extrabold">50++</dt>
                <dd className="font-light text-gray-500">organizations</dd>
              </div>
            </dl>
          </div>
        </section>
        {/* Content Section */}
        <section className="bg-base-100 flex gap-2">
          <div className="hidden md:flex py-10">
            <LogoHomeContent />
          </div>

          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div className="max-w-screen-lg text-gray-500 sm:text-lg">
              <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 ">
                <span className="font-extrabold">Berkolaborasi</span> dan memberi lapangan pekerjaan bersama dengan lebih dari <span className="font-extrabold">100++</span> perusahaan di seluruh penjuru{' '}
                <span className="font-extrabold">Nusantara.</span>
              </h2>
              <p className="mb-4 font-light">Sebagai Platform yang berkolaborasi dengan Ratusan perusahaan hiring partner, LokerStock.ID menyediakan segala semua yang anda butuhkan dengan Fitur Praktis dan mudah digunakan.</p>
              <p className="mb-4 font-medium">Menggapai karir anda dengan mudah bersama LokerStock.ID - Tersedia Lowongan yang akan selalu Up-to-Date dan Fitur untuk mencari Talenta berkualitas untuk Perusahaan anda.</p>
              <Link to="/jobs" className="inline-flex items-center font-medium text-primary-600 hover:text-neutral">
                Learn more
                <svg className="ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-neutral text-base-100">
          <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
            <div className="max-w-screen-md mb-8 lg:mb-16">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold">Designed for Jobseeker or Talent finder.</h2>
              <p className="sm:text-xl">Teruslah berkembang untuk meningkatkan soft skills dan hard skills anda Bersama LokerStock.ID dengan Fitur yang sangat supportif.</p>
            </div>
            <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
              <div className="hover:bg-base-100 hover:text-neutral rounded-md transition p-3">
                <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full lg:h-12 lg:w-12">
                  <svg className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold">Up-to_Date</h3>
                <p className="text-gray-500">Lowongan yang disediakan kami akan selalu up-to-date karena akan terhubung langsung dengan HR.</p>
              </div>

              <div className="hover:bg-base-100 hover:text-neutral rounded-md transition p-3">
                <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full lg:h-12 lg:w-12">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                    <path
                      fillRule="evenodd"
                      d="M2 3.5A1.5 1.5 0 013.5 2h9A1.5 1.5 0 0114 3.5v11.75A2.75 2.75 0 0016.75 18h-12A2.75 2.75 0 012 15.25V3.5zm3.75 7a.75.75 0 000 1.5h4.5a.75.75 0 000-1.5h-4.5zm0 3a.75.75 0 000 1.5h4.5a.75.75 0 000-1.5h-4.5zM5 5.75A.75.75 0 015.75 5h4.5a.75.75 0 01.75.75v2.5a.75.75 0 01-.75.75h-4.5A.75.75 0 015 8.25v-2.5z"
                      clipRule="evenodd"
                    />
                    <path d="M16.5 6.5h-1v8.75a1.25 1.25 0 102.5 0V8a1.5 1.5 0 00-1.5-1.5z" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold">Easy Apply</h3>
                <p className="text-gray-500">Fitur yang kami kembangkan khusus untuk anda para jobseeker's maupun Talent Finder yang mencari talent berkualitas untuk perusahaan anda.</p>
              </div>
              <div className="hover:bg-base-100 hover:text-neutral rounded-md transition p-3">
                <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full lg:h-12 lg:w-12">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                    <path
                      fillRule="evenodd"
                      d="M2 4.25A2.25 2.25 0 014.25 2h11.5A2.25 2.25 0 0118 4.25v8.5A2.25 2.25 0 0115.75 15h-3.105a3.501 3.501 0 001.1 1.677A.75.75 0 0113.26 18H6.74a.75.75 0 01-.484-1.323A3.501 3.501 0 007.355 15H4.25A2.25 2.25 0 012 12.75v-8.5zm1.5 0a.75.75 0 01.75-.75h11.5a.75.75 0 01.75.75v7.5a.75.75 0 01-.75.75H4.25a.75.75 0 01-.75-.75v-7.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold">Trusted</h3>
                <p className="text-gray-500">Kami sudah berkolaborasi dengan lebih dari 50 organisasi dan lebih dari 100++ perusahaan hiring partner kami.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
