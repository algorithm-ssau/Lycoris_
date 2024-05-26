import React, { useEffect, useState } from 'react';
import '../../styles/style.css';
import { createUser, createUserCart } from '../UserActions';
import { Link, Navigate } from 'react-router-dom';


export const RegistrationContent = () => {
    const [reg, setReg] = useState(false);
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
        if (createUser(user)) {
            setReg(true);
        }
    };
    if (reg) {
        return <Navigate to="/login" />;
    }

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

                    <form action="form" className="black_btn_form" onSubmit={handleSubmit}>
                        <button className="black_btn" type="submit">Завершить</button>
                    </form>
                    <Link to="/login" className="login_link">Уже есть аккаунт</Link>


                </div>
            </div>
        </main>


    );
}