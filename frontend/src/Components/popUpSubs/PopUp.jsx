import { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import './PopUp.css';
import { subscribedService } from '../../services/SubscribedService';

const PopUp = () => {
  const [email, setEmail] = useState('');
  const [show, setShow] = useState(false);
  const [acceptedPrivacyPolicy, setAcceptedPrivacyPolicy] = useState(false); 

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    if (!acceptedPrivacyPolicy) {
      alert('Por favor, acepta la política de privacidad antes de enviar el formulario.');
      return;
    }
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
    <div className='pop-up-container'>
      <Modal show={show} onHide={() => setShow(false)} centered>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
        <Modal.Title>¿Quieres saber sobre este curso y otros del ODC apuntándote a la newsletter?</Modal.Title>
          <p className='pop-up-email-p'>Introduce tu email</p>
          <input
            className='pop-up-email-input' type="email" placeholder="tuemail@ejemplo.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <div className="privacy-policy-container">
            <input type="checkbox" className="privacy-policy-checkbox" required onChange={(e) => setAcceptedPrivacyPolicy(e.target.checked)} />
          
            <div className='privacy-policy-readed'>
            <p className='privacy-policy-txt' htmlFor="privacyPolicy">
              He leído y acepto la </p><a className='pop-up-privacy-policy-link' href="enlace a la política de privacidad" target="_blank" rel="noopener noreferrer">política de privacidad.</a><p className='privacy-policy-readed'>Es necesario aceptar la política de privacidad de datos para poder enviar el formulario.
            </p>
            </div>

          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>Cerrar</Button>
          <Button variant="primary" onClick={handleRegisterSubmit}>Recibir newsletter</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default PopUp;
