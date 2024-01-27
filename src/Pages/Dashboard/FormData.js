import React, { useContext } from 'react';
import { GlobalContext } from '../../Context/GlobalContext';

const FormData = () => {
  const { state, eventHandling } = useContext(GlobalContext);
  const { inputForm } = state;
  const { handleInputForm, handleSubmit } = eventHandling;

  return (
    <>
      <section className="bg-white ">
        <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
          <h2 className="mb-4 text-xl font-bold text-gray-900">Add a new Data</h2>
          {/* Form Section */}
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div className="sm:col-span-2">
                <label className="block mb-2 text-sm font-medium text-gray-900 ">Company Name</label>
                <input
                  onChange={handleInputForm}
                  type="text"
                  name="company_name"
                  value={inputForm.company_name}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                  placeholder="Company name"
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Company Image</label>
                <input
                  onChange={handleInputForm}
                  type="text"
                  name="company_image_url"
                  value={inputForm.company_image_url}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                  placeholder="Type image url"
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Position</label>
                <input
                  onChange={handleInputForm}
                  type="text"
                  name="title"
                  value={inputForm.title}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                  placeholder="Ex. FrontEnd Developer"
                  required
                />
              </div>

              <div className="w-full">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Job Type</label>
                <input
                  onChange={handleInputForm}
                  type="text"
                  name="job_type"
                  value={inputForm.job_type}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                  placeholder="WFO | WFH | Hybrid"
                  required
                />
              </div>
              <div className="w-full">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Job Tenure</label>
                <input
                  onChange={handleInputForm}
                  type="text"
                  name="job_tenure"
                  value={inputForm.job_tenure}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                  placeholder="Full Time | Contract | Internship"
                  required
                />
              </div>
              <div className="w-full">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Job Status
                  <span className="text-sm font-light">
                    <span className="text-red-700"> *</span>0 = Closed | 1 = Open
                  </span>
                </label>
                <input
                  onChange={handleInputForm}
                  type="number"
                  name="job_status"
                  value={inputForm.job_status}
                  min={0}
                  max={1}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                  required
                />
              </div>
              <div className="w-full">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Company City</label>
                <input
                  onChange={handleInputForm}
                  type="text"
                  name="company_city"
                  value={inputForm.company_city}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                  placeholder="Jakarta | Bogor | Tangerang | etc."
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Salary Min :</label>
                <input
                  onChange={handleInputForm}
                  type="number"
                  name="salary_min"
                  min={1000000}
                  value={inputForm.salary_min}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Salary Max :</label>
                <input
                  onChange={handleInputForm}
                  type="number"
                  name="salary_max"
                  value={inputForm.salary_max}
                  min={1000000}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Job Qualification</label>
                <textarea
                  onChange={handleInputForm}
                  name="job_qualification"
                  value={inputForm.job_qualification}
                  rows={8}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                  placeholder="Qualification"
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Job Description</label>
                <textarea
                  onChange={handleInputForm}
                  name="job_description"
                  value={inputForm.job_description}
                  rows={8}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                  placeholder="Type job description here"
                  required
                />
              </div>
            </div>
            <button type="submit" className="mt-4 sm:mt-6 text-sm font-medium btn-lg-primary rounded-md">
              Submit
            </button>
          </form>
        </div>
      </section>
      {/*  */}
    </>
  );
};

export default FormData;
