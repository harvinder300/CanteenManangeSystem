import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FoodItems = () => {
    const [foodItems, setFoodItems] = useState([]);
    const [newName, setNewName] = useState('');
    const [newDescription, setNewDescription] = useState('');
    const [newPrice, setNewPrice] = useState('');

    useEffect(() => {
        fetchFoodItems();
    }, []);

    const fetchFoodItems = async () => {
        try {
            const response = await axios.get('/api/FoodItems');
            setFoodItems(response.data);
        } catch (error) {
            console.error('Error fetching food items:', error);
        }
    };

    const handleAddFoodItem = async () => {
        try {
            const response = await axios.post('/api/FoodItems', {
                name: newName,
                description: newDescription,
                price: newPrice
            });
            setFoodItems([...foodItems, response.data]);
            setNewName('');
            setNewDescription('');
            setNewPrice('');
        } catch (error) {
            console.error('Error adding food item:', error);
        }
    };

    const handleDeleteFoodItem = async (id) => {
        try {
            await axios.delete(`/api/FoodItems/${id}`);
            setFoodItems(foodItems.filter(item => item.foodItemId !== id));
        } catch (error) {
            console.error('Error deleting food item:', error);
        }
    };

    return (
        <div>
            <h1 style={{ color: 'blue', fontSize: '24px', marginBottom: '20px' }}>Food Items</h1>
            <ul style={{ listStyleType: 'none', padding: '0' }}>
                {foodItems.map(item => (
                    <li key={item.foodItemId} style={{ marginBottom: '10px', border: '1px solid #ccc', padding: '10px' }}>
                        <span style={{ fontWeight: 'bold' }}>{item.name}</span> - 
                        <span>{item.description}</span> - 
                        <span>{item.price}</span>
                        <button style={{ marginLeft: '10px' }} onClick={() => handleDeleteFoodItem(item.foodItemId)}>Delete</button>
                    </li>
                ))}
            </ul>
            <div>
                <input style={{ marginRight: '10px' }} type="text" value={newName} onChange={(e) => setNewName(e.target.value)} placeholder="Name" />
                <input style={{ marginRight: '10px' }} type="text" value={newDescription} onChange={(e) => setNewDescription(e.target.value)} placeholder="Description" />
                <input style={{ marginRight: '10px' }} type="text" value={newPrice} onChange={(e) => setNewPrice(e.target.value)} placeholder="Price" />
                <button onClick={handleAddFoodItem}>Add Food Item</button>
            </div>
        </div>
    );
};

export default FoodItems;
