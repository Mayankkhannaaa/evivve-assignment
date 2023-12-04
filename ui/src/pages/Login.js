import React from 'react';
import JwtService from '../utils/jwt.service';
import { useRootContext } from '../context/RootContext';
import { useNavigate } from 'react-router-dom';
import { instance } from '../utils/axiosInstance';

const LoginPage = () => {
  const { setIsLoggedIn } = useRootContext();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;

    const data = {
      username,
      password,
    };
    login(data);
  };

  const login = async ({ username, password }) => {
    try {
      const res = await instance.post('/auth/login', {
        email: username,
        password,
      });
      console.log(res);
      JwtService.saveToken(res.data.tokens);
      setIsLoggedIn(true);
      // after login navigate to /tasks
      navigate('/tasks');
    } catch (error) {}
  };

  return (
    <div className='flex h-screen bg-black'>
      <div className='m-auto'>
        <div className='bg-white p-8 rounded shadow-md shadow-slate-200 animate__animated animate__zoomInDown animate__delay-1s'>
          <h1 className='text-2xl font-semibold mb-4 text-center'>Login</h1>
          <form className='p-8 ' onSubmit={handleLogin}>
            <div className='mb-6'>
              <label
                htmlFor='username'
                className='text-gray-700 text-sm font-bold'
              >
                Username:
              </label>
              <input
                type='text'
                id='username'
                name='username'
                className='border p-2 w-full mt-2'
                placeholder='Enter your username'
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
                className='border p-2 w-full mt-2'
                placeholder='Enter your password'
              />
            </div>
            <button
              type='submit'
              className='bg-blue-500 text-white p-2 px-4 rounded mx-auto flex mt-8'
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
