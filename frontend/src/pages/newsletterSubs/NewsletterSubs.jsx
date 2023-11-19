import { useState } from 'react';
import './NewsletterSubs.css';
import { subscribedService } from '../../services/SubscribedService';

const NewsletterSubs = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();

    try {
      await subscribedService.postSubscribed({ fullName, email });

      setShowSuccessAlert(true);
      setTimeout(() => {
        setShowSuccessAlert(false);
      }, 10000);
    } catch (error) {
      console.error('Error en el registro:', error);
      setShowErrorAlert(true);
      setTimeout(() => {
        setShowErrorAlert(false);
      }, 10000);
    }
  };

  return (
    <form className="register-form" onSubmit={handleRegisterSubmit}>
      <h1>Recibe nuestra<br />newsletter</h1>
      <label>
        <input
          type="text"
          placeholder="Nombre y apellidos"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />
      </label>

      <label>
        <input
          type="email"
          placeholder="Ej. odc@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <div className="privacy-policy">
        <label htmlFor="privacyPolicy" className="checkbox-label">
          <input type="checkbox" id="privacyPolicy" required />
          <span>He leído y acepto la política de privacidad. Es necesario aceptar la política de privacidad de datos para poder enviar el formulario.
            Puedes consultar los detalles en este <a href="enlace a la política de privacidad" target="_blank" rel="noopener noreferrer">enlace</a>.</span>
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
