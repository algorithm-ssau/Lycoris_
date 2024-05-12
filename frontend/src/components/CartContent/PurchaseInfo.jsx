import React from 'react';
import '../../styles/style.css';

export const PurchaseInfo = () => {
    // TODO: map for order list
    // TODO: connect to db 
    // TODO: total price and other
    return (
        <div className="purchase_info">
            <h2 className="purchase_header">order summary</h2>
            {/*ШАБЛОН ДЛЯ ПРЕДМЕТА В КОРЗИНЕ*/}
            <div className="purchase_info_item">
                <img src="images/flowers/bouquet_dawns_delight.jpg" alt="" />
                <div>
                    <p className="purchase_info_item_name">Snowfall</p>
                    <div className="purchase_info_paragraph">
                        Quantity (<span className="purchase_info_quantity">?</span>)
                    </div>
                </div>
                <div className="purchase_info_item_price">
                    $<span className="item_price">???</span>
                </div>
            </div>
            
            <div>
                <div className="purchase_info_paragraph">
                    If you have our gift card, enter the code to get discounts
                </div>
                <div className="gift_card">
                    <input
                        type="text"
                        id="gift_input"
                        name="Gift_card"
                        placeholder="Gift card"
                    />
                    <button className="black_btn">APPLY</button>
                </div>
            </div>
            <div className="subtotal_results">
                <div className="purchase_info_paragraph">
                    Subtotal{" "}
                    <span>
                        $<span className="subtotal_price">???</span>
                    </span>
                </div>
                <div className="purchase_info_paragraph">
                    Shipping{" "}
                    <span>
                        $<span className="shipping_price">???</span>
                    </span>
                </div>
            </div>
            <p className="purchase_info_total_price">
                Total{" "}
                <span>
                    $<span className="total_price">???</span>
                </span>
            </p>
        </div>

    );
}

