import React, { useEffect, useState } from 'react';
import '../../styles/style.css';
import { ProfileOrderFlowers } from './ProfileOrderFlowers';


export const ProfileOrders = (props) => {
    const [flowers, setFlowers] = useState([]);

    const tempF1 =  () => {
        
        setFlowers( props?.order?.flowers);
    };

    useEffect(() => {
        tempF1();
    }
        , []);

    console.log("FROM PROPS 0:", props.order);
    console.log("FROM PROPS 1:", flowers);

    return (
        <>
        <p>Заказ № {props.num + 1}</p>
        <div className="purchase_info_item">
            {flowers?.map((flower) => {
                return <ProfileOrderFlowers flower={flower} />;
            })}
        </div>
        </>

    );
}