import React from 'react';
import SantaClaus from '../../assets/christmasAnimations/santaclaus.png';
import './SantaClausAnimation.css';

function SantaClausAnimation() {
    return (
        <div className='santaclaus-wrapper'>
            <img src={SantaClaus} alt="Animación Papá Noel" className='santaclaus-img' />
        </div>
    );
}

export default SantaClausAnimation;