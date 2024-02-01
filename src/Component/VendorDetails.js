import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Vendors = () => {
    const [vendors, setVendors] = useState([]);
    const [newVendorName, setNewVendorName] = useState('');
    const [newContactNumber, setNewContactNumber] = useState('');
    const [newEmail, setNewEmail] = useState('');

    useEffect(() => {
        fetchVendors();
    }, []);

    const fetchVendors = async () => {
        try {
            const response = await axios.get('/api/Vendors');
            setVendors(response.data);
        } catch (error) {
            console.error('Error fetching vendors:', error);
        }
    };

    const handleAddVendor = async () => {
        try {
            const response = await axios.post('/api/Vendors', {
                vendorName: newVendorName,
                contactNumber: newContactNumber,
                email: newEmail
            });
            setVendors([...vendors, response.data]);
            setNewVendorName('');
            setNewContactNumber('');
            setNewEmail('');
        } catch (error) {
            console.error('Error adding vendor:', error);
        }
    };

    const handleDeleteVendor = async (id) => {
        try {
            await axios.delete(`/api/Vendors/${id}`);
            setVendors(vendors.filter(vendor => vendor.vendorId !== id));
        } catch (error) {
            console.error('Error deleting vendor:', error);
        }
    };

    return (
        <div>
            <h1 style={{ color: 'blue', fontSize: '24px', marginBottom: '20px' }}>Vendors</h1>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
                {vendors.map(vendor => (
                    <li key={vendor.vendorId} style={{ marginBottom: '10px', border: '1px solid #ccc', padding: '10px' }}>
                        <span style={{ fontWeight: 'bold' }}>{vendor.vendorName}</span> - 
                        <span>{vendor.contactNumber}</span> - 
                        <span>{vendor.email}</span>
                        <button style={{ marginLeft: '10px' }} onClick={() => handleDeleteVendor(vendor.vendorId)}>Delete</button>
                    </li>
                ))}
            </ul>
            <div style={{ marginTop: '20px' }}>
                <input style={{ marginRight: '10px' }} type="text" value={newVendorName} onChange={(e) => setNewVendorName(e.target.value)} placeholder="Vendor Name" />
                <input style={{ marginRight: '10px' }} type="text" value={newContactNumber} onChange={(e) => setNewContactNumber(e.target.value)} placeholder="Contact Number" />
                <input style={{ marginRight: '10px' }} type="text" value={newEmail} onChange={(e) => setNewEmail(e.target.value)} placeholder="Email" />
                <button onClick={handleAddVendor}>Add Vendor</button>
            </div>
        </div>
    );
};

export default Vendors;
