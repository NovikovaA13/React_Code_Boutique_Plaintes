import { useState } from 'react';
import '../styles/Footer.css';

function Footer() {
      const [inputValue, setInputValue] = useState('');

      function verifEmail(value) {
            if (!value.includes('@')) {
                  alert('Attention, il n\'y a pas d\'@, ceci n\'est pas une adresse valide');
            }
      }


      return (
            <footer className='my-footer'>
                  <div className='my-footer-elem'>
                        Pour les passionnées de plantes 🌿🌱🌵
                  </div>
                  <div className='my-footer-elem'>Laissez-nous votre mail :</div>
                  <input value={inputValue}
                         placeholder='Entrez votre mail'
                         onChange={(e) => setInputValue(e.target.value)}
                         onBlur={(e) => verifEmail(e.target.value)}
                  />
            </footer>
      );
}

export default Footer;