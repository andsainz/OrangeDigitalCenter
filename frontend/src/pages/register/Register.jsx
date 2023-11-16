import React, { useState } from 'react';
import './Register.css';

const Register = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fullName, email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Registro exitoso:', data);
        setShowSuccessAlert(true);
        setTimeout(() => {
          setShowSuccessAlert(false);
        }, 10000);
      } else {
        console.error('Error en el registro');
        setShowErrorAlert(true);
        setTimeout(() => {
          setShowErrorAlert(false);
        }, 10000);
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  };

  return (
    <form className="register-form" onSubmit={handleRegisterSubmit}>
      <h1>Recibe nuestra<br></br>newsletter</h1>
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

export default Register;
