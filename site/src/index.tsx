import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Learn from './Learn';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from './About';
import DynamicLoadFile from './routes/DynamiLoadFile';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/learn" element={<Learn />} />
        <Route path='/about' element={<About />} />
        <Route path='/learn/:dirname/:filename' element={<DynamicLoadFile />} />
      </Routes>
    </Router>
  </React.StrictMode>
);