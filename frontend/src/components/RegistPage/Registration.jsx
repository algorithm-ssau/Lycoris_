import React, { useEffect, useState } from 'react';
import '../../styles/style.css';
import { createUser } from '../UserActions';
import { Navigate } from 'react-router-dom';


// TODO: переключение на профиль/логин при успешном входе
export const RegistrationContent = () => {

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: ""
    });

    useEffect(() => {
    }
        , []);
    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (createUser(user))
            return <Navigate to="/login" />;
    };

    return (
        <main className="login">
            <div className="blur">
                <div className="login_section">
                    <h1 className="login_title">Регистрация</h1>
                    <p>
                        Станьте участником и получите персонализированные рекомендации по
                        подаркам, быстрое оформление заказа и многое другое!
                    </p>
                    <input
                        type="text"
                        id="user_nickname_input"
                        name="name"
                        placeholder="Ваше имя"
                        onChange={handleChange}

                    />
                    <input
                        type="text"
                        id="user_email_input"
                        name="email"
                        placeholder="Ваш email"
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
                        <button className="black_btn" type="submit">Завершить</button>
                    </form>


                </div>
            </div>
        </main>


    );
}