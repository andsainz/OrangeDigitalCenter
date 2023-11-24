import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Alert } from 'react-bootstrap';
import './Login.css';
import { LoginService } from '../../services/LoginService';
import Cookies from 'js-cookie';
import React, { useEffect } from 'react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [user_password, setPassword] = useState('');
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const [showPasswordError, setShowPasswordError] = useState(false);
  
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    if (email.trim() === '' || user_password.trim() === '') {
      console.error('Por favor, completa todos los campos.');
      return;
    }

    try {
      const response = await LoginService.postLogin({ email, user_password });

      if (response.status === 200) {
        const responseData = await response.json();
        console.log('Estado de inicio de sesión:', responseData);

        if (responseData.message === 'Welcome back!') {
          const token = Cookies.get("token");

          if (token) {
            Cookies.set("token", token, { expires: 1, secure: true });
          }

          window.location.href = '/admin/home';
        } else {
          console.error('El correo electrónico o la contraseña no coinciden');
          setShowErrorAlert(true);

          setTimeout(() => {
            setShowErrorAlert(false);
          }, 10000);
        }
      } else if (response.status === 401) {
        setShowPasswordError(true);

        setTimeout(() => {
          setShowPasswordError(false);
        }, 10000);
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  };

  useEffect(() => {
    const token = Cookies.get('token');

    if (token) {
        // Aquí es donde debes incluir el token en las cabeceras de tus solicitudes
        fetch('http://localhost:3000/login', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
    }
}, []);

  return (
    <div className="general-container" aria-label="Login">
      <div className="login-container">
        <h1>Inicia sesión</h1>
        <form onSubmit={handleLoginSubmit}>
          <div>
            <input
              type="text"
              id="email"
              placeholder="Correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <input
              type="password"
              id="password"
              placeholder="Contraseña"
              value={user_password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="btn-start" type="submit">
            Iniciar sesión
          </button>
        </form>
        {showErrorAlert && (
          <Alert variant="dark">
            El correo electrónico o la contraseña no coinciden.
          </Alert>
        )}
        {showPasswordError && (
          <Alert variant="dark">
            Ha habido un error de inicio de sesión.
          </Alert>
        )}
        <p>¿Aún no tienes cuenta?</p>
        <Link to="/register" className="register-button">
          Regístrate
        </Link>
      </div>
    </div>
  );
};

export default LoginForm;
