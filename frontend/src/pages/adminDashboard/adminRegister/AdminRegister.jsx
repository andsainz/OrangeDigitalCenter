import { useState } from 'react';
import './adminRegister.css';
import { Alert } from 'react-bootstrap';
import { registrationService } from '../../../services/RegisterService'

function AdminRegister() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [userPassword, setPassword] = useState('');
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await registrationService.postRegistration({
        fullName,
        email,
        user_password: userPassword,
      });
  
      if (response && response.ok) {
        const data = await response.json();
        console.log('Registration status:', data);
        setShowSuccessAlert(true);
        setTimeout(() => {
          setShowSuccessAlert(false);
        }, 3000);
        setTimeout(() => {
          window.location.href = 'http://localhost:5173/login';
      }, 2000);
      } else {
        console.error('Registration error');
        setShowErrorAlert(true);
        setTimeout(() => {
          setShowErrorAlert(false);
        }, 3000);
      }
    } catch (error) {
      console.error('Failed request:', error);
    }
  };  

  return (
    <form onSubmit={handleRegisterSubmit} className="register">
      <div className="logo-container">
        <a href="/"> 
        </a>
      </div>
      <div className="form-field-container">
        <div>
          <h5>Nombre y apellidos</h5>
          <input
            className="input-field"
            onChange={(e) => setFullName(e.target.value)}
            value={fullName}
          />
        </div>
      </div>
      <div className="form-field-container">
        <div>
          <h5>Email</h5>
          <input
            className="input-field"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
      </div>
      <div className="form-field-container">
        <div>
          <h5>Contraseña</h5>
          <input
            className="input-field"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={userPassword}
          />
        </div>
      </div>
      <div className="text-center">
        <button type="submit" className="Button1">
          Registrarse
        </button>
      </div>
      <div className="text-center">
        {showSuccessAlert && (
          <Alert show={showSuccessAlert} variant="dark">
            Registro exitoso. ¡Bienvenido!
          </Alert>
        )}
        {showErrorAlert && (
          <Alert variant="dark">
          Ha habido un error con su registro.
          </Alert>
        )}
        <p className='txt-admin-register'>¿Tienes una cuenta?</p>
        <a className="login-link" href="/login">
          Iniciar sesión
        </a>
      </div>
    </form>
  );
}

export default AdminRegister;
