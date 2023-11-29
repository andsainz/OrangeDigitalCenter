import React from 'react';
import SantaClaus from '../../assets/christmasAnimations/santaclaus.png';
import './SantaClausAnimation.css';
import { useState, useEffect } from 'react';

function SantaClausAnimation() {
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
        <div className='santaclaus-wrapper'>
            <img src={SantaClaus} alt="Animación Papá Noel" className='santaclaus-img' />
        </div>
    );
}

export default SantaClausAnimation;