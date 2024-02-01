// App.js
import React from 'react';
import NavBar from './Component/NavBar';
import CustomerLogin from './Component/CustomerLogin';
import VendorLogin from './Component/VendorLogin';
import HomePage from './HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutUs from './Component/AboutUs';
import ContactUs from './Component/ContactUs';
import CustomerDetails from './Component/CustomerDetails';
import VendorDetails from './Component/VendorDetails';
function App() {
  return (
     <BrowserRouter>
       <div>
         <NavBar />
         <Routes>
           <Route path="/" element={<HomePage />} />
           <Route path="/customer-login" element={<CustomerLogin />} />
           <Route path="/vendor-login" element={<VendorLogin />} />
           <Route path="/about-us" element={<AboutUs/>}/>
           <Route path="/contact-us" element={<ContactUs/>}/>

         </Routes>
       </div>
     </BrowserRouter>
    
  );
}

export default App;
