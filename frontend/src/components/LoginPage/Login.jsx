import React, { useEffect, useState } from 'react';
import '../../styles/style.css';
import { loginUser } from '../UserActions';
import { Navigate } from 'react-router-dom';


// TODO: переключение на профиль при успешном входе
export const LoginContent = () => {

    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if( loginUser(user) )
            return <Navigate to="/profile" />;

    };

    return (
        <main className="login">
            <div className="blur">
                <div className="login_section">
                    <h1 className="login_title">Авторизация</h1>
                    <p>
                        После авторизации вы сможете получить доступ к истории заказов и
                        редактированию ваших данных
                    </p>
                    <input
                        type="text"
                        id="user_email_input"
                        name="email"
                        placeholder="Ваш Email"
                        onChange={handleChange}

                    />
                    <input
                        type="text"
                        id="user_password_input"
                        name="password"
                        placeholder="Ваш пароль"
                        onChange={handleChange}

                    />
                    <form className='black_btn' onSubmit={handleSubmit}>
                        <button className="black_btn" type='submit'>Войти</button>

                    </form>
                </div>
            </div>
        </main>

    );
}