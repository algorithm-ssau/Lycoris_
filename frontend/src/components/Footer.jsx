import React from 'react';
import '../styles/style.css';


export const Footer = () => {
    return (
        <footer className="footer">
            <div className="email_block footer_container">
                <p>Remember to offer beautiful flowers from Samara LuxeBouquets Valentines Day, Mothers Day, Christmas... Reminds you 7 days before. No spam or sharing your address</p>
                <input type="text" id="email_input" name="email" placeholder="Your Email" />
                <button>Remind</button>
            </div>
            <div className="contact_block footer_container">
                <h5>Contact Us</h5>
                <div class="contact_point">
                    <h6>Address</h6>
                    <div>Московское шоссе 34, Самара</div>
                </div>
                <div class="contact_point">
                    <h6>Phone</h6>
                    <div>88005553535</div>
                </div>
                <div class="contact_point">
                    <h6>General Enquiry</h6>
                    <div>flowers@mail.ru</div>
                </div>
                <div class="contact_point">
                    <h5>Follow Us</h5>

                    <div className="follow_links">
                        <a href=""><img src="images/icons/Instagram.svg" alt="" /></a>
                        <a href=""><img src="images/icons/Pinterest.svg" alt="" /></a>
                        <a href=""><img src="images/icons/Facebook.svg" alt="" /></a>
                        <a href=""><img src="images/icons/Twitter.svg" alt="" /></a>
                        <a href=""><img src="images/icons/Telegram.svg" alt="" /></a>
                    </div>
                </div>
            </div>
            <div className="store_links_block footer_container">
                <h5>Shop</h5>
                <ul class="footer_nav_links">
                    <li><a href="">All Products</a></li>
                    <li><a href="">Fresh Flowers</a></li>
                    <li><a href="">Dried Flowers</a></li>
                    <li><a href="">Live Plants</a></li>
                    <li><a href="">Designer Vases</a></li>
                    <li><a href="">Arome Candles</a></li>
                    <li><a href="">Freshener Diffuser</a></li>
                </ul>
                <h5>Service</h5>
                <ul class="footer_nav_links">
                    <li><a href="">Flower Subscription</a></li>
                    <li><a href="">Wedding & Event Decor</a></li>
                </ul>
            </div>
            <div className="about_us_block footer_container">
                <h5>About Us</h5>
                <ul>
                    <li><a href="">Our story</a></li>
                    <li><a href="">Blog</a></li>
                </ul>
                <ul>
                    <li><a href="">Shipping & returns</a></li>
                    <li><a href="">Terms & conditions</a></li>
                    <li><a href="">Privacy policy</a></li>
                </ul>
            </div>
        </footer>

    );
}

// export default Footer;