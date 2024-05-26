import React, { useEffect, useState } from 'react';
import axios from 'axios';

import '../../styles/style.css';

export const CartItem = (props) => {
    const [flower, setFlower] = useState();
    // const [loading, SetLoading] = useState();
    const domain = "http://127.0.0.3:3001";


    const tempF1 = async () => {
        // console.log("IM HERE");
        const apiBack = domain + "/flower/" + props.flower.flower;
        await axios.get(apiBack)
            .then(response => {
                // console.log("RESP:", response.data);
                setFlower(response.data);
            });
    };

    useEffect(() => {
        tempF1();
        // SetLoading();
    }
        , []);
    // console.log("FLOWER: ", flower);

    return (
        <>
            <div className="purchase_info_item">
                <img src={"/images/flowers/" + flower?.image.name} alt="" />
                <div>
                    <p className="purchase_info_item_name">{flower?.name}</p>
                    <div className="purchase_info_paragraph">
                        Количество (<span className="purchase_info_quantity">{props.flower.count}</span>)
                    </div>
                </div>
                <div className="purchase_info_item_price">
                    <span className="item_price">{flower?.price * props.flower.count} р.</span>
                </div>
            </div>
        </>
    );
}

