import React from 'react';
import '../styles/style.css';


export const Footer = () => {
    return (
        <footer className="footer ">
            <div className="email_block footer_container">
                <p>
                    Remember to offer beautiful flowers from Samara LuxeBouquets Valentines
                    Day, Mothers Day, Christmas... Reminds you 7 days before. No spam or
                    sharing your address
                </p>
                <input
                    type="text"
                    id="email_input"
                    name="email"
                    placeholder="Your Email"
                />
                <button>Remind</button>
            </div>
            <div className="contact_block footer_container">
                <h5>Contact Us</h5>
                <div className="contact_point">
                    <h6>Address</h6>
                    <div>Московское шоссе 34, Самара</div>
                </div>
                <div className="contact_point">
                    <h6>Phone</h6>
                    <div>88005553535</div>
                </div>
                <div className="contact_point">
                    <h6>General Enquiry</h6>
                    <div>flowers@mail.ru</div>
                </div>
                <div className="contact_point">
                    <h5>Follow Us</h5>
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
                <h5>Shop</h5>
                <ul className="footer_nav_links">
                    <li>
                        <Link to="/shop">All Products</Link>
                    </li>
                    <li>
                        <Link to="/shop">Fresh Flowers</Link>
                    </li>
                    <li>
                        <Link to="/shop">Dried Flowers</Link>
                    </li>
                    <li>
                        <Link to="/shop">Live Plants</Link>
                    </li>
                    <li>
                        <Link to="/shop">Designer Vases</Link>
                    </li>
                    <li>
                        <Link to="/shop">Arome Candles</Link>
                    </li>
                    <li>
                        <Link to="/shop">Freshener Diffuser</Link>
                    </li>
                </ul>
                <h5>Service</h5>
                <ul className="footer_nav_links">
                    <li>
                        <Link to="">Flower Subscription</Link>
                    </li>
                    <li>
                        <Link to="">Wedding &amp; Event Decor</Link>
                    </li>
                </ul>
            </div>
            <div className="about_us_block footer_container">
                <h5>About Us</h5>
                <ul>
                    <li>
                        <Link to="">Our story</Link>
                    </li>
                    <li>
                        <Link to="">Blog</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to="">Shipping &amp; returns</Link>
                    </li>
                    <li>
                        <Link to="">Terms &amp; conditions</Link>
                    </li>
                    <li>
                        <Link to="">Privacy policy</Link>
                    </li>
                </ul>
            </div>
        </footer>

    );
}

// export default Footer;