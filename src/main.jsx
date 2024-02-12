import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';

import Layout from './components/Layout';
import Home from './components/Home';
import Episodes from './components/Episodes';

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <Router>
    <Routes>
    <Route path="/" element={<Layout />}>
          <Route index  element={<Home/> } />
          <Route path='episodios'  element={<Episodes/> } />
        </Route>
    </Routes>
  </Router>
)
