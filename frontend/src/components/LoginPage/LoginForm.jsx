import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import '../../styles/style.css';

export const LoginForm = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const history = useHistory();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/login', formData);
            const { access_token } = response.data; // Получаем токен из ответа
            localStorage.setItem('token', access_token); // Сохраняем токен в localStorage
            console.log('JWT token:', access_token);
            // Перенаправление пользователя на страницу профиля
            history.push('/profile');
        } catch (error) {
            console.error('Error:', error);
        }
    };

    // Проверяем, авторизован ли пользователь и перенаправляем на страницу профиля
    if (localStorage.getItem('token')) {
        history.push('/profile');
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
