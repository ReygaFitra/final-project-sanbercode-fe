import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { GlobalContext } from '../../Context/GlobalContext';
import axios from 'axios';
import NavbarComponent from '../../Components/NavbarComponent';
import { Link } from 'react-router-dom';
import Logo from '../../Components/Logo';

const Detail = () => {
  const { state, eventHandling } = useContext(GlobalContext);
  const { data, setData, fetchStatus, setFetchStatus, inputDetail, setInputDetail } = state;
  const { JobStatus, RupiahFormat, applyModal } = eventHandling;

  let { idDetail } = useParams();

  useEffect(() => {
    if (idDetail !== undefined) {
      axios
        .get(`https://dev-example.sanbercloud.com/api/job-vacancy/${idDetail}`)
        .then((res) => {
          setFetchStatus(true);
          let data = res.data;
          setInputDetail({
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
        })
        .catch((err) => {});
    }
  }, []);

  return (
    <>
      <div>
        <main className="relative h-screen overflow-hidden bg-gray-100">
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
              <header className="z-40 flex items-center justify-between w-full h-16">
                <NavbarComponent />
              </header>
              {/* Content Detail Section */}
              <div className="h-screen px-4 pb-24 overflow-auto md:px-6">
                <section className="bg-neutral rounded text-base-100">
                  <Link to="/dashboard">
                    <button className="btn-sm-info text-sm rounded-none font-semibold ">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path
                          fillRule="evenodd"
                          d="M9.53 2.47a.75.75 0 010 1.06L4.81 8.25H15a6.75 6.75 0 010 13.5h-3a.75.75 0 010-1.5h3a5.25 5.25 0 100-10.5H4.81l4.72 4.72a.75.75 0 11-1.06 1.06l-6-6a.75.75 0 010-1.06l6-6a.75.75 0 011.06 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Go Back</span>
                    </button>
                  </Link>
                  <div className=" gap-4 items-center py-3 px-4 mx-auto max-w-screen-xl xl:gap-5 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                    <div className="rounded shadow-sm p-3 container">
                      <h1 className="mb-4 text-4xl tracking-tight font-extrabold">{inputDetail.title}</h1>
                      <img className="w-full h-64 rounded" src={inputDetail.company_image_url} alt="dashboard image" />
                    </div>

                    <div className="p-1 md:mt-0 bg-base-100 text-neutral rounded-sm shadow-sm">
                      <span className="font font-semibold">Job Qualification :</span>
                      <p className="mb-5 font-light md:text-sm">{inputDetail.job_qualification}</p>
                    </div>
                  </div>
                  <div className="p-1 m-5 md:mt-0 border-t">
                    <span className="font font-semibold">Job Description :</span>
                    <p className="mb-6 font-light  md:text-sm">{inputDetail.job_description}</p>
                  </div>
                  <div className="bg-base-100 text-neutral grid grid-cols-3 m-5 rounded shadow-sm">
                    <div className="p-3 md:mt-0">
                      <div className="flex gap-1 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                          <path d="M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z" />
                        </svg>
                        <span className="font font-semibold">Job Tenure :</span>
                      </div>
                      <p className="mb-6 font-light  md:text-sm">{inputDetail.job_tenure}</p>
                    </div>
                    <div className="p-1 md:mt-0">
                      <div className="flex gap-1 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                          <path
                            fillRule="evenodd"
                            d="M6 3.75A2.75 2.75 0 018.75 1h2.5A2.75 2.75 0 0114 3.75v.443c.572.055 1.14.122 1.706.2C17.053 4.582 18 5.75 18 7.07v3.469c0 1.126-.694 2.191-1.83 2.54-1.952.599-4.024.921-6.17.921s-4.219-.322-6.17-.921C2.694 12.73 2 11.665 2 10.539V7.07c0-1.321.947-2.489 2.294-2.676A41.047 41.047 0 016 4.193V3.75zm6.5 0v.325a41.622 41.622 0 00-5 0V3.75c0-.69.56-1.25 1.25-1.25h2.5c.69 0 1.25.56 1.25 1.25zM10 10a1 1 0 00-1 1v.01a1 1 0 001 1h.01a1 1 0 001-1V11a1 1 0 00-1-1H10z"
                            clipRule="evenodd"
                          />
                          <path d="M3 15.055v-.684c.126.053.255.1.39.142 2.092.642 4.313.987 6.61.987 2.297 0 4.518-.345 6.61-.987.135-.041.264-.089.39-.142v.684c0 1.347-.985 2.53-2.363 2.686a41.454 41.454 0 01-9.274 0C3.985 17.585 3 16.402 3 15.055z" />
                        </svg>
                        <span className="font font-semibold">Job Type :</span>
                      </div>

                      <p className="mb-6 font-light md:text-sm">{inputDetail.job_type}</p>
                    </div>
                    <div className="p-1 md:mt-0">
                      <div className="flex gap-1 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                          <path
                            fillRule="evenodd"
                            d="M1 2.75A.75.75 0 011.75 2h10.5a.75.75 0 010 1.5H12v13.75a.75.75 0 01-.75.75h-1.5a.75.75 0 01-.75-.75v-2.5a.75.75 0 00-.75-.75h-2.5a.75.75 0 00-.75.75v2.5a.75.75 0 01-.75.75h-2.5a.75.75 0 010-1.5H2v-13h-.25A.75.75 0 011 2.75zM4 5.5a.5.5 0 01.5-.5h1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1zM4.5 9a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h1a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-1zM8 5.5a.5.5 0 01.5-.5h1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1zM8.5 9a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h1a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-1zM14.25 6a.75.75 0 00-.75.75V17a1 1 0 001 1h3.75a.75.75 0 000-1.5H18v-9h.25a.75.75 0 000-1.5h-4zm.5 3.5a.5.5 0 01.5-.5h1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1zm.5 3.5a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h1a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-1z"
                            clipRule="evenodd"
                          />
                        </svg>

                        <span className="font font-semibold">Company :</span>
                      </div>

                      <p className="font-light  md:text-sm">{inputDetail.company_name}</p>
                    </div>
                    <div className="p-1 md:mt-0">
                      <div className="flex gap-1 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                        </svg>
                        <span className="font font-semibold">Job Status :</span>
                      </div>

                      <p className="mb-6 font-light md:text-sm">{JobStatus(inputDetail.job_status)}</p>
                    </div>
                    <div className="p-1 md:mt-0">
                      <div className="flex gap-1 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                          <path d="M10.75 10.818v2.614A3.13 3.13 0 0011.888 13c.482-.315.612-.648.612-.875 0-.227-.13-.56-.612-.875a3.13 3.13 0 00-1.138-.432zM8.33 8.62c.053.055.115.11.184.164.208.16.46.284.736.363V6.603a2.45 2.45 0 00-.35.13c-.14.065-.27.143-.386.233-.377.292-.514.627-.514.909 0 .184.058.39.202.592.037.051.08.102.128.152z" />
                          <path
                            fillRule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-6a.75.75 0 01.75.75v.316a3.78 3.78 0 011.653.713c.426.33.744.74.925 1.2a.75.75 0 01-1.395.55 1.35 1.35 0 00-.447-.563 2.187 2.187 0 00-.736-.363V9.3c.698.093 1.383.32 1.959.696.787.514 1.29 1.27 1.29 2.13 0 .86-.504 1.616-1.29 2.13-.576.377-1.261.603-1.96.696v.299a.75.75 0 11-1.5 0v-.3c-.697-.092-1.382-.318-1.958-.695-.482-.315-.857-.717-1.078-1.188a.75.75 0 111.359-.636c.08.173.245.376.54.569.313.205.706.353 1.138.432v-2.748a3.782 3.782 0 01-1.653-.713C6.9 9.433 6.5 8.681 6.5 7.875c0-.805.4-1.558 1.097-2.096a3.78 3.78 0 011.653-.713V4.75A.75.75 0 0110 4z"
                            clipRule="evenodd"
                          />
                        </svg>

                        <span className="font font-semibold">Salary : </span>
                      </div>

                      <p className="mb-6 font-light  md:text-sm">
                        {RupiahFormat(inputDetail.salary_min)} - {RupiahFormat(inputDetail.salary_max)}
                      </p>
                    </div>

                    <div className="p-1 md:mt-0">
                      <div className="flex gap-1 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                          <path
                            fillRule="evenodd"
                            d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"
                            clipRule="evenodd"
                          />
                        </svg>

                        <span className="font font-semibold">Location : </span>
                      </div>

                      <p className="mb-6 font-light  md:text-sm">{inputDetail.company_city}</p>
                    </div>
                  </div>

                  <div className="m-5 border-t py-2">
                    <button onClick={applyModal} className="btn-lg-secondary rounded-sm">
                      Apply This Job
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                        <path d="M3.105 2.289a.75.75 0 00-.826.95l1.414 4.925A1.5 1.5 0 005.135 9.25h6.115a.75.75 0 010 1.5H5.135a1.5 1.5 0 00-1.442 1.086l-1.414 4.926a.75.75 0 00.826.95 28.896 28.896 0 0015.293-7.154.75.75 0 000-1.115A28.897 28.897 0 003.105 2.289z" />
                      </svg>
                    </button>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Detail;
