import React from 'react';
import Xmasginger from '../../assets/christmasAnimations/ginger.png';
import './GingerAnimation.css';

function GingerAnimation() {
    return (
        <div className='xmasginger-wrapper'>
            <img src={Xmasginger} alt="Animación galleta navideña" className='xmasginger-img' />
        </div>
    );
}

export default GingerAnimation;

