import React from 'react';
import '../../styles/style.css';
import { FlowerItem } from '../FlowerItem';

export const ShopItems = () => {
    return (
        <ul class="shop_items">
            {/* type is flower image size  */}
            <FlowerItem flower={{type: "big_item"}}/>
            <FlowerItem flower={{type: ""}}/>
            <FlowerItem flower={{type: ""}}/>
            <FlowerItem flower={{type: ""}}/>
            <FlowerItem flower={{type: ""}}/>
            <FlowerItem flower={{type: ""}}/>
            <FlowerItem flower={{type: ""}}/>

        </ul>
    );
}

// export default ShopItems;