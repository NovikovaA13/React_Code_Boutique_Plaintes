import CareScale from './CareScale';
import '../styles/PlantItem.css';

function PlantItem({ id, cover, light, name, water, price }) {
      return (<li key={id} className='my-plant-item'>
            <span className='my-plant-item-price'>{price}€</span>
            <img src={cover} className='my-plant-item-cover' alt='image-{cover}' />
            {name}
            <CareScale scaleValue={light} careType='light' />
            <CareScale scaleValue={water} careType='water' />
      </li>);
}

export default PlantItem;