import React, { useState, useEffect } from 'react';
import axios from 'axios';

const OrderDetails = () => {
    const [orderDetails, setOrderDetails] = useState([]);

    useEffect(() => {
        fetchOrderDetails();
    }, []);

    const fetchOrderDetails = async () => {
        try {
            const response = await axios.get('/api/OrderDetails');
            setOrderDetails(response.data);
        } catch (error) {
            console.error('Error fetching order details:', error);
        }
    };

    return (
        <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
            <h1 style={{ color: 'blue', fontSize: '24px', marginBottom: '20px' }}>Order Details</h1>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                    <tr style={{ borderBottom: '1px solid #ccc' }}>
                        <th style={{ padding: '10px', textAlign: 'left' }}>Order ID</th>
                        <th style={{ padding: '10px', textAlign: 'left' }}>Customer ID</th>
                        <th style={{ padding: '10px', textAlign: 'left' }}>Vendor ID</th>
                        <th style={{ padding: '10px', textAlign: 'left' }}>Food Item ID</th>
                        <th style={{ padding: '10px', textAlign: 'left' }}>Quantity</th>
                        <th style={{ padding: '10px', textAlign: 'left' }}>Total Price</th>
                    </tr>
                </thead>
                <tbody>
                    {orderDetails.map(detail => (
                        <tr key={detail.orderId} style={{ borderBottom: '1px solid #ccc' }}>
                            <td style={{ padding: '10px' }}>{detail.orderId}</td>
                            <td style={{ padding: '10px' }}>{detail.customerId}</td>
                            <td style={{ padding: '10px' }}>{detail.vendorId}</td>
                            <td style={{ padding: '10px' }}>{detail.foodItemId}</td>
                            <td style={{ padding: '10px' }}>{detail.quantity}</td>
                            <td style={{ padding: '10px' }}>{detail.totalPrice}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default OrderDetails;
