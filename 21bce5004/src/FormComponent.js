import React, { useState } from 'react';
import axios from 'axios';

const FormComponent = () => {
    const [formData, setFormData] = useState({
        status: true,
        user_id: '',
        email: '',
        roll_number: '',
        data: []
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleDataChange = (e) => {
        setFormData({ ...formData, data: e.target.value.split(',') });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/bfhl', formData);
            console.log(response.data);
        } catch (error) {
            console.error('Error submitting form', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="user_id" placeholder="User ID" onChange={handleChange} />
            <input type="email" name="email" placeholder="Email" onChange={handleChange} />
            <input type="text" name="roll_number" placeholder="Roll Number" onChange={handleChange} />
            <input type="text" name="data" placeholder="Data (comma separated)" onChange={handleDataChange} />
            <button type="submit">Submit</button>
        </form>
    );
};

export default FormComponent;
