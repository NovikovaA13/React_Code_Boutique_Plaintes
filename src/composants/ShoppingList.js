import '../styles/ShoppingList.css';
import { plantList } from '../datas/plantList';
import Categories from './Categories';
import PlantItem from './PlantItem';
import { useState } from 'react';

function ShoppingList({ cart, updateCart }) {
      const [activeCategory, setActiveCategory] = useState('');
      const categories = plantList.reduce((acc, plant) => acc.includes(plant.category) ? acc : acc.concat(plant.category), []);

      function addToCart(name, price) {
            const currentPlantSaved = cart.find((plant) => plant.name === name);
            if (currentPlantSaved) {
                  const cartFilterCurrentPlant = cart.filter((plant) => plant.name !== name);
                  updateCart([...cartFilterCurrentPlant, { name, price, amount: currentPlantSaved.amount + 1 }]);
            } else {
                  updateCart([...cart, { name, price, amount: 1 }]);

            }
      }

      const resulstPlantList = plantList.map(({ id, category, cover, light, price, name, water }) => {

            return (!activeCategory || category == activeCategory ?
                        (<div key={id}>
                              <PlantItem key={id} cover={cover} name={name} light={light} price={price} water={water} />
                              <button onClick={() => addToCart(name, price)}>Ajouter</button>
                        </div>)
                        : null
            );
      });
      return (<div>
                  <Categories categories={categories} activeCategory={activeCategory}
                              setActiveCategory={setActiveCategory} />
                  <ul className='my-plant-list'>
                        {resulstPlantList}
                  </ul>

            </div>
      );
}

export default ShoppingList;