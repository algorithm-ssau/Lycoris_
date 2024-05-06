import '../../styles/style.css';
import { Link } from 'react-router-dom';

export const FlowerItem = (props) => {

    return (
        // TODO: Need to make connection from mongo db and change "src", "alt", "div"s content
        <li className={'flower_item ' + props.metadata.type}>
            <Link to={"/flower/" + props.flower._id}>

                {/* <img src="images/flowers/dandelion.png" alt="Красивая ромашка" /> */}
                <img src={"/images/flowers/" + props.flower.image.name} alt="Красивая ромашка" />
                <div className="item_title">{props.flower.name}</div>
                <div className="price_title">price {props.flower.price}$</div>
                {/* <div className="item_title">Dandelion</div>
                <div className="price_title">price 300$</div> */}
            </Link>

        </li>

    );
}

// export default FlowerItem;