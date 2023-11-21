import { useState } from 'react';
import './PopUp.css';
const PopUp = () => {
  const [email, setEmail] = useState('');

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    try {
      await subscribedService.postSubscribed({ fullName, email });
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
      <h2>Quieres saber sobre este curso y otros del ODC apuntándote a la newsletter?</h2>
      <label>
        <input
          type="email"
          placeholder="tuemail@ejemplo.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <div className="privacy-policy">
        <label htmlFor="privacyPolicy" className="checkbox-label">
          <input type="checkbox" id="privacyPolicy" required />
          <span>He leído y acepto la política de privacidad. Es necesario aceptar la política de privacidad de datos para poder enviar el formulario.
            Puedes consultar los detalles en este
            <a href="enlace a la política de privacidad" target="_blank" rel="noopener noreferrer"> enlace</a>.
          </span>
        </label>
      </div>

      <button type="submit">Recibir newsletter</button>
    </form>
  );
};

export default PopUp;