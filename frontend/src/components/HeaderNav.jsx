import React from 'react';
import '../styles/style.css';
import { Link } from 'react-router-dom';

// TODO: make dynamic nav_elem "Shop" that it switch to "HomePage" if current page is not "HomePage"
export const HeaderNav = () => {
    return (
        <header className="header">
            <nav className="header__nav">
                <ul className="nav_list">
                    <div>
                        <li className="nav_elem"><Link to={"/shop"}>Shop</Link></li>
                        <li className="nav_elem"><Link to={""}>Contact</Link></li>
                    </div>
                    <div></div>
                    <div>
                        <li className="nav_elem"><Link to={""}>Sign in</Link></li>
                        <li className="nav_elem"><Link to={""}>Cart</Link></li>
                    </div>
                </ul>
            </nav>
        </header>);
}

// export default HeaderNav;
