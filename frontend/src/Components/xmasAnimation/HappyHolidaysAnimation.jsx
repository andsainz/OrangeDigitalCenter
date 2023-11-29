import HappyHolidays from '../../assets/christmasAnimations/happyholidays.png';
import './HappyHolidaysAnimation.css';

function HappyHolidaysAnimation() {
    return (
        <div className='happyholidays-wrapper'>
            <img src={HappyHolidays} alt="Animación felicitación navideña" className='happyholidays-img' />
        </div>
    );
}

export default HappyHolidaysAnimation;