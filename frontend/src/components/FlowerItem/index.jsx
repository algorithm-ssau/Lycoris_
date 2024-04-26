import React from 'react';
import '../../styles/style.css';

// TODO: Add args to this and etc
export const FlowerItem = () => {
    return (
        // TODO: Need to make connection from mongo db and change "src", "alt", "div"s content
        <li class="flower_item">
            <img src="images/flowers/dandelion.png" alt="Красивая ромашка" />
            <div class="item_title">Dandelion</div>
            <div class="price_title">price 300$</div>
        </li>

    );
}

// export default FlowerItem;