import sun from '../assets/sun.svg';
import water from '../assets/water.svg';

function CareScale({ scaleValue, careType }) {
      const range = [1, 2, 3];

      function handleClick() {
            let text = 'Cette plante requiert ';
            switch (scaleValue) {
                  case 1:
                        text += 'peu ';
                        break;
                  case 2:
                        text += 'modérement ';
                        break;
                  case 3:
                        text += 'beaucoup ';
                        break;
            }
            if (careType === 'light') {
                  text += 'lumière';
            } else {
                  text += 'd\'arrosage';
            }
            alert(text);
      }

      const scaleType = careType === 'light' ? (<img src={sun} alt='sun-icon' />) : (
            <img src={water} alt='water-icon' />);

      return (
            <div>
                  {range.map((rangeElem) => scaleValue >= rangeElem ?
                        <span key={rangeElem.toString()} onClick={handleClick}>{scaleType}</span> : null
                  )}
            </div>
      );
}

export default CareScale;