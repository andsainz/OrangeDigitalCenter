import Deer from '../../assets/christmasAnimations/deer.png'
import './DeerAnimation.css';
import React, { useState, useEffect } from 'react';

function DeerAnimation() {
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
        <img src={Deer} alt="Animación reno" className='deer-img' />
    );
}

export default DeerAnimation;