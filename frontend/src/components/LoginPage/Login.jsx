import React, { useEffect, useState } from 'react';
import '../../styles/style.css';
import axios from 'axios';


export const LoginContent = () => {

    useEffect(() => {
        // const apiBack = domain + "/flower";
        // axios.get(apiBack)
        //     .then(response => setFlowers(response.data))
    }
        , []);

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
                        name="Email"
                        placeholder="Ваш Email"
                    />
                    <input
                        type="text"
                        id="user_password_input"
                        name="Password"
                        placeholder="Ваш пароль"
                    />
                    <button className="black_btn">Войти</button>
                </div>
            </div>
        </main>

    );
}