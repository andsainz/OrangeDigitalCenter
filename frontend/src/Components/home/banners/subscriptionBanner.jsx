import './SubscriptionBanner.css';

const SubscriptionBanner = () => {
    return (
        <div className="subscription-banner">
            <p>Si quieres saber más, no te pierdas nuestros eventos, talleres y cursos<br></br>
            <a href="http://localhost:5173/newsletter" className="newsletter-link">recibe</a> nuestra newsletter</p>
            <p>¡Toma nota y conecta con tu futuro!</p>
        </div>
    );
}

export default SubscriptionBanner;
