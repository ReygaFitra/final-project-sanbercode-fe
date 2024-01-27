import React, { useContext, useEffect } from 'react';
import { Accordion } from 'flowbite-react';
import axios from 'axios';
import { GlobalContext } from '../../Context/GlobalContext';

const Jobs = () => {
  const { state, eventHandling } = useContext(GlobalContext);
  const { data, setData, searchTerm, filterTerm1, filterTerm2, filterTerm3 } = state;
  const { handleDetail, handleInputSearch, JobStatus, RupiahFormat, turnCateString, handleInputFilter1, handleInputFilter2, handleInputFilter3 } = eventHandling;

  useEffect(() => {
    axios
      .get(`https://dev-example.sanbercloud.com/api/job-vacancy`)
      .then((res) => {
        setData([...res.data.data]);
      })
      .catch((err) => {});
  }, []);
  console.log(data);

  return (
    <>
      <div className="p-2 w-full">
        {/* Search and Filter */}
        <section className="border-b">
          <nav className="border-gray-200 px-4 lg:px-6 py-2.5">
            <div className="flex flex-wrap justify-between items-center">
              <div className="flex justify-start items-center">
                <form className="lg:block lg:pl-2">
                  <div className="relative mt-1 lg:w-80">
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                      <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <input
                      onChange={handleInputSearch}
                      type="text"
                      name="search"
                      value={searchTerm}
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full pl-10 p-2"
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
                  <div className="flex flex-wrap justify-center items-center ">
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
        {/* Content Section */}
        <section className="bg-white dark:bg-gray-900">
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
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
                              <b>Qualification</b> : {turnCateString(res.job_qualification, 35)}
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
                            <button onClick={handleDetail} value={res.id} className="text-sm btn-sm-primary rounded focus:ring-4 focus:outline-none focus:ring-secondary">
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
        </section>
      </div>
    </>
  );
};

export default Jobs;
