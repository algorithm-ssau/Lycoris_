import React, { useEffect, useState } from 'react';
import '../../styles/style.css';
import { getFlowerById } from '../UserActions';


export const ProfileOrderFlowers = (props) => {
    const [flower, setFlower] = useState();

    const tempF1 = async () => {
        const response = await getFlowerById(props.flower.flower)
        const flower = response.data;
        setFlower(flower);
    };

    useEffect(() => {
        tempF1();
    }
        , []);

    return (
        <>
            <img src={"/images/flowers/" + flower?.image.name} alt="" />
            <div>
                <p className="purchase_info_item_name">{flower?.name}</p>
                <div className="purchase_info_paragraph">
                    Количество (<span className="purchase_info_quantity">{props.flower.count}</span>)
                </div>
            </div>
            <div className="purchase_info_item_price">
                <span className="item_price">{props.flower.count * flower?.price}</span>
            </div>
        </>

    );
}