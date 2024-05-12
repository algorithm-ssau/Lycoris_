import React, { useEffect, useState } from 'react';
import '../../styles/style.css';
import { FlowerItem } from '../FlowerItem/FlowerItem';
import axios from 'axios';


export const ShopItems = () => {
    const [flowers, setFlowers] = useState();
    const domain = "http://127.0.0.3:3001";

    useEffect(() => {
        const apiBack = domain + "/flower";
        axios.get(apiBack)
            .then(response => setFlowers(response.data))
    }
        , []);

    return (
        <ul className="shop_items">
            {flowers?.map((flr, i) => {
                let size = i in [0] ? "big_item" : "";
                return <FlowerItem flower={flr} metadata={{ type: size }} key={flr.id} />;
            }
            )}
        </ul>
    );
}

// export default ShopItems;