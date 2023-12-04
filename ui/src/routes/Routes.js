import React, { useEffect, useState } from 'react';
import LoginPage from '../pages/Login';
import RegisterPage from '../pages/Register';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TaskPage from '../pages/TaskPage';
import { useRootContext } from '../context/RootContext';

export default function AppRoutes() {
  const { isLoggedIn } = useRootContext();

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<h1>hELLO</h1>} />
        {isLoggedIn ? (
          <Route exact path='/tasks' element={<TaskPage />} />
        ) : (
          <>
            <Route exact path='/login' element={<LoginPage />} />
            <Route exact path='/register' element={<RegisterPage />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}
