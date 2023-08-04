import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { History} from './ReactRouterWorking/working01';
import {About} from "./ReactRouterWorking/working01";
import {Contact} from "./ReactRouterWorking/working01"
import { 
  BrowserRouter,
  Routes,
  Route 
} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/about' element={<About />}>
          <Route path="history" element={<History/>}></Route>
      </Route>
      <Route path='/contact' element={<Contact />} />
      
    </Routes>
  </BrowserRouter>
    
);

