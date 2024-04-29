import React from 'react';
import '../../styles/style.css';

// TODO: Add args to this and etc
export const FlowerItem = (props) => {
    return (
        // TODO: Need to make connection from mongo db and change "src", "alt", "div"s content
        <li className= {'flower_item ' + props.flower.type}> 
            <img src="images/flowers/dandelion.png" alt="Красивая ромашка" />
            <div className="item_title">Dandelion</div>
            <div className="price_title">price 300$</div>
        </li>

    );
}

// export default FlowerItem;