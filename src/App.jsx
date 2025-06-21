import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SalesPage from './components/SalesPage';
import CapturePage from './components/CapturePage';
import ThankYouPage from './components/ThankYouPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<SalesPage />} />
          <Route path="/captura" element={<CapturePage />} />
          <Route path="/obrigado" element={<ThankYouPage />} />
        </Routes>
      </div>
    </Router>
  );
