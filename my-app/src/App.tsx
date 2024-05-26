import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import CarPage from './assets/Components/Pages/CarPage';
import LoginPage from './assets/Components/Pages/LoginPage';


function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="car" element={<CarPage />} />
          
        </Routes>
      </BrowserRouter>
  );
}

export default App