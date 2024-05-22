import React from 'react';
import '../styles/style.css';


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
                <div className="contact_point">
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
                </div>
            </div>
            <div className="store_links_block footer_container">
                <h5>Ассортимент</h5>
                <ul className="footer_nav_links">
                    <li>
                        <a href="">Все товары</a>
                    </li>
                    <li>
                        <a href="">Свежие цветы</a>
                    </li>
                    <li>
                        <a href="">Сухоцветы</a>
                    </li>
                    <li>
                        <a href="">Живые растения</a>
                    </li>
                    <li>
                        <a href="">Дизайнерские вазы</a>
                    </li>
                    <li>
                        <a href="">Ароматические свечи</a>
                    </li>
                    <li>
                        <a href="">Диффузоры для ароматизаторов</a>
                    </li>
                </ul>
                <h5>Услуги</h5>
                <ul className="footer_nav_links">
                    <li>
                        <a href="">Подписка на доставку цветов</a>
                    </li>
                    <li>
                        <a href="">Свадебный &amp; Праздничный Декор</a>
                    </li>
                </ul>
            </div>
            <div className="about_us_block footer_container">
                <h5>О нас</h5>
                <ul>
                    <li>
                        <a href="">Наша история</a>
                    </li>
                    <li>
                        <a href="">Блог</a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a href="">Доставка &amp; возврат</a>
                    </li>
                    <li>
                        <a href="">Правила &amp; условия</a>
                    </li>
                    <li>
                        <a href="">Политика конфиденциальности</a>
                    </li>
                </ul>
            </div>
        </footer>

    );
}

// export default Footer;