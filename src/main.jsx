import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';

import Layout from './components/Layout';
import Home from './components/Home';
import Episodes from './components/Episodes';
import Actores from './components/Actores';
import EpisodesActors from './components/EpisodesActors';

import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <Router>
    <Routes>
      <Route path="/" element={<Layout />}>
            <Route index  element={<Home/> } />
            <Route path='episodios'  element={<Episodes/> } >
              <Route path=':idParam' element={<EpisodesActors/>} />
            </Route>
            
            <Route path='actores'  element={<Actores/> } />
      </Route>  
    </Routes>
  </Router>
)
