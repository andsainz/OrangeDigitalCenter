import { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import './PopUp.css';
import { subscribedService } from '../../services/SubscribedService';

const PopUp = () => {
  const [email, setEmail] = useState('');
  const [show, setShow] = useState(false);

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    try {
      await subscribedService.postSubscribed({ email });
    } catch (error) {
      console.error('Error en el registro:', error);
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
    <div>
      <Modal show={show} onHide={() => setShow(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>¿Quieres saber sobre este curso y otros del ODC apuntándote a la newsletter?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type="email"
            placeholder="tuemail@ejemplo.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <div className="privacy-policy">
            <label htmlFor="privacyPolicy" className="checkbox-label">
              <input type="checkbox" id="privacyPolicy" required />
              <p>He leído y acepto la <a href="enlace a la política de privacidad" target="_blank" rel="noopener noreferrer">política de privacidad</a>. Es necesario aceptar la política de privacidad de datos para poder enviar el formulario.
              </p>
            </label>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>Close</Button>
          <Button variant="primary" onClick={handleRegisterSubmit}>Recibir newsletter</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default PopUp;
