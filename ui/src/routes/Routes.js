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
        {isLoggedIn ? (
          <Route path='/*' element={<TaskPage />} />
        ) : (
          <>
            <Route path='/*' element={<LoginPage />} />
            <Route exact path='/register' element={<RegisterPage />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}
