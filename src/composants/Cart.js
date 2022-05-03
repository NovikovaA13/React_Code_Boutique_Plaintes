import '../styles/Cart.css';
import { useEffect, useState } from 'react';

function Cart({ cart, updateCart }) {

      const [isOpen, setIsOpen] = useState(true);
      const total = cart.reduce(
            (acc, plant) => acc + plant.price * plant.amount, 0);
      useEffect(() => {
            document.title = `LMG: ${total} d'achats`;
      }, ['total']);

      return (isOpen ?
                  <div className='my-cart'>
                        <button className='my-cart-toggle-button' onClick={() => setIsOpen(false)}>Fermer</button>
                        {
                              cart.length > 0 ? (
                                          <div>
                                                <h2>Panier</h2>
                                                <ul>
                                                      {
                                                            cart.map(({ name, price, amount }, index) => {
                                                                  return (<div key={`${name}-${index}`}>
                                                                        {name} {price}€ x {amount}
                                                                  </div>);
                                                            })
                                                      }
                                                      <button onClick={() => updateCart([])}>Vider le panier</button>
                                                </ul>
                                                <h3>Total : {total}€</h3>
                                          </div>
                                    ) :
                                    (<div>Votre panier est vide</div>)}
                  </div>
                  : <div className='my-cart-closed'>
                        <button className='my-cart-toggle-button' onClick={() => setIsOpen(true)}>Ouvrir le Panier
                        </button>
                  </div>
      );
}

export default Cart;