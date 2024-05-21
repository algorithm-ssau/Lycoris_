import React from 'react';
import '../../styles/style.css';

export const SectionWelcome = () => {
    return (
        <section className="welcome">
            <div className="welcome_title">
                <div className="title">
                    <h1>Samara<br/>LuxeBouquets</h1>
                    <p>Откройте для себя уникальные букеты и подарки на любой случай <br/>Доставляйте радость с помощью нашей онлайн-службы доставки цветов</p>
                </div>
                <div className="title_hero"><img className="title_hero_img" src={'images/title_hero.jpg'} alt="woman"/></div>
                <p className="slogan">Испытайте радость дарения с нашей современной флористической студией. Заказывайте онлайн и отправляйте свежие цветы, растения и подарки уже сегодня.</p>
            </div>
            <div className="welcome_goods_types">
                <div className="card title_fresh_flowers">
                    <h2>Свежие цветы</h2>
                    <a href="">Заказать сейчас <img src={'images/icons/arrow-right.svg'} alt=""/></a>
                </div>
                <div><img src={"images/card_fresh_flowers.jpg"} alt="flowers"/></div>
                <div><img src={"images/card_dried_flowers.jpg"} alt=""/></div>
                <div className=" card title_dried_flowers">
                    <h2>Сухоцветы</h2>
                    <a href=""><img src={"images/icons/arrow-left.svg"} alt=""/>Заказать сейчас </a>
                </div>
                <div className=" card title_live_plants">
                    <h2>Живые растения</h2>
                    <a href="">Заказать сейчас <img src={"images/icons/arrow-right.svg"} alt=""/></a>
                </div>
                <div><img src={"images/card_live_plants.jpg"} alt=""/></div>
                <div><img src={"images/card_aroma_candels.jpg"} alt=""/></div>
                <div className="card title_aroma_candels">
                    <h2>Ароматические свечи</h2>
                    <a href=""><img src={"images/icons/arrow-left.svg"} alt=""/>Заказать сейчас </a>
                </div>
                <div className="card title_fresheners">
                    <h2>Ароматизаторы воздуха</h2>
                    <a href="">Заказать сейчас <img src={"images/icons/arrow-right.svg"} alt=""/></a>
                </div>
                <div><img src={"images/card_fresheners.jpg"} alt=""/></div>

            </div>
            <div className="welcome_something">
                <p>Здесь могла бы быть ваша реклама</p>
            </div>
        </section>
    );
}

// export default SectionWelcome;