import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import '../../styles/style.css';

export const RegisterForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password_check: ''
    });

    const [redirectToLogin, setRedirectToLogin] = useState(false);
    const [redirectToProfile, setRedirectToProfile] = useState(false);

    useEffect(() => {
        if (localStorage.getItem('token')) {
            setRedirectToProfile(true);
        }
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/register', formData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log(response.data);
            setRedirectToLogin(true);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    if (redirectToLogin) {
        return <Navigate to="/login" />;
    }

    if (redirectToProfile) {
        return <Navigate to="/profile" />;
    }

    return (
        <div>
            <h2>Registration</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Name" onChange={handleChange} />
                <input type="email" name="email" placeholder="Email" onChange={handleChange} />
                <input type="password" name="password" placeholder="Password" onChange={handleChange} />
                <input type="password" name="password_check" placeholder="Confirm Password" onChange={handleChange} />
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default RegisterForm;
