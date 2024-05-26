import React, { useEffect, useState } from 'react';
import '../../styles/style.css';
import { loginUser } from '../UserActions';
import { Navigate } from 'react-router-dom';
import { Link } from 'react-router-dom';



export const LoginContent = () => {
    const [login, setLogin] = useState(false);
    const [loginError, setLoginError] = useState({
        state: false
    });
    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };
    // ! почему-то два раза вызывается алерт при ошибке ввода логина/пароля
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLogin(await loginUser(user));

        if (login == false) {
            setLoginError({ state: true });
        }

    };
    if (login)
        return <Navigate to="/profile" />;

    if (loginError.state) {
        setLoginError({ state: false });
        alert("Вы ввели что-то не то. Попробуйте снова.");
    }

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

                    <form action="form" className="black_btn_form" onSubmit={handleSubmit}>
                        <button className="black_btn" type='submit'>Войти</button>
                    </form>
                    <Link to="/registration" className="login_link">Создать аккаунт</Link>


                </div>
            </div>
        </main>

    );
}