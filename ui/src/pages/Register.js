import React from 'react';
import JwtService from '../utils/jwt.service';
import { useRootContext } from '../context/RootContext';
import { useNavigate } from 'react-router-dom';
import { instance } from '../utils/axiosInstance';

const RegisterPage = () => {
  const { setIsLoggedIn } = useRootContext();
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const password = e.target.password.value;
    const email = e.target.email.value;

    const data = {
      name,
      password,
      email,
    };
    register(data);
  };

  const register = async ({ name, password, email }) => {
    try {
      const res = await instance.post('/auth/register', {
        email,
        password,
        name,
      });
      console.log(res);
      JwtService.saveToken(res.data.token);
      setIsLoggedIn(true);
      navigate('/tasks');
    } catch (error) {
      alert('Something went wrong, please try again!');
    }
  };

  return (
    <div className='flex h-screen bg-black'>
      <div className='m-auto'>
        <div className='bg-white p-10 rounded shadow-md shadow-slate-200 animate__animated animate__zoomInDown animate__delay-1s'>
          <h1 className='text-2xl font-semibold mb-4 text-center text-black'>
            Register
          </h1>
          <form className='py-10 px-2' onSubmit={handleRegister}>
            <div className='mb-4'>
              <label
                htmlFor='username'
                className='text-gray-700 text-sm font-bold'
              >
                Name:
              </label>
              <input
                type='text'
                id='name'
                name='name'
                className='border p-2  w-full mt-2 text-black'
                placeholder='Enter your username'
              />
            </div>
            <div className='mb-4'>
              <label
                htmlFor='email'
                className='text-gray-700 text-sm font-bold'
              >
                Email:
              </label>
              <input
                type='email'
                id='email'
                name='email'
                className='border p-2 w-full mt-2 text-black'
                placeholder='Enter your email'
              />
            </div>
            <div className='mb-4'>
              <label
                htmlFor='password'
                className='text-gray-700 text-sm font-bold'
              >
                Password:
              </label>
              <input
                type='password'
                id='password'
                name='password'
                className='border p-2 w-full mt-2 text-black'
                placeholder='Enter your password'
              />
            </div>
            <div className=''>
              <button
                type='submit'
                className='bg-blue-500 text-white p-2 px-4 rounded mx-auto flex mt-8'
              >
                Register
              </button>
              <div className='flex mt-4 items-center justify-center'>
                <p className='text-black text-center'>
                  Already have an account?
                </p>
                <button
                  onClick={() => {
                    navigate('/login');
                  }}
                  className='ml-2 text-blue-500 underline'
                >
                  Login
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
