import React, { useState } from 'react';
import './NewsletterSubs.css';
import { subscribedService } from '../../services/SubscribedService';
import { Link } from 'react-router-dom';

const NewsletterSubs = () => {
  const [email, setEmail] = useState('');
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();

    try {
      await subscribedService.postSubscribed({ email });

      setShowSuccessAlert(true);
      setTimeout(() => {
        setShowSuccessAlert(false);
        window.location.href = '/';
      }, 2000);
    } catch (error) {
      console.error('Error en el registro:', error);
      setShowErrorAlert(true);
      setTimeout(() => {
        setShowErrorAlert(false);
      }, 10000);
    }
  };

  return (
    <form className="register-form" aria-label="newsletter-form" onSubmit={handleRegisterSubmit}>
      <h1>Recibe nuestra<br />newsletter</h1>

      <label>
        <input
          type="email"
          placeholder="Ej. orangedigitalcenter@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>

      <div className="privacy-policy">
        <label htmlFor="privacyPolicy" className="checkbox-label">
          <input type="checkbox" id="privacyPolicy" required />
          <p>He leído y acepto la política de privacidad. Es necesario aceptar la política de privacidad de datos para poder enviar el formulario.
            Puedes consultar los detalles en este <Link to="/privacypolicy" target="_blank" rel="noopener noreferrer">enlace</Link>.</p>
        </label>
      </div>

      <button type="submit">Recibir newsletter</button>

      <div>
        {showSuccessAlert && (
          <div className="success-alert">
            Registro exitoso. ¡Bienvenido!
          </div>
        )}
        {showErrorAlert && (
          <div className="error-alert">
            Ha habido un error con su registro.
          </div>
        )}
      </div>
    </form>
  );
};

export default NewsletterSubs;
