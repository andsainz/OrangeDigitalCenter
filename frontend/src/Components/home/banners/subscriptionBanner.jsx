import './SubscriptionBanner.css';
import { Link } from 'react-router-dom';

const SubscriptionBanner = () => {
    return (
        <div className="subscription-banner">
            <p>Si quieres saber más, no te pierdas nuestros eventos, talleres y cursos<br></br>
            <Link to="/newsletter" className="newsletter-link">recibe</Link> nuestra newsletter.</p>
            <p>¡Toma nota y conecta con tu futuro!</p>
        </div>
    );
}

export default SubscriptionBanner;
