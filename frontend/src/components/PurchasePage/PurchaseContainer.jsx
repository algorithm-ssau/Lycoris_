import React from 'react';

export const Purchase = () => {
    // TODO: make connection with backend
    return (
        // <main className="purchase_content">
        <>
            <img src="images/flowers/purch_flower_example.jpg" alt="" />

            <div className="purchase_container">
                <div className="enclosure">FRESH FLOWERS / <span>ROSY DELIGHT</span></div>
                <h2>Rosy Delight - $300</h2>
                <p>Large exceptional bouquet composed of a selection of David Austin roses, known for their beauty and subtle fragrance. The bouquet is accompanied by seasonal foliage which will enhance these sublime flowers even</p>
                <div className="quantity purch_font">Quantity <div><button className="white_btn">-</button><button className="item_counter white_btn">1</button><button className="white_btn">+</button></div></div>
                <div className="purch_font">Excellent Combination with:</div>
                <div className="card_list">
                    <button className="carousel_btn"><img src="images/icons/left_carousel_arrow.svg" alt="" /></button>
                    <ul className="card_list">
                        <li className="purchase_card">
                            <img src="images/glass_vase.jpg" alt="" />
                            <h6 className="card_item_name">Glass Vase</h6>
                            <h6>$15</h6>
                        </li>
                        <li className="purchase_card">
                            <img src="images/hammershoi.jpg" alt="" />
                            <h6 className="card_item_name">Hammershoi</h6>
                            <h6>$15</h6>
                        </li>
                        <li className="purchase_card">
                            <img src="images/ceramic_vase.jpg" alt="" />
                            <h6 className="card_item_name">Ceramic Vase</h6>
                            <h6>$15</h6>
                        </li>
                        <li className="purchase_card">
                            <img src="images/steel_vase.jpg" alt="" />
                            <h6 className="card_item_name">Steel Vase</h6>
                            <h6>$15</h6>
                        </li>
                        <li className="purchase_card">
                            <img src="images/bamboo.jpg" alt="" />
                            <h6 className="card_item_name">Bamboo</h6>
                            <h6>$300</h6>
                        </li>
                    </ul>
                    <button className="carousel_btn"><img src="images/icons/right_carousel_arrow.svg" alt="" /></button>
                </div>
                <button>ADD TO BASKET</button>
            </div>

            <div className="you_may_also"><h2>You may also like...</h2></div>

        </>
    );
}

