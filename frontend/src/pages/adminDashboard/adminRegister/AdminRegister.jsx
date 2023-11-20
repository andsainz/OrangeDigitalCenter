import { useState } from 'react';
import './adminRegister.css';

function AdminRegister() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [userPassword, setPassword] = useState('');
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/admin/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fullName, email, user_password: userPassword }),
      });
      if (response.ok) {
        const data = await response.json();
        console.log('Registration status:', data);
        setShowSuccessAlert(true);
        setTimeout(() => {
          setShowSuccessAlert(false);
        }, 10000);
      } else {
        console.error('Registration error');
        setShowErrorAlert(true);
        setTimeout(() => {
          setShowErrorAlert(false);
        }, 10000);
      }
    } catch (error) {
      console.error('Failed request:', error);
    }
  };

  return (
    <form onSubmit={handleRegisterSubmit} className="register">
      <div className="logo-container">
        <a href="/"> 
          {/* Aquí puedes agregar tu logotipo si lo deseas */}
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
          <div className="alert-success">
            Registro exitoso. ¡Bienvenido!
          </div>
        )}
        {showErrorAlert && (
          <div className="alert-danger">
            Ha habido un error con su registro.
          </div>
        )}
        <p>¿Tienes una cuenta?</p>
        <a className="login-link" href="/admin/register">
          Iniciar sesión
        </a>
      </div>
    </form>
  );
}

export default AdminRegister;
