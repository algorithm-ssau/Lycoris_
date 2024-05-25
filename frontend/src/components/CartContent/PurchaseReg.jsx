import React, { useEffect, useState } from 'react';
import '../../styles/style.css';
import { clearUserCart, makeUserOrder } from '../UserActions';

export const PurchaseRegistration = () => {
    const [active_h, setActive] = useState({
        info: "",
        delivery: "non_",
        payment: "non_",
    });
    const [hiddenPurch, setHidenPurch] = useState({
        info: "",
        delivery: " hidden",
        payment: " hidden",
    });

    const [orderInfo, setOrderInfo] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
        card: ""

    });


    const onClickInfo = () => {
        setActive({ ...active_h, delivery: "" });
        setHidenPurch({ ...hiddenPurch, delivery: "" });
    }
    const onClickDelivery = () => {
        setActive({ ...active_h, payment: "" });
        setHidenPurch({ ...hiddenPurch, payment: "" });
    }


    const handleChange = (e) => {
        setOrderInfo({ ...orderInfo, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log(orderInfo);
            const orderData = {
                user: "",
                address: orderInfo.address,
                flowers: "",
                recipient: orderInfo.name,
                order_time: new Date(),
                order_status: false
            }
            makeUserOrder(orderData);
            clearUserCart();


        } catch (error) {
            console.error('Error:', error);
        }
    };


    return (
        <div className="purchase_registration">
            <h2 className="purchase_header">
                <a className={active_h.info + "active_h"} href="">
                    Информация <span>&gt;</span>
                </a>{" "}
                <a className={active_h.delivery + "active_h"} href="">
                    Доставка <span>&gt;</span>
                </a>{" "}
                <a className={active_h.payment + "active_h"} href="">
                    Оплата
                </a>
            </h2>

            <div className="purchase_registration_contact_info">
                <input
                    type="text"
                    id="name_input"
                    name="name"
                    placeholder="Ваше имя"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    id="email_input"
                    name="email"
                    placeholder="Ваш Email"
                    onChange={handleChange}

                />
                <input
                    type="text"
                    id="phone_input"
                    name="phone"
                    placeholder="Ваш номер телефона"
                    onChange={handleChange}

                />
                <button className="black_btn" onClick={onClickInfo}>Перейти к деталям доставки</button>
            </div>
            {/* THERE */}
            <div className={"purchase_registration_shipping_details" + hiddenPurch.delivery}>
                <p>2 Детали доставки</p>
                <input
                    type="text"
                    id="addres_input"
                    name="address"
                    placeholder="Ваш адрес"
                    onChange={handleChange}

                />
                <button className="black_btn" onClick={onClickDelivery}>Далее</button>
            </div>
            {/* THERE */}
            <div className={"purchase_registration_payment" + hiddenPurch.payment}>
                <p>3 Оплата</p>
                <input
                    type="text"
                    id="card_input"
                    name="card"
                    placeholder="Ваш номер карты"
                    onChange={handleChange}

                />


                <form className="" onSubmit={handleSubmit}>
                    <button className="black_btn" type="submit">Завершить покупку</button>
                </form>

            </div>
        </div>

    );
}

