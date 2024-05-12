import React from 'react';
import '../../styles/style.css';

export const PurchaseRegistration = () => {
    // TODO: drop "hidden" from elements
    return (
        <div className="purchase_registration">
            <h2 className="purchase_header">
                <a href="">
                    information <span>&gt;</span>
                </a>{" "}
                <a className="non_active_h" href="">
                    shipping <span>&gt;</span>
                </a>{" "}
                <a className="non_active_h" href="">
                    payment
                </a>
            </h2>
            <div className="purchase_registration_contact_info">
                <p>1 Contact information</p>
                <input
                    type="text"
                    id="name_input"
                    name="Name"
                    placeholder="Your Name"
                />
                <input
                    type="text"
                    id="email_input"
                    name="Email"
                    placeholder="Your Email"
                />
                <input
                    type="text"
                    id="phone_input"
                    name="Phone"
                    placeholder="Your Phone number"
                />
                <button className="black_btn">Continue to shipping</button>
            </div>
            {/* THERE */}
            <div className="purchase_registration_shipping_details hidden">
                <p>2 Shipping details</p>
                <input
                    type="text"
                    id="phone_input"
                    name="Phone"
                    placeholder="Your Phone number"
                />
                <input
                    type="text"
                    id="phone_input"
                    name="Phone"
                    placeholder="Your Phone number"
                />
                <input
                    type="text"
                    id="phone_input"
                    name="Phone"
                    placeholder="Your Phone number"
                />
                <button className="black_btn">Continue to shipping</button>
            </div>
            {/* THERE */}
            <div className="purchase_registration_payment hidden">
                <p>3 Payment</p>
                <input
                    type="text"
                    id="phone_input"
                    name="Phone"
                    placeholder="Your Phone number"
                />
                <input
                    type="text"
                    id="phone_input"
                    name="Phone"
                    placeholder="Your Phone number"
                />
                <button className="black_btn">Finish Purchase</button>
            </div>
        </div>

    );
}

