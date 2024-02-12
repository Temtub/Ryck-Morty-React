import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  
  <Router>
    <Routes>
      <Route path='/' element={Layout}/>
    </Routes>
  </Router>
)
