import React from 'react';

export const PurchaseItemList = () => {
    // TODO: make connection with backend
    return (
        <div className="another_items_list">
            <a href="" className="another_item">
                <img src="/images/flowers/bouquet_autumn_symphony.jpg" alt="" />
                <div className="item_signature">
                    <h6>Autumn Symphony</h6>
                    <h6 className="item_signature_price">price $90</h6>
                </div>
            </a>
            <a href="" className="another_item">
                <img src="/images/flowers/bouquet_dawns_delight.jpg" alt="" />
                <div className="item_signature">
                    <h6>Dawn's Delight</h6>
                    <h6 className="item_signature_price">price $80</h6>
                </div>
            </a>
            <a href="" className="another_item">
                <img src="/images/flowers/bouquet_pink_elegance.jpg" alt="" />
                <div className="item_signature">
                    <h6>Pink Elegance</h6>
                    <h6 className="item_signature_price">price $70</h6>
                </div>
            </a>
            <a href="" className="another_item">
                <img src="/images/flowers/bouquet_serenity.jpg" alt="" />
                <div className="item_signature">
                    <h6>Serenityy</h6>
                    <h6 className="item_signature_price">price $75</h6>
                </div>
            </a>
        </div>
    );
}

