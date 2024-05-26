import React from 'react';
import '../styles/style.css';
import { Link } from 'react-router-dom';



export const Footer = () => {
    return (
        <footer className="footer ">
            <div className="email_block footer_container">
                <p>
                    Не забывайте заказывать цветы от Samara LuxeBouquets на День Святого Валентина, День Матери, 8 марта. Мы напомним вам за 7 дней до праздника. И никакого спама.
                </p>
                <input
                    type="text"
                    id="email_input"
                    name="email"
                    placeholder="Ваш Email"
                />
                <button>Напомнить</button>
            </div>
            <div className="contact_block footer_container">
                <h5>Свяжитесь с нами</h5>
                <div className="contact_point">
                    <h6>Адрес</h6>
                    <div>Московское шоссе 34, Самара</div>
                </div>
                <div className="contact_point">
                    <h6>Телефон</h6>
                    <div>88005553535</div>
                </div>
                <div className="contact_point">
                    <h6>Электронный адрес</h6>
                    <div>flowers@mail.ru</div>
                </div>
                {/* <div className="contact_point">
                    <h5>Подписывайтесь на нас</h5>
                    <div className="follow_links">
                        <Link to="">
                            <img src="images/icons/Instagram.svg" alt="" />
                        </Link>
                        <Link to="">
                            <img src="images/icons/Pinterest.svg" alt="" />
                        </Link>
                        <Link to="">
                            <img src="images/icons/Facebook.svg" alt="" />
                        </Link>
                        <Link to="">
                            <img src="images/icons/Twitter.svg" alt="" />
                        </Link>
                        <Link to="">
                            <img src="images/icons/Telegram.svg" alt="" />
                        </Link>
                    </div>
                </div> */}
            </div>
            <div className="store_links_block footer_container">
                <h5>Ассортимент</h5>
                <ul className="footer_nav_links">
                    <li>
                        <Link to="/shop">Все товары</Link>
                    </li>
                    <li>
                        <Link to="/shop">Свежие цветы</Link>
                    </li>
                    <li>
                        <Link to="/shop">Сухоцветы</Link>
                    </li>
                    <li>
                        <Link to="/shop">Живые растения</Link>
                    </li>
                    {/* <li>
                        <Link to="">Дизайнерские вазы</Link>
                    </li>
                    <li>
                        <Link to="">Ароматические свечи</Link>
                    </li>
                    <li>
                        <Link to="">Диффузоры для ароматизаторов</Link>
                    </li> */}
                </ul>
                {/* <h5>Услуги</h5>
                <ul className="footer_nav_links">
                    <li>
                        <Link to="">Подписка на доставку цветов</Link>
                    </li>
                    <li>
                        <Link to="">Свадебный &amp; Праздничный Декор</Link>
                    </li>
                </ul> */}
            </div>
            <div className="about_us_block footer_container">
                <h5>О нас</h5>
                <ul>
                    <li>
                        <Link to="">Наша история</Link>
                    </li>
                    {/* <li>
                        <Link to="">Блог</Link>
                    </li> */}
                </ul>
                <ul>
                    <li>
                        <Link to="">Доставка &amp; возврат</Link>
                    </li>
                    <li>
                        <Link to="">Правила &amp; условия</Link>
                    </li>
                    <li>
                        <Link to="">Политика конфиденциальности</Link>
                    </li>
                </ul>
            </div>
        </footer>

    );
}

// export default Footer;