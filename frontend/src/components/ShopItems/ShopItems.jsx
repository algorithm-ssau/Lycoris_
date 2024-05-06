import React, { useEffect, useState } from 'react';
import '../../styles/style.css';
import { FlowerItem } from '../FlowerItem';

export const ShopItems = () => {
    const [flowers, setFlowers] = useState();

    useEffect(() => {
        fetch('/flower')
        .then(response => response.json())
        .then(response => setFlowers(response))
    }
        , [])

    return (
        <ul className="shop_items">
            {/* type is flower image size  */}
            {/* <FlowerItem flower={{ type: "big_item" }} /> */}

            {flowers?.map( (flr, i) => 
            {   
                let size = i==0 ? "big_item" : "";
                return <FlowerItem flower={flr} metadata={{type:size}} key={flr.id}/>;
            }
            )}

            {/* <FlowerItem flower={{ type: "" }} />
            <FlowerItem flower={{ type: "" }} />
            <FlowerItem flower={{ type: "" }} />
            <FlowerItem flower={{ type: "" }} />
            <FlowerItem flower={{ type: "" }} />
            <FlowerItem flower={{ type: "" }} /> */}

        </ul>
    );
}

// export default ShopItems;