import HappyHolidays from '../../assets/christmasAnimations/happyholidays.png';
import './HappyHolidaysAnimation.css';
import { useState, useEffect } from 'react';

function HappyHolidaysAnimation() {
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
        <div className='happyholidays-wrapper'>
            <img src={HappyHolidays} alt="Animación felicitación navideña" className='happyholidays-img' />
        </div>
    );
}

export default HappyHolidaysAnimation;