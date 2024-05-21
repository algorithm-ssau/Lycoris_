import React from 'react';
import '../../styles/style.css';

export const PurchaseInfo = () => {
    // TODO: map for order list
    // TODO: connect to db 
    // TODO: total price and other
    return (
        <div className="purchase_info">
            <h2 className="purchase_header">Информация о заказе</h2>
            {/*ШАБЛОН ДЛЯ ПРЕДМЕТА В КОРЗИНЕ*/}
            <div className="purchase_info_item">
                <img src="images/flowers/bouquet_dawns_delight.jpg" alt="" />
                <div>
                    <p className="purchase_info_item_name">Снегопад</p>
                    <div className="purchase_info_paragraph">
                        Количество (<span className="purchase_info_quantity">?</span>)
                    </div>
                </div>
                <div className="purchase_info_item_price">
                    <span className="item_price">??? р.</span>
                </div>
            </div>
            
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
                        <span className="subtotal_price">??? р.</span>
                    </span>
                </div>
                <div className="purchase_info_paragraph">
                    Доставка{" "}
                    <span>
                        <span className="shipping_price">??? р.</span>
                    </span>
                </div>
            </div>
            <p className="purchase_info_total_price">
                Итого{" "}
                <span>
                    <span className="total_price">??? р.</span>
                </span>
            </p>
        </div>

    );
}

