import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Footer from './screens/components/Footer';

// 1. import:
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './screens/Home';
import Items from './screens/Items';
import Nav from './screens/components/Nav';
import TheHardware from './screens/components/TheHardware';
import TheMonitors from './screens/components/TheMonitors';
import TheEquipment from './screens/components/TheEquipment';
import ViewItem from './screens/components/ViewItem';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <div style={{ backgroundImage: `url('https://i.pinimg.com/564x/e8/02/4c/e8024cbe452f3535331c0cad1d63ee58.jpg')`, minHeight: '100vh' }}>
  <Nav/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/items' element={<Items/>}>
          <Route path='/items/equipment' element={<TheEquipment/>}/>
          <Route path='/items/Hardware' element={<TheHardware/>}/>
          <Route path='/items/Monitor' element={<TheMonitors/>}/>
          <Route path="/items/Monitor/:id" element={<ViewItem />} />
      </Route>
      <Route path='*' element={<h3 className='alert alert-danger text-center'>
        404 - PAGE NOT FOUND</h3>}/>
    </Routes>
    </div>
    <Footer />
    
  </BrowserRouter>
  
);


reportWebVitals();