import React, { useEffect, useState, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import NavbarComponent from '../../Components/NavbarComponent';
import axios from 'axios';
import { GlobalContext } from '../../Context/GlobalContext';
import { Accordion } from 'flowbite-react';
import Logo from '../../Components/Logo';

const Dashboard = () => {
  const { state, eventHandling } = useContext(GlobalContext);
  const { data, setData, fetchStatus, setFetchStatus, setInputForm, searchTerm, filterTerm1, filterTerm2, filterTerm3, setCurrentID } = state;
  const { handleDetail, handleInputSearch, RupiahFormat, JobStatus, turnCateString, handleInputFilter1, handleInputFilter2, handleInputFilter3 } = eventHandling;

  let { idData } = useParams();

  useEffect(() => {
    if (fetchStatus === true) {
      axios
        .get(`https://dev-example.sanbercloud.com/api/job-vacancy`)
        .then((res) => {
          setData([...res.data.data]);
        })
        .catch((err) => {});
    }
  }, [fetchStatus, setFetchStatus]);
  console.log(data);

  // Read after edit
  useEffect(() => {
    if (idData !== undefined) {
      axios.get(`https://dev-example.sanbercloud.com/api/job-vacancy/${idData}`).then((res) => {
        let data = res.data;
        setInputForm({
          title: data.title,
          job_description: data.job_description,
          job_qualification: data.job_qualification,
          job_type: data.job_type,
          job_tenure: data.job_tenure,
          job_status: data.job_status,
          company_name: data.company_name,
          company_image_url: data.company_image_url,
          company_city: data.company_city,
          salary_min: data.salary_min,
          salary_max: data.salary_max,
        });
      });
    }
    setCurrentID(-1);
  }, []);

  return (
    <>
      <div>
        <main className="relative h-screen overflow-hidden bg-gray-100">
          <div className="flex md:hidden">
            <NavbarComponent />
          </div>
          <div className="flex items-start justify-between">
            {/* Sidebar */}
            <div className="relative hidden h-screen shadow-lg lg:block w-80">
              <div className="h-full bg-white">
                <div className="flex items-center justify-start pt-6 ml-8">
                  <span className="text-xl font-bold ">
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
                    <div className="flex items-center justify-start w-full p-2 pl-6 my-2 text-gray-400 transition-colors duration-200 hover:text-primary">
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
                    <div className="flex items-center justify-start w-full p-2 pl-6 my-2 text-gray-400 transition-colors duration-200 hover:text-primary">
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
                    <div className="flex items-center justify-start w-full p-2 pl-6 my-2 text-gray-400 transition-colors duration-200 hover:text-primary">
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
                    <div className="flex items-center justify-start w-full p-2 pl-6 my-2 text-gray-400 transition-colors duration-200 hover:text-primary">
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
                  </div>
                </nav>
              </div>
            </div>
            <div className="flex flex-col w-full md:space-y-4">
              {/* Navbar */}
              <header className="hidden md:flex z-40 items-center justify-between w-full h-16">
                <NavbarComponent />
              </header>
              <div className="h-screen px-4 pb-24 overflow-auto md:px-6">
                {/* Dashboard Title */}
                <section>
                  <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                    <div className="mx-auto max-w-screen-sm text-center">
                      <h2 className="mb-4 text-4xl tracking-tight font-extrabold leading-tight text-gray-900 dark:text-white">Temukan Pekerjaan anda disini!</h2>
                      <span className="flex justify-center gap-1 items-center mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">
                        Raih karir impian anda bersama <Logo />
                      </span>
                    </div>
                  </div>
                </section>
                {/*  */}

                {/* Search and Filter */}
                <section className="border-b">
                  <nav className="border-gray-200 px-4 lg:px-6 py-2.5">
                    <div className="flex flex-wrap justify-between items-center">
                      <div className="flex justify-start items-center">
                        <form className="lg:block lg:pl-2">
                          <div className="relative mt-1 lg:w-80">
                            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                              <svg className="w-5 h-5 text-gray-500 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <input
                              onChange={handleInputSearch}
                              type="text"
                              name="search"
                              value={searchTerm}
                              className="bg-base-100 border border-gray-300 text-neutral sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full pl-10 p-2"
                              placeholder="Search..."
                            />
                          </div>
                        </form>
                      </div>
                    </div>
                    {/* Filter  */}
                    <Accordion alwaysOpen={true} className="my-2">
                      <Accordion.Panel>
                        <Accordion.Title>
                          <div className="text-neutral">Search Filter</div>
                        </Accordion.Title>
                        <Accordion.Content>
                          <div className="flex flex-wrap justify-between items-center">
                            <div className="flex justify-start items-center">
                              <form className="md:flex gap-3 lg:pl-2">
                                <div className=" mt-1 w-80">
                                  <input
                                    onChange={handleInputFilter1}
                                    type="text"
                                    name="job_tenure"
                                    value={filterTerm1}
                                    className="bg-base-100 border border-gray-300 text-neutral sm:text-sm rounded-sm focus:ring-primary focus:border-primary block w-full p-2"
                                    placeholder="Search by Job Tenure"
                                  />
                                </div>
                                <div className="mt-1 lg:w-80">
                                  <input
                                    onChange={handleInputFilter2}
                                    type="text"
                                    name="company_city"
                                    value={filterTerm2}
                                    className="bg-base-100 border border-gray-300 text-neutral sm:text-sm rounded-sm focus:ring-primary focus:border-primary block w-full p-2"
                                    placeholder="Search by Company City"
                                  />
                                </div>
                                <div className="mt-1 lg:w-80">
                                  <input
                                    onChange={handleInputFilter3}
                                    type="text"
                                    name="job_type"
                                    value={filterTerm3}
                                    className="bg-base-100 border border-gray-300 text-neutral sm:text-sm rounded-sm focus:ring-primary focus:border-primary block w-full p-2"
                                    placeholder="Search by Job Type"
                                  />
                                </div>
                              </form>
                            </div>
                          </div>
                        </Accordion.Content>
                      </Accordion.Panel>
                    </Accordion>
                    {/*  */}
                  </nav>
                </section>
                {/*  */}

                <div className="grid grid-cols-1 gap-4 my-4 md:grid-cols-2 lg:grid-cols-3">
                  {/* Card */}
                  {data !== null &&
                    data
                      .filter((res) => {
                        if (searchTerm === '') {
                          return res;
                        } else if (res.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                          return res;
                        }
                      })
                      .filter((res) => {
                        if (filterTerm1 === '') {
                          return res;
                        } else if (res.job_tenure.toLowerCase().includes(filterTerm1.toLowerCase())) {
                          return res;
                        }
                      })
                      .filter((res) => {
                        if (filterTerm2 === '') {
                          return res;
                        } else if (res.company_city.toLowerCase().includes(filterTerm2.toLowerCase())) {
                          return res;
                        }
                      })
                      .filter((res) => {
                        if (filterTerm3 === '') {
                          return res;
                        } else if (res.job_type.toLowerCase().includes(filterTerm3.toLowerCase())) {
                          return res;
                        }
                      })
                      .map((res, i) => {
                        return (
                          <div key={i} className="max-w-sm bg-base-100 border border-gray-200 rounded-lg shadow-md text-neutral hover:bg-neutral hover:text-base-100 transition">
                            <span>
                              <img className="rounded-t-md w-full h-52" src={res.company_image_url} alt="" />
                            </span>
                            <div className="p-4">
                              <span>
                                <h1 className="text-2xl font-bold tracking-tight">{res.title}</h1>
                              </span>
                              <span className="flex items-center justify-center gap-1 py-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                  <path
                                    fillRule="evenodd"
                                    d="M1 2.75A.75.75 0 011.75 2h10.5a.75.75 0 010 1.5H12v13.75a.75.75 0 01-.75.75h-1.5a.75.75 0 01-.75-.75v-2.5a.75.75 0 00-.75-.75h-2.5a.75.75 0 00-.75.75v2.5a.75.75 0 01-.75.75h-2.5a.75.75 0 010-1.5H2v-13h-.25A.75.75 0 011 2.75zM4 5.5a.5.5 0 01.5-.5h1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1zM4.5 9a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h1a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-1zM8 5.5a.5.5 0 01.5-.5h1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1zM8.5 9a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h1a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-1zM14.25 6a.75.75 0 00-.75.75V17a1 1 0 001 1h3.75a.75.75 0 000-1.5H18v-9h.25a.75.75 0 000-1.5h-4zm.5 3.5a.5.5 0 01.5-.5h1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1zm.5 3.5a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h1a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-1z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                                <span className="text-lg font-semibold">{res.company_name}</span>
                              </span>
                              <div className="border-y py-2">
                                <p className="text-sm">
                                  <b>Qualification</b> : {turnCateString(res.job_qualification, 30)}
                                </p>
                                <p className="text-sm">
                                  <b>Job Type</b> : {res.job_type}
                                </p>
                                <p className="text-sm">
                                  <b>Tenure</b> : {res.job_tenure}
                                </p>
                              </div>
                              <div className="border-b py-2">
                                <p className="text-sm">
                                  <b>City</b> : {res.company_city}
                                </p>
                                <p className="text-sm flex gap-1 items-center">
                                  <b>Status</b> : {JobStatus(res.job_status)}
                                </p>
                              </div>

                              <div className="flex rounded mt-1 py-2 items-center justify-center">
                                <div className="text-lg font-bold">
                                  Salary: {RupiahFormat(res.salary_min)} - {RupiahFormat(res.salary_max)}
                                </div>
                              </div>
                              <div>
                                <button onClick={handleDetail} value={res.id} className="btn-sm-primary rounded text-sm focus:ring-4 focus:outline-none focus:ring-secondary">
                                  Detail
                                </button>
                              </div>
                            </div>
                          </div>
                        );
                      })}

                  {/*  */}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Dashboard;
