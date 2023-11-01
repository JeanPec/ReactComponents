import React from 'react';
import './App.css';
import { Navs } from './components';
import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom';
import { ButtonPage } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <main>
              <Navs />
              <Outlet />
            </main>
          }
        >
          <Route path="button" element={<ButtonPage />} />
        </Route>
        <Route path="*" element={<Navigate to="button" replace={true} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
