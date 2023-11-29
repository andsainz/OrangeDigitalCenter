import React from 'react';
import Xmasginger from '../../assets/christmasAnimations/ginger.png';
import './GingerAnimation.css';
import { useState, useEffect } from 'react';

function GingerAnimation() {
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
        <div className='xmasginger-wrapper'>
            <img src={Xmasginger} alt="Animación galleta navideña" className='xmasginger-img' />
        </div>
    );
}

export default GingerAnimation;

