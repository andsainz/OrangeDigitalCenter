import Xmassock from '../../assets/christmasAnimations/sock.png';
import './SockAnimation.css';
import { useState, useEffect } from 'react';

function SockAnimation() {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    if (!isVisible) {
        return null;
    }

    return (
        <div className='xmassock-wrapper'>
            <img src={Xmassock} alt="Animación calcetín navideño" className='xmassock-img' />
        </div>
    );
}

export default SockAnimation;