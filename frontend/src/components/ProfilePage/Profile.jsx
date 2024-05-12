import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import jwt from 'jsonwebtoken';

const ProfilePage = () => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(true);

    useEffect(() => {
        // Получаем токен из localStorage
        const token = localStorage.getItem('token');

        if (!token) {
            // Если токен отсутствует, перенаправляем пользователя на страницу входа
            setIsAuthenticated(false);
            setIsLoading(false);
            return;
        }

        // Извлекаем идентификатор пользователя из токена JWT
        const userId = getUserIdFromToken(token);

        // Делаем запрос на сервер для получения данных пользователя
        axios.get(`/user/${userId}`) // обновляем маршрут, добавляя идентификатор пользователя
            .then(response => {
                setUser(response.data);
                setIsLoading(false);
            })
            .catch(error => {
                console.error('Error fetching user data:', error);
                // Если произошла ошибка при запросе, перенаправляем пользователя на страницу входа
                setIsAuthenticated(false);
                setIsLoading(false);
            });
    }, []);

    const getUserIdFromToken = (token) => {
        try {
            // Распарсить токен
            const decodedToken = jwt.decode(token);

            // Получить идентификатор пользователя из распарсенного токена
            const userId = decodedToken ? decodedToken.userId : null;

            return userId;
        } catch (error) {
            console.error('Error decoding token:', error);
            return null;
        }
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (!isAuthenticated) {
        // Если пользователь не авторизован, перенаправляем его на страницу входа
        return <Redirect to="/login" />;
    }

    if (!user) {
        return <div>No user data found.</div>;
    }

    return (
        <div>
            <h2>User Profile</h2>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            {/* Дополнительная информация о пользователе */}
        </div>
    );
};

export default ProfilePage;
