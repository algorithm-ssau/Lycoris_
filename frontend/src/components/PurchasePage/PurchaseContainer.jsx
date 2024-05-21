import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export const Purchase = () => {
    // TODO: make connection with backend
    const params = useParams();
    const [flower, setFlower] = useState();
    const domain = "http://127.0.0.3:3001";


    useEffect(() => {
        const apiBack = domain +"/flower/" + params.id;
        axios.get(apiBack)
            .then(response => setFlower(response.data))
    }
        , []);
    console.log("FLOW", flower);

    return (
        <>
            {/* <img src="/images/flowers/purch_flower_example.jpg" alt="" /> */}
            <img src={"/images/flowers/" + flower?.image.name} alt="" />


            <div className="purchase_container">
                <div className="enclosure">СВЕЖИЕ ЦВЕТЫ / <span>{flower?.name}</span></div>
                <h2>{flower?.name} - {flower?.price} р.</h2>
                {/* <p>Large exceptional bouquet composed of a selection of David Austin roses, known for their beauty and subtle fragrance. The bouquet is accompanied by seasonal foliage which will enhance these sublime flowers even</p> */}
                <p>{flower?.description_l}</p>
                <div className="quantity purch_font">Количество <div><button className="white_btn">-</button><button className="item_counter white_btn">1</button><button className="white_btn">+</button></div></div>
                <div className="purch_font">Идеально сочетается с:</div>
                <div className="card_list">
                    <button className="carousel_btn"><img src="/images/icons/left_carousel_arrow.svg" alt="" /></button>
                    <ul className="card_list">
                        <li className="purchase_card">
                            <img src="/images/glass_vase.jpg" alt="" />
                            <h6 className="card_item_name">Стеклянная ваза</h6>
                            <h6>15 р.</h6>
                        </li>
                        <li className="purchase_card">
                            <img src="/images/hammershoi.jpg" alt="" />
                            <h6 className="card_item_name">Ваза Hammershoi</h6>
                            <h6>15 р.</h6>
                        </li>
                        <li className="purchase_card">
                            <img src="/images/ceramic_vase.jpg" alt="" />
                            <h6 className="card_item_name">Керамическая Ваза</h6>
                            <h6>15 р.</h6>
                        </li>
                        <li className="purchase_card">
                            <img src="/images/steel_vase.jpg" alt="" />
                            <h6 className="card_item_name">Металлическая ваза</h6>
                            <h6>15 р.</h6>
                        </li>
                        <li className="purchase_card">
                            <img src="/images/bamboo.jpg" alt="" />
                            <h6 className="card_item_name">Бамбуковая ваза</h6>
                            <h6>300 р.</h6>
                        </li>
                    </ul>
                    <button className="carousel_btn"><img src="/images/icons/right_carousel_arrow.svg" alt="" /></button>
                </div>
                <button>ДОБАВИТЬ В КОРЗИНУ</button>
            </div>

            <div className="you_may_also"><h2>Вам также может понравиться...</h2></div>

        </>
    );
}

