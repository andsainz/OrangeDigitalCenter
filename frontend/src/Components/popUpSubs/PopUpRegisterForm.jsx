import { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import "./PopUp.css";
import { Alert } from "react-bootstrap";
import { subscribedService } from "../../services/SubscribedService";
import { Link } from "react-router-dom";

const PopUp = () => {
    const [email, setEmail] = useState("");
    const [show, setShow] = useState(false);
    const [showSuccessAlert, setShowSuccessAlert] = useState(false);
    const [showErrorAlert, setShowErrorAlert] = useState(false);
    const [showInvalidEmailAlert, setShowInvalidEmailAlert] = useState(false);
    const [showPrivacyPolicyAlert, setShowPrivacyPolicyAlert] = useState(false);
    const [acceptedPrivacyPolicy, setAcceptedPrivacyPolicy] = useState(false);

    const handleRegisterSubmit = async (e) => {
        e.preventDefault();
        if (!acceptedPrivacyPolicy) {
            setShowPrivacyPolicyAlert(true);
            return;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email || !emailRegex.test(email)) {
            setShowInvalidEmailAlert(true);
            setTimeout(() => {
                setShowInvalidEmailAlert(false);
            }, 5000);
            return;
        }
        try {
            await subscribedService.postSubscribed({ email });
            setShowSuccessAlert(true);
            setTimeout(() => {
                setShow(false);
            }, 2000);
        } catch (error) {
            console.error("Error en el registro:", error);
            setShowErrorAlert(true);
            setTimeout(() => {
                setShowErrorAlert(false);
            }, 10000);
        }
    };

    useEffect(() => {
        setShow(true);
    }, []);

    return (
        <div className="pop-up-container">
            <Modal show={show} onHide={() => setShow(false)} centered>
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body>
                    <Modal.Title>
                        ¿Quieres saber más sobre esta actividad y otras del Orange Digital Center suscribiéndote a la newsletter?
                    </Modal.Title>
                    <p className="pop-up-email-p">Introduce tu email</p>
                    <input
                        className="pop-up-email-input"
                        type="email"
                        placeholder="tuemail@ejemplo.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <div className="privacy-policy-container">
                        <input
                            type="checkbox"
                            className="privacy-policy-checkbox"
                            required
                            onChange={(e) =>
                                setAcceptedPrivacyPolicy(e.target.checked)
                            }
                        />

                        <div className="privacy-policy-readed">
                            <p
                                className="privacy-policy-txt"
                                htmlFor="privacyPolicy">
                                He leído y acepto la{" "}
                            </p>
                            <Link
                                to="/privacypolicy"
                                className="pop-up-privacy-policy-link"
                                target="_blank"
                                rel="noopener noreferrer">
                                política de privacidad.
                            </Link>
                            <p className="privacy-policy-readed">
                                Es necesario aceptar la política de privacidad
                                de datos para poder enviar el formulario.
                            </p>
                        </div>
                    </div>
                    {showSuccessAlert && (
                        <Alert
                            className="alert-form"
                            variant="dark"
                            onClose={() => {
                                setShowSuccessAlert(false);
                            }}>
                            Suscripción realizada con éxito.
                        </Alert>
                    )}
                    {showPrivacyPolicyAlert && (
                        <Alert
                            className="alert-form"
                            variant="dark"
                            onClose={() => {
                                setShowPrivacyPolicyAlert(false);
                            }}>
                            Por favor, acepta la política de privacidad antes de
                            enviar el formulario.
                        </Alert>
                    )}
                    {showErrorAlert && (
                        <Alert
                            className="alert-form"
                            variant="dark"
                            onClose={() => setShowErrorAlert(false)}>
                            Ha habido un error con su suscripción.
                        </Alert>
                    )}
                    {showInvalidEmailAlert && (
                        <Alert
                            className="alert-form"
                            variant="dark"
                            onClose={() => setShowInvalidEmailAlert(false)}>
                            Introduce un email con un formato válido.
                        </Alert>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShow(false)}>
                        Cerrar
                    </Button>
                    <button
                        className="receive-newsletter-btn"
                        onClick={handleRegisterSubmit}>
                        Recibir newsletter
                    </button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default PopUp;
