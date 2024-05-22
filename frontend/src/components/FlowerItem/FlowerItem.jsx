import '../../styles/style.css';
import { Link } from 'react-router-dom';

export const FlowerItem = (props) => {

    return (
        <Link className={'flower_item ' + props.metadata.type} to={"/flower/" + props.flower._id}>
            <img src={"/images/flowers/" + props.flower.image.name} alt="Красивое. Просто показываем" />
            <div className="item_title">{props.flower.name}</div>
            <div className="price_title">цена {props.flower.price}р.</div>
        </Link> 


    );
}

