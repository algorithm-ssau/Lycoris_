import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { addFlowerToUserCart, getUserCart, getUserId } from '../';
import { Navigate } from 'react-router-dom';


export const Purchase = () => {
    const params = useParams();
    const [flower, setFlower] = useState();
    const domain = "http://127.0.0.3:3001";
    const [count, setCount] = useState(1);
    const [nav, setNav] = useState(false);


    useEffect(() => {
        const apiBack = domain + "/flower/" + params.id;
        axios.get(apiBack)
            .then(response => setFlower(response.data))
    }
        , []);
    console.log("FLOW", flower);



    const needFunc = () => {
        try {
            const userId = getUserId();
            addFlowerToUserCart(userId, flower._id, count);
            setNav(true);
        }
        catch (e) {
            console.log("Some error:", e)
        }
    };

    if(nav)
        return <Navigate to="/shop"/>;



    return (
        <>
            {/* <img src="/images/flowers/purch_flower_example.jpg" alt="" /> */}
            <img src={"/images/flowers/" + flower?.image.name} alt="" />


            <div className="purchase_container">
                <div className="enclosure">СВЕЖИЕ ЦВЕТЫ / <span>{flower?.name}</span></div>
                <h2>{flower?.name} - {flower?.price} р.</h2>
                {/* <p>Large exceptional bouquet composed of a selection of David Austin roses, known for their beauty and subtle fragrance. The bouquet is accompanied by seasonal foliage which will enhance these sublime flowers even</p> */}
                <p>{flower?.description_l}</p>
                <div className="quantity purch_font">Количество <div><button className="white_btn" onClick={() => { count - 1 < 1 ? setCount(1) : setCount(count-1)}}>-</button><button className="item_counter white_btn">{count}</button><button className="white_btn" onClick={() => setCount(count+1)}>+</button></div></div>


                <button onClick={needFunc}>ДОБАВИТЬ В КОРЗИНУ</button>
            </div>

            <div className="you_may_also"><h2>Вам также может понравиться...</h2></div>

        </>
    );
}

