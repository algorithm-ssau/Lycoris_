import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

export const Profile = () => {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/profile', {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}` // Передаем токен авторизации в заголовке запроса
                    }
                });
                setUserData(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error:', error);
                setError(error.response?.data?.message || 'An error occurred');
                setLoading(false);
                // Если получили ошибку авторизации (например, токен недействителен), перенаправляем на страницу входа
                if (error.response?.status === 401) {
                    setRedirect(true);
                }
            }
        };

        fetchUserData();
    }, []);

    if (redirect) {
        return <Redirect to="/login" />;
    }

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h2>Profile</h2>
            <p>Name: {userData.name}</p>
            <p>Email: {userData.email}</p>
            {/* Здесь можете отображать другую информацию о пользователе */}
        </div>
    );
};

export default Profile;
