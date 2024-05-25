import React, { useEffect, useState } from 'react';
import '../styles/style.css';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom'
import { getUserId } from './UserActions';



export const HeaderNav = () => {

    const [firstButton, setFirst] = useState("Магазин");
    const [firstLink, setFirstLink] = useState("/shop");

    const [loginButton, setLogin] = useState("Войти");
    const [loginLink, setLoginLink] = useState("/login");

    const location = useLocation();
    useEffect(() => { 
        if (location.pathname == "/") {
            setFirst("Магазин");
            setFirstLink("/shop");
        }
        else {
            setFirst("Главная страница");
            setFirstLink("/");
        }

        if( getUserId() != null){
            setLogin("Профиль");
            setLoginLink("/profile");
        }

    }, []);


    const mainOrShop = (page) => {
        if (page.nativeEvent.target.pathname == "/") {
            setFirst("Магазин");
            setFirstLink("/shop");
        }
        else {
            setFirst("Главная страница");
            setFirstLink("/");
        }

    }
    return (
        <header className="header">
            <nav className="header__nav">
                <ul className="nav_list">
                    <div>
                        <li className="nav_elem" onClick={mainOrShop}><Link to={firstLink}>{firstButton}</Link></li>
                        <li className="nav_elem" onClick={mainOrShop}><Link to={""}>Контакты</Link></li>
                    </div>
                    <div></div>
                    <div>
                        <li className="nav_elem" onClick={mainOrShop}><Link to={loginLink}>{loginButton}</Link></li>
                        <li className="nav_elem" onClick={mainOrShop}><Link to={"/cart"}>Корзина </Link></li>
                    </div>
                </ul>
            </nav>
        </header>);
}

