import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SecurityComponent from './routes/security';
import DashboardComponent from './routes/dashboard';
import ProductComponent from './routes/products';
import Avatar from './components/avatar';
import NavbarComponent from './components/NavbarComponent';
import Head from './components/Head';

function App() {
  return (
    <>
     <NavbarComponent />
    <div class="absolute top-0 right-0 mt-5 mr-5 lg:mt-20 lg:mr-10 ">
      <Avatar />
      </div>
    
      <Router>
        <Routes>
          <Route path="/security" element={<SecurityComponent />} />
          <Route path="/dashboard" element={<DashboardComponent />} />
          <Route path="/products" element={< ProductComponent />} />
        </Routes>
      </Router>
      </>
    
  );
}

export default App;