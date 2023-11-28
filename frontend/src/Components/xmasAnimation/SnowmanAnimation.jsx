import snowman from "../../assets/christmasAnimations/snowman.png"
import './SnowmanAnimation.css';
import React, { useState, useEffect } from 'react';

function SnowmanAnimation() {
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
        <div className='snowman-animation-container'>
            <img src={snowman} alt="Animación muñeco de nieve" className='snowman-img' />
        </div>
    );
}

export default SnowmanAnimation;