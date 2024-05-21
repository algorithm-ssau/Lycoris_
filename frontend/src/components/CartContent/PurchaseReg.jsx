import React from 'react';
import '../../styles/style.css';

export const PurchaseRegistration = () => {
    // TODO: drop "hidden" from elements
    return (
        <div className="purchase_registration">
            <h2 className="purchase_header">
                <a href="">
                    Информация <span>&gt;</span>
                </a>{" "}
                <a className="non_active_h" href="">
                    Доставка <span>&gt;</span>
                </a>{" "}
                <a className="non_active_h" href="">
                    Оплата
                </a>
            </h2>
            <div className="purchase_registration_contact_info">
                <p>1 Контактная Информация</p>
                <input
                    type="text"
                    id="name_input"
                    name="Name"
                    placeholder="Ваше имя"
                />
                <input
                    type="text"
                    id="email_input"
                    name="Email"
                    placeholder="Ваш Email"
                />
                <input
                    type="text"
                    id="phone_input"
                    name="Phone"
                    placeholder="Ваш номер телефона"
                />
                <button className="black_btn">Перейти к деталям доставки</button>
            </div>
            {/* THERE */}
            <div className="purchase_registration_shipping_details hidden">
                <p>2 Детали доставки</p>
                <input
                    type="text"
                    id="phone_input"
                    name="Phone"
                    placeholder="Ваш номер телефона"
                />
                <input
                    type="text"
                    id="phone_input"
                    name="Phone"
                    placeholder="Ваш номер телефона"
                />
                <input
                    type="text"
                    id="phone_input"
                    name="Phone"
                    placeholder="Ваш номер телефона"
                />
                <button className="black_btn">Далее</button>
            </div>
            {/* THERE */}
            <div className="purchase_registration_payment hidden">
                <p>3 Оплата</p>
                <input
                    type="text"
                    id="phone_input"
                    name="Phone"
                    placeholder="Ваш номер телефона"
                />
                <input
                    type="text"
                    id="phone_input"
                    name="Phone"
                    placeholder="Ваш номер телефона"
                />
                <button className="black_btn">Завершить покупку</button>
            </div>
        </div>

    );
}

