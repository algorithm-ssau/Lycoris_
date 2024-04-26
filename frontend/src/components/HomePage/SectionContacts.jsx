import React from 'react';
import '../../styles/style.css';


export const SectionContacts = () => {
    return (
        <section className="contact_section">
            <div className="contact_info">
                <h4>To Contact Us</h4>
                <p>We will call you back</p>
                <div className="contact_input_container">
                    <form action="index.html">
                        <input type="text" id="phone_input" name="phone" placeholder="+7 (927) XXX XXX X" />
                    </form>
                    <button>Book a call</button>
                </div>
                <div className="contacts">
                    <div className="contact_phone">
                        <h2 className="contact_elem_title">Phone</h2>
                        <div className="phones">
                            <div className="phone"><img src="images/icons/call.svg" alt="phone" />+7 (927) 5555</div>
                            <div className="phone"><img src="images/icons/call.svg" alt="phone" />8 (800) 5555</div>
                        </div>
                    </div>
                    <div className="contact_address">
                        <h2 className="contact_elem_title">Address</h2>
                        <div className="addresses">
                            <div className="timetable">Opening Hours: 8 to 17 P.M.</div>
                            <div className="address"><img src="images/icons/location.svg" alt="" />Московское шоссе 34.</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="contact_links">
                <img src="images/shop.jpg" alt="" />
                <h2 className="follow_title">Follow us</h2>
                <div className="follow_links">
                    <a href= ""><img src="images/icons/Instagram.svg" alt="" /></a>
                    <a href= ""><img src="images/icons/Pinterest.svg" alt="" /></a>
                    <a href= ""><img src="images/icons/Facebook.svg" alt="" /></a>
                    <a href= ""><img src="images/icons/Twitter.svg" alt="" /></a>
                    <a href= ""><img src="images/icons/Telegram.svg" alt="" /></a>
                </div>

            </div>
        </section>
    );
}

export default SectionContacts;