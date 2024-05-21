import React from 'react';

export const PurchaseItemList = () => {
    // TODO: make connection with backend
    return (
        <div className="another_items_list">
            <a href="" className="another_item">
                <img src="/images/flowers/bouquet_autumn_symphony.jpg" alt="" />
                <div className="item_signature">
                    <h6>Осенная симфония</h6>
                    <h6 className="item_signature_price">цена 90 р.</h6>
                </div>
            </a>
            <a href="" className="another_item">
                <img src="/images/flowers/bouquet_dawns_delight.jpg" alt="" />
                <div className="item_signature">
                    <h6>Восторг рассвета</h6>
                    <h6 className="item_signature_price">цена 80 р.</h6>
                </div>
            </a>
            <a href="" className="another_item">
                <img src="/images/flowers/bouquet_pink_elegance.jpg" alt="" />
                <div className="item_signature">
                    <h6>Розовое изящество</h6>
                    <h6 className="item_signature_price">цена 70 р.</h6>
                </div>
            </a>
            <a href="" className="another_item">
                <img src="/images/flowers/bouquet_serenity.jpg" alt="" />
                <div className="item_signature">
                    <h6>Безмятежность</h6>
                    <h6 className="item_signature_price">цена 75 р.</h6>
                </div>
            </a>
        </div>
    );
}

