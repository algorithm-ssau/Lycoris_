import React from 'react';
import '../styles/style.css';
import { Link } from 'react-router-dom';

// TODO: make dynamic nav_elem "Shop" that it switch to "HomePage" if current page is not "HomePage"
export const HeaderNav = () => {
    // window.location.href
    // window.location.pathname
    // TODO: with this code check full url and pathName (idk what is it) and based on this change first Link from "Shop" to "Home"
    return (
        <header className="header">
            <nav className="header__nav">
                <ul className="nav_list">
                    <div>
                        <li className="nav_elem"><Link to={"/shop"}>Магазин­</Link></li>
                        <li className="nav_elem"><Link to={""}>Контакты</Link></li>
                    </div>
                    <div></div>
                    <div>
                        <li className="nav_elem"><Link to={""}>Войти</Link></li>
                        <li className="nav_elem"><Link to={"/cart"}>Корзина </Link></li>
                    </div>
                </ul>
            </nav>
        </header>);
}

