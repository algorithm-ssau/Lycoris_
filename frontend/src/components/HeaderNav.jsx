import React from 'react';
import '../styles/style.css';

export const HeaderNav = () => {
    return (
        <header className="header">
            <nav className="header__nav">
                <ul className="nav_list">
                    <div>
                        <li className="nav_elem"><a href="">Shop</a></li>
                        <li className="nav_elem"><a href="">Contact</a></li>
                    </div>
                    <div></div>
                    <div>
                        <li className="nav_elem"><a href="">Sign in</a></li>
                        <li className="nav_elem"><a href="">Cart</a></li>
                    </div>
                </ul>
            </nav>
        </header>);
}

export default HeaderNav;
