import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../../styles/style.css';

export const LoginForm = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/login', formData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const { access_token } = response.data;
            localStorage.setItem('token', access_token);
            console.log('JWT token:', access_token);
            navigate('/profile');
        } catch (error) {
            console.error('Error:', error);
        }
    };

    if (localStorage.getItem('token')) {
        navigate('/profile');
    }

    return (
        <section className="about_us">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" placeholder="Email" onChange={handleChange} />
                <input type="password" name="password" placeholder="Password" onChange={handleChange} />
                <button type="submit">Login</button>
            </form>
        </section>
    );
};

export default LoginForm;
