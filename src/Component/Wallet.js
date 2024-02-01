import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Wallet.css'; // Import CSS file for styling

const Wallets = () => {
    const [wallets, setWallets] = useState([]);

    useEffect(() => {
        fetchWallets();
    }, []);

    const fetchWallets = async () => {
        try {
            const response = await axios.get('/api/Wallets');
            setWallets(response.data);
        } catch (error) {
            console.error('Error fetching wallets:', error);
        }
    };

    return (
        <div className="wallets-container">
            <h1 className="wallets-heading">Wallets</h1>
            <ul className="wallets-list">
                {wallets.map(wallet => (
                    <li key={wallet.walletId} className="wallet-item">
                        <span className="wallet-info">Customer ID:</span> {wallet.customerId} - 
                        <span className="wallet-info"> Balance:</span> {wallet.balance}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Wallets;
