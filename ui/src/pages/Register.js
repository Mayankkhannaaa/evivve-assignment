import React from 'react';

const RegisterPage = () => {
  return (
    <div className='flex h-screen bg-black'>
      <div className='m-auto'>
        <div className='bg-white p-10 rounded shadow-md shadow-slate-200 animate__animated animate__zoomInDown animate__delay-1s'>
          <h1 className='text-2xl font-semibold mb-4 text-center'>Register</h1>
          <form className='py-10 px-12'>
            <div className='mb-4'>
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
                className='border p-2  w-full mt-2'
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
                className='border p-2 w-full mt-2'
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
                className='border p-2 w-full mt-2'
                placeholder='Enter your password'
              />
            </div>
            <button
              type='submit'
              className='bg-blue-500 text-white p-2 px-4 rounded mx-auto flex mt-8'
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
