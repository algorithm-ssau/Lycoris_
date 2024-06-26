import React, { useEffect, useState } from 'react';
import '../../styles/style.css';
import { exitFromAccaunt, getUserById, getUserId, getUserOrder } from '../UserActions';
import { ProfileOrders } from './ProfileOrders';
import { Link } from 'react-router-dom';
import { Navigate } from 'react-router-dom';



export const ProfileContent = () => {
    const [exit, setExit] = useState(false);
    const [user, setUser] = useState();
    const [orderInfo, setOrderInfo] = useState([]);
    const getUserThere = async () => {
        const user = await getUserById();
        setUser(user);
    }

    const getUserOrderThere = async () => {
        const order = await getUserOrder();
        setOrderInfo(order);
    }

    useEffect(() => {
        if (getUserId() == false){
            setExit(true);
            return;
        }
        getUserThere();
        getUserOrderThere();
    }
        , []);

    console.log("Get user:", user);
    console.log("Get user order: ", orderInfo);

    const handleSubmit = () =>{
        exitFromAccaunt();
        setExit(true);
    }

    if (exit){
        console.log("EXIT");
        return <Navigate to="/login"/>;
    }

    return (
        <div className="blur">
            <div className="profile_section">
                <h1 className="profile_title">Приветствуем!</h1>

                <p>Здесь отображаются ваши данные и история заказов</p>
                <div className="user_data">
                    <div>
                        Ваше имя: <span className="user_name">{user?.name}</span>
                    </div>
                    <a href="">
                        <img src="images/icons/edit_data.svg" alt="Редактировать" />
                    </a>
                </div>
                <div className="user_data">
                    <div>
                        Ваш email: <span className="user_email">{user?.email}</span>
                    </div>
                    <a href="">
                        <img src="images/icons/edit_data.svg" alt="Редактировать" />
                    </a>
                </div>
                <div className="user_data">
                    <div>Сменить пароль</div>
                    <a href="">
                        <img src="images/icons/edit_data.svg" alt="Редактировать" />
                    </a>
                </div>
                <p className="order_title">Ваши заказы:</p>


                <div className="order_history">
                    {orderInfo != [] && orderInfo?.map((orderth, i) => {
                        return <ProfileOrders order={orderth} num={i} />;
                    })
                    }
                </div>


                <form action="" className="black_btn_form" onSubmit={handleSubmit}>
                    <button className="black_btn" type="submit">Выйти из аккаунта</button>
                </form>

            </div>
        </div>


    );
}