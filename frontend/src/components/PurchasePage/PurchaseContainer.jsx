import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import jwt from 'jsonwebtoken';

export const Purchase = () => {
    // TODO: make connection with backend
    const params = useParams();
    const [flower, setFlower] = useState();
    const domain = "http://127.0.0.3:3001";


    useEffect(() => {
        const apiBack = domain + "/flower/" + params.id;
        axios.get(apiBack)
            .then(response => setFlower(response.data))
    }
        , []);
    console.log("FLOW", flower);





    // ! TODO: make check if order exist, if its status is false and only then update order or create new one 
    const needee =  () => {
        const token = localStorage.getItem('token');
        const userId = getUserIdFromToken(token);
        const response =  axios.get(`http://127.0.0.4:3002/user/${userId}`);
        console.log("ROFLS: ", response);
        // axios.get(domain + '/order' );

    };


    const getUserIdFromToken = (token) => {
        try {
            const decodedToken = jwt.decode(token);
            return decodedToken ? decodedToken.sub : null;
        } catch (error) {
            console.error('Error decoding token:', error);
            return null;
        }
    };


    return (
        <>
            {/* <img src="/images/flowers/purch_flower_example.jpg" alt="" /> */}
            <img src={"/images/flowers/" + flower?.image.name} alt="" />


            <div className="purchase_container">
                <div className="enclosure">FRESH FLOWERS / <span>{flower?.name}</span></div>
                <h2>{flower?.name} - ${flower?.price}</h2>
                {/* <p>Large exceptional bouquet composed of a selection of David Austin roses, known for their beauty and subtle fragrance. The bouquet is accompanied by seasonal foliage which will enhance these sublime flowers even</p> */}
                <p>{flower?.description_l}</p>
                <div className="quantity purch_font">Quantity <div><button className="white_btn">-</button><button className="item_counter white_btn">1</button><button className="white_btn">+</button></div></div>
                <div className="purch_font">Excellent Combination with:</div>
                <div className="card_list">
                    <button className="carousel_btn"><img src="/images/icons/left_carousel_arrow.svg" alt="" /></button>
                    <ul className="card_list">
                        <li className="purchase_card">
                            <img src="/images/glass_vase.jpg" alt="" />
                            <h6 className="card_item_name">Glass Vase</h6>
                            <h6>$15</h6>
                        </li>
                        <li className="purchase_card">
                            <img src="/images/hammershoi.jpg" alt="" />
                            <h6 className="card_item_name">Hammershoi</h6>
                            <h6>$15</h6>
                        </li>
                        <li className="purchase_card">
                            <img src="/images/ceramic_vase.jpg" alt="" />
                            <h6 className="card_item_name">Ceramic Vase</h6>
                            <h6>$15</h6>
                        </li>
                        <li className="purchase_card">
                            <img src="/images/steel_vase.jpg" alt="" />
                            <h6 className="card_item_name">Steel Vase</h6>
                            <h6>$15</h6>
                        </li>
                        <li className="purchase_card">
                            <img src="/images/bamboo.jpg" alt="" />
                            <h6 className="card_item_name">Bamboo</h6>
                            <h6>$300</h6>
                        </li>
                    </ul>
                    <button className="carousel_btn"><img src="/images/icons/right_carousel_arrow.svg" alt="" /></button>
                </div>


                {/* <Form onSubmit={needee}> */}

                    <button onClick={needee}>ADD TO BASKET</button>

                {/* </Form> */}

            </div>

            <div className="you_may_also"><h2>You may also like...</h2></div>

        </>
    );
}

