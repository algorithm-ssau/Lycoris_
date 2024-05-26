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

    const [cartButton, setCart] = useState({
        'pointer-events': 'none',
        'opacity': 0.5
    });

    const setParametrs = () => {
        if (getUserId()) {
            setLogin("Профиль");
            setLoginLink("/profile");
            setCart({
                'pointer-events': 'auto',
                'opacity': 1
            });
        }
    }

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

        setParametrs();

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

        setParametrs();
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
                        <li className="nav_elem" onClick={mainOrShop}><Link to={"/cart"} style={cartButton}>Корзина </Link></li>
                    </div>
                </ul>
            </nav>
        </header>);
}

