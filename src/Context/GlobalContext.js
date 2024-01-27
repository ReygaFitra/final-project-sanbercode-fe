import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';
import Swal from 'sweetalert2';

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
  // Indikator State
  const [data, setData] = useState(null);
  const [inputLogin, setInputLogin] = useState({
    email: '',
    password: '',
  });
  const [inputRegis, setInputRegis] = useState({
    name: '',
    image_url: '',
    email: '',
    password: '',
  });
  const [inputChangePass, setInputChangePass] = useState({
    current_password: '',
    new_password: '',
    new_confirm_password: '',
  });
  const [inputForm, setInputForm] = useState({
    title: '',
    job_description: '',
    job_qualification: '',
    job_type: '',
    job_tenure: '',
    job_status: 0,
    company_name: '',
    company_image_url: '',
    company_city: '',
    salary_min: 0,
    salary_max: 0,
  });
  const [inputDetail, setInputDetail] = useState({
    title: '',
    job_description: '',
    job_qualification: '',
    job_type: '',
    job_tenure: '',
    job_status: 0,
    company_name: '',
    company_image_url: '',
    company_city: '',
    salary_min: 0,
    salary_max: 0,
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [filterTerm1, setFilterTerm1] = useState('');
  const [filterTerm2, setFilterTerm2] = useState('');
  const [filterTerm3, setFilterTerm3] = useState('');
  const [fetchStatus, setFetchStatus] = useState(true);
  const [currentId, setCurrentID] = useState(-1);

  let navigate = useNavigate();

  // Event Handling
  // Login Event
  const handleInputLogin = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    setInputLogin({ ...inputLogin, [name]: value });
  };

  const handleLogin = (event) => {
    event.preventDefault();
    let { email, password } = inputLogin;
    axios
      .post(`https://dev-example.sanbercloud.com/api/login`, { email, password })
      .then((res) => {
        let data = res.data;
        Cookies.set(`token`, data.token);
        navigate('/dashboard');
        Swal.fire({
          icon: 'success',
          title: 'SUCCESS!',
          text: 'Log in Success!',
        });
      })
      .catch((err) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `Can't Log in something went wrong!`,
        });
      });
  };

  // Register Event
  const handleInputRegis = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    setInputRegis({ ...inputRegis, [name]: value });
  };

  const handleRegis = (event) => {
    event.preventDefault();
    let { name, image_url, email, password } = inputRegis;
    axios
      .post(`https://dev-example.sanbercloud.com/api/register`, { name, image_url, email, password })
      .then((res) => {
        let data = res.data;
        Cookies.set(`token`, data.token);
        navigate('/dashboard');
        Swal.fire({
          icon: 'success',
          title: 'SUCCESS!',
          text: 'Register Success!',
        });
      })
      .catch((err) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `Can't Create your Account, something went wrong!`,
        });
      });
  };

  // Change Password Event
  const handleInputPassword = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    setInputChangePass({ ...inputChangePass, [name]: value });
  };

  const handleChangePassword = (event) => {
    event.preventDefault();
    let { current_password, new_password, new_confirm_password } = inputChangePass;

    axios
      .post(`https://dev-example.sanbercloud.com/api/change-password`, { current_password, new_password, new_confirm_password }, { headers: { authorization: 'bearer' + Cookies.get(`token`) } })
      .then((res) => {
        setFetchStatus(true);
        Swal.fire({
          icon: 'success',
          title: 'SUCCESS!',
          text: 'Password Changed!',
        });
        navigate('/dashboard');
      })
      .catch((err) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `Can't Changes your password, something went wrong!`,
        });
      });
  };

  // Form Event
  const handleInputForm = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    setInputForm({ ...inputForm, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let { title, job_description, job_qualification, job_type, job_tenure, job_status, company_name, company_image_url, company_city, salary_min, salary_max } = inputForm;

    if (currentId === -1) {
      axios
        .post(
          `https://dev-example.sanbercloud.com/api/job-vacancy`,
          { title, job_description, job_qualification, job_type, job_tenure, job_status, company_name, company_image_url, company_city, salary_min, salary_max },
          { headers: { authorization: 'bearer' + Cookies.get(`token`) } }
        )
        .then((res) => {
          setFetchStatus(true);
          navigate('/dashboard');
          Swal.fire({
            icon: 'success',
            title: 'SUCCESS!',
            text: 'Data Submited!',
          });
        })
        .catch((err) => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `Can't Submit your data, something went wrong!`,
          });
        });
    } else {
      axios
        .put(
          `https://dev-example.sanbercloud.com/api/job-vacancy/${currentId}`,
          { title, job_description, job_qualification, job_type, job_tenure, job_status, company_name, company_image_url, company_city, salary_min, salary_max },
          { headers: { authorization: 'bearer' + Cookies.get(`token`) } }
        )
        .then((res) => {
          setFetchStatus(true);
          navigate('/dashboard');
          Swal.fire({
            icon: 'success',
            title: 'SUCCESS!',
            text: 'Data Edited!',
          });
        })
        .catch((err) => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `Can't Edit your data, something went wrong!`,
          });
        });
    }

    setInputForm({
      title: '',
      job_description: '',
      job_qualification: '',
      job_type: '',
      job_tenure: '',
      job_status: 0,
      company_name: '',
      company_image_url: '',
      company_city: '',
      salary_min: 0,
      salary_max: 0,
    });
  };

  // List Event
  // Delete
  const handleDelete = (event) => {
    let idDelete = parseInt(event.target.value);

    axios
      .delete(`https://dev-example.sanbercloud.com/api/job-vacancy/${idDelete}`, { headers: { authorization: 'bearer' + Cookies.get(`token`) } })
      .then((res) => {
        setFetchStatus(true);
        Swal.fire({
          icon: 'success',
          title: 'SUCCESS!',
          text: 'Data deleted succesfully!',
        });
        navigate('/dashboard');
      })
      .catch((err) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `Can't Delete your data, something went wrong!`,
        });
      });
  };
  // Update
  const handleUpdate = (event) => {
    let idData = parseInt(event.target.value);
    setCurrentID(idData);

    axios
      .get(`https://dev-example.sanbercloud.com/api/job-vacancy/${idData}`, { headers: { authorization: 'bearer' + Cookies.get(`token`) } })
      .then((res) => {
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
        navigate(`/dashboard/list-job-vacancy/form/edit/${idData}`);
      })
      .catch((err) => {});
  };

  //Detail Event
  const handleDetail = (event) => {
    let idDetail = parseInt(event.target.value);
    setCurrentID(idDetail);
    navigate(`/dashboard/list-job-vacancy/${idDetail}`);
  };

  // Function
  // limit string
  const turnCateString = (str, num) => {
    if (str.length > num) {
      return str.slice(0, num) + '...';
    } else {
      return str;
    }
  };
  // Search Filter
  const handleInputSearch = (event) => {
    let value = event.target.value;
    setSearchTerm(value);
  };
  // Filter
  const handleInputFilter1 = (event) => {
    let value = event.target.value;
    setFilterTerm1(value);
  };
  const handleInputFilter2 = (event) => {
    let value = event.target.value;
    setFilterTerm2(value);
  };
  const handleInputFilter3 = (event) => {
    let value = event.target.value;
    setFilterTerm3(value);
  };
  // Rupiah Format
  const RupiahFormat = (salary) => {
    let rupiah = parseInt(salary).toLocaleString('id-ID');

    return 'Rp.' + rupiah;
  };
  // Job Status
  const JobStatus = (status) => {
    if (status === 0) {
      return (
        <span className="flex w-20 p-1 text-base-100 bg-error items-center rounded font-semibold">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
            <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
          </svg>
          <span>Closed</span>
        </span>
      );
    } else if (status === 1) {
      return (
        <span className="flex w-20 p-1 text-neutral bg-info items-center rounded font-semibold">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
            <path d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" />
          </svg>

          <span>Open</span>
        </span>
      );
    } else {
      return <span>-</span>;
    }
  };
  // Modal handling
  const applyModal = () => {
    Swal.fire({
      title: 'Do you want to Apply this job?',
      showDenyButton: true,
      confirmButtonText: 'Apply',
      denyButtonText: `Cancel`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Your Application has been sent!', 'Thanks you for using our Apps, Good luck for your Career!', 'success');
      } else if (result.isDenied) {
        Swal.fire('Apply Canceled', '', 'info');
      }
    });
  };

  let state = {
    data,
    setData,
    inputLogin,
    setInputLogin,
    inputForm,
    setInputForm,
    fetchStatus,
    setFetchStatus,
    currentId,
    setCurrentID,
    inputRegis,
    setInputRegis,
    inputDetail,
    setInputDetail,
    inputChangePass,
    setInputChangePass,
    searchTerm,
    setSearchTerm,
    filterTerm1,
    setFilterTerm1,
    filterTerm2,
    setFilterTerm2,
    filterTerm3,
    setFilterTerm3,
  };

  let eventHandling = {
    handleInputLogin,
    handleLogin,
    handleInputForm,
    handleSubmit,
    turnCateString,
    handleDelete,
    handleUpdate,
    handleDetail,
    handleInputRegis,
    handleRegis,
    handleInputPassword,
    handleChangePassword,
    handleInputSearch,
    RupiahFormat,
    JobStatus,
    handleInputFilter1,
    handleInputFilter2,
    handleInputFilter3,
    applyModal,
  };
  return (
    <>
      <GlobalContext.Provider value={{ state, eventHandling }}>{props.children}</GlobalContext.Provider>
    </>
  );
};
