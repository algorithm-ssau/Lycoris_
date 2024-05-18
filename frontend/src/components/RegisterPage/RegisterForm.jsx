import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Navigate  } from 'react-router-dom';
import '../../styles/style.css';

export const RegisterForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password_check: ''
    });

    const [redirectToLogin, setRedirectToLogin] = useState(false); // Состояние для перенаправления на страницу /login
    const [redirectToProfile, setRedirectToProfile] = useState(false); // Состояние для перенаправления на страницу /profile

    useEffect(() => {
        // Проверяем, авторизован ли пользователь и устанавливаем соответствующее состояние
        if (localStorage.getItem('token')) {
            setRedirectToProfile(true);
        }
    }, []); // Пустой массив зависимостей, чтобы эффект выполнялся только один раз при загрузке компонента

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/register', formData);
            console.log(response.data);
            setRedirectToLogin(true); // Устанавливаем состояние для перенаправления на страницу /login
        } catch (error) {
            console.error('Error:', error);
        }
    };

    if (redirectToLogin) {
        return <Navigate  to="/login" />; // Перенаправление на страницу /login при успешной регистрации
    }

    if (redirectToProfile) {
        return <Navigate  to="/profile" />; // Перенаправление на страницу /profile, если пользователь уже авторизован
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
