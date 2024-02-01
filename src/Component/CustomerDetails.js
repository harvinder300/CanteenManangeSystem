import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBarCustomer from './NavBarCustomer'; 
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import OrderDetails from './OrderDetails'; 
import Wallet from './Wallet'; 
import FoodItem from './FoodItem'; 

const Customers = () => {
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        fetchCustomers();
    }, []);

    const fetchCustomers = async () => {
        try {
            const response = await axios.get('http://localhost:5173/api/Customers');
            setCustomers(response.data);
        } catch (error) {
            console.error('Error fetching customers:', error);
        }
    };

    return (
        <div>
            <BrowserRouter>
                <div>
                    <NavBarCustomer />
                    <Routes>
                        <Route path="/orderhistory" element={<OrderDetails />} />
                        <Route path="/wallet" element={<Wallet />} />
                        <Route path="/fooditem" element={<FoodItem />} />
                    </Routes>
                </div>
            </BrowserRouter>

            <h1>Customers</h1>
            <ul>
                {customers.map(customer => (
                    <li key={customer.customerId}>
                        <strong>{customer.firstName} {customer.lastName}</strong> - {customer.email}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Customers;
