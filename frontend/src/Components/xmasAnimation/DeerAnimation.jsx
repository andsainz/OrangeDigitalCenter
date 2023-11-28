import DeerImg from '../../assets/DeerImg.png'
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
        <img src={DeerImg} alt="Imagen animada" className='deer-img' />
    );
}

export default DeerAnimation;
