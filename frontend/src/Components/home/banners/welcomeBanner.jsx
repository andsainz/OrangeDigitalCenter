import { useNavigate } from 'react-router-dom';
import './welcomeBanner.css';

const WelcomeBanner = () => {
    const navigate = useNavigate();

    const handleLearnMoreClick = () => {
        navigate('/odc/*');
    };

    return (

        <div className='banner-container'>
            <div className='txt-btn-banner-container'>
                <div className='txt-banner-container'>
                    <h1 className="banner-title">¡Bienvenid@s!</h1>
                    <p className='banner-txt'>En la plataforma educativa gratuita de la Fundación Orange encontrarás cursos y webinars adaptados a tus necesidades. Diviértete aprendiendo con formación preparada por especialistas para afrontar los retos de esta nueva era digital: fabricación 3D, medio ambiente o uso responsable de la tecnología son solo algunos ejemplos de lo que descubrirás.</p>
                </div>
                <button onClick={handleLearnMoreClick} className='learn-more-btn'>¡CONOCE MÁS!</button>
            </div>
        </div >
    );
};

export default WelcomeBanner;
