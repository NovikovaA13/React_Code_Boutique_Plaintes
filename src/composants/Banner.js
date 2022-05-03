import '../assets/logo.png';
import '../styles/Banner.css';

function Banner(props) {
      const children = props.children;
      return (<div className='my-banner'>{children}</div>);
}

export default Banner;