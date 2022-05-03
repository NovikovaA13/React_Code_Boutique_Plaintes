import Banner from './Banner';
import Cart from './Cart';
import ShoppingList from './ShoppingList';
import logo from '../assets/logo.png';
import Footer from './Footer';
import '../styles/Layout.css';

import { useEffect, useState } from 'react';

function App() {
      const cartSaved = localStorage.getItem('monPanier');
      const [cart, updateCart] = useState(cartSaved ? JSON.parse(cartSaved) : []);


      useEffect(() => {
            localStorage.setItem('monPanier', JSON.stringify(cart));
      }, [cart]);

      return (
            <div className='App'>
                  <header className='App-header'>
                        <Banner>
                              <img src={logo} alt='La Boutique Plant' />
                              <h1 className='my-title'>La Boutique Plant</h1>
                        </Banner>
                        <div className='my-layout-inner'>
                              <ShoppingList cart={cart} updateCart={updateCart} />
                              <Cart cart={cart} updateCart={updateCart} />
                        </div>
                        <Footer />
                  </header>
            </div>
      );
}

export default App;
