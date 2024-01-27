import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../../Context/GlobalContext';
import axios from 'axios';

const ListData = () => {
  const { state, eventHandling } = useContext(GlobalContext);
  const { data, setData, searchTerm, filterTerm1, filterTerm2, filterTerm3 } = state;
  const { turnCateString, handleDelete, handleUpdate, handleInputSearch, JobStatus, RupiahFormat, handleInputFilter1, handleInputFilter2, handleInputFilter3 } = eventHandling;

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
      {/* Search and Filter */}
      <section className="border-b">
        <nav className="border-gray-200 px-4 lg:px-6 py-2.5 md:flex gap-6">
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
          {/* Filter */}
          <div className="flex flex-wrap justify-between items-center">
            <div className="flex justify-start items-center">
              <form className="md:flex gap-3 lg:pl-2">
                <div className=" mt-1 md:w-40 w-80">
                  <input
                    onChange={handleInputFilter1}
                    type="text"
                    name="job_tenure"
                    value={filterTerm1}
                    className="bg-base-100 border border-gray-300 text-neutral sm:text-sm rounded-sm focus:ring-primary focus:border-primary block w-full p-2"
                    placeholder="Job Tenure"
                  />
                </div>
                <div className="mt-1 md:w-40 w-80">
                  <input
                    onChange={handleInputFilter2}
                    type="text"
                    name="company_city"
                    value={filterTerm2}
                    className="bg-base-100 border border-gray-300 text-neutral sm:text-sm rounded-sm focus:ring-primary focus:border-primary block w-full p-2"
                    placeholder="Company City"
                  />
                </div>
                <div className="mt-1 md:w-40 w-80">
                  <input
                    onChange={handleInputFilter3}
                    type="text"
                    name="job_type"
                    value={filterTerm3}
                    className="bg-base-100 border border-gray-300 text-neutral sm:text-sm rounded-sm focus:ring-primary focus:border-primary block w-full p-2"
                    placeholder="Job Type"
                  />
                </div>
              </form>
            </div>
          </div>
          {/*  */}
        </nav>
      </section>
      {/*  */}

      <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500  overflow-x-scrol">
          <thead className="text-xs text-base-100 uppercase bg-primary">
            <tr>
              <th className="py-3 px-6">No</th>
              <th className="py-3 px-6">Position</th>
              <th className="py-3 px-6">Description</th>
              <th className="py-3 px-6">Qualification</th>
              <th className="py-3 px-6">Job Type</th>
              <th className="py-3 px-6">Job Tenure</th>
              <th className="py-3 px-6">Job Status</th>
              <th className="py-3 px-6">Company Name</th>
              <th className="py-3 px-6">Image URL</th>
              <th className="py-3 px-6">City</th>
              <th className="py-3 px-6">Min Salary</th>
              <th className="py-3 px-6">Max Salary</th>
              <th className="py-3 px-6">Action</th>
            </tr>
          </thead>
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
                  <tbody key={i}>
                    <tr className="bg-white border-b hover:bg-gray-50">
                      <th className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">{i + 1}</th>
                      <td className="py-4 px-6">{res.title}</td>
                      <td className="py-4 px-6">{turnCateString(res.job_description, 30)}</td>
                      <td className="py-4 px-6">{turnCateString(res.job_qualification, 30)}</td>
                      <td className="py-4 px-6">{res.job_type}</td>
                      <td className="py-4 px-6">{res.job_tenure}</td>
                      <td className="py-4 px-6">{JobStatus(res.job_status)}</td>
                      <td className="py-4 px-6">{res.company_name}</td>
                      <td className="py-4 px-6">{turnCateString(res.company_image_url, 30)}</td>
                      <td className="py-4 px-6">{res.company_city}</td>
                      <td className="py-4 px-6">{RupiahFormat(res.salary_min)}</td>
                      <td className="py-4 px-6">{RupiahFormat(res.salary_max)}</td>
                      <td className="py-4 px-6 flex gap-1">
                        <button onClick={handleUpdate} type="button" value={res.id} className="btn-sm-info rounded-md font-medium focus:ring-4 focus:outline-none focus:ring-blue-300">
                          Edit
                        </button>
                        <button onClick={handleDelete} type="button" value={res.id} className="btn-sm-error rounded-md font-medium focus:ring-4 focus:outline-none focus:ring-red-300 ">
                          Delete
                        </button>
                      </td>
                    </tr>
                  </tbody>
                );
              })}
        </table>
      </div>
    </>
  );
};

export default ListData;
