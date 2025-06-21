import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SalesPage from './components/SalesPage.jsx';
import CapturePage from './components/CapturePage.jsx';
import ThankYouPage from './components/ThankYouPage.jsx';
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
}

export default App;

