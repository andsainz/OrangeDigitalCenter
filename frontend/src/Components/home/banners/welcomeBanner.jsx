import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './welcomeBanner.css';

const WelcomeBanner = () => {
    const navigate = useNavigate();

    const handleLearnMoreClick = () => {
        navigate('/odc/*');
    };

    return (
        <section className="banner">
            <article className="content-container">
                <header>
                    <h1 className="banner-title">¡Bienvenid@s!</h1>
                </header>
                <p>En la plataforma educativa gratuita de la Fundación Orange encontrarás cursos y webinars adaptados a tus necesidades. Diviértete aprendiendo con formación preparada por especialistas para afrontar los retos de esta nueva era digital: fabricación 3D, medio ambiente o uso responsable de la tecnología son solo algunos ejemplos de lo que descubrirás.</p>
            </article>
            <Button onClick={handleLearnMoreClick}>
                ¡CONOCE MÁS!
            </Button>
        </section>
    );
};

export default WelcomeBanner;
