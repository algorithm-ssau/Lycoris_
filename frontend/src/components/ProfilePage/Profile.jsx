import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import jwt from 'jsonwebtoken';

const ProfilePage = () => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (!token) {
            setIsAuthenticated(false);
            setIsLoading(false);
            return;
        }

        const userId = getUserIdFromToken(token);

        axios.get(`http://localhost:5000/user/${userId}`)
            .then(response => {
                setUser(response.data);
                setIsLoading(false);
            })
            .catch(error => {
                console.error('Error fetching user data:', error);
                setIsAuthenticated(false);
                setIsLoading(false);
            });
    }, []);

    const getUserIdFromToken = (token) => {
        try {
            const decodedToken = jwt.decode(token);
            return decodedToken ? decodedToken.sub : null;
        } catch (error) {
            console.error('Error decoding token:', error);
            return null;
        }
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }

    if (!user) {
        return <div>No user data found.</div>;
    }

    return (
        <div>
            <h2>User Profile</h2>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
        </div>
    );
};

export default ProfilePage;
