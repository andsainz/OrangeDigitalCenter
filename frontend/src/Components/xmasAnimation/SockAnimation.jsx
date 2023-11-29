import Xmassock from '../../assets/christmasAnimations/sock.png';
import './SockAnimation.css';

function SockAnimation() {
    return (
        <div className='xmassock-wrapper'>
            <img src={Xmassock} alt="Animación calcetín navideño" className='xmassock-img' />
        </div>
    );
}

export default SockAnimation;