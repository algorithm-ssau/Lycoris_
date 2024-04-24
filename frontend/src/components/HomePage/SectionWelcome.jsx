import React from 'react';
import '../../styles/style.css';

const SectionWelcome = () => {
    return (
        <section className="welcome">
            <div className="welcome_title">
                <div className="title">
                    <h1>Samara<br/>LuxeBouquets</h1>
                    <p>Discover Uniquely Crafted Bouquets and Gifts for Any Occasion: <br/>Spread Joy with Our Online Flower Delivery Service</p>
                </div>
                <div className="title_hero"><img className="title_hero_img" src={'images/title_hero.jpg'} alt="woman"/></div>
                <p className="slogan">Experience the joy of giving with our modern floral studio. Order online and send fresh flowers, plants and gifts today.</p>
            </div>
            <div className="welcome_goods_types">
                <div className="card title_fresh_flowers">
                    <h2>Fresh Flowers</h2>
                    <a href="">Shop now <img src={'images/icons/arrow-right.svg'} alt=""/></a>
                </div>
                <div><img src={"images/card_fresh_flowers.jpg"} alt="flowers"/></div>
                <div><img src={"images/card_dried_flowers.jpg"} alt=""/></div>
                <div className=" card title_dried_flowers">
                    <h2>Dried Flowers</h2>
                    <a href=""><img src={"images/icons/arrow-left.svg"} alt=""/>Shop now </a>
                </div>
                <div className=" card title_live_plants">
                    <h2>Live Plants</h2>
                    <a href="">Shop now <img src={"images/icons/arrow-right.svg"} alt=""/></a>
                </div>
                <div><img src={"images/card_live_plants.jpg"} alt=""/></div>
                <div><img src={"images/card_aroma_candels.jpg"} alt=""/></div>
                <div className="card title_aroma_candels">
                    <h2>Aroma Candels</h2>
                    <a href=""><img src={"images/icons/arrow-left.svg"} alt=""/>Shop now </a>
                </div>
                <div className="card title_fresheners">
                    <h2>Fresheners</h2>
                    <a href="">Shop now <img src={"images/icons/arrow-right.svg"} alt=""/></a>
                </div>
                <div><img src={"images/card_fresheners.jpg"} alt=""/></div>

            </div>
            <div className="welcome_something">
                <p>Здесь могла бы быть ваша реклама</p>
            </div>
        </section>
    );
}

export default SectionWelcome;