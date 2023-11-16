import { Container, Row, Col } from 'react-bootstrap';
import './SubscriptionBanner.css';

const SubscriptionBanner = () => {
    return (
        <Container as="section" className="subscription-banner">
            <Row className="justify-content-center">
                <Col xs={12} md={10} lg={8} xl={6}>
                    <p>Si quieres saber más, no te pierdas nuestros eventos, talleres y cursos</p>
                    <p><a href="tu-enlace-aqui.html" className="newsletter-link">recibe</a> nuestra newsletter</p>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col xs={12} md={10} lg={8} xl={6}>
                    <p>¡Toma nota y conecta con tu futuro!</p>
                </Col>
            </Row>
        </Container>
    );
}

export default SubscriptionBanner;
