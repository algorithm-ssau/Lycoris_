import React, { useEffect, useState } from 'react';
import axios, { all } from 'axios';
import { getUserCart, getUserId, getPriceAllFlowers } from '../';
import '../../styles/style.css';
import { CartItem } from './CartItem';

export const PurchaseInfo = () => {
    const [cart, setCart] = useState();
    const [allprice, setAllPrice] = useState();
    const orderPrice = 150;


    const workCart = async (userId) => {
        let response = await getUserCart(userId);
        setCart(response.data[0]);
    }

    const workPrice = async () => {
        let result = await getPriceAllFlowers(cart?.flowers);
        setAllPrice(result);

    }
    useEffect(() => {
        const userId = getUserId();
        workCart(userId);
    }
        , []);
        
    console.log("CARTT: ", cart);
    if (cart != undefined)
        workPrice();




    return (
        <div className="purchase_info">
            <h2 className="purchase_header">Информация о заказе</h2>
            {cart?.flowers.map((flr, i) => {
                return <CartItem flower={flr} key={i} />;
            }
            )}

            <div>
                <div className="purchase_info_paragraph">
                    Если у вас есть наша подарочная карта, введите код, чтобы получить скидку
                </div>
                <div className="gift_card">
                    <input
                        type="text"
                        id="gift_input"
                        name="Gift_card"
                        placeholder="Код"
                    />
                    <button className="black_btn">ПРИМЕНИТЬ</button>
                </div>
            </div>
            <div className="subtotal_results">
                <div className="purchase_info_paragraph">
                    Заказ{" "}
                    <span>
                        <span className="subtotal_price">{allprice} р.</span>
                    </span>
                </div>
                <div className="purchase_info_paragraph">
                    Доставка{" "}
                    <span>
                        <span className="shipping_price">{orderPrice} р.</span>
                    </span>
                </div>
            </div>
            <p className="purchase_info_total_price">
                Итого
                <span>
                    <span className="total_price">{orderPrice + allprice} р.</span>
                </span>
            </p>
        </div>

    );
}

